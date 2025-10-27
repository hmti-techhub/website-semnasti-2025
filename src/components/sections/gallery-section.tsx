'use client';

export default function GallerySection() {
  return (
    <section className="relative z-10 scroll-mt-24 px-6 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 md:mb-10 font-stormfaze">
          <span className="text-gradient-gray">GALLERY</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#17D3FD]/10 to-[#CD3DFF]/10 hover:border-white/30 transition-all duration-300 group"
            >
              <div className="w-full h-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/50 group-hover:text-white/70 transition-all">
                <span className="text-xs md:text-sm lg:text-base">Gallery {i}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
