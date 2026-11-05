import React, { useState } from 'react';
import { getStoredCourses } from '../utils/adminStorage';

export default function AdmissionsSection() {
  const courses = getStoredCourses();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(courses[0]?.title || 'Cursos para el Trabajo');
  const [modality, setModality] = useState('Virtual');
  const [wantsScholarship, setWantsScholarship] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getWhatsAppUrl = () => {
    const waNumber = '573169008561';
    const msg =
      `*SOLICITUD DE PRE-INSCRIPCIÓN - FUNDACIÓN ULEP*\n\n` +
      `👤 *Aspirante:* ${fullName}\n` +
      `📱 *WhatsApp:* ${phone}\n` +
      `📍 *Ciudad:* ${city || 'Colombia'}\n` +
      `🎓 *Programa:* ${selectedCourse}\n` +
      `💻 *Modalidad:* ${modality}\n` +
      `⭐ *Aplica a Beca ULEP:* ${wantsScholarship ? 'SÍ, solicito subsidio/beca' : 'No'}\n\n` +
      `_Deseo recibir la información oficial para legalizar mi cupo e iniciar clases._`;
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmitPreRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setErrorMessage('Por favor ingresa tu nombre completo y número de WhatsApp para continuar.');
      return;
    }
    setErrorMessage(null);
    setIsSubmitted(true);
  };

  const steps = [
    {
      num: '01',
      title: 'Elige tu Curso',
      desc: 'Selecciona el curso práctico para el trabajo de tu interés según tus metas laborales.',
      iconUrl: 'https://img.icons8.com/fluency-systems-filled/48/0035ab/open-book.png',
    },
    {
      num: '02',
      title: 'Pre-inscripción en Línea',
      desc: 'Completa el formulario breve con tus datos de contacto sin costo de inscripción.',
      iconUrl: 'https://img.icons8.com/fluency-systems-filled/48/0035ab/edit-file.png',
    },
    {
      num: '03',
      title: 'Asignación de Beca o Cuotas',
      desc: 'Nuestro equipo de bienestar te asigna el subsidio o define tu plan de cuotas sin bancos.',
      iconUrl: 'https://img.icons8.com/fluency-systems-filled/48/0035ab/trophy.png',
    },
    {
      num: '04',
      title: 'Legalización e Inicio',
      desc: 'Recibes tus accesos al Campus Virtual o indicaciones para clases presenciales y comienzas tu formación.',
      iconUrl: 'https://img.icons8.com/fluency-systems-filled/48/0035ab/graduation-cap.png',
    },
  ];

  const requirements = [
    'Documento de identidad legible (Cédula de Ciudadanía, Tarjeta de Identidad o Cédula de Extranjería).',
    'Certificado de escolaridad básica o acta de grado de bachiller (según el programa requerido).',
    'Disponibilidad horaria para la modalidad elegida (Virtual o Presencial).',
    'Dispositivo con acceso a internet (celular, tablet o computador) para programas virtuales.',
  ];

  const faqs = [
    {
      q: '¿El formulario de inscripción tiene algún costo?',
      a: 'No. El proceso de pre-inscripción y postulación a becas en la Fundación ULEP es 100% gratuito.',
    },
    {
      q: '¿Revisan centrales de riesgo para financiar mi matrícula?',
      a: 'No. La Fundación ULEP maneja financiación directa solidaria sin intermediarios bancarios ni reportes en centrales de riesgo.',
    },
    {
      q: '¿Cuándo inician las clases?',
      a: 'Tenemos convocatorias con aperturas mensuales y semestrales continuas, tanto en modalidad virtual como presencial.',
    },
    {
      q: '¿Cómo recibo mi certificación al culminar?',
      a: 'Recibirás tu certificación oficial verificable por competencias respaldada por la Fundación ULEP y GRUPO ULEP.',
    },
  ];

  return (
    <section id="inscripciones" className="py-12 sm:py-16 md:py-20 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto animate-fade-up">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-display font-extrabold uppercase tracking-[0.22em] text-[#0035ab]">
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/0035ab/certificate.png"
              alt=""
              className="w-4 h-4"
              referrerPolicy="no-referrer"
            />
            <span>Admisiones y Matrículas Abiertas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#001a57] tracking-tight leading-tight">
            Proceso de Inscripción:{' '}
            <span className="text-[#0035ab] underline decoration-blue-200 decoration-4 underline-offset-8">
              Asegura tu Cupo Hoy
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-blue-950/75 leading-relaxed font-normal">
            El proceso de ingreso es ágil, transparente y sin trámites bancarios complejos. Sigue los pasos y postula a tu beca o plan de cuotas directas.
          </p>
        </div>

        {/* 4 Steps Grid (Strictly White & Blues + Icons8 Fluency Systems Filled) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((st, i) => (
            <div
              key={i}
              className="bg-white border border-blue-100 hover:border-[#0035ab] rounded-2xl p-6 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <img
                      src={st.iconUrl}
                      alt={st.title}
                      className="w-5 h-5"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-xl font-extrabold font-display text-[#0035ab]">
                    {st.num}
                  </span>
                </div>
                <h3 className="font-extrabold text-base text-[#001a57] font-display group-hover:text-[#0035ab] transition-colors">
                  {st.title}
                </h3>
                <p className="text-xs text-blue-950/75 leading-relaxed font-normal">
                  {st.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-blue-50 flex items-center gap-1.5 text-[11px] font-display font-bold text-[#0035ab]">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/0035ab/approval.png"
                  alt=""
                  className="w-3.5 h-3.5"
                  referrerPolicy="no-referrer"
                />
                <span>Etapa {st.num} del proceso</span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Interactive Enrollment Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Requirements & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-display font-extrabold uppercase tracking-wider text-[#0035ab] block">
                  Requisitos de Ingreso
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold font-display text-[#001a57]">
                  ¿Qué necesitas para matricularte?
                </h3>
              </div>

              <ul className="space-y-3 pt-1">
                {requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-blue-950/80 leading-relaxed">
                    <img
                      src="https://img.icons8.com/fluency-systems-filled/48/0035ab/approval.png"
                      alt=""
                      className="w-4 h-4 shrink-0 mt-0.5"
                      referrerPolicy="no-referrer"
                    />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-blue-50 space-y-2.5">
                <span className="text-xs font-display font-extrabold text-[#001a57] block">
                  Garantías al Inscribirte:
                </span>
                <div className="grid grid-cols-2 gap-2.5 text-xs text-blue-900/80 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <img
                      src="https://img.icons8.com/fluency-systems-filled/48/0035ab/bank-cards.png"
                      alt=""
                      className="w-4 h-4"
                      referrerPolicy="no-referrer"
                    />
                    <span>Cuotas sin bancos</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <img
                      src="https://img.icons8.com/fluency-systems-filled/48/0035ab/clock.png"
                      alt=""
                      className="w-4 h-4"
                      referrerPolicy="no-referrer"
                    />
                    <span>Horarios flexibles</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <img
                      src="https://img.icons8.com/fluency-systems-filled/48/0035ab/trophy.png"
                      alt=""
                      className="w-4 h-4"
                      referrerPolicy="no-referrer"
                    />
                    <span>Subsidio directo</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <img
                      src="https://img.icons8.com/fluency-systems-filled/48/0035ab/guarantee.png"
                      alt=""
                      className="w-4 h-4"
                      referrerPolicy="no-referrer"
                    />
                    <span>Certificado ULEP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <h4 className="font-display font-extrabold text-xs sm:text-sm text-[#001a57]">
                  ¿Prefieres atención inmediata?
                </h4>
                <p className="text-[11px] text-blue-900/75">
                  Nuestra línea de admisiones te orienta en tiempo real.
                </p>
              </div>
              <a
                href="https://wa.me/573169008561?text=Hola%20Fundación%20ULEP,%20quisiera%20asesoría%20para%20inscribirme"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#0035ab] hover:bg-[#002477] text-white text-xs font-display font-bold rounded-xl shrink-0 flex items-center gap-1.5 shadow-xs transition-colors"
              >
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/ffffff/whatsapp.png"
                  alt=""
                  className="w-4 h-4"
                  referrerPolicy="no-referrer"
                />
                <span>Contactar</span>
              </a>
            </div>
          </div>

          {/* Right Column: Pre-registration Form */}
          <div className="lg:col-span-7 bg-white border border-blue-100 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm space-y-6">
            <div className="space-y-1 pb-3 border-b border-blue-50">
              <span className="text-xs font-display font-extrabold uppercase tracking-wider text-[#0035ab] block">
                Formulario Oficial Sin Costo
              </span>
              <h3 className="text-2xl font-extrabold font-display text-[#001a57]">
                Solicitud de Pre-inscripción y Beca
              </h3>
              <p className="text-xs text-blue-900/75">
                Diligencia tus datos para apartar tu cupo y activar tu descuento de beca institucional.
              </p>
            </div>

            {errorMessage && (
              <div className="bg-blue-50 border border-blue-300 text-[#002477] rounded-xl p-3.5 flex items-center gap-2.5 text-xs font-semibold">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/0035ab/help.png"
                  alt=""
                  className="w-4 h-4 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <span>{errorMessage}</span>
              </div>
            )}

            {isSubmitted ? (
              <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-6 text-center space-y-4 animate-in fade-in duration-300">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/96/0035ab/approval.png"
                  alt=""
                  className="w-10 h-10 mx-auto"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-1">
                  <h4 className="text-lg font-extrabold text-[#001a57] font-display">
                    ¡Solicitud lista para confirmar!
                  </h4>
                  <p className="text-xs text-blue-950/75 max-w-md mx-auto">
                    Haz clic en el botón inferior para enviar tu ficha de pre-inscripción directamente al WhatsApp oficial de Admisiones de Fundación ULEP.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-[#0035ab] hover:bg-[#002477] text-white font-display font-bold text-xs rounded-xl shadow-sm flex items-center justify-center gap-2"
                  >
                    <img
                      src="https://img.icons8.com/fluency-systems-filled/48/ffffff/whatsapp.png"
                      alt=""
                      className="w-4 h-4"
                      referrerPolicy="no-referrer"
                    />
                    <span>Confirmar Envío en WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-3 bg-white border border-blue-200 text-[#002477] font-display font-bold text-xs rounded-xl cursor-pointer hover:bg-blue-50"
                  >
                    Editar datos
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitPreRegistration} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-display font-bold text-[#001a57] mb-1.5">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ej. Carlos Andrés Gómez"
                      className="w-full px-3.5 py-2.5 bg-blue-50/40 border border-blue-200 rounded-xl text-xs font-medium text-[#001a57] placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-[#0035ab] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-display font-bold text-[#001a57] mb-1.5">
                      Número de WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ej. 316 000 0000"
                      className="w-full px-3.5 py-2.5 bg-blue-50/40 border border-blue-200 rounded-xl text-xs font-medium text-[#001a57] placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-[#0035ab] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-display font-bold text-[#001a57] mb-1.5">
                      Ciudad o Municipio
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Ej. Bogotá, Medellín, Cali..."
                      className="w-full px-3.5 py-2.5 bg-blue-50/40 border border-blue-200 rounded-xl text-xs font-medium text-[#001a57] placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-[#0035ab] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-display font-bold text-[#001a57] mb-1.5">
                      Modalidad Preferida
                    </label>
                    <select
                      value={modality}
                      onChange={(e) => setModality(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-blue-50/40 border border-blue-200 rounded-xl text-xs font-medium text-[#001a57] focus:outline-none focus:ring-2 focus:ring-[#0035ab] focus:bg-white transition-all"
                    >
                      <option value="Virtual">100% Virtual (Campus 24/7)</option>
                      <option value="Presencial">Presencial</option>
                      <option value="Semipresencial">Semipresencial (Sábados)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-display font-bold text-[#001a57] mb-1.5">
                    Programa de Interés
                  </label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-blue-50/40 border border-blue-200 rounded-xl text-xs font-medium text-[#001a57] focus:outline-none focus:ring-2 focus:ring-[#0035ab] focus:bg-white transition-all"
                  >
                    {courses.map((c) => (
                      <option key={c.id} value={c.title}>
                        [Curso] {c.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-3.5 flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="becaCheck"
                    checked={wantsScholarship}
                    onChange={(e) => setWantsScholarship(e.target.checked)}
                    className="w-4 h-4 text-[#0035ab] rounded border-blue-300 focus:ring-[#0035ab] cursor-pointer"
                  />
                  <label htmlFor="becaCheck" className="text-xs font-display font-bold text-[#002477] cursor-pointer select-none">
                    Deseo postularme al subsidio de Beca ULEP y plan de pago en cuotas fijas sin bancos.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#0035ab] hover:bg-[#002477] text-white font-display font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-[#0035ab]/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <img
                    src="https://img.icons8.com/fluency-systems-filled/48/ffffff/whatsapp.png"
                    alt=""
                    className="w-4 h-4"
                    referrerPolicy="no-referrer"
                  />
                  <span>Generar Solicitud de Pre-inscripción</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* FAQs Section */}
        <div className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 space-y-6 shadow-xs">
          <div className="flex items-center gap-2.5 pb-3 border-b border-blue-50">
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/0035ab/question-mark.png"
              alt=""
              className="w-5 h-5"
              referrerPolicy="no-referrer"
            />
            <h3 className="font-extrabold text-lg sm:text-xl text-[#001a57] font-display">
              Preguntas Frecuentes sobre el Proceso de Admisión
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {faqs.map((f, i) => (
              <div key={i} className="space-y-1.5 p-5 rounded-2xl bg-blue-50/40 border border-blue-100 hover:border-[#0035ab]/40 transition-colors">
                <h4 className="text-xs sm:text-sm font-display font-extrabold text-[#001a57]">
                  {f.q}
                </h4>
                <p className="text-xs text-blue-950/75 leading-relaxed font-normal">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
