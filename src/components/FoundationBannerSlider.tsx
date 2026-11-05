import React, { useState, useEffect, useRef } from 'react';
import { FoundationBanner, getStoredFoundationBanners } from '../utils/adminStorage';

export default function FoundationBannerSlider() {
  const [banners, setBanners] = useState<FoundationBanner[]>(() => {
    const stored = getStoredFoundationBanners();
    const active = stored.filter((b) => b.active);
    return active.length > 0 ? active : stored;
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const loadBanners = () => {
      const stored = getStoredFoundationBanners();
      const active = stored.filter((b) => b.active);
      setBanners(active.length > 0 ? active : stored);
    };

    window.addEventListener('ulep_admin_foundation_banners_updated', loadBanners);
    return () => window.removeEventListener('ulep_admin_foundation_banners_updated', loadBanners);
  }, []);

  useEffect(() => {
    if (banners.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4200);

    return () => clearInterval(timer);
  }, [banners.length, isPaused]);

  if (banners.length === 0) return null;

  const currentBanner = banners[currentIndex] || banners[0];

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      id="banner-fundacion-principal"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 mb-8 sm:mb-12 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Framed Architectural Showcase Canvas (Strictly White & Blues) */}
      <div className="relative w-full h-[210px] xs:h-[250px] sm:h-[340px] md:h-[410px] lg:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden border border-blue-200 shadow-xl shadow-blue-950/10 bg-[#001a57] group">
        <img
          key={currentBanner.id}
          src={currentBanner.imageUrl}
          alt={currentBanner.name || 'Campus y Estudiantes Fundación ULEP'}
          decoding="async"
          fetchPriority="high"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center animate-fade-up transition-transform duration-300"
        />

        {/* Subtle Blue Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001a57]/50 via-transparent to-[#001a57]/15 pointer-events-none z-10" />

        {/* Navigation Arrows with Icons8 Fluency Systems Filled */}
        {banners.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/95 hover:bg-white text-[#002477] flex items-center justify-center transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer shadow-lg z-20 min-h-[42px] min-w-[42px]"
              aria-label="Imagen anterior"
            >
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/002477/chevron-left.png"
                alt=""
                className="w-5 h-5"
                referrerPolicy="no-referrer"
              />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/95 hover:bg-white text-[#002477] flex items-center justify-center transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer shadow-lg z-20 min-h-[42px] min-w-[42px]"
              aria-label="Siguiente imagen"
            >
              <img
                src="https://img.icons8.com/fluency-systems-filled/48/002477/chevron-right.png"
                alt=""
                className="w-5 h-5"
                referrerPolicy="no-referrer"
              />
            </button>
          </>
        )}

        {/* Minimalist Bottom Progress Indicators */}
        {banners.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-[#001a57]/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
            {banners.map((b, idx) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className="transition-all cursor-pointer py-1 flex items-center justify-center"
                aria-label={`Ir a imagen ${idx + 1}`}
              >
                <span
                  className={`block h-1.5 rounded-sm transition-all ${
                    currentIndex === idx
                      ? 'w-6 bg-white'
                      : 'w-2 bg-blue-200/50 hover:bg-white/90'
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
