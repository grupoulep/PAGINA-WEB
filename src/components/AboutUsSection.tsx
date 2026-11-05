import React from 'react';
import heroStudentsImg from '../assets/images/hero_students_ulep_1786064095670.jpg';

interface AboutUsSectionProps {
  onExplorePrograms: () => void;
  onExploreAdmissions: () => void;
}

export default function AboutUsSection({
  onExplorePrograms,
  onExploreAdmissions,
}: AboutUsSectionProps) {
  const pillars = [
    {
      num: '01',
      iconUrl: 'https://img.icons8.com/fluency-systems-filled/48/0035ab/goal.png',
      title: 'Enfoque en Competencias Laborales',
      description:
        'Nuestros planes de estudio no se limitan a la teoría; capacitamos a los estudiantes en las destrezas que las empresas y el sector productivo solicitan hoy.',
    },
    {
      num: '02',
      iconUrl: 'https://img.icons8.com/fluency-systems-filled/48/0035ab/handshake.png',
      title: 'Inclusión Social y Educación Accesible',
      description:
        'Creemos que el dinero no debe ser un obstáculo. Proveemos becas directas y financiamiento propio sin intermediación bancaria ni requisitos excluyentes.',
    },
    {
      num: '03',
      iconUrl: 'https://img.icons8.com/fluency-systems-filled/48/0035ab/teacher.png',
      title: 'Docentes Expertos del Sector',
      description:
        'Aprenderás con instructores y profesionales activos en sus respectivas áreas, lo que garantiza conocimientos actualizados y aplicados.',
    },
    {
      num: '04',
      iconUrl: 'https://img.icons8.com/fluency-systems-filled/48/0035ab/university.png',
      title: 'Respaldo Integral GRUPO ULEP',
      description:
        'Contamos con el soporte tecnológico, el Campus Virtual 24/7 y la infraestructura educativa del GRUPO ULEP para asegurar la máxima calidad formativa.',
    },
  ];

  return (
    <section id="nosotros" className="py-12 sm:py-16 md:py-20 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto animate-fade-up">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-display font-extrabold uppercase tracking-[0.22em] text-[#0035ab]">
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/0035ab/university.png"
              alt=""
              className="w-4 h-4"
              referrerPolicy="no-referrer"
            />
            <span>Identidad y Propósito Institucional</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#001a57] tracking-tight leading-tight">
            Fundación ULEP:{' '}
            <span className="text-[#0035ab] underline decoration-blue-200 decoration-4 underline-offset-8">
              Educación para el Trabajo
            </span>{' '}
            y Desarrollo Humano
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-blue-950/75 leading-relaxed font-normal">
            Somos una entidad comprometida con la transformación social a través de la formación laboral, cursos prácticos por competencias y oportunidades reales de progreso en Colombia.
          </p>
        </div>

        {/* Institutional Story & Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/95 backdrop-blur-xs border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-md transition-all">
          <div className="lg:col-span-7 space-y-5">
            {/* Smaller Logo Badge without background box */}
            <div className="inline-flex items-center gap-3">
              <div className="h-7 w-22 relative overflow-hidden flex items-center justify-center">
                <img
                  src="/assets/aistudio/FUN_BLANCO_e68e4ad5.png"
                  alt="Logo Fundación ULEP"
                  className="w-full h-full object-cover object-center scale-[1.08]"
                  style={{ filter: 'brightness(0) saturate(100%) invert(13%) sepia(87%) saturate(4648%) hue-rotate(218deg) brightness(91%) contrast(106%)' }}
                />
              </div>
              <span className="text-[10px] font-display font-extrabold uppercase tracking-wider text-[#0035ab] border-l border-blue-200 pl-3">
                Trayectoria y Compromiso
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#001a57] leading-tight">
              Formamos el Talento Humano que Transforma el País
            </h3>
            <p className="text-sm sm:text-base text-blue-950/75 leading-relaxed">
              La <strong className="text-[#002477] font-bold">Fundación ULEP</strong> nació con la firme convicción de que los cursos para el trabajo y la capacitación laboral por competencias son las herramientas más efectivas para mejorar la calidad de vida de las familias y dinamizar la economía de nuestras regiones.
            </p>
            <p className="text-sm text-blue-950/75 leading-relaxed">
              A través de alianzas con empresas, gremios y el respaldo tecnológico de <strong className="text-[#002477] font-semibold">GRUPO ULEP</strong>, brindamos programas con pertinencia laboral, certificación verificable y horarios adaptados a quienes trabajan.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onExplorePrograms}
                className="px-6 py-3.5 rounded-xl bg-[#0035ab] hover:bg-[#002477] text-white font-display font-bold text-xs shadow-sm hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/ffffff/graduation-cap.png"
                  alt=""
                  className="w-4 h-4"
                  referrerPolicy="no-referrer"
                />
                <span>Explorar Nuestros Programas</span>
              </button>
              <button
                type="button"
                onClick={onExploreAdmissions}
                className="px-6 py-3.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#002477] font-display font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceso de Inscripción</span>
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/0035ab/forward-arrow.png"
                  alt=""
                  className="w-4 h-4"
                  referrerPolicy="no-referrer"
                />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 h-72 sm:h-96 rounded-2xl overflow-hidden border border-blue-100 shadow-xs relative group">
            <img
              src={heroStudentsImg}
              alt="Comunidad estudiantil Fundación ULEP"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001a57]/85 via-transparent to-transparent flex items-end p-5">
              <div className="text-white">
                <span className="text-xs font-display font-extrabold block">Comunidad Educativa ULEP</span>
                <span className="text-[11px] text-blue-200">Inclusión educativa y empleabilidad en Colombia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission and Vision Grid (Strictly White & Blues + Icons8 Fluency Systems Filled) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white/95 backdrop-blur-xs border border-blue-100 hover:border-[#0035ab] rounded-3xl p-7 sm:p-9 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-5">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                  <img
                    src="https://img.icons8.com/fluency-systems-filled/48/0035ab/goal.png"
                    alt="Nuestra Misión"
                    className="w-5 h-5"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[11px] font-display font-bold text-blue-400">Propósito Institucional</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-[#001a57]">
                Nuestra Misión
              </h3>
              <p className="text-sm text-blue-950/75 leading-relaxed font-normal">
                Ofrecer educación para el trabajo y el desarrollo humano de alta calidad, incluyente, accesible y flexible, formando personas competentes, éticas e idóneas para desempeñarse con éxito en el sector laboral y emprender con visión de futuro.
              </p>
            </div>
            <div className="pt-4 border-t border-blue-50 flex items-center gap-2 text-xs font-display font-bold text-[#0035ab]">
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/0035ab/approval.png"
                alt=""
                className="w-4 h-4 shrink-0"
                referrerPolicy="no-referrer"
              />
              <span>Compromiso real con el progreso social</span>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-xs border border-blue-100 hover:border-[#0035ab] rounded-3xl p-7 sm:p-9 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-5">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-[#0035ab] text-white flex items-center justify-center">
                  <img
                    src="https://img.icons8.com/fluency-systems-filled/48/ffffff/certificate.png"
                    alt="Nuestra Visión"
                    className="w-5 h-5"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[11px] font-display font-bold text-blue-400">Proyección Nacional</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-[#001a57]">
                Nuestra Visión
              </h3>
              <p className="text-sm text-blue-950/75 leading-relaxed font-normal">
                Ser reconocidos a nivel nacional como una institución líder en educación para el trabajo y formación continua por medio de cursos prácticos, destacada por sus egresados de alto nivel de empleabilidad, su sólida red de aliados institucionales y su modelo de inclusión con becas directas.
              </p>
            </div>
            <div className="pt-4 border-t border-blue-50 flex items-center gap-2 text-xs font-display font-bold text-[#002477]">
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/0035ab/approval.png"
                alt=""
                className="w-4 h-4 shrink-0"
                referrerPolicy="no-referrer"
              />
              <span>Innovación y excelencia formativa continua</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Pedagogical Model */}
        <div className="space-y-6">
          <div className="text-center space-y-1.5">
            <span className="text-xs font-display font-extrabold uppercase tracking-widest text-[#0035ab]">
              Pilares Fundamentales
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#001a57]">
              El Modelo Educativo de la Fundación ULEP
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white/95 backdrop-blur-xs border border-blue-100 hover:border-[#0035ab] rounded-2xl p-6 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <img
                        src={pillar.iconUrl}
                        alt={pillar.title}
                        className="w-5 h-5"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-xs font-display font-bold text-blue-400">{pillar.num}</span>
                  </div>
                  <h4 className="font-extrabold text-sm sm:text-base text-[#001a57] font-display group-hover:text-[#0035ab] transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-blue-950/75 leading-relaxed font-normal">
                    {pillar.description}
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
