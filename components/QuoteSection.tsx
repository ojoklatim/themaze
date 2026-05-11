'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function QuoteSection() {
  return (
    <section className="py-32 bg-surface overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="font-mono text-accent text-[10px] tracking-[0.5em] uppercase mb-12 block">Philosophy of Flavor</span>
          <p className="font-serif text-3xl md:text-5xl lg:text-6xl font-light italic leading-snug max-w-4xl mx-auto text-white">
            "Cooking is an art, but all art requires knowing something about the techniques and materials."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
