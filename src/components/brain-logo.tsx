import React from 'react';
import Image from 'next/image';
import brainImage from '@/assets/brain.png';

const BrainLogo = ({ className = "w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64" }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Brain PNG Image */}
      <div className="relative w-full h-full">
        <Image 
          src={brainImage} 
          alt="SEMNASTI 2025 Brain Logo" 
          fill
          className="object-contain drop-shadow-[0_0_30px_rgba(23,211,253,0.5)]"
          priority
        />
      </div>
      
      {/* Subtle glow effect only */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#17D3FD]/10 to-[#CD3DFF]/10 blur-3xl -z-10 animate-pulse"></div>
    </div>
  );
};

export default BrainLogo;
