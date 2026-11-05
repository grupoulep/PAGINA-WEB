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
      <div className="max-w-7xl mx-auto px-1 sm:px-4 flex items-center justify-between gap-3">
        
        {/* Transparent Glass Capsule enclosing BOTH the Logo and Menu Options (div:nth-of-type(1)) */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 bg-white/55 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-blue-200/70 shadow-[0_8px_30px_rgba(0,53,171,0.12)] transition-all duration-200">
          {/* Official Uploaded Logo inside the transparent capsule (No border, no shadow) */}
          <button
            onClick={() => handleTabClick('inicio')}
            className="flex items-center group text-left cursor-pointer shrink-0 min-h-[38px] focus:outline-none border-0 shadow-none pr-1"
            aria-label="Ir al inicio de Fundación ULEP"
          >
            <div className="h-7 sm:h-8 w-24 sm:w-28 relative flex items-center justify-center border-0 shadow-none">
              <img
                src={logoUlepBlue}
                alt="Logo Fundación ULEP"
                className="w-full h-full object-contain object-center group-hover:scale-[1.05] transition-transform duration-200 ease-out select-none border-0 shadow-none"
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
                  className={`relative px-4 lg:px-4.5 py-2 rounded-full text-xs font-display font-bold tracking-wide transition-all duration-150 ease-out cursor-pointer whitespace-nowrap min-h-[36px] ${
                    isActive
                      ? 'bg-[#0035ab] text-white shadow-[0_4px_14px_rgba(0,53,171,0.3)] scale-[1.02]'
                      : 'text-[#001a57] hover:text-[#0035ab] hover:bg-white/70'
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
