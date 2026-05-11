'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  backgroundImage?: string;
}

export default function Hero({ backgroundImage = '/images/placeholder-hero.jpg' }: HeroProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={backgroundImage}
          alt="The Maze Bistro"
          fill
          priority
          className="object-cover"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/30 via-bg/60 to-bg" />
        <div className="noise-overlay" />
      </motion.div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <span className="font-mono text-accent text-xs tracking-[0.4em] uppercase">
            EST. KAMPALA · UGANDA
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-light mb-8 leading-[1.1] text-balance"
        >
          Where Every Meal <br />
          <span className="italic">Tells a Story.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          Fine dining at Mbuya & Lugogo Forest Mall
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/menu"
            className="px-10 py-4 bg-accent text-bg font-sans text-xs tracking-widest uppercase hover:bg-accent-dim transition-all duration-300 w-full sm:w-auto"
          >
            View Menu
          </Link>
          <Link
            href="/branches"
            className="px-10 py-4 border border-white/20 text-text font-sans text-xs tracking-widest uppercase hover:border-accent transition-all duration-300 w-full sm:w-auto"
          >
            Find Us
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase text-muted rotate-90">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
