'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Menu', href: '/menu' },
  { name: 'Branches', href: '/branches' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Reserve', href: '/reservations' },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6',
          isScrolled 
            ? 'bg-bg/95 backdrop-blur-md py-4 border-b border-white/5' 
            : 'bg-transparent'
        )}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="group">
            <span className="font-serif text-2xl tracking-[0.2em] uppercase transition-colors duration-300 group-hover:text-accent">
              THE MAZE
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-sans tracking-widest uppercase text-muted hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              href="/reservations"
              className="px-6 py-2 border border-accent text-accent text-xs tracking-widest uppercase hover:bg-accent hover:text-bg transition-all duration-300"
            >
              Reserve a Table
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-text p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-bg flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-serif text-xl tracking-[0.2em] uppercase">
                THE MAZE
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-text"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col space-y-8 mt-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-serif tracking-wide hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/reservations"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block mt-8 px-8 py-3 border border-accent text-accent text-sm tracking-widest uppercase hover:bg-accent hover:text-bg transition-all duration-300"
                >
                  Reserve a Table
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
