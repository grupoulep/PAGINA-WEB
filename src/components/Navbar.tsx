import React, { useState, useEffect, useRef } from 'react';
import { TabType } from '../types';

interface NavbarProps {
  onJoinClick?: () => void;
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export default function Navbar({ activeTab, onSelectTab }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Show when near top or scrolling up; hide when scrolling down
      if (currentScrollY < 30) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 6) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY.current - 6) {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleTabClick = (tab: TabType) => {
    setIsMobileMenuOpen(false);
    onSelectTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Menu options without icons
  const navItems: { id: TabType; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'programas', label: 'Cursos' },
    { id: 'beneficios', label: 'Beneficios y Becas' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'inscripciones', label: 'Inscripciones' },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-2.5 sm:pt-3.5 bg-transparent transition-all duration-500 ease-out ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-1 sm:px-4 flex items-center justify-between gap-3">
        
        {/* Transparent Glass Capsule enclosing BOTH the Logo and Menu Options (div:nth-of-type(1)) */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 bg-white/45 backdrop-blur-xl px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-blue-200/70 shadow-[0_8px_30px_rgba(0,53,171,0.12)] transition-all duration-300">
          {/* Official Uploaded Logo inside the transparent capsule (No border, no shadow) */}
          <button
            onClick={() => handleTabClick('inicio')}
            className="flex items-center group text-left cursor-pointer shrink-0 min-h-[38px] focus:outline-none border-0 shadow-none pr-1"
            aria-label="Ir al inicio de Fundación ULEP"
          >
            <div className="h-7 sm:h-8 w-24 sm:w-28 relative overflow-hidden flex items-center justify-center border-0 shadow-none">
              <img
                src="/assets/aistudio/FUN_BLANCO_e68e4ad5.png"
                alt="Logo Fundación ULEP"
                className="w-full h-full object-cover object-center scale-[1.08] group-hover:scale-[1.14] transition-transform duration-500 ease-out select-none border-0 shadow-none"
                style={{
                  filter:
                    'brightness(0) saturate(100%) invert(13%) sepia(87%) saturate(4648%) hue-rotate(218deg) brightness(91%) contrast(106%)',
                }}
              />
            </div>
          </button>

          {/* Navigation Options inside the same transparent glass capsule */}
          <div className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`relative px-4 lg:px-4.5 py-2 rounded-full text-xs font-display font-bold tracking-wide transition-all duration-300 ease-out cursor-pointer whitespace-nowrap min-h-[36px] ${
                    isActive
                      ? 'bg-[#0035ab] text-white shadow-[0_4px_14px_rgba(0,53,171,0.3)] scale-[1.03]'
                      : 'text-[#001a57] hover:text-[#0035ab] hover:bg-white/65 hover:-translate-y-0.5'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Button (Campus Virtual in Glassy White & Blue with Micro-interaction) */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          <a
            href="https://groupulep.github.io/credito/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-white/85 hover:bg-white backdrop-blur-xl text-[#002477] font-display font-extrabold text-xs transition-all duration-300 ease-out hover:-translate-y-0.5 shadow-[0_8px_24px_rgba(0,53,171,0.12)] hover:shadow-lg active:scale-95 flex items-center gap-2 cursor-pointer whitespace-nowrap min-h-[38px] border border-blue-200/80"
          >
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/0035ab/laptop.png"
              alt=""
              className="w-4 h-4 shrink-0"
              referrerPolicy="no-referrer"
            />
            <span>Campus Virtual</span>
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/0035ab/up-right.png"
              alt=""
              className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
              referrerPolicy="no-referrer"
            />
          </a>
        </div>

        {/* Mobile Menu Button (Rounded Glass Pill) */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="px-3.5 py-1.5 rounded-full bg-white/60 hover:bg-white/80 backdrop-blur-xl text-[#001a57] border border-blue-200/80 shadow-sm transition-all duration-300 active:scale-95 cursor-pointer flex items-center gap-1.5 min-h-[36px]"
            aria-label="Abrir menú de navegación"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <>
                <span className="text-xs font-display font-extrabold text-[#001a57]">Cerrar</span>
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/0035ab/delete-sign.png"
                  alt=""
                  className="w-4 h-4"
                  referrerPolicy="no-referrer"
                />
              </>
            ) : (
              <>
                <span className="text-xs font-display font-extrabold text-[#001a57]">Menú</span>
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/0035ab/menu.png"
                  alt=""
                  className="w-4 h-4"
                  referrerPolicy="no-referrer"
                />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer (Floating Glass Card with Smooth Entrance Animation) */}
      {isMobileMenuOpen && (
        <div
          id="panel-navegacion-desplegable"
          className="mt-2.5 max-w-7xl mx-auto rounded-3xl bg-white/90 backdrop-blur-2xl border border-blue-200/80 shadow-[0_20px_50px_rgba(0,26,87,0.28)] z-[70] max-h-[82vh] overflow-y-auto px-5 py-5 flex flex-col gap-4 animate-fade-up"
        >
          <div className="flex items-center justify-between pb-2 border-b border-blue-100/80">
            <span className="text-[11px] font-display font-extrabold uppercase tracking-widest text-[#0035ab]">
              Menú Institucional
            </span>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xs font-bold text-blue-700 hover:text-[#002477] px-2.5 py-1 rounded-full hover:bg-blue-50 transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>Cerrar</span>
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/0035ab/delete-sign.png"
                alt=""
                className="w-3.5 h-3.5"
                referrerPolicy="no-referrer"
              />
            </button>
          </div>

          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`text-left font-display font-bold py-3 px-4 rounded-2xl transition-all duration-300 flex items-center justify-between min-h-[46px] cursor-pointer ${
                    isActive
                      ? 'bg-[#0035ab] text-white shadow-md shadow-[#0035ab]/25 translate-x-1'
                      : 'text-[#001a57] bg-blue-50/60 hover:bg-blue-100/80 hover:translate-x-1'
                  }`}
                >
                  <span className="text-sm font-bold">{item.label}</span>
                  {isActive && (
                    <span className="text-[10px] uppercase font-extrabold tracking-wider text-blue-100">
                      Actual
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-blue-100/80 space-y-2.5">
            <a
              href="https://groupulep.github.io/credito/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-2xl bg-[#002477] text-white font-display font-extrabold text-center hover:bg-[#0035ab] flex items-center justify-center gap-2 text-xs min-h-[44px] transition-all shadow-md"
            >
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/ffffff/laptop.png"
                alt=""
                className="w-4 h-4"
                referrerPolicy="no-referrer"
              />
              <span>Ingresar al Campus Virtual</span>
            </a>
            <p className="text-center text-[11px] text-blue-800/60 font-medium">
              Fundación ULEP · Educación para el Trabajo y Desarrollo Humano
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
