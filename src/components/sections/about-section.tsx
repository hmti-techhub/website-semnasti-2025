"use client";

export default function AboutSection() {
  return (
    <section
      id="tentang"
      className="relative z-10 scroll-mt-24 px-6 py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 md:mb-10 font-akira">
          <span className="text-gradient-gray">TENTANG SEMNASTI?</span>
        </h2>

        <div className="bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-white/10 shadow-2xl">
          <p className="text-sm md:text-base leading-relaxed text-white/90">
            Seminar Nasional Teknik Informatika (SEMNASTI) adalah acara tahunan
            yang diselenggarakan oleh Himpunan Mahasiswa Teknik Informatika
            (HMTI) Universitas Dian Nuswantoro (UDINUS) Semarang. Kegiatan ini
            bertujuan memberikan wawasan terbaru tentang perkembangan teknologi,
            khususnya Artificial Intelligence (AI), serta menjadi ajang
            bertemunya mahasiswa, akademisi, dan praktisi industri. Tahun ini,
            SEMNASTI mengangkat tema “Smart Living with AI: Real Tech for Real
            Life”, yang menyoroti penerapan nyata AI dalam kehidupan
            sehari-hari.
          </p>
        </div>
      </div>
    </section>
  );
}
