import React, { useState, useEffect } from 'react';
import { AllyLogo, getStoredAllies } from '../utils/adminStorage';

export default function AlliesMarquee() {
  const [allies, setAllies] = useState<AllyLogo[]>([]);

  useEffect(() => {
    setAllies(getStoredAllies());

    const handleUpdate = () => {
      setAllies(getStoredAllies());
    };

    window.addEventListener('ulep_admin_allies_updated', handleUpdate);
    return () => window.removeEventListener('ulep_admin_allies_updated', handleUpdate);
  }, []);

  const activeAllies = allies.filter((a) => a.active);
  if (activeAllies.length === 0) return null;

  const marqueeItems = [...activeAllies, ...activeAllies, ...activeAllies, ...activeAllies];

  return (
    <div className="w-full py-4 sm:py-5 bg-white border-y border-blue-100 overflow-hidden relative group select-none">
      <div className="relative w-full overflow-hidden">
        
        {/* Softened White Side Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

        {/* Continuous Scrolling Row */}
        <div className="flex items-center gap-10 sm:gap-16 w-max animate-marquee group-hover:[animation-play-state:paused] py-1">
          {marqueeItems.map((ally, index) => (
            <div
              key={`${ally.id}-${index}`}
              className="h-10 sm:h-12 flex items-center justify-center shrink-0 cursor-default opacity-85 hover:opacity-100 transition-opacity"
              title={ally.name}
            >
              <img
                src={ally.imageUrl}
                alt={ally.name}
                className="max-h-10 sm:max-h-12 w-auto max-w-[130px] sm:max-w-[170px] object-contain transition-all select-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
