import React, { useState } from 'react';
import { TabType } from '../types';

interface FooterProps {
  onSelectTab?: (tab: TabType) => void;
  onOpenAdmin?: () => void;
}

export default function Footer({ onSelectTab, onOpenAdmin }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleLegalClick = (e: React.MouseEvent, docName: string) => {
    e.preventDefault();
    setActiveModal(docName);
  };

  const handleTabClick = (e: React.MouseEvent, tab: TabType) => {
    if (onSelectTab) {
      e.preventDefault();
      onSelectTab(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#001a57] text-blue-100 pt-12 sm:pt-14 pb-10 sm:pb-12 relative z-10 overflow-hidden border-t border-blue-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 md:gap-12 pb-10 border-b border-blue-800/60">
          
          {/* Brand Column with Smaller Uploaded Logo (/assets/aistudio/FUN_BLANCO_e68e4ad5.png) - 5 Cols */}
          <div className="sm:col-span-2 md:col-span-5 space-y-4">
            <div className="h-9 w-28 relative overflow-hidden flex items-center justify-start">
              <img
                src="/assets/aistudio/FUN_BLANCO_e68e4ad5.png"
                alt="Logo Fundación ULEP"
                className="w-full h-full object-cover object-center scale-[1.08] select-none"
              />
            </div>

            <p className="text-xs sm:text-sm text-blue-200/80 leading-relaxed max-w-sm">
              Institución de Educación para el Trabajo y el Desarrollo Humano. Formación práctica por competencias en Cursos para el Trabajo con respaldo institucional.
            </p>

            <div className="pt-1">
              <a
                href="https://groupulep.github.io/credito/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-white hover:text-blue-200 transition-colors"
              >
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/ffffff/laptop.png"
                  alt=""
                  className="w-4 h-4"
                  referrerPolicy="no-referrer"
                />
                <span>Acceder al Campus Virtual 24/7</span>
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/ffffff/up-right.png"
                  alt=""
                  className="w-3.5 h-3.5 opacity-80"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>
          </div>

          {/* Navigation Links - 3 Cols */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-[11px] font-display font-extrabold uppercase tracking-[0.2em] text-white">
              Secciones
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-blue-200/85 font-medium">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => handleTabClick(e, 'inicio')}
                  className="hover:text-white transition-colors cursor-pointer py-0.5 inline-block"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#programas"
                  onClick={(e) => handleTabClick(e, 'programas')}
                  className="hover:text-white transition-colors cursor-pointer py-0.5 inline-block"
                >
                  Cursos
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  onClick={(e) => handleTabClick(e, 'beneficios')}
                  className="hover:text-white transition-colors cursor-pointer py-0.5 inline-block"
                >
                  Beneficios y Becas
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  onClick={(e) => handleTabClick(e, 'nosotros')}
                  className="hover:text-white transition-colors cursor-pointer py-0.5 inline-block"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#inscripciones"
                  onClick={(e) => handleTabClick(e, 'inscripciones')}
                  className="hover:text-white transition-colors cursor-pointer py-0.5 inline-block"
                >
                  Inscripciones
                </a>
              </li>
              {onOpenAdmin && (
                <li className="pt-1">
                  <button
                    type="button"
                    onClick={onOpenAdmin}
                    className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-blue-200/80 hover:text-white transition-colors py-0.5 cursor-pointer group"
                    title="Acceso exclusivo para administradores"
                  >
                    <img
                      src="https://img.icons8.com/fluency-systems-filled/48/ffffff/settings.png"
                      alt=""
                      className="w-3.5 h-3.5 opacity-75 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <span>Panel Admin</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Contact Column - 4 Cols */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="text-[11px] font-display font-extrabold uppercase tracking-[0.2em] text-white">
              Contacto y Atención
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-blue-200/85">
              <p className="flex items-center gap-2">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/ffffff/whatsapp.png"
                  alt=""
                  className="w-4 h-4 shrink-0 opacity-85"
                  referrerPolicy="no-referrer"
                />
                <span><strong className="text-white">Línea Oficial:</strong> +57 316 900 8561</span>
              </p>
              <p className="flex items-center gap-2">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/ffffff/classroom.png"
                  alt=""
                  className="w-4 h-4 shrink-0 opacity-85"
                  referrerPolicy="no-referrer"
                />
                <span><strong className="text-white">Modalidades:</strong> Virtual, Presencial y Semipresencial</span>
              </p>
              <p className="flex items-center gap-2">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/ffffff/clock.png"
                  alt=""
                  className="w-4 h-4 shrink-0 opacity-85"
                  referrerPolicy="no-referrer"
                />
                <span><strong className="text-white">Horario:</strong> Lunes a Sábado · 8:00 AM – 6:00 PM</span>
              </p>
              <p className="text-[11px] text-blue-300/70 pt-1">
                Fundación ULEP en convenio y respaldo institucional con GRUPO ULEP.
              </p>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300/80 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p>© {currentYear} Fundación ULEP · Todos los derechos reservados.</p>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-900/60 border border-blue-700/70 text-[11px] font-display font-bold text-white">
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/ffffff/lock.png"
                alt=""
                className="w-3.5 h-3.5"
                referrerPolicy="no-referrer"
              />
              <span>Sitio Seguro SSL / HTTPS</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-medium">
            <a
              href="#terminos"
              onClick={(e) => handleLegalClick(e, 'terminos')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              Términos de Servicio
            </a>
            <a
              href="#privacidad"
              onClick={(e) => handleLegalClick(e, 'privacidad')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              Política de Privacidad
            </a>
            <a
              href="#habeas-data"
              onClick={(e) => handleLegalClick(e, 'habeas-data')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              Habeas Data
            </a>
          </div>
        </div>

      </div>

      {/* Legal Document Modal */}
      {activeModal && (
        <div className="fixed inset-0 bg-[#001a57]/75 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-blue-100 space-y-4 max-h-[90vh] overflow-y-auto text-[#001a57]">
            <div className="flex items-center justify-between pb-3 border-b border-blue-50">
              <h3 className="font-display font-extrabold text-lg text-[#001a57]">
                {activeModal === 'terminos' && 'Términos y Condiciones Institucionales'}
                {activeModal === 'privacidad' && 'Política de Privacidad de Datos'}
                {activeModal === 'habeas-data' && 'Política de Habeas Data'}
              </h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="p-2 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label="Cerrar ventana legal"
              >
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/0035ab/delete-sign.png"
                  alt=""
                  className="w-5 h-5"
                  referrerPolicy="no-referrer"
                />
              </button>
            </div>

            <div className="text-xs sm:text-sm text-blue-950/80 space-y-3 leading-relaxed">
              <p>
                <strong>Fundación ULEP</strong> opera conforme a la normatividad de Educación para el Trabajo y el Desarrollo Humano en Colombia.
              </p>
              <p>
                Toda la información académica, pre-inscripciones y consultas suministradas por los postulantes son tratadas con estricta confidencialidad y utilizadas exclusivamente para trámites educativos y de orientación vocacional.
              </p>
              <p>
                Para cualquier consulta referente a tus datos o solicitar rectificación, puedes comunicarte a nuestra línea oficial de atención institucional.
              </p>
            </div>

            <div className="pt-4 border-t border-blue-50 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#0035ab] hover:bg-[#002477] text-white font-display font-bold text-xs rounded-xl transition-all cursor-pointer min-h-[42px]"
              >
                Entendido y Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
