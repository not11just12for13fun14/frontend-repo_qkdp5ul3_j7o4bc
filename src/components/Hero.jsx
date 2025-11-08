import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 pointer-events-none" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl text-white">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wider backdrop-blur">Foto & Video Editor</span>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">Halo, saya <span className="text-teal-300">Raka</span></h1>
            <p className="mt-3 text-base text-white/80 md:text-lg">Siswa SMA yang jatuh cinta pada cerita visual. Mengabadikan momen jadi karya yang sederhana, jujur, dan berkesan.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#portfolio" className="rounded-full bg-teal-400 px-5 py-2 text-sm font-medium text-black transition hover:bg-teal-300">Lihat Karya</a>
              <a href="#contact" className="rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10">Kontak</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;