'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const faqs = [
  { question: 'Apa itu Semnasti?', answer: 'Semnasti adalah Seminar Nasional Teknik Informatika yang diselenggarakan oleh HMTI UDINUS.' },
  { question: 'Kapan acara dilaksanakan?', answer: 'Acara akan dilaksanakan pada Sabtu, 8 November 2025.' },
  { question: 'Dimana lokasi acara?', answer: 'Acara akan dilaksanakan di E.3 TVKU UDINUS, Universitas Dian Nuswantoro.' },
  { question: 'Bagaimana cara mendaftar?', answer: 'Anda dapat mendaftar melalui tombol "Daftar Sekarang" di bagian atas halaman.' },
];

export default function InformationSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="informasi" className="relative z-10 scroll-mt-24 px-6 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 md:mb-10 font-stormfaze">
          <span className="text-gradient-gray">INFORMASI</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3 md:gap-4 bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/30 transition-all">
              <FaCalendarAlt className="text-2xl md:text-3xl text-[#17D3FD] flex-shrink-0" />
              <div>
                <p className="text-xs md:text-sm text-white/70">Sabtu, 28 - 29 November 2025</p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4 bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/30 transition-all">
              <FaUsers className="text-2xl md:text-3xl text-[#CD3DFF] flex-shrink-0" />
              <div>
                <p className="font-bold text-sm md:text-base">H.1 GALLERY & E.3 TVKU UDINUS</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#17D3FD]/20 to-[#CD3DFF]/20 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-xl md:text-2xl text-[#17D3FD] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold mb-2 text-sm md:text-base">UNIVERSITAS DIAN NUSWANTORO</p>
                  <p className="text-xs md:text-sm text-white/80">
                    Jl. Imam Bonjol No.207, Pendrikan Kidul, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50131
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-xl">
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-lg md:text-xl text-white/50">Map Placeholder</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-8 md:mt-12 space-y-3 md:space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl border border-white/10 overflow-hidden hover:border-white/30 transition-all"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full p-4 md:p-6 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-all"
              >
                <p className="font-medium text-left text-sm md:text-base">{faq.question}</p>
                <IoIosArrowDown 
                  className={`text-xl md:text-2xl transition-transform duration-300 flex-shrink-0 ml-4 ${
                    activeIndex === i ? 'rotate-180 text-[#17D3FD]' : ''
                  }`} 
                />
              </button>
              {activeIndex === i && (
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-white/70 text-xs md:text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
