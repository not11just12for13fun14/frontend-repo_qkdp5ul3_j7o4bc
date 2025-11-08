import React from 'react';
import { Sparkles, Wrench } from 'lucide-react';

const tools = [
  { name: 'Adobe Photoshop' },
  { name: 'Adobe Premiere Pro' },
  { name: 'DaVinci Resolve' },
  { name: 'Lightroom' },
  { name: 'CapCut' },
];

const About = () => {
  return (
    <section id="about" className="relative bg-neutral-950 text-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-semibold">Tentang Saya</h2>
            <p className="mt-4 text-white/80 leading-relaxed">Hai! Aku Raka, siswa SMA yang suka bercerita lewat gambar dan suara. Aku menikmati proses menangkap emosi, warna, dan ritme untuk membuat cerita sederhana jadi berkesan. Di luar layar, aku suka musik lo-fi, sepeda sore, dan kopi susu.</p>
            <div className="mt-6">
              <div className="flex items-center gap-2 text-teal-300">
                <Wrench size={18} />
                <span className="font-medium">Tools</span>
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <li key={t.name} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/90">{t.name}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex items-center gap-2 text-amber-300">
              <Sparkles size={18} />
              <p className="text-sm text-white/80">Targetku sederhana: karya yang jujur, rapi, dan menyenangkan untuk dilihat.</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-square w-full max-w-sm mx-auto overflow-hidden rounded-2xl border border-white/10 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&w=1200&auto=format&fit=crop"
                alt="Potret Raka"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;