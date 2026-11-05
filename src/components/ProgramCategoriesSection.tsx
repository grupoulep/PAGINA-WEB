import React, { useState, useEffect } from 'react';
import { CourseData, getStoredCourses } from '../utils/adminStorage';

interface ProgramCategoriesSectionProps {
  onSelectCategory: (type: 'curso') => void;
}

export default function ProgramCategoriesSection({ onSelectCategory }: ProgramCategoriesSectionProps) {
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<CourseData | null>(null);

  useEffect(() => {
    setCourses(getStoredCourses());

    const handleUpdate = () => {
      setCourses(getStoredCourses());
    };

    window.addEventListener('ulep_admin_courses_updated', handleUpdate);
    return () => window.removeEventListener('ulep_admin_courses_updated', handleUpdate);
  }, []);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const getWhatsAppUrl = (courseTitle: string) => {
    const waNumber = '573169008561';
    const waMessage = `Hola Fundación ULEP, quisiera más información sobre el curso "${courseTitle}" y cómo iniciar mi inscripción con facilidades de pago o beca.`;
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
  };

  return (
    <section id="programas" className="py-12 sm:py-16 md:py-20 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto animate-fade-up">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-display font-extrabold uppercase tracking-[0.22em] text-[#0035ab]">
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/0035ab/open-book.png"
              alt=""
              className="w-4 h-4"
              referrerPolicy="no-referrer"
            />
            <span>Catálogo Oficial de Formación para el Trabajo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#001a57] tracking-tight leading-tight">
            Nuestros Cursos{' '}
            <span className="text-[#0035ab] underline decoration-blue-200 decoration-4 underline-offset-8">
              para el Trabajo
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-blue-950/75 leading-relaxed font-normal">
            Estructurados bajo el modelo de educación por competencias para el trabajo y el desarrollo humano. Diseñados para que adquieras habilidades prácticas aplicables de inmediato al sector productivo.
          </p>
        </div>

        {/* Architectural Key Metrics Strip (White & Blues + Icons8 Fluency Systems Filled) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 bg-white/95 backdrop-blur-xs rounded-2xl border border-blue-100 divide-y sm:divide-y-0 sm:divide-x divide-blue-100 shadow-xs overflow-hidden max-w-4xl mx-auto">
          <div className="p-4 text-center flex flex-col items-center gap-1">
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/0035ab/goal.png"
              alt=""
              className="w-5 h-5 mb-0.5"
              referrerPolicy="no-referrer"
            />
            <span className="text-lg sm:text-xl font-extrabold text-[#0035ab] block font-display">100%</span>
            <span className="text-[11px] font-semibold text-blue-900/75">Práctico y Aplicado</span>
          </div>
          <div className="p-4 text-center flex flex-col items-center gap-1">
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/0035ab/laptop.png"
              alt=""
              className="w-5 h-5 mb-0.5"
              referrerPolicy="no-referrer"
            />
            <span className="text-lg sm:text-xl font-extrabold text-[#0035ab] block font-display">24/7</span>
            <span className="text-[11px] font-semibold text-blue-900/75">Campus Virtual Activo</span>
          </div>
          <div className="p-4 text-center flex flex-col items-center gap-1">
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/0035ab/handshake.png"
              alt=""
              className="w-5 h-5 mb-0.5"
              referrerPolicy="no-referrer"
            />
            <span className="text-lg sm:text-xl font-extrabold text-[#0035ab] block font-display">Directo</span>
            <span className="text-[11px] font-semibold text-blue-900/75">Pagos en Cuotas Sin Bancos</span>
          </div>
          <div className="p-4 text-center flex flex-col items-center gap-1">
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/0035ab/certificate.png"
              alt=""
              className="w-5 h-5 mb-0.5"
              referrerPolicy="no-referrer"
            />
            <span className="text-lg sm:text-xl font-extrabold text-[#0035ab] block font-display">Oficial</span>
            <span className="text-[11px] font-semibold text-blue-900/75">Certificación ULEP</span>
          </div>
        </div>

        {/* Search Control */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5 pt-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-xl border border-blue-100 self-start sm:self-auto">
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/0035ab/open-book.png"
              alt=""
              className="w-4 h-4"
              referrerPolicy="no-referrer"
            />
            <span className="text-xs font-display font-bold text-[#001a57]">
              Cursos Disponibles ({courses.length})
            </span>
          </div>

          <div className="relative w-full sm:w-80">
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/0035ab/search.png"
              alt=""
              className="w-4 h-4 opacity-60 absolute left-3.5 top-1/2 -translate-y-1/2"
              referrerPolicy="no-referrer"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar curso o competencia..."
              className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-blue-200 rounded-xl text-xs text-[#001a57] placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-[#0035ab] focus:border-transparent transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        {filteredCourses.length === 0 ? (
          <div className="bg-white border border-blue-100 rounded-2xl p-10 text-center space-y-3">
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/0035ab/open-book.png"
              alt=""
              className="w-8 h-8 mx-auto opacity-60"
              referrerPolicy="no-referrer"
            />
            <h3 className="text-base font-display font-bold text-[#001a57]">No se encontraron cursos con ese criterio</h3>
            <p className="text-xs text-blue-900/70">Prueba con otra palabra clave.</p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="px-4 py-2 bg-[#0035ab] text-white text-xs font-display font-bold rounded-lg cursor-pointer"
            >
              Ver todos los cursos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredCourses.map((course, idx) => (
              <article
                key={course.id}
                className="bg-white/95 backdrop-blur-xs border border-blue-100 hover:border-[#0035ab] rounded-3xl transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl shadow-blue-950/5 flex flex-col justify-between overflow-hidden group"
              >
                {/* Image Header */}
                <div className="relative h-52 sm:h-60 overflow-hidden bg-[#001a57]">
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001a57]/95 via-[#001a57]/35 to-transparent flex items-end p-6">
                    <div className="text-white space-y-1.5 w-full">
                      <div className="flex items-center justify-between text-[11px] font-display font-bold uppercase tracking-wider text-blue-200">
                        <span>Curso Práctico para el Trabajo</span>
                        <span className="text-white/80">0{idx + 1}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold font-display tracking-tight text-white leading-snug">
                        {course.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Unboxed Metadata Line */}
                    <div className="flex items-center justify-between text-xs text-blue-900/70 pb-3.5 border-b border-blue-50 gap-2 flex-wrap">
                      <span className="font-display font-bold text-[#0035ab] flex items-center gap-1.5">
                        <img
                          src="https://img.icons8.com/fluency-systems-filled/48/0035ab/open-book.png"
                          alt=""
                          className="w-4 h-4 shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <span>{course.subtitle}</span>
                      </span>
                      {course.duration && (
                        <span className="font-display font-semibold text-[#002477] flex items-center gap-1.5">
                          <img
                            src="https://img.icons8.com/fluency-systems-filled/48/0035ab/clock.png"
                            alt=""
                            className="w-3.5 h-3.5"
                            referrerPolicy="no-referrer"
                          />
                          <span>{course.duration}</span>
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-blue-950/75 leading-relaxed font-normal">
                      {course.description}
                    </p>

                    {/* Key Competencies */}
                    <div className="space-y-2 pt-1">
                      <p className="text-[11px] font-display font-extrabold uppercase tracking-wider text-[#001a57]">
                        Competencias y beneficios del curso:
                      </p>
                      <ul className="space-y-2">
                        {course.features.map((feat, i) => (
                          <li key={i} className="text-xs text-blue-950/80 flex items-start gap-2.5">
                            <img
                              src="https://img.icons8.com/fluency-systems-filled/48/0035ab/approval.png"
                              alt=""
                              className="w-4 h-4 shrink-0 mt-0.5"
                              referrerPolicy="no-referrer"
                            />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-5 border-t border-blue-50 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                    <a
                      href={getWhatsAppUrl(course.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => onSelectCategory('curso')}
                      className="flex-1 py-3 px-4 rounded-xl bg-[#0035ab] hover:bg-[#002477] text-white font-display font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                    >
                      <img
                        src="https://img.icons8.com/fluency-systems-filled/48/ffffff/whatsapp.png"
                        alt=""
                        className="w-4 h-4"
                        referrerPolicy="no-referrer"
                      />
                      <span>Solicitar Cupo por WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSelectedCourseForModal(course)}
                      className="py-3 px-4 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#002477] font-display font-bold text-xs transition-colors cursor-pointer min-h-[44px] flex items-center justify-center gap-1.5"
                    >
                      <span>Detalles del Curso</span>
                      <img
                        src="https://img.icons8.com/fluency-systems-filled/48/0035ab/up-right.png"
                        alt=""
                        className="w-3.5 h-3.5"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Modal for Course Details */}
        {selectedCourseForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001a57]/75 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-blue-100 relative max-h-[90vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => setSelectedCourseForModal(null)}
                className="absolute top-5 right-5 p-2 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer"
                aria-label="Cerrar detalles del curso"
              >
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/0035ab/delete-sign.png"
                  alt=""
                  className="w-5 h-5"
                  referrerPolicy="no-referrer"
                />
              </button>

              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-display font-extrabold uppercase tracking-widest text-[#0035ab]">
                  Curso Práctico para el Trabajo
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold font-display text-[#001a57] leading-tight">
                  {selectedCourseForModal.title}
                </h3>
                <p className="text-xs text-blue-900/70 font-medium">
                  {selectedCourseForModal.subtitle} {selectedCourseForModal.duration ? `· Duración: ${selectedCourseForModal.duration}` : ''}
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden h-44 border border-blue-100">
                <img
                  src={selectedCourseForModal.imageUrl}
                  alt={selectedCourseForModal.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-blue-950/80 leading-relaxed">
                <p>{selectedCourseForModal.description}</p>
                <div className="bg-blue-50/60 p-4 rounded-2xl border border-blue-100 space-y-2.5">
                  <h4 className="font-display font-extrabold text-[#001a57] text-xs uppercase tracking-wider">
                    Alcance y beneficios incluidos:
                  </h4>
                  <ul className="space-y-2">
                    {selectedCourseForModal.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-blue-950/90">
                        <img
                          src="https://img.icons8.com/fluency-systems-filled/48/0035ab/approval.png"
                          alt=""
                          className="w-4 h-4 shrink-0 mt-0.5"
                          referrerPolicy="no-referrer"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={getWhatsAppUrl(selectedCourseForModal.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedCourseForModal(null)}
                  className="flex-1 py-3.5 px-5 rounded-xl bg-[#0035ab] hover:bg-[#002477] text-white font-display font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <img
                    src="https://img.icons8.com/fluency-systems-filled/48/ffffff/whatsapp.png"
                    alt=""
                    className="w-4 h-4"
                    referrerPolicy="no-referrer"
                  />
                  <span>Inscribirme con Beca ULEP</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedCourseForModal(null)}
                  className="px-5 py-3.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#002477] font-display font-bold text-xs cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
