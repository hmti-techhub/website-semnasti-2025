'use client';

import Link from 'next/link';
import CountdownTimer from '@/components/countdown-timer';

// Optional: Add floating particles for extra beauty
const Particle = ({ x, y, size, delay }: { x: string; y: string; size: string; delay: string }) => (
  <div
    className={`absolute rounded-full bg-white/20 animate-pulse`}
    style={{
      left: x,
      top: y,
      width: size,
      height: size,
      animationDelay: delay,
    }}
  />
);

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">


      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 pt-12 pb-20 text-center">
        {/* Logos Row */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20"
            >
              <span className="text-xs font-bold text-white">LOGO{i}</span>
            </div>
          ))}
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-2 leading-tight">
          <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            SEMNASTI 2025
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-200 font-medium">
          Smart Living With AI • Real Tech For Real Life
        </p>

        {/* Brain Logo */}
        <div className="relative mb-8">
          <div className="w-40 h-40 mx-auto relative">
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/50 animate-spin-slow"></div>
            <svg
              className="w-full h-full text-blue-400 filter drop-shadow-lg pulse"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 10C30 10 15 30 15 50C15 70 30 90 50 90C70 90 85 70 85 50C85 30 70 10 50 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M50 30V70M30 50H70"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M40 40C40 40 45 45 50 45C55 45 60 40 60 40"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M40 60C40 60 45 55 50 55C55 55 60 60 60 60"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105 font-medium">
            DAFTAR SEKARANG
          </button>
          <button className="px-6 py-3 bg-transparent border border-white/30 hover:bg-white/10 transition-all transform hover:scale-105 font-medium">
            LIHAT JADWAL
          </button>
        </div>

        {/* Countdown */}
        <CountdownTimer />

        {/* Tagline */}
        <p className="mt-8 text-lg max-w-2xl mx-auto text-center leading-relaxed opacity-90">
          Membangun Masa Depan Dengan Menembus Batas, Berinovasi Dengan AI.
        </p>
      </main>

      {/* Footer Line */}
      <footer className="relative z-10 border-t border-white/10 mt-12 py-4 text-center text-sm opacity-70">
        © 2025 SEMNASTI. All rights reserved.
      </footer>
    </div>
  );
}