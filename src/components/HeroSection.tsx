import React from 'react';
import FoundationBannerSlider from './FoundationBannerSlider';

interface HeroSectionProps {
  onCtaClick?: () => void;
  onExplorePrograms?: () => void;
  onExploreBenefits?: () => void;
  heroImage?: string;
}

export default function HeroSection({
  onExplorePrograms,
  onExploreBenefits,
}: HeroSectionProps) {
  return (
    <section id="inicio" className="relative pt-[56px] sm:pt-[64px] pb-12 sm:pb-16 overflow-hidden text-[#001a57]">
      {/* Panoramic Institutional Showcase Slider */}
      <FoundationBannerSlider />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7 sm:space-y-9 relative">
        
        {/* Subtle Glowing Educational Accent behind Hero Title */}
        <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-80 h-32 bg-blue-300/20 blur-3xl rounded-full" aria-hidden="true" />

        {/* Editorial Headline (FUP Gotham/Montserrat + Open Sans hierarchy) */}
        <div className="space-y-4 max-w-4xl mx-auto animate-fade-up">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-display font-extrabold uppercase tracking-[0.22em] text-[#0035ab]">
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/0035ab/graduation-cap.png"
              alt=""
              className="w-4 h-4"
              referrerPolicy="no-referrer"
            />
            <span>Educación para el Trabajo y el Desarrollo Humano · Colombia</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-[#001a57] leading-[1.12]">
            Formación Práctica en{' '}
            <span className="text-[#0035ab] underline decoration-blue-200 decoration-4 underline-offset-8">
              Cursos para el Trabajo
            </span>{' '}
            con Respaldo Institucional
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-blue-950/75 max-w-2xl mx-auto leading-relaxed font-normal pt-1">
            En la <strong className="text-[#002477] font-bold">Fundación ULEP</strong> impulsamos tu empleabilidad mediante cursos prácticos diseñados para el sector productivo real, modalidades flexibles y financiación directa sin bancos.
          </p>
        </div>

        {/* Dual Primary CTA Buttons (Strictly Blue & White + Icons8 Fluency Systems Filled) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-1">
          {onExplorePrograms && (
            <button
              onClick={onExplorePrograms}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0035ab] hover:bg-[#002477] text-white font-display font-bold text-xs sm:text-sm shadow-lg shadow-[#0035ab]/25 transition-all duration-300 hover:-translate-y-1 text-center cursor-pointer flex items-center justify-center gap-2.5 min-h-[48px]"
            >
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/ffffff/open-book.png"
                alt=""
                className="w-4 h-4"
                referrerPolicy="no-referrer"
              />
              <span>Explorar Cursos</span>
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/ffffff/forward-arrow.png"
                alt=""
                className="w-4 h-4"
                referrerPolicy="no-referrer"
              />
            </button>
          )}

          {onExploreBenefits && (
            <button
              onClick={onExploreBenefits}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-blue-50/80 text-[#002477] border border-blue-200 hover:border-[#0035ab] font-display font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center cursor-pointer flex items-center justify-center gap-2.5 min-h-[48px]"
            >
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/0035ab/trophy.png"
                alt=""
                className="w-4 h-4"
                referrerPolicy="no-referrer"
              />
              <span>Postular a Beneficios y Becas</span>
            </button>
          )}
        </div>

        {/* 3 Architectural Value Cards (Strictly White & Blues + Icons8 Fluency Systems Filled) */}
        <div className="pt-8 sm:pt-10 border-t border-blue-100 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left">
          <button
            type="button"
            onClick={onExplorePrograms}
            className="bg-white p-6 rounded-2xl border border-blue-100 hover:border-[#0035ab] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group text-left flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="https://img.icons8.com/fluency-systems-filled/48/0035ab/open-book.png"
                    alt="Cursos para el Trabajo"
                    className="w-5 h-5"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[11px] font-display font-bold text-blue-400">01 · Formación Ágil</span>
              </div>
              <h3 className="font-extrabold text-base sm:text-lg text-[#001a57] font-display group-hover:text-[#0035ab] transition-colors">
                Cursos para el Trabajo
              </h3>
              <p className="text-xs text-blue-950/75 mt-1.5 leading-relaxed">
                Capacitación intensiva de 3 a 6 meses enfocada 100% en destrezas operativas y rápida salida laboral.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-[#0035ab] mt-5 group-hover:translate-x-1.5 transition-transform">
              <span>Ver cursos disponibles</span>
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/0035ab/forward-arrow.png"
                alt=""
                className="w-3.5 h-3.5"
                referrerPolicy="no-referrer"
              />
            </span>
          </button>

          <button
            type="button"
            onClick={onExplorePrograms}
            className="bg-white p-6 rounded-2xl border border-blue-100 hover:border-[#0035ab] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group text-left flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="https://img.icons8.com/fluency-systems-filled/48/0035ab/graduation-cap.png"
                    alt="Cursos por Competencias"
                    className="w-5 h-5"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[11px] font-display font-bold text-blue-400">02 · Competencias</span>
              </div>
              <h3 className="font-extrabold text-base sm:text-lg text-[#001a57] font-display group-hover:text-[#0035ab] transition-colors">
                Cursos por Competencias
              </h3>
              <p className="text-xs text-blue-950/75 mt-1.5 leading-relaxed">
                Módulos estructurados por competencias laborales con certificación oficial verificable de la Fundación ULEP.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-[#0035ab] mt-5 group-hover:translate-x-1.5 transition-transform">
              <span>Explorar catálogo</span>
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/0035ab/forward-arrow.png"
                alt=""
                className="w-3.5 h-3.5"
                referrerPolicy="no-referrer"
              />
            </span>
          </button>

          <button
            type="button"
            onClick={onExploreBenefits}
            className="bg-gradient-to-b from-blue-50/90 to-white p-6 rounded-2xl border border-blue-200 hover:border-[#0035ab] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group text-left flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#0035ab] text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs">
                  <img
                    src="https://img.icons8.com/fluency-systems-filled/48/ffffff/trophy.png"
                    alt="Becas y Financiación"
                    className="w-5 h-5"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[11px] font-display font-bold text-[#0035ab]">03 · Apoyo Directo</span>
              </div>
              <h3 className="font-extrabold text-base sm:text-lg text-[#001a57] font-display group-hover:text-[#0035ab] transition-colors">
                Becas y Financiación
              </h3>
              <p className="text-xs text-blue-950/75 mt-1.5 leading-relaxed">
                Subsidios directos a la mensualidad y cuotas mensuales fijas sin estudio en centrales de riesgo.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-[#0035ab] mt-5 group-hover:translate-x-1.5 transition-transform">
              <span>Conocer becas activas</span>
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/0035ab/forward-arrow.png"
                alt=""
                className="w-3.5 h-3.5"
                referrerPolicy="no-referrer"
              />
            </span>
          </button>
        </div>

        {/* Unboxed Editorial Trust Line with Icons8 Fluency Systems Filled checks */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-blue-900/75 font-semibold">
          <span className="flex items-center gap-1.5">
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/0035ab/approval.png"
              alt=""
              className="w-4 h-4"
              referrerPolicy="no-referrer"
            />
            Certificación por Competencias
          </span>
          <span aria-hidden="true" className="text-blue-200">·</span>
          <span className="flex items-center gap-1.5">
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/0035ab/approval.png"
              alt=""
              className="w-4 h-4"
              referrerPolicy="no-referrer"
            />
            Virtual 24/7, Presencial y Semipresencial
          </span>
          <span aria-hidden="true" className="text-blue-200">·</span>
          <span className="flex items-center gap-1.5">
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/0035ab/approval.png"
              alt=""
              className="w-4 h-4"
              referrerPolicy="no-referrer"
            />
            Sin Intermediación Bancaria
          </span>
        </div>

      </div>
    </section>
  );
}
