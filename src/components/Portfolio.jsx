import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const works = [
  {
    id: 1,
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    title: 'City Lights',
  },
  {
    id: 2,
    type: 'video',
    src: 'https://cdn.coverr.co/videos/coverr-video-of-the-earth-1617/1080p.mp4',
    title: 'Motion Reel',
  },
  {
    id: 3,
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1200&auto=format&fit=crop',
    title: 'Portrait Vibes',
  },
  {
    id: 4,
    type: 'video',
    src: 'https://cdn.coverr.co/videos/coverr-city-by-night-1578/1080p.mp4',
    title: 'Night Drive',
  },
  {
    id: 5,
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop',
    title: 'Golden Hour',
  },
  {
    id: 6,
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?q=80&w=1200&auto=format&fit=crop',
    title: 'Studio Mood',
  },
];

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const openPreview = (item) => {
    setActive(item);
    setOpen(true);
  };

  const closePreview = () => {
    setOpen(false);
    setActive(null);
  };

  return (
    <section id="portfolio" className="bg-neutral-950 text-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Portofolio</h2>
            <p className="mt-2 text-white/70">Kumpulan foto dan video favoritku.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {works.map((item) => (
            <button
              key={item.id}
              onClick={() => openPreview(item)}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              {item.type === 'photo' ? (
                <img src={item.src} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              ) : (
                <div className="relative h-full w-full">
                  <video className="h-full w-full object-cover" src={item.src} muted preload="metadata" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-black/50 p-3 text-white opacity-90">
                      <Play size={20} />
                    </div>
                  </div>
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="pointer-events-none absolute bottom-2 left-2 text-left">
                <p className="text-sm font-medium text-white drop-shadow">{item.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <button onClick={closePreview} className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20">
            <X size={18} />
          </button>
          <div className="max-w-5xl w-full">
            <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black">
              {active.type === 'photo' ? (
                <img src={active.src} alt={active.title} className="h-full w-full object-contain" />
              ) : (
                <video src={active.src} controls autoPlay className="h-full w-full object-contain" />
              )}
            </div>
            <p className="mt-3 text-center text-white/80">{active.title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;