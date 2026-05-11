'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

interface AboutProps {
  image?: string;
}

export default function About({ image = '/images/placeholder-about.jpg' }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 md:py-48 bg-bg overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 relative group"
          >
            <div className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden">
              <Image
                src={image}
                alt="The Maze Bistro Ambiance"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 border-l-[4px] border-accent pointer-events-none" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-surface -z-10" />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <span className="font-mono text-accent text-xs tracking-widest uppercase mb-6 block">
              OUR PHILOSOPHY
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              Food is not just sustenance — <br />
              <span className="italic font-light text-muted">it&apos;s architecture.</span>
            </h2>
            <p className="font-sans text-muted text-lg leading-relaxed mb-10">
              The Maze Bistro is a sanctuary of culinary craft. We believe in the precision of flavors, the elegance of presentation, and the soulful connection between plate and person. Our spaces in Mbuya and Bugolobi are designed to be stages for unforgettable moments.
            </p>
            
            <hr className="border-border-custom mb-10" />
            
            <div className="flex gap-16">
              <div>
                <span className="font-serif text-3xl block mb-1">2</span>
                <span className="font-sans text-xs tracking-widest uppercase text-muted">Locations</span>
              </div>
              <div>
                <span className="font-serif text-3xl block mb-1">5★</span>
                <span className="font-sans text-xs tracking-widest uppercase text-muted">Guest Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
