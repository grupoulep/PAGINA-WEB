import React, { useState, useEffect } from 'react';
import { ProgramType, TabType } from './types';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AgreementsSection from './components/AgreementsSection';
import AlliesMarquee from './components/AlliesMarquee';
import ProgramCategoriesSection from './components/ProgramCategoriesSection';
import BenefitsSection from './components/BenefitsSection';
import AboutUsSection from './components/AboutUsSection';
import AdmissionsSection from './components/AdmissionsSection';
import Footer from './components/Footer';
import AdminModal from './components/AdminModal';
import { getStoredImages } from './utils/adminStorage';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('inicio');
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [heroImage, setHeroImage] = useState<string>(() => getStoredImages().heroImage);

  useEffect(() => {
    const handleImageUpdate = () => {
      setHeroImage(getStoredImages().heroImage);
    };

    window.addEventListener('ulep_admin_images_updated', handleImageUpdate);
    return () => window.removeEventListener('ulep_admin_images_updated', handleImageUpdate);
  }, []);

  // 120 FPS directional scroll-reveal (left, right, and bottom-up)
  useEffect(() => {
    const selector =
      'main section > div > div, main article, main > div > div > div > button';
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    const directions = ['reveal-from-bottom', 'reveal-from-left', 'reveal-from-right'];
    const viewportHeight = window.innerHeight || 800;

    const observer = new IntersectionObserver(
      (entries) => {
        for (let i = 0; i < entries.length; i++) {
          const entry = entries[i];
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add('is-revealed');
            observer.unobserve(target);
            setTimeout(() => {
              target.classList.remove(
                'scroll-reveal-item',
                'reveal-from-bottom',
                'reveal-from-left',
                'reveal-from-right',
                'is-revealed'
              );
            }, 230);
          }
        }
      },
      {
        threshold: 0.04,
        rootMargin: '0px 0px -10px 0px',
      }
    );

    elements.forEach((el, idx) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportHeight * 0.9) {
        el.classList.remove(
          'scroll-reveal-item',
          'reveal-from-bottom',
          'reveal-from-left',
          'reveal-from-right',
          'is-revealed'
        );
        return;
      }
      el.classList.add('scroll-reveal-item', directions[idx % directions.length]);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeTab]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo(0, 0);
  };

  const handleScrollToEnrollment = (_category?: ProgramType) => {
    handleTabChange('inscripciones');
  };

  return (
    <div className="min-h-screen bg-[#f8fbff] bg-architectural-grid text-[#001a57] font-sans selection:bg-[#0035ab] selection:text-white antialiased relative overflow-x-hidden flex flex-col justify-between">
      {/* Main Top Navigation with Integrated Tabs */}
      <Navbar
        onJoinClick={() => handleScrollToEnrollment()}
        activeTab={activeTab}
        onSelectTab={handleTabChange}
      />

      {/* Main Tab Content Area */}
      <main className="flex-1 relative z-10">
        {/* PESTAÑA 1: INICIO */}
        {activeTab === 'inicio' && (
          <div className="animate-fade-up space-y-2">
            <HeroSection
              onCtaClick={() => handleScrollToEnrollment()}
              onExplorePrograms={() => handleTabChange('programas')}
              onExploreBenefits={() => handleTabChange('beneficios')}
              heroImage={heroImage}
            />

            {/* Scrolling Banner with Allies Logos */}
            <AlliesMarquee />

            <AgreementsSection />

            {/* Quick Tab Jump Cards on Home (Strictly White & Blues + Icons8 Fluency Systems Filled) */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
              <div className="text-center mb-8 sm:mb-12 space-y-2.5">
                <span className="text-[11px] sm:text-xs font-display font-extrabold uppercase tracking-[0.22em] text-[#0035ab] block">
                  Ruta Académica e Institucional
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#001a57] font-display tracking-tight">
                  Todo lo que la{' '}
                  <span className="text-[#0035ab] underline decoration-blue-200 decoration-2 underline-offset-4">
                    Fundación ULEP
                  </span>{' '}
                  tiene para ti
                </h3>
                <p className="text-xs sm:text-sm text-blue-950/75 max-w-lg mx-auto">
                  Accede directamente a nuestro catálogo académico, programas de becas o formulario de pre-inscripción sin costo.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                <button
                  type="button"
                  onClick={() => handleTabChange('programas')}
                  className="bg-white hover:bg-blue-50/60 p-6 sm:p-7 rounded-3xl border border-blue-100 hover:border-[#0035ab] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group cursor-pointer flex flex-col justify-between text-left"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#0035ab] text-white flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-sm">
                        <img
                          src="https://img.icons8.com/fluency-systems-filled/48/ffffff/graduation-cap.png"
                          alt="Cursos para el Trabajo"
                          className="w-6 h-6"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <span className="text-xs font-display font-bold text-blue-400">01</span>
                    </div>
                    <div>
                      <h4 className="font-extrabold text-lg text-[#001a57] font-display group-hover:text-[#0035ab] transition-colors">
                        Cursos para el Trabajo
                      </h4>
                      <p className="text-xs sm:text-sm text-blue-950/75 mt-1.5 leading-relaxed">
                        Conoce el catálogo completo de cursos prácticos por competencias orientados al empleo y al desarrollo humano.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-blue-50 flex items-center justify-between text-xs font-display font-bold text-[#0035ab]">
                    <span>Explorar catálogo</span>
                    <img
                      src="https://img.icons8.com/fluency-systems-filled/48/0035ab/forward-arrow.png"
                      alt=""
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleTabChange('beneficios')}
                  className="bg-white hover:bg-blue-50/60 p-6 sm:p-7 rounded-3xl border border-blue-100 hover:border-[#0035ab] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group cursor-pointer flex flex-col justify-between text-left"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#002477] text-white flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-sm">
                        <img
                          src="https://img.icons8.com/fluency-systems-filled/48/ffffff/trophy.png"
                          alt="Beneficios y Becas"
                          className="w-6 h-6"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <span className="text-xs font-display font-bold text-blue-400">02</span>
                    </div>
                    <div>
                      <h4 className="font-extrabold text-lg text-[#001a57] font-display group-hover:text-[#0035ab] transition-colors">
                        Beneficios y Becas ULEP
                      </h4>
                      <p className="text-xs sm:text-sm text-blue-950/75 mt-1.5 leading-relaxed">
                        Descubre los subsidios a la matrícula, planes de pago en cuotas cómodas sin bancos y horarios adaptados a tu tiempo.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-blue-50 flex items-center justify-between text-xs font-display font-bold text-[#002477]">
                    <span>Conocer beneficios</span>
                    <img
                      src="https://img.icons8.com/fluency-systems-filled/48/002477/forward-arrow.png"
                      alt=""
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleTabChange('inscripciones')}
                  className="bg-white hover:bg-blue-50/60 p-6 sm:p-7 rounded-3xl border border-blue-100 hover:border-[#0035ab] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group cursor-pointer flex flex-col justify-between text-left"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#0035ab] text-white flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-sm">
                        <img
                          src="https://img.icons8.com/fluency-systems-filled/48/ffffff/certificate.png"
                          alt="Inscripciones Abiertas"
                          className="w-6 h-6"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <span className="text-xs font-display font-bold text-blue-400">03</span>
                    </div>
                    <div>
                      <h4 className="font-extrabold text-lg text-[#001a57] font-display group-hover:text-[#0035ab] transition-colors">
                        Inscripciones Abiertas
                      </h4>
                      <p className="text-xs sm:text-sm text-blue-950/75 mt-1.5 leading-relaxed">
                        Realiza tu pre-inscripción en línea con $0 costo de formulario y recibe asesoría inmediata para iniciar clases.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-blue-50 flex items-center justify-between text-xs font-display font-bold text-[#0035ab]">
                    <span>Iniciar pre-inscripción</span>
                    <img
                      src="https://img.icons8.com/fluency-systems-filled/48/0035ab/forward-arrow.png"
                      alt=""
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PESTAÑA 2: CURSOS */}
        {activeTab === 'programas' && (
          <div className="animate-fade-up pt-8 sm:pt-10">
            <ProgramCategoriesSection
              onSelectCategory={(type) => handleScrollToEnrollment(type)}
            />
          </div>
        )}

        {/* PESTAÑA 3: BENEFICIOS Y BECAS */}
        {activeTab === 'beneficios' && (
          <div className="animate-fade-up pt-8 sm:pt-10">
            <BenefitsSection
              onCtaClick={() => handleScrollToEnrollment()}
            />
          </div>
        )}

        {/* PESTAÑA 4: NOSOTROS */}
        {activeTab === 'nosotros' && (
          <div className="animate-fade-up pt-8 sm:pt-10">
            <AboutUsSection
              onExplorePrograms={() => handleTabChange('programas')}
              onExploreAdmissions={() => handleTabChange('inscripciones')}
            />
          </div>
        )}

        {/* PESTAÑA 5: INSCRIPCIONES */}
        {activeTab === 'inscripciones' && (
          <div className="animate-fade-up pt-8 sm:pt-10">
            <AdmissionsSection />
          </div>
        )}
      </main>

      {/* Footer with Tab Selectors & Admin Link */}
      <Footer
        onSelectTab={handleTabChange}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
      />

      {/* Simplified & Improved Admin Panel Modal */}
      <AdminModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
      />
    </div>
  );
}
