import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber = '573169008561',
  message = 'Hola Fundación ULEP, quisiera solicitar información sobre los Cursos para el Trabajo.',
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-24 right-4 sm:bottom-24 sm:right-6 z-40 flex items-center gap-3 group">
      {/* Floating Contact Button in Institutional Blue & White Palette with Icons8 */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="btn-whatsapp-static"
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#0035ab] hover:bg-[#002477] text-white rounded-full border-2 border-white shadow-xl shadow-blue-950/30 hover:shadow-blue-800/40 transition-all duration-300 transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-blue-300/50 min-h-[48px] min-w-[48px]"
        title="Escríbenos por WhatsApp"
        aria-label="Contactar por WhatsApp a Fundación ULEP"
      >
        {/* Subtle Blue Pulse */}
        <span className="absolute inset-0 rounded-full bg-blue-500 opacity-60 animate-ping -z-10 group-hover:opacity-90 pointer-events-none" />

        {/* Icons8 Fluency Systems Filled WhatsApp Icon in White */}
        <img
          src="https://img.icons8.com/fluency-systems-filled/96/ffffff/whatsapp.png"
          alt="WhatsApp"
          className="w-6 h-6 sm:w-7 sm:h-7"
          referrerPolicy="no-referrer"
        />
      </a>
    </div>
  );
}
