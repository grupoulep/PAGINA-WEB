import React from 'react';
import heroStudentsImg from '../assets/images/hero_students_ulep_1786064095670.jpg';
import shortCoursesImg from '../assets/images/short_courses_ulep_1786064117554.jpg';
import vocationalTrainingImg from '../assets/images/vocational_training_ulep_1786064108299.jpg';

interface BenefitsSectionProps {
  onCtaClick: () => void;
}

export default function BenefitsSection({ onCtaClick }: BenefitsSectionProps) {
  return (
    <section id="beneficios" className="py-10 sm:py-16 md:py-20 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* SECTION HEADER - Big, Impactful & Elegant (Strictly White & Blues + Icons8 Fluency Systems Filled) */}
        <div className="text-center space-y-4 max-w-3xl mx-auto animate-fade-up">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-display font-extrabold uppercase tracking-[0.22em] text-[#0035ab]">
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/0035ab/trophy.png"
              alt=""
              className="w-4 h-4"
              referrerPolicy="no-referrer"
            />
            <span>Oportunidades de Ingreso y Apoyo Estudiantil</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-[#001a57] tracking-tight leading-[1.12]">
            Beneficios Exclusivos y Becas{' '}
            <span className="text-[#0035ab] underline decoration-blue-200 decoration-4 underline-offset-8 block sm:inline">
              Fundación ULEP
            </span>
          </h2>

          <p className="text-base sm:text-lg text-blue-950/75 leading-relaxed font-normal max-w-2xl mx-auto">
            Impulsamos tu crecimiento profesional con subsidios directos a tu matrícula, facilidades de pago en cuotas fijas sin bancos y horarios flexibles que se adaptan a tu vida.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* FILA 1: CUADRO A LA IZQUIERDA / IMAGEN A LA DERECHA */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-blue-100 hover:border-[#0035ab]/60 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300">
          {/* Cuadro Izquierda */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <img
                    src="https://img.icons8.com/fluency-systems-filled/48/0035ab/trophy.png"
                    alt=""
                    className="w-5 h-5"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs font-display font-extrabold uppercase tracking-wider text-[#0035ab] block">
                  01 · Financiamiento Directo & Subsidios
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#001a57] leading-tight">
                Programa Institucional de Becas y Subsidios Educativos
              </h3>
            </div>

            <p className="text-sm sm:text-base text-blue-950/75 leading-relaxed">
              En la <strong className="text-[#002477] font-bold">Fundación ULEP</strong> creemos que el dinero no debe ser un obstáculo para salir adelante. Ofrecemos becas de descuento directo en mensualidades y facilidades para que inicies tu curso para el trabajo inmediatamente, sin intermediación bancaria.
            </p>

            {/* Puntos Explicativos */}
            <div className="space-y-3 pt-1">
              <div className="border-l-2 border-[#0035ab] pl-4 py-0.5">
                <h4 className="text-xs sm:text-sm font-display font-extrabold text-[#001a57]">
                  Beca de Apoyo Económico
                </h4>
                <p className="text-xs text-blue-900/75 mt-0.5">
                  Subsidios institucionales directos aplicables a la mensualidad de tu programa.
                </p>
              </div>

              <div className="border-l-2 border-[#0035ab] pl-4 py-0.5">
                <h4 className="text-xs sm:text-sm font-display font-extrabold text-[#001a57]">
                  $0 Costo de Formulario de Inscripción
                </h4>
                <p className="text-xs text-blue-900/75 mt-0.5">
                  Postúlate de forma gratuita y sin trámites complejos.
                </p>
              </div>

              <div className="border-l-2 border-[#0035ab] pl-4 py-0.5">
                <h4 className="text-xs sm:text-sm font-display font-extrabold text-[#001a57]">
                  Sin Intermediarios Bancarios
                </h4>
                <p className="text-xs text-blue-900/75 mt-0.5">
                  Trato directo con la Fundación ULEP sin revisiones crediticias.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onCtaClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0035ab] hover:bg-[#002477] text-white font-display font-bold text-xs sm:text-sm shadow-sm hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[46px]"
              >
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/ffffff/trophy.png"
                  alt=""
                  className="w-4 h-4"
                  referrerPolicy="no-referrer"
                />
                <span>Postularme a una Beca por WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Imagen Derecha */}
          <div className="lg:col-span-6 h-full min-h-[280px] sm:min-h-[360px] relative rounded-2xl overflow-hidden border border-blue-100 shadow-xs">
            <img
              src={heroStudentsImg}
              alt="Estudiantes beneficiarios de becas en Fundación ULEP"
              className="w-full h-full object-cover min-h-[280px] sm:min-h-[360px] hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001a57]/85 via-transparent to-transparent flex items-end p-5">
              <p className="text-white text-xs font-display font-bold tracking-wide">
                Convocatoria Educativa ULEP · Subsidios Directos
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FILA 2: IMAGEN A LA IZQUIERDA / CUADRO A LA DERECHA (INTERCALADO) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-blue-100 hover:border-[#0035ab]/60 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300">
          {/* Imagen Izquierda */}
          <div className="lg:col-span-6 order-2 lg:order-1 h-full min-h-[280px] sm:min-h-[360px] relative rounded-2xl overflow-hidden border border-blue-100 shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
              alt="Facilidades de pago en cuotas ULEP"
              className="w-full h-full object-cover min-h-[280px] sm:min-h-[360px] hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001a57]/85 via-transparent to-transparent flex items-end p-5">
              <p className="text-white text-xs font-display font-bold tracking-wide">
                Financiación Solidaria · Cuotas Mensuales Fijas
              </p>
            </div>
          </div>

          {/* Cuadro Derecha */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <img
                    src="https://img.icons8.com/fluency-systems-filled/48/0035ab/bank-cards.png"
                    alt=""
                    className="w-5 h-5"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs font-display font-extrabold uppercase tracking-wider text-[#0035ab] block">
                  02 · Economía Solidaria
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#001a57] leading-tight">
                Pagos en Cuotas Cómodas y Directas
              </h3>
            </div>

            <p className="text-sm sm:text-base text-blue-950/75 leading-relaxed">
              Paga tu capacitación mes a mes sin intereses ocultos ni letras bancarias. Diseñado para que cualquier persona con deseos de superarse pueda trabajar y estudiar al mismo tiempo sin desestabilizar su presupuesto familiar.
            </p>

            {/* Puntos Explicativos */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#001a57]">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/0035ab/approval.png"
                  alt=""
                  className="w-4 h-4 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <span>Cuotas fijas mensuales pactadas desde el inicio</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#001a57]">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/0035ab/approval.png"
                  alt=""
                  className="w-4 h-4 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <span>Cero intereses bancarios abusivos ni intermediarios</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#001a57]">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/0035ab/approval.png"
                  alt=""
                  className="w-4 h-4 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <span>Facilidad de pago en línea, transferencias o consignación</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#001a57]">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/0035ab/approval.png"
                  alt=""
                  className="w-4 h-4 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <span>Aprobación directa el mismo día de tu postulación</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onCtaClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#002477] hover:bg-[#0035ab] text-white font-display font-bold text-xs sm:text-sm shadow-sm hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[46px]"
              >
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/ffffff/bank-cards.png"
                  alt=""
                  className="w-4 h-4"
                  referrerPolicy="no-referrer"
                />
                <span>Consultar Planes de Pago</span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FILA 3: CUADRO A LA IZQUIERDA / IMAGEN A LA DERECHA (INTERCALADO) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-blue-100 hover:border-[#0035ab]/60 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300">
          {/* Cuadro Izquierda */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <img
                    src="https://img.icons8.com/fluency-systems-filled/48/0035ab/clock.png"
                    alt=""
                    className="w-5 h-5"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs font-display font-extrabold uppercase tracking-wider text-[#0035ab] block">
                  03 · Flexibilidad Total
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#001a57] leading-tight">
                Modalidades Adapta-Tu-Tiempo
              </h3>
            </div>

            <p className="text-sm sm:text-base text-blue-950/75 leading-relaxed">
              Elige cómo estudiar según tu horario y ubicación: 100% Virtual con acceso a nuestro campus las 24 horas del día, o clases Presenciales y Semipresenciales con talleres prácticos.
            </p>

            {/* Puntos Explicativos */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#001a57]">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/0035ab/approval.png"
                  alt=""
                  className="w-4 h-4 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <span>Campus Virtual disponible 24/7 desde cualquier dispositivo</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#001a57]">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/0035ab/approval.png"
                  alt=""
                  className="w-4 h-4 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <span>Jornadas en sábados, diurnas o nocturnas para quienes trabajan</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#001a57]">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/0035ab/approval.png"
                  alt=""
                  className="w-4 h-4 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <span>Acompañamiento y tutorías permanentes con instructores</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#001a57]">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/0035ab/approval.png"
                  alt=""
                  className="w-4 h-4 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <span>Clases grabadas y material descargable siempre disponible</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onCtaClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0035ab] hover:bg-[#002477] text-white font-display font-extrabold text-xs sm:text-sm shadow-sm hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[46px]"
              >
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/ffffff/clock.png"
                  alt=""
                  className="w-4 h-4"
                  referrerPolicy="no-referrer"
                />
                <span>Elegir Horario y Modalidad</span>
              </button>
            </div>
          </div>

          {/* Imagen Derecha */}
          <div className="lg:col-span-6 h-full min-h-[280px] sm:min-h-[360px] relative rounded-2xl overflow-hidden border border-blue-100 shadow-xs">
            <img
              src={shortCoursesImg}
              alt="Estudiante en campus virtual y modalidades ULEP"
              className="w-full h-full object-cover min-h-[280px] sm:min-h-[360px] hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001a57]/85 via-transparent to-transparent flex items-end p-5">
              <p className="text-white text-xs font-display font-bold tracking-wide">
                Modalidades · Virtual 24/7, Presencial y Semipresencial
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FILA 4: IMAGEN A LA IZQUIERDA / CUADRO A LA DERECHA (INTERCALADO) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-blue-100 hover:border-[#0035ab]/60 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300">
          {/* Imagen Izquierda */}
          <div className="lg:col-span-6 order-2 lg:order-1 h-full min-h-[280px] sm:min-h-[360px] relative rounded-2xl overflow-hidden border border-blue-100 shadow-xs">
            <img
              src={vocationalTrainingImg}
              alt="Certificación oficial y formación laboral práctica ULEP"
              className="w-full h-full object-cover min-h-[280px] sm:min-h-[360px] hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001a57]/85 via-transparent to-transparent flex items-end p-5">
              <p className="text-white text-xs font-display font-bold tracking-wide">
                Certificación Oficial · Competencias para el Empleo
              </p>
            </div>
          </div>

          {/* Cuadro Derecha */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <img
                    src="https://img.icons8.com/fluency-systems-filled/48/0035ab/certificate.png"
                    alt=""
                    className="w-5 h-5"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs font-display font-extrabold uppercase tracking-wider text-[#0035ab] block">
                  04 · Validez y Empleabilidad
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#001a57] leading-tight">
                Certificación Oficial para el Empleo
              </h3>
            </div>

            <p className="text-sm sm:text-base text-blue-950/75 leading-relaxed">
              Nuestra metodología se enfoca en que aprendas haciendo. Al finalizar satisfactoriamente tu programa, recibes tu certificación con respaldo institucional de la Fundación ULEP y GRUPO ULEP para que demuestres tus competencias ante cualquier empleador.
            </p>

            {/* Puntos Explicativos */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#001a57]">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/0035ab/approval.png"
                  alt=""
                  className="w-4 h-4 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <span>Enfoque 100% práctico aplicado a empresas</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#001a57]">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/0035ab/approval.png"
                  alt=""
                  className="w-4 h-4 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <span>Certificados con respaldo institucional verificable</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#001a57]">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/0035ab/approval.png"
                  alt=""
                  className="w-4 h-4 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <span>Desarrollo de competencias altamente demandadas</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#001a57]">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/0035ab/approval.png"
                  alt=""
                  className="w-4 h-4 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <span>Orientación y vinculación con la red de aliados</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onCtaClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#002477] hover:bg-[#0035ab] text-white font-display font-bold text-xs sm:text-sm shadow-sm hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[46px]"
              >
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/ffffff/certificate.png"
                  alt=""
                  className="w-4 h-4"
                  referrerPolicy="no-referrer"
                />
                <span>Conocer Más de la Certificación</span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BLOQUE DE ATENCIÓN DIRECTA Y ASESORÍA (BLANCO Y AZULES + ICONS8) */}
        {/* ========================================================================= */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-50 via-white to-blue-50 border border-blue-200 p-8 sm:p-10 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-xs font-display font-black uppercase tracking-widest text-[#0035ab]">
              Atención Personalizada
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-[#001a57]">
              ¿Tienes dudas sobre los planes de pago o las becas?
            </h3>
            <p className="text-xs sm:text-sm text-blue-950/75 leading-relaxed">
              Un asesor de la Fundación ULEP te responderá de inmediato para ayudarte a elegir la mejor opción de estudio adaptada a tu presupuesto.
            </p>
          </div>

          <button
            type="button"
            onClick={onCtaClick}
            className="w-full md:w-auto px-7 py-3.5 rounded-xl bg-[#0035ab] hover:bg-[#002477] text-white font-display font-black text-xs sm:text-sm shadow-lg shadow-[#0035ab]/20 transition-all hover:scale-[1.02] shrink-0 flex items-center justify-center gap-2 cursor-pointer min-h-[46px]"
          >
            <img
              src="https://img.icons8.com/fluency-systems-filled/48/ffffff/online-support.png"
              alt=""
              className="w-4 h-4"
              referrerPolicy="no-referrer"
            />
            <span>Hablar con un Asesor de Becas</span>
          </button>
        </div>

      </div>
    </section>
  );
}
