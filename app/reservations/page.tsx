'use client';

import React, { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

export default function ReservationsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-bg">
      <Nav />
      
      <section className="pt-48 pb-32">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="font-mono text-accent text-xs tracking-[0.4em] uppercase mb-6 block">Secure Your Experience</span>
            <h1 className="font-serif text-6xl md:text-8xl font-light">Reserve Your Table</h1>
          </div>

          <div className="bg-surface p-8 md:p-16 border border-border-custom relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] tracking-widest uppercase text-muted">Full Name</label>
                      <input 
                        required 
                        type="text" 
                        className="w-full bg-transparent border-b border-border-custom py-3 focus:border-accent outline-none font-sans transition-colors" 
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] tracking-widest uppercase text-muted">Email Address</label>
                      <input 
                        required 
                        type="email" 
                        className="w-full bg-transparent border-b border-border-custom py-3 focus:border-accent outline-none font-sans transition-colors" 
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] tracking-widest uppercase text-muted">Branch</label>
                      <select className="w-full bg-transparent border-b border-border-custom py-3 focus:border-accent outline-none font-sans appearance-none transition-colors">
                        <option className="bg-surface">Mbuya</option>
                        <option className="bg-surface">Lugogo Forest Mall</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] tracking-widest uppercase text-muted">Date</label>
                      <input 
                        required 
                        type="date" 
                        className="w-full bg-transparent border-b border-border-custom py-3 focus:border-accent outline-none font-sans transition-colors" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] tracking-widest uppercase text-muted">Time</label>
                      <select className="w-full bg-transparent border-b border-border-custom py-3 focus:border-accent outline-none font-sans appearance-none transition-colors">
                        {["12:00 PM", "1:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"].map(t => (
                          <option key={t} className="bg-surface">{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] tracking-widest uppercase text-muted">Guests</label>
                      <input 
                        required 
                        type="number" 
                        min="1" 
                        max="20" 
                        className="w-full bg-transparent border-b border-border-custom py-3 focus:border-accent outline-none font-sans transition-colors" 
                        defaultValue="2"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] tracking-widest uppercase text-muted">Phone Number</label>
                      <input 
                        required 
                        type="tel" 
                        className="w-full bg-transparent border-b border-border-custom py-3 focus:border-accent outline-none font-sans transition-colors" 
                        placeholder="+256 ..."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-[10px] tracking-widest uppercase text-muted">Special Requests</label>
                    <textarea 
                      rows={3} 
                      className="w-full bg-transparent border-b border-border-custom py-3 focus:border-accent outline-none font-sans transition-colors resize-none" 
                      placeholder="Dietary requirements, occasion, etc."
                    />
                  </div>

                  <button 
                    disabled={isLoading}
                    className="w-full py-5 bg-accent text-bg font-sans text-sm tracking-[0.3em] uppercase hover:bg-accent-dim transition-all disabled:opacity-50"
                  >
                    {isLoading ? "Processing..." : "Confirm Reservation"}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center"
                >
                  <div className="w-20 h-20 border border-accent rounded-full flex items-center justify-center mx-auto mb-8 text-accent">
                    <Check size={40} />
                  </div>
                  <h3 className="font-serif text-4xl mb-4">Reservation Received</h3>
                  <p className="font-sans text-muted mb-12">We have sent a confirmation email to your address. <br />See you soon at The Maze Bistro.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="font-mono text-xs tracking-widest uppercase border-b border-accent pb-1 text-accent"
                  >
                    Make another booking
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
