import React from 'react';
import { Mail, Instagram, Youtube, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-neutral-950 text-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold">Kontak</h2>
          <p className="mt-2 text-white/70">Terbuka untuk proyek foto, video, atau kolaborasi. Kirim pesan kapan saja!</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a href="mailto:raka.edit@example.com" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <Mail />
              <div>
                <p className="text-sm text-white/60">Email</p>
                <p className="font-medium">raka.edit@example.com</p>
              </div>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <Instagram />
              <div>
                <p className="text-sm text-white/60">Instagram</p>
                <p className="font-medium">@raka.edit</p>
              </div>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <Youtube />
              <div>
                <p className="text-sm text-white/60">YouTube</p>
                <p className="font-medium">Raka Visuals</p>
              </div>
            </a>
            <a href="#home" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <Send />
              <div>
                <p className="text-sm text-white/60">DM</p>
                <p className="font-medium">Siap bales cepat</p>
              </div>
            </a>
          </div>

          <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Raka Studio — Dibangun simpel, cepat, dan ringan.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;