'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, X } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg pt-32 pb-12 border-t border-border-custom">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="font-serif text-2xl tracking-[0.2em] uppercase block mb-6">
              THE MAZE BISTRO
            </Link>
            <p className="font-sans text-muted text-sm leading-relaxed mb-8">
              Understated luxury. Culinary precision. <br />
              The pinnacle of dining in Kampala.
            </p>
            <div className="flex gap-4">
              <Link href="https://instagram.com/themazebistrombuya" className="text-muted hover:text-accent transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-muted hover:text-accent transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-muted hover:text-accent transition-colors">
                <X size={20} />
              </Link>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-text mb-8">Navigate</h4>
            <ul className="space-y-4">
              {['Home', 'Menu', 'Branches', 'Gallery', 'Reserve'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="font-sans text-sm text-muted hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mbuya Branch */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-text mb-8">Mbuya Branch</h4>
            <p className="font-sans text-sm text-muted leading-relaxed mb-4">
              Mbuya Hill Road,<br />
              Kampala, Uganda
            </p>
            <p className="font-sans text-sm text-muted mb-4">+256 700 000000</p>
            <p className="font-sans text-xs text-muted/60 uppercase tracking-tighter">Mon–Sun, 11 AM – 11 PM</p>
          </div>

          {/* Lugogo Branch */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-text mb-8">Lugogo Branch</h4>
            <p className="font-sans text-sm text-muted leading-relaxed mb-4">
              Forest Mall, Lugogo<br />
              Kampala, Uganda
            </p>
            <p className="font-sans text-sm text-muted mb-4">+256 700 000000</p>
            <p className="font-sans text-xs text-muted/60 uppercase tracking-tighter">Mon–Sun, 11 AM – 11 PM</p>
          </div>
        </div>

        <div className="pt-12 border-t border-border-custom flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[10px] tracking-widest uppercase text-muted">
            © 2025 THE MAZE BISTRO · KAMPALA, UGANDA
          </p>
          <div className="flex gap-8">
            <Link href="#" className="font-mono text-[10px] tracking-widest uppercase text-muted hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="font-mono text-[10px] tracking-widest uppercase text-muted hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
