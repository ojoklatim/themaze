'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface MenuPreviewProps {
  items: MenuItem[];
}

export default function MenuPreview({ items }: MenuPreviewProps) {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.name + i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <div className="relative aspect-square overflow-hidden group cursor-pointer">
                <Image
                  src={item.image}
                  alt="Menu highlight"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
