import React from 'react';
import { Camera, GalleryHorizontal, User, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur border-b border-white/10">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between text-white">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-wide">
          <Camera size={20} />
          <span>Raka Studio</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="text-white/80 hover:text-white transition">Tentang</a>
          <a href="#portfolio" className="text-white/80 hover:text-white transition">Portofolio</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Kontak</a>
        </nav>
        <a href="#portfolio" className="md:hidden rounded-full bg-teal-400 px-3 py-1.5 text-xs font-medium text-black transition hover:bg-teal-300">Lihat Karya</a>
      </div>
    </header>
  );
};

export default Navbar;