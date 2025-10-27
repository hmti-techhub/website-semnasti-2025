'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import group1 from '@/assets/Group.png';
import group2 from '@/assets/Group (1).png';
import vector3506 from '@/assets/Vector 3506.png';
import vector3507 from '@/assets/Vector 3507.png';

export default function BackgroundDecorative() {
  const [scrollY, setScrollY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotion = () => setReducedMotion(media.matches);
    handleMotion();
    media.addEventListener('change', handleMotion);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      media.removeEventListener('change', handleMotion);
    };
  }, []);

  const sy = useMemo(() => (reducedMotion ? 0 : scrollY), [reducedMotion, scrollY]);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      {/* Parallax decorative layers (base gradient is provided globally in body) */}
      
      {/* Animated decorative elements with parallax */}
      <div 
        className="absolute top-20 left-4 md:left-10 w-20 h-20 md:w-32 md:h-32 opacity-20 animate-pulse mix-blend-screen"
        style={{ transform: `translateY(${sy * 0.3}px)` }}
      >
        <Image src={group1} alt="" className="w-full h-full object-contain" />
      </div>
      
      <div 
        className="absolute bottom-20 right-4 md:right-10 w-20 h-20 md:w-32 md:h-32 opacity-20 animate-pulse mix-blend-screen" 
        style={{ 
          animationDelay: '1s',
          transform: `translateY(${sy * -0.2}px)` 
        }}
      >
        <Image src={group2} alt="" className="w-full h-full object-contain" />
      </div>
      
      <div 
        className="absolute top-1/4 right-10 md:right-20 w-32 md:w-64 opacity-10 mix-blend-screen"
        style={{ transform: `translateY(${sy * 0.15}px)` }}
      >
        <Image src={vector3506} alt="" className="w-full h-full object-contain" />
      </div>
      
      <div 
        className="absolute bottom-1/4 left-10 md:left-20 w-32 md:w-64 opacity-10 mix-blend-screen"
        style={{ transform: `translateY(${sy * -0.15}px)` }}
      >
        <Image src={vector3507} alt="" className="w-full h-full object-contain" />
      </div>

      {/* Gradient orbs with parallax */}
      <div 
        className="absolute top-1/3 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-[#17D3FD]/20 md:from-[#17D3FD]/15 to-transparent rounded-full blur-3xl mix-blend-screen"
        style={{ transform: `translate(${sy * 0.1}px, ${sy * 0.2}px)` }}
      ></div>
      <div 
        className="absolute bottom-1/3 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-[#CD3DFF]/20 md:from-[#CD3DFF]/15 to-transparent rounded-full blur-3xl mix-blend-screen"
        style={{ transform: `translate(${sy * -0.1}px, ${sy * -0.15}px)` }}
      ></div>
      
      {/* Additional orbs for depth */}
      <div 
        className="absolute top-2/3 left-1/3 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-br from-[#5B8CFF]/15 md:from-[#5B8CFF]/10 to-transparent rounded-full blur-3xl mix-blend-screen"
        style={{ transform: `translateY(${sy * 0.25}px)` }}
      ></div>
    </div>
  );
}
