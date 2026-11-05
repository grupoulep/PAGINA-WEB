import React, { useState, useEffect } from 'react';
import {
  CourseData,
  FoundationBanner,
  AllyLogo,
  getStoredCourses,
  saveStoredCourses,
  getStoredFoundationBanners,
  saveStoredFoundationBanners,
  getStoredAllies,
  saveStoredAllies,
  checkAdminSession,
  setAdminSession,
  resetAllAdminData,
} from '../utils/adminStorage';
import logoUlepWhite from '../assets/images/logo_ulep_white.png';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AdminTab = 'banners' | 'aliados' | 'cursos';

const ADMIN_PASSWORDS = ['ulep2026', 'admin123', 'fundacionulep'];

export default function AdminModal({ isOpen, onClose }: AdminModalProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState<AdminTab>('banners');
  const [statusNotice, setStatusNotice] = useState<string | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);

  // Stored Data States
  const [foundationBanners, setFoundationBanners] = useState<FoundationBanner[]>([]);
  const [allies, setAllies] = useState<AllyLogo[]>([]);
  const [courses, setCourses] = useState<CourseData[]>([]);

  // Form 1: New Panoramic Banner
  const [newBannerName, setNewBannerName] = useState('');
  const [newBannerUrl, setNewBannerUrl] = useState('');

  // Form 2: New Ally Logo
  const [newAllyName, setNewAllyName] = useState('');
  const [newAllyUrl, setNewAllyUrl] = useState('');

  // Form 3: New Course
  const [newCourseTitle, setNewCourseTitle] = useState('');
  const [newCourseSubtitle, setNewCourseSubtitle] = useState('');
  const [newCourseDuration, setNewCourseDuration] = useState('3 a 6 meses');
  const [newCourseDesc, setNewCourseDesc] = useState('');
  const [newCourseImg, setNewCourseImg] = useState('');
  const [newCourseFeatures, setNewCourseFeatures] = useState(
    'Formación 100% práctica por competencias\nAcceso a Campus Virtual 24/7\nCertificación oficial Fundación ULEP'
  );

  useEffect(() => {
    if (isOpen) {
      setIsAuthenticated(checkAdminSession());
      loadAllData();
    }
  }, [isOpen]);

  const loadAllData = () => {
    setFoundationBanners(getStoredFoundationBanners());
    setAllies(getStoredAllies());
    setCourses(getStoredCourses());
  };

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setStatusNotice(msg);
    setTimeout(() => setStatusNotice(null), 3200);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = passwordInput.trim().toLowerCase();
    if (ADMIN_PASSWORDS.includes(cleaned)) {
      setIsAuthenticated(true);
      setAdminSession(true);
      setLoginError('');
      setPasswordInput('');
    } else {
      setLoginError('Contraseña incorrecta. Intenta con: ulep2026');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAdminSession(false);
    setPasswordInput('');
  };

  // Helper to convert uploaded image file to compressed DataURL
  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    onResult: (dataUrl: string) => void,
    maxWidth = 1400
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const isPng = file.type === 'image/png';
          const compressed = canvas.toDataURL(
            isPng ? 'image/png' : 'image/jpeg',
            isPng ? undefined : 0.82
          );
          onResult(compressed);
          showToast('Imagen cargada y optimizada correctamente');
        }
      };
      if (typeof event.target?.result === 'string') {
        img.src = event.target.result;
      }
    };
    reader.readAsDataURL(file);
  };

  // --- BANNERS HANDLERS ---
  const handleAddBanner = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBannerUrl.trim()) {
      showToast('Sube una imagen o pega la URL del banner');
      return;
    }
    const item: FoundationBanner = {
      id: `banner-${Date.now()}`,
      name: newBannerName.trim() || `Banner Institucional ${foundationBanners.length + 1}`,
      imageUrl: newBannerUrl.trim(),
      active: true,
    };
    const updated = [item, ...foundationBanners];
    setFoundationBanners(updated);
    saveStoredFoundationBanners(updated);
    setNewBannerName('');
    setNewBannerUrl('');
    showToast('Banner agregado al carrusel principal');
  };

  const handleToggleBanner = (id: string) => {
    const updated = foundationBanners.map((b) =>
      b.id === id ? { ...b, active: !b.active } : b
    );
    setFoundationBanners(updated);
    saveStoredFoundationBanners(updated);
    showToast('Visibilidad de banner actualizada');
  };

  const handleDeleteBanner = (id: string) => {
    const updated = foundationBanners.filter((b) => b.id !== id);
    setFoundationBanners(updated);
    saveStoredFoundationBanners(updated);
    showToast('Banner eliminado');
  };

  // --- ALLIES HANDLERS ---
  const handleAddAlly = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAllyUrl.trim()) {
      showToast('Sube un logo o pega la URL de la imagen');
      return;
    }
    const item: AllyLogo = {
      id: `ally-${Date.now()}`,
      name: newAllyName.trim() || `Aliado ${allies.length + 1}`,
      imageUrl: newAllyUrl.trim(),
      active: true,
    };
    const updated = [item, ...allies];
    setAllies(updated);
    saveStoredAllies(updated);
    setNewAllyName('');
    setNewAllyUrl('');
    showToast('Logo agregado a la cinta de aliados');
  };

  const handleToggleAlly = (id: string) => {
    const updated = allies.map((a) =>
      a.id === id ? { ...a, active: !a.active } : a
    );
    setAllies(updated);
    saveStoredAllies(updated);
    showToast('Estado del logo actualizado');
  };

  const handleDeleteAlly = (id: string) => {
    const updated = allies.filter((a) => a.id !== id);
    setAllies(updated);
    saveStoredAllies(updated);
    showToast('Logo eliminado');
  };

  // --- COURSES HANDLERS ---
  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCourseTitle.trim() || !newCourseDesc.trim()) {
      showToast('Completa el título y la descripción del programa');
      return;
    }

    const featuresList = newCourseFeatures
      .split('\n')
      .map((f) => f.trim())
      .filter(Boolean);

    const item: CourseData = {
      id: `prog-${Date.now()}`,
      title: newCourseTitle.trim(),
      type: 'curso',
      subtitle:
        newCourseSubtitle.trim() || 'Módulo de Formación Práctica',
      description: newCourseDesc.trim(),
      duration: newCourseDuration.trim() || '3 a 6 meses',
      imageUrl:
        newCourseImg.trim() ||
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
      badge: 'Curso Práctico',
      features:
        featuresList.length > 0
          ? featuresList
          : ['Formación práctica por competencias', 'Certificación oficial Fundación ULEP'],
    };

    const updated = [...courses, item];
    setCourses(updated);
    saveStoredCourses(updated);

    setNewCourseTitle('');
    setNewCourseSubtitle('');
    setNewCourseDesc('');
    setNewCourseImg('');
    showToast('Curso publicado en el catálogo');
  };

  const handleDeleteCourse = (id: string) => {
    const updated = courses.filter((c) => c.id !== id);
    setCourses(updated);
    saveStoredCourses(updated);
    showToast('Programa eliminado del catálogo');
  };

  const handleExecuteReset = () => {
    resetAllAdminData();
    loadAllData();
    setConfirmReset(false);
    showToast('Datos restaurados a los valores oficiales de fábrica');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#001a57]/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white border border-blue-200 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden text-[#001a57]">
        
        {/* Top Modal Header (Strictly White & Blues + Smaller Logo) */}
        <div className="bg-[#002477] text-white px-5 sm:px-7 py-4 flex items-center justify-between gap-4 border-b border-blue-800">
          <div className="flex items-center gap-3">
            <div className="h-7 w-20 relative flex items-center justify-center shrink-0">
              <img
                src={logoUlepWhite}
                alt="Fundación ULEP"
                className="w-full h-full object-contain object-center"
              />
            </div>
            <div className="border-l border-blue-700 pl-3">
              <span className="text-[10px] font-display font-extrabold uppercase tracking-widest text-blue-200 block">
                Gestión Institucional Simplificada
              </span>
              <h2 className="text-sm sm:text-base font-display font-extrabold text-white">
                Panel Administrador ULEP
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                type="button"
                onClick={handleLogout}
                className="px-3 py-1.5 rounded-xl bg-blue-800/70 hover:bg-blue-700 text-blue-100 text-xs font-display font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Cerrar sesión"
              >
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/ffffff/exit.png"
                  alt=""
                  className="w-3.5 h-3.5"
                  referrerPolicy="no-referrer"
                />
                <span className="hidden sm:inline">Salir</span>
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Cerrar panel"
            >
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/ffffff/delete-sign.png"
                alt=""
                className="w-4 h-4"
                referrerPolicy="no-referrer"
              />
            </button>
          </div>
        </div>

        {/* Toast Notification Banner */}
        {statusNotice && (
          <div className="bg-[#0035ab] text-white px-5 py-2.5 text-xs font-display font-bold flex items-center justify-between animate-in fade-in duration-150">
            <div className="flex items-center gap-2">
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/ffffff/approval.png"
                alt=""
                className="w-4 h-4"
                referrerPolicy="no-referrer"
              />
              <span>{statusNotice}</span>
            </div>
            <button
              type="button"
              onClick={() => setStatusNotice(null)}
              className="text-blue-200 hover:text-white text-[11px] cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7">
          {!isAuthenticated ? (
            /* SIMPLIFIED LOGIN SCREEN */
            <div className="max-w-sm mx-auto py-8 space-y-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/0035ab/lock.png"
                  alt="Acceso"
                  className="w-7 h-7"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xl font-display font-extrabold text-[#001a57]">
                  Acceso Administrativo
                </h3>
                <p className="text-xs text-blue-900/75">
                  Ingresa la clave institucional para gestionar banners, logos de aliados y programas académicos.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-3.5 text-left">
                <div>
                  <label className="block text-xs font-display font-bold text-[#001a57] mb-1.5">
                    Contraseña de Administrador
                  </label>
                  <input
                    type="password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Clave (ej. ulep2026)"
                    className="w-full px-4 py-3 rounded-xl bg-blue-50/50 border border-blue-200 text-xs font-medium text-[#001a57] focus:outline-none focus:ring-2 focus:ring-[#0035ab] focus:bg-white"
                    autoFocus
                  />
                </div>

                {loginError && (
                  <p className="text-xs font-bold text-[#0035ab] bg-blue-50 border border-blue-200 rounded-xl px-3.5 py-2.5">
                    {loginError}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#0035ab] hover:bg-[#002477] text-white font-display font-extrabold text-xs shadow-md transition-all cursor-pointer"
                >
                  Ingresar al Panel
                </button>
              </form>
            </div>
          ) : (
            /* SIMPLIFIED 3-TAB ADMIN WORKSPACE */
            <div className="space-y-6">
              
              {/* Navigation Tabs + Quick Reset */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-4 border-b border-blue-100">
                <div className="flex flex-wrap gap-1.5 bg-blue-50 p-1.5 rounded-2xl border border-blue-100">
                  <button
                    type="button"
                    onClick={() => setActiveTab('banners')}
                    className={`px-4 py-2 rounded-xl text-xs font-display font-bold transition-all cursor-pointer flex items-center gap-2 ${
                      activeTab === 'banners'
                        ? 'bg-[#0035ab] text-white shadow-xs'
                        : 'text-[#001a57] hover:bg-blue-100/70'
                    }`}
                  >
                    <img
                      src={`https://img.icons8.com/fluency-systems-filled/48/${activeTab === 'banners' ? 'ffffff' : '0035ab'}/picture.png`}
                      alt=""
                      className="w-4 h-4"
                      referrerPolicy="no-referrer"
                    />
                    <span>Banners Inicio ({foundationBanners.length})</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('aliados')}
                    className={`px-4 py-2 rounded-xl text-xs font-display font-bold transition-all cursor-pointer flex items-center gap-2 ${
                      activeTab === 'aliados'
                        ? 'bg-[#0035ab] text-white shadow-xs'
                        : 'text-[#001a57] hover:bg-blue-100/70'
                    }`}
                  >
                    <img
                      src={`https://img.icons8.com/fluency-systems-filled/48/${activeTab === 'aliados' ? 'ffffff' : '0035ab'}/handshake.png`}
                      alt=""
                      className="w-4 h-4"
                      referrerPolicy="no-referrer"
                    />
                    <span>Logos Aliados ({allies.length})</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('cursos')}
                    className={`px-4 py-2 rounded-xl text-xs font-display font-bold transition-all cursor-pointer flex items-center gap-2 ${
                      activeTab === 'cursos'
                        ? 'bg-[#0035ab] text-white shadow-xs'
                        : 'text-[#001a57] hover:bg-blue-100/70'
                    }`}
                  >
                    <img
                      src={`https://img.icons8.com/fluency-systems-filled/48/${activeTab === 'cursos' ? 'ffffff' : '0035ab'}/graduation-cap.png`}
                      alt=""
                      className="w-4 h-4"
                      referrerPolicy="no-referrer"
                    />
                    <span>Cursos ({courses.length})</span>
                  </button>
                </div>

                {/* Inline Safe Reset Control (No window.confirm) */}
                {!confirmReset ? (
                  <button
                    type="button"
                    onClick={() => setConfirmReset(true)}
                    className="px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#002477] text-xs font-display font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <img
                      src="https://img.icons8.com/fluency-systems-filled/48/0035ab/restart.png"
                      alt=""
                      className="w-3.5 h-3.5"
                      referrerPolicy="no-referrer"
                    />
                    <span>Restaurar valores</span>
                  </button>
                ) : (
                  <div className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-xl">
                    <span className="text-[11px] font-bold text-[#001a57]">¿Confirmar?</span>
                    <button
                      type="button"
                      onClick={handleExecuteReset}
                      className="px-2.5 py-1 bg-[#0035ab] text-white text-[11px] font-bold rounded-lg cursor-pointer"
                    >
                      Sí
                    </button>
                    <button
                      type="button"
                      onClick={() => setConfirmReset(false)}
                      className="px-2.5 py-1 bg-white text-[#002477] text-[11px] font-bold rounded-lg border border-blue-200 cursor-pointer"
                    >
                      No
                    </button>
                  </div>
                )}
              </div>

              {/* ========================================================= */}
              {/* TAB 1: BANNERS DE INICIO */}
              {/* ========================================================= */}
              {activeTab === 'banners' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Add Form */}
                  <form
                    onSubmit={handleAddBanner}
                    className="lg:col-span-5 bg-blue-50/50 border border-blue-100 rounded-2xl p-5 space-y-4"
                  >
                    <h3 className="text-sm font-display font-extrabold text-[#001a57]">
                      Subir Nuevo Banner Panorámico
                    </h3>

                    <div>
                      <label className="block text-xs font-display font-bold text-[#001a57] mb-1">
                        Título o referencia (opcional)
                      </label>
                      <input
                        type="text"
                        value={newBannerName}
                        onChange={(e) => setNewBannerName(e.target.value)}
                        placeholder="Ej. Convocatoria Becas 2026"
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-blue-200 text-xs text-[#001a57] focus:outline-none focus:ring-2 focus:ring-[#0035ab]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-display font-bold text-[#001a57]">
                        Imagen del Banner *
                      </label>

                      <label className="w-full py-2.5 px-3.5 rounded-xl bg-white hover:bg-blue-50 border border-dashed border-[#0035ab] text-[#0035ab] text-xs font-display font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors">
                        <img
                          src="https://img.icons8.com/fluency-systems-filled/48/0035ab/upload.png"
                          alt=""
                          className="w-4 h-4"
                          referrerPolicy="no-referrer"
                        />
                        <span>Subir desde mi dispositivo</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) =>
                            handleFileUpload(e, (url) => setNewBannerUrl(url), 1600)
                          }
                        />
                      </label>

                      <input
                        type="text"
                        value={newBannerUrl}
                        onChange={(e) => setNewBannerUrl(e.target.value)}
                        placeholder="O pega aquí una URL de imagen (https://...)"
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-blue-200 text-xs text-[#001a57] focus:outline-none focus:ring-2 focus:ring-[#0035ab]"
                      />
                    </div>

                    {newBannerUrl && (
                      <div className="rounded-xl overflow-hidden h-24 border border-blue-200 bg-white">
                        <img
                          src={newBannerUrl}
                          alt="Vista previa"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-[#0035ab] hover:bg-[#002477] text-white font-display font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <img
                        src="https://img.icons8.com/fluency-systems-filled/48/ffffff/plus.png"
                        alt=""
                        className="w-4 h-4"
                        referrerPolicy="no-referrer"
                      />
                      <span>Agregar Banner</span>
                    </button>
                  </form>

                  {/* List of Banners */}
                  <div className="lg:col-span-7 space-y-3">
                    {foundationBanners.map((b) => (
                      <div
                        key={b.id}
                        className={`flex items-center justify-between gap-3 p-3 rounded-2xl border transition-all ${
                          b.active
                            ? 'bg-white border-blue-100 shadow-2xs'
                            : 'bg-blue-50/30 border-blue-100/60 opacity-60'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={b.imageUrl}
                            alt={b.name}
                            className="w-20 h-12 rounded-xl object-cover border border-blue-100 shrink-0"
                          />
                          <div className="min-w-0">
                            <h4 className="text-xs font-display font-extrabold text-[#001a57] truncate">
                              {b.name}
                            </h4>
                            <span className="text-[11px] font-semibold text-[#0035ab]">
                              {b.active ? 'Visible en Inicio' : 'Oculto'}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            type="button"
                            onClick={() => handleToggleBanner(b.id)}
                            className="p-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#002477] cursor-pointer"
                            title={b.active ? 'Ocultar' : 'Mostrar'}
                          >
                            <img
                              src={`https://img.icons8.com/fluency-systems-filled/48/002477/${b.active ? 'visible' : 'invisible'}.png`}
                              alt=""
                              className="w-4 h-4"
                              referrerPolicy="no-referrer"
                            />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteBanner(b.id)}
                            className="p-2 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer"
                            title="Eliminar banner"
                          >
                            <img
                              src="https://img.icons8.com/fluency-systems-filled/48/002477/trash.png"
                              alt=""
                              className="w-4 h-4"
                              referrerPolicy="no-referrer"
                            />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 2: LOGOS DE ALIADOS (MARQUESINA) */}
              {/* ========================================================= */}
              {activeTab === 'aliados' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Add Form */}
                  <form
                    onSubmit={handleAddAlly}
                    className="lg:col-span-5 bg-blue-50/50 border border-blue-100 rounded-2xl p-5 space-y-4"
                  >
                    <h3 className="text-sm font-display font-extrabold text-[#001a57]">
                      Agregar Logo a la Marquesina
                    </h3>

                    <div>
                      <label className="block text-xs font-display font-bold text-[#001a57] mb-1">
                        Nombre de la entidad (referencia)
                      </label>
                      <input
                        type="text"
                        value={newAllyName}
                        onChange={(e) => setNewAllyName(e.target.value)}
                        placeholder="Ej. Alegra / Convenio Empresarial"
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-blue-200 text-xs text-[#001a57] focus:outline-none focus:ring-2 focus:ring-[#0035ab]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-display font-bold text-[#001a57]">
                        Archivo o URL del Logo *
                      </label>
                      <label className="w-full py-2.5 px-3.5 rounded-xl bg-white hover:bg-blue-50 border border-dashed border-[#0035ab] text-[#0035ab] text-xs font-display font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors">
                        <img
                          src="https://img.icons8.com/fluency-systems-filled/48/0035ab/upload.png"
                          alt=""
                          className="w-4 h-4"
                          referrerPolicy="no-referrer"
                        />
                        <span>Subir logo (PNG o JPG)</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) =>
                            handleFileUpload(e, (url) => setNewAllyUrl(url), 600)
                          }
                        />
                      </label>
                      <input
                        type="text"
                        value={newAllyUrl}
                        onChange={(e) => setNewAllyUrl(e.target.value)}
                        placeholder="O pega URL del logo (https://...)"
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-blue-200 text-xs text-[#001a57] focus:outline-none focus:ring-2 focus:ring-[#0035ab]"
                      />
                    </div>

                    {newAllyUrl && (
                      <div className="rounded-xl p-3 h-20 border border-blue-200 bg-white flex items-center justify-center">
                        <img
                          src={newAllyUrl}
                          alt="Vista previa logo"
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-[#0035ab] hover:bg-[#002477] text-white font-display font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <img
                        src="https://img.icons8.com/fluency-systems-filled/48/ffffff/plus.png"
                        alt=""
                        className="w-4 h-4"
                        referrerPolicy="no-referrer"
                      />
                      <span>Agregar Logo</span>
                    </button>
                  </form>

                  {/* List of Allies */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {allies.map((ally) => (
                      <div
                        key={ally.id}
                        className={`flex items-center justify-between gap-3 p-3.5 rounded-2xl border ${
                          ally.active
                            ? 'bg-white border-blue-100'
                            : 'bg-blue-50/30 border-blue-100/60 opacity-60'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-14 h-10 rounded-lg bg-blue-50/50 p-1.5 flex items-center justify-center shrink-0">
                            <img
                              src={ally.imageUrl}
                              alt={ally.name}
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-xs font-display font-extrabold text-[#001a57] truncate">
                              {ally.name}
                            </h4>
                            <span className="text-[10px] font-semibold text-[#0035ab]">
                              {ally.active ? 'Activo' : 'Oculto'}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            type="button"
                            onClick={() => handleToggleAlly(ally.id)}
                            className="p-2 rounded-xl bg-blue-50 hover:bg-blue-100 cursor-pointer"
                          >
                            <img
                              src={`https://img.icons8.com/fluency-systems-filled/48/002477/${ally.active ? 'visible' : 'invisible'}.png`}
                              alt=""
                              className="w-3.5 h-3.5"
                              referrerPolicy="no-referrer"
                            />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteAlly(ally.id)}
                            className="p-2 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer"
                          >
                            <img
                              src="https://img.icons8.com/fluency-systems-filled/48/002477/trash.png"
                              alt=""
                              className="w-3.5 h-3.5"
                              referrerPolicy="no-referrer"
                            />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 3: CURSOS */}
              {/* ========================================================= */}
              {activeTab === 'cursos' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Add Course Form */}
                  <form
                    onSubmit={handleAddCourse}
                    className="lg:col-span-5 bg-blue-50/50 border border-blue-100 rounded-2xl p-5 space-y-3.5"
                  >
                    <h3 className="text-sm font-display font-extrabold text-[#001a57]">
                      Publicar Nuevo Curso
                    </h3>

                    <div>
                      <label className="block text-[11px] font-display font-bold text-[#001a57] mb-1">
                        Duración del Curso
                      </label>
                      <input
                        type="text"
                        value={newCourseDuration}
                        onChange={(e) => setNewCourseDuration(e.target.value)}
                        placeholder="Ej. 3 a 6 meses"
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-blue-200 text-xs text-[#001a57]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-display font-bold text-[#001a57] mb-1">
                        Nombre del Programa *
                      </label>
                      <input
                        type="text"
                        required
                        value={newCourseTitle}
                        onChange={(e) => setNewCourseTitle(e.target.value)}
                        placeholder="Ej. Auxiliar Administrativo y Contable"
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-blue-200 text-xs text-[#001a57]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-display font-bold text-[#001a57] mb-1">
                        Subtítulo / Enfoque
                      </label>
                      <input
                        type="text"
                        value={newCourseSubtitle}
                        onChange={(e) => setNewCourseSubtitle(e.target.value)}
                        placeholder="Ej. Formación por competencias laborales"
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-blue-200 text-xs text-[#001a57]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-display font-bold text-[#001a57] mb-1">
                        Descripción *
                      </label>
                      <textarea
                        rows={2}
                        required
                        value={newCourseDesc}
                        onChange={(e) => setNewCourseDesc(e.target.value)}
                        placeholder="Resumen claro de las competencias del programa..."
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-blue-200 text-xs text-[#001a57]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-display font-bold text-[#001a57]">
                        Imagen del Programa
                      </label>
                      <label className="w-full py-2 px-3 rounded-xl bg-white hover:bg-blue-50 border border-dashed border-[#0035ab] text-[#0035ab] text-xs font-display font-bold flex items-center justify-center gap-2 cursor-pointer">
                        <img
                          src="https://img.icons8.com/fluency-systems-filled/48/0035ab/upload.png"
                          alt=""
                          className="w-3.5 h-3.5"
                          referrerPolicy="no-referrer"
                        />
                        <span>Subir fotografía</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) =>
                            handleFileUpload(e, (url) => setNewCourseImg(url), 1000)
                          }
                        />
                      </label>
                      <input
                        type="text"
                        value={newCourseImg}
                        onChange={(e) => setNewCourseImg(e.target.value)}
                        placeholder="O pega URL de imagen..."
                        className="w-full px-3 py-1.5 rounded-xl bg-white border border-blue-200 text-xs text-[#001a57]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-display font-bold text-[#001a57] mb-1">
                        Beneficios / Competencias (1 por línea)
                      </label>
                      <textarea
                        rows={3}
                        value={newCourseFeatures}
                        onChange={(e) => setNewCourseFeatures(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-blue-200 text-xs text-[#001a57]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-[#0035ab] hover:bg-[#002477] text-white font-display font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <img
                        src="https://img.icons8.com/fluency-systems-filled/48/ffffff/plus.png"
                        alt=""
                        className="w-4 h-4"
                        referrerPolicy="no-referrer"
                      />
                      <span>Publicar Programa</span>
                    </button>
                  </form>

                  {/* List of Courses */}
                  <div className="lg:col-span-7 space-y-3">
                    {courses.map((c) => (
                      <div
                        key={c.id}
                        className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-white border border-blue-100 shadow-2xs"
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <img
                            src={c.imageUrl}
                            alt={c.title}
                            className="w-16 h-14 rounded-xl object-cover border border-blue-100 shrink-0"
                          />
                          <div className="min-w-0">
                            <span className="text-[10px] font-display font-extrabold uppercase tracking-wider text-[#0035ab] block">
                              Curso Práctico · {c.duration}
                            </span>
                            <h4 className="text-xs sm:text-sm font-display font-extrabold text-[#001a57] truncate">
                              {c.title}
                            </h4>
                            <p className="text-[11px] text-blue-900/70 truncate">
                              {c.subtitle}
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleDeleteCourse(c.id)}
                          className="p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer shrink-0"
                          title="Eliminar programa"
                        >
                          <img
                            src="https://img.icons8.com/fluency-systems-filled/48/002477/trash.png"
                            alt=""
                            className="w-4 h-4"
                            referrerPolicy="no-referrer"
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
