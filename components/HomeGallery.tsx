'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Photo {
  filename: string;
  category: string;
}

export default function HomeGallery() {
  const [allImages, setAllImages] = useState<Photo[]>([]);
  
  useEffect(() => {
    fetch('/api/images')
      .then(res => res.json())
      .then(data => setAllImages(data));
  }, []);

  return (
    <section className="py-24 bg-bg">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16">
          <span className="font-mono text-accent text-xs tracking-widest uppercase mb-4 block">Visual Diary</span>
          <h2 className="font-serif text-5xl md:text-7xl">Experience <br /> <span className="italic">The Atmosphere.</span></h2>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {allImages.slice(0, 6).map((image, i) => (
            <motion.div
              key={image.filename + i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
              className="relative overflow-hidden"
            >
              <Image
                src={image.filename}
                alt="Atmosphere"
                width={600}
                height={800}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
