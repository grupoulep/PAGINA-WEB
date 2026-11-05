import React from 'react';
import logoUlepBlue from '../assets/images/logo_ulep_blue.png';

export default function AgreementsSection() {
  const convenios = [
    {
      number: '01',
      name: 'FUNDACIÓN ULEP',
      role: 'Educación para el Trabajo',
      subtitle: 'Entidad de Formación Laboral y Desarrollo Humano',
      description:
        'Diseño e impartición de Cursos para el Trabajo orientados a la empleabilidad, competencias laborales reales e inclusión social en Colombia.',
      iconUrl: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/graduation-cap.png',
    },
    {
      number: '02',
      name: 'GRUPO ULEP',
      role: 'Respaldo Institucional',
      subtitle: 'Infraestructura Tecnológica y Financiación Solidaria',
      description:
        'Garantía de calidad académica, soporte del Campus Virtual 24/7 y programas de financiación directa en cuotas sin intermediación bancaria.',
      iconUrl: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/university.png',
    },
  ];

  return (
    <section className="py-8 sm:py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-9 shadow-sm hover:shadow-md transition-all duration-300">
          
          {/* Header with Smaller Official Logo Emblem without background box */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-blue-100/80">
            <div className="flex items-center gap-3.5">
              <div className="h-9 w-24 relative flex items-center justify-center shrink-0">
                <img
                  src={logoUlepBlue}
                  alt="Logo Fundación ULEP"
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <div>
                <span className="text-[10px] font-display font-extrabold text-[#0035ab] uppercase tracking-[0.2em] block">
                  Respaldo Institucional
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#001a57] font-display">
                  Alianza de Calidad y Compromiso Educativo
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-display font-semibold text-[#0035ab]">
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/0035ab/guarantee.png"
                alt=""
                className="w-4 h-4 shrink-0"
                referrerPolicy="no-referrer"
              />
              <span>Certificación Verificable · Cobertura Nacional</span>
            </div>
          </div>

          {/* Convenios Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 pt-6">
            {convenios.map((item, idx) => (
              <div
                key={idx}
                className="bg-blue-50/40 border border-blue-100 rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:border-[#0035ab] hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0035ab] text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-xs">
                        <img
                          src={item.iconUrl}
                          alt={item.name}
                          className="w-5 h-5"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <h4 className="text-base font-extrabold text-[#001a57] font-display tracking-tight group-hover:text-[#0035ab] transition-colors">
                        {item.name}
                      </h4>
                    </div>
                    <span className="text-[11px] font-display font-bold text-blue-500">
                      {item.number} · {item.role}
                    </span>
                  </div>

                  <p className="text-xs font-display font-bold text-[#0035ab]">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-blue-950/75 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
