"use client";

import Image from "next/image";
import CountdownTimer from "@/components/countdown-timer";
import asiaLogo from "@/assets/ASIA RANKED 1.png";
import akreditasiLogo from "@/assets/AkreditasiUnggul 2.png";
import dinusLogo from "@/assets/LOGO-UDINUS 1.png";
import hmtiLogo from "@/assets/Rectangle.png";
import Link from "next/link";

const logoStock = [asiaLogo, akreditasiLogo, dinusLogo, hmtiLogo];

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative isolate z-10 scroll-mt-24 min-h-[60vh] lg:min-h-[50vh] flex items-center px-6 py-6 lg:py-10 text-center"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* Logo Partners */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-3 md:mb-4">
          {logoStock.map((logo, i) => (
            <div
              key={i}
              className="h-10 md:h-12 lg:h-14 w-auto hover:scale-110 transition-transform duration-300"
            >
              <Image
                src={logo}
                alt=""
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="inline-block mb-4 md:mb-5">
          <p className="text-white rounded-full font-medium uppercase py-1.5 px-3 md:px-5 text-[10px] md:text-xs bg-gradient-to-r from-[#17D3FD]/20 to-[#CD3DFF]/20 border border-white/30 backdrop-blur-sm">
            SEMINAR NASIONAL TEKNIK INFORMATIKA 2025
          </p>
        </div>

        {/* Brain logo removed as requested to optimize space */}

        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-2.5 md:mb-4 font-stormfaze leading-tight">
          <span className="text-gradient-gray">SEMNASTI 2025</span>
        </h1>

        <p className="text-sm md:text-base lg:text-lg text-white/90 font-light mb-1.5 md:mb-2.5">
          Smart Living With AI Real Tech For Real Life
        </p>

        <p className="hidden md:block text-base lg:text-lg max-w-xl lg:max-w-2xl mx-auto text-center text-white/80 mb-3 md:mb-5 px-4">
          Membangun Masa Depan Dengan Menembus Batas, Berinovasi Dengan AI.
        </p>

        {/* Countdown moved up to ensure visibility within hero */}
        <CountdownTimer />

        <div className="flex flex-row flex-wrap justify-center gap-2.5 md:gap-3.5 mt-4 md:mt-5">
          <Link
            href="/registration"
            className="px-4 md:px-5 py-1.5 md:py-2 bg-gradient-to-r from-[#17D3FD] to-[#CD3DFF] hover:opacity-90 rounded-full font-bold transition-all transform hover:scale-[1.02] shadow-lg shadow-[#17D3FD]/30 text-sm md:text-base"
          >
            DAFTAR SEKARANG
          </Link>
        </div>
      </div>
    </section>
  );
}
