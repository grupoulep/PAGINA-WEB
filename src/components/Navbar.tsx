import React, { useState, useEffect, useRef } from 'react';
import { TabType } from '../types';
import logoUlepBlue from '../assets/images/logo_ulep_blue.png';

interface NavbarProps {
  onJoinClick?: () => void;
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export default function Navbar({ activeTab, onSelectTab }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const isVisibleRef = useRef(true);
  const ticking = useRef(false);

  useEffect(() => {
    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      let nextVisible = isVisibleRef.current;

      if (currentScrollY < 30) {
        nextVisible = true;
      } else if (currentScrollY > lastScrollY.current + 6) {
        nextVisible = false;
      } else if (currentScrollY < lastScrollY.current - 6) {
        nextVisible = true;
      }

      if (nextVisible !== isVisibleRef.current) {
        isVisibleRef.current = nextVisible;
        const navEl = navRef.current;
        if (navEl) {
          navEl.style.transform = nextVisible
            ? 'translate3d(0, 0, 0)'
            : 'translate3d(0, -96px, 0)';
          navEl.style.opacity = nextVisible ? '1' : '0';
          navEl.style.pointerEvents = nextVisible ? 'auto' : 'none';
        }
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScroll);
        ticking.current = true;
      }
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
      ref={navRef}
      id="navbar"
      style={{
        transform: 'translate3d(0, 0, 0)',
        opacity: 1,
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
      }}
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-2.5 sm:pt-3.5 bg-transparent transition-[transform,opacity] duration-150 ease-out"
    >
      <div className="w-full max-w-[96%] xl:max-w-[1440px] mx-auto px-1 sm:px-3 flex items-center justify-between gap-3 sm:gap-4 animate-fade-up">
        
        {/* More Square, Full-Width Glass Panel enclosing BOTH the Logo and Menu Options (div:nth-of-type(1)) */}
        <div className="flex-1 flex items-center justify-between gap-4 sm:gap-6 bg-white/60 hover:bg-white/75 backdrop-blur-md px-4 sm:px-7 py-2.5 sm:py-3 rounded-xl border border-blue-200/80 shadow-[0_8px_28px_rgba(0,53,171,0.10)] hover:shadow-[0_12px_34px_rgba(0,53,171,0.16)] transition-all duration-200">
          {/* Official Uploaded Logo inside the square glass panel (No border, no shadow) */}
          <button
            onClick={() => handleTabClick('inicio')}
            className="flex items-center group text-left cursor-pointer shrink-0 min-h-[38px] focus:outline-none border-0 shadow-none pr-2"
            aria-label="Ir al inicio de Fundación ULEP"
          >
            <div className="h-7 sm:h-8 w-24 sm:w-28 relative flex items-center justify-center border-0 shadow-none">
              <img
                src={logoUlepBlue}
                alt="Logo Fundación ULEP"
                className="w-full h-full object-contain object-center group-hover:scale-[1.06] group-active:scale-95 transition-transform duration-200 ease-out select-none border-0 shadow-none"
              />
            </div>
          </button>

          {/* Navigation Options with Smaller Font & Animated Hover/Active States */}
          <div className="hidden md:flex items-center justify-end gap-1.5 lg:gap-2.5 flex-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`group relative px-3.5 lg:px-4 py-2 rounded-lg text-[10.5px] lg:text-[11px] font-display font-bold uppercase tracking-[0.1em] transition-all duration-150 ease-out cursor-pointer whitespace-nowrap min-h-[34px] active:scale-95 ${
                    isActive
                      ? 'bg-[#0035ab] text-white shadow-[0_4px_12px_rgba(0,53,171,0.28)] -translate-y-0.5'
                      : 'text-[#001a57] hover:text-[#0035ab] hover:bg-white/80 hover:-translate-y-0.5'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {!isActive && (
                    <span className="pointer-events-none absolute bottom-1 left-3 right-3 h-[2px] bg-[#0035ab] rounded-xs scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Button (More Square Campus Virtual Button with Smaller Font & Micro-animation) */}
        <div className="hidden md:flex items-center shrink-0">
          <a
            href="https://groupulep.github.io/credito/"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-4 lg:px-5 py-2.5 sm:py-3 rounded-xl bg-white/85 hover:bg-[#0035ab] text-[#002477] hover:text-white backdrop-blur-md font-display font-extrabold text-[10.5px] lg:text-[11px] uppercase tracking-[0.1em] transition-all duration-200 ease-out hover:-translate-y-0.5 shadow-[0_8px_24px_rgba(0,53,171,0.12)] hover:shadow-[0_10px_28px_rgba(0,53,171,0.25)] active:scale-95 flex items-center gap-2 cursor-pointer whitespace-nowrap min-h-[42px] border border-blue-200/80 hover:border-[#0035ab]"
          >
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/0035ab/laptop.png"
              alt=""
              className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:scale-110 group-hover:brightness-0 group-hover:invert"
              referrerPolicy="no-referrer"
            />
            <span>Campus Virtual</span>
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/0035ab/up-right.png"
              alt=""
              className="w-3 h-3 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:brightness-0 group-hover:invert"
              referrerPolicy="no-referrer"
            />
          </a>
        </div>

        {/* Mobile Menu Button (More Square Glass Button) */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="px-3.5 py-2 rounded-xl bg-white/65 hover:bg-white/85 backdrop-blur-md text-[#001a57] border border-blue-200/80 shadow-xs transition-all duration-150 active:scale-95 cursor-pointer flex items-center gap-1.5 min-h-[38px]"
            aria-label="Abrir menú de navegación"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <>
                <span className="text-[11px] font-display font-extrabold uppercase tracking-wider text-[#001a57]">Cerrar</span>
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/0035ab/delete-sign.png"
                  alt=""
                  className="w-3.5 h-3.5"
                  referrerPolicy="no-referrer"
                />
              </>
            ) : (
              <>
                <span className="text-[11px] font-display font-extrabold uppercase tracking-wider text-[#001a57]">Menú</span>
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/0035ab/menu.png"
                  alt=""
                  className="w-3.5 h-3.5"
                  referrerPolicy="no-referrer"
                />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer (More Square Floating Glass Card with Smooth Entrance Animation) */}
      {isMobileMenuOpen && (
        <div
          id="panel-navegacion-desplegable"
          className="mt-2.5 max-w-[96%] mx-auto rounded-xl bg-white/92 backdrop-blur-xl border border-blue-200/80 shadow-[0_20px_50px_rgba(0,26,87,0.28)] z-[70] max-h-[82vh] overflow-y-auto px-5 py-4 flex flex-col gap-3.5 animate-fade-up"
        >
          <div className="flex items-center justify-between pb-2 border-b border-blue-100/80">
            <span className="text-[10px] font-display font-extrabold uppercase tracking-[0.18em] text-[#0035ab]">
              Menú Institucional
            </span>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[11px] font-bold text-blue-700 hover:text-[#002477] px-2.5 py-1 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer flex items-center gap-1"
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
                  className={`text-left font-display font-bold py-2.5 px-3.5 rounded-lg transition-all duration-150 flex items-center justify-between min-h-[42px] cursor-pointer ${
                    isActive
                      ? 'bg-[#0035ab] text-white shadow-sm shadow-[#0035ab]/25 translate-x-1'
                      : 'text-[#001a57] bg-blue-50/60 hover:bg-blue-100/80 hover:translate-x-1'
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider">{item.label}</span>
                  {isActive && (
                    <span className="text-[9px] uppercase font-extrabold tracking-wider text-blue-100">
                      Actual
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-2.5 border-t border-blue-100/80 space-y-2">
            <a
              href="https://groupulep.github.io/credito/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 rounded-lg bg-[#002477] text-white font-display font-extrabold text-center hover:bg-[#0035ab] flex items-center justify-center gap-2 text-[11px] uppercase tracking-wider min-h-[42px] transition-all shadow-sm"
            >
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/ffffff/laptop.png"
                alt=""
                className="w-3.5 h-3.5"
                referrerPolicy="no-referrer"
              />
              <span>Ingresar al Campus Virtual</span>
            </a>
            <p className="text-center text-[10px] text-blue-800/60 font-medium">
              Fundación ULEP · Educación para el Trabajo y Desarrollo Humano
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
