'use client';

import React, { useState, useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Photo {
  filename: string;
  category: string;
}

export default function GalleryPage() {
  const [index, setIndex] = useState(-1);
  const [images, setImages] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/images')
      .then(res => res.json())
      .then(data => {
        setImages(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error fetching images:', err);
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-bg">
      <Nav />
      
      <section className="pt-48 pb-24 text-center">
        <span className="font-mono text-accent text-xs tracking-[0.4em] uppercase mb-6 block">Visual Journey</span>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light mb-8">Through the Lens</h1>
        <div className="flex justify-center gap-8">
          <a 
            href="https://instagram.com/themazebistrombuya" 
            target="_blank" 
            className="font-mono text-accent text-sm tracking-widest hover:underline"
          >
            @INSTAGRAM
          </a>
          <span className="text-muted">|</span>
          <span className="font-mono text-accent text-sm tracking-widest">
            GOOGLE MAPS CONTRIBUTIONS
          </span>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 pb-48">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-t-2 border-accent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {images.slice(0, 22).map((image, i) => (
              <motion.div
                key={image.filename + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                className="relative group cursor-pointer overflow-hidden"
                onClick={() => setIndex(i)}
              >
                <Image
                  src={image.filename}
                  alt={`The Maze Bistro Gallery ${i}`}
                  width={500}
                  height={700}
                  className="w-full h-auto object-cover transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-bg/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 border border-accent rounded-full flex items-center justify-center text-accent">
                    <span className="text-2xl font-light">+</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images.slice(0, 22).map(img => ({ src: img.filename }))}
      />

      <Footer />
    </main>
  );
}
