import React from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import MenuPreview from '@/components/MenuPreview';
import Footer from '@/components/Footer';
import HomeGallery from '@/components/HomeGallery';
import QuoteSection from '@/components/QuoteSection';
import { getInstagramImages } from '@/lib/images';
import Image from 'next/image';

export default function Home() {
  const images = getInstagramImages();

  const heroImage = "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEb3vvDl_3Z2VpkwP2bm5I3FFbQSHHeNlTug5QP4E3F4NinS1k9CQ857iWeG4rMmPiwI2NFdGeJWVcXiQXmU2ts8_DD_hKPnN9uFF499ApJA6V0tTJQ0bX0y4bnDIShtqutLeur=s680-w680-h510-rw";
  const aboutImage = "/images/google-maps/user-added-005.jpg";
  
  const menuItems = [
    {
      name: "Tilapia Fillet",
      description: "Pan-seared tilapia, creamy spinach sauce.",
      price: "42k",
      image: "https://lh3.googleusercontent.com/p/AF1QipNgjoalfVBcfH2ZQU_-ZibSHYdV3hUJNwltwmJK=s1200"
    },
    {
      name: "The Maze Burger",
      description: "Aged beef, caramelized onions, truffle mayo, brioche bun.",
      price: "38k",
      image: "https://lh3.googleusercontent.com/p/AF1QipP4ROqgqB6AWzGdxEzKgrOOANiSTZpeC-WbHj7b=s1200"
    },
    {
      name: "Passion Fruit Martini",
      description: "Fresh Ugandan passion fruit, premium vodka, lime zest.",
      price: "25k",
      image: "/images/google-maps/user-added-009.jpg"
    },
    {
      name: "Slow Roasted Goat",
      description: "Traditional local flavors, contemporary technique, kachumbari.",
      price: "42k",
      image: "/images/google-maps/user-added-010.jpg"
    },
    {
      name: "Truffle Fries",
      description: "Hand-cut potatoes, parmesan, parsley, truffle oil.",
      price: "18k",
      image: "/images/google-maps/user-added-011.jpg"
    },
    {
      name: "Chocolate Lava Cake",
      description: "Rich dark chocolate, vanilla bean ice cream, berry compote.",
      price: "22k",
      image: "/images/google-maps/user-added-012.jpg"
    }
  ];

  return (
    <main className="min-h-screen">
      <Nav />
      <Hero backgroundImage={heroImage} />
      <Marquee />
      <About image={aboutImage} />
      
      <HomeGallery />

      <QuoteSection />

      <MenuPreview items={menuItems} />

      {/* Reservations Section */}
      <section className="py-24 bg-bg border-y border-border-custom">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <span className="font-mono text-accent text-xs tracking-widest uppercase mb-4 block">Table for Two?</span>
            <h2 className="font-serif text-5xl mb-6 text-white">Plan Your Visit</h2>
            <p className="font-sans text-muted text-lg leading-relaxed mb-8">
              Whether it's an intimate dinner, a business luncheon, or a celebratory gathering, our team ensures every detail is perfect. We recommend booking in advance to secure your preferred time at our Mbuya or Lugogo locations.
            </p>
            <a href="/reservations" className="inline-block px-10 py-4 bg-accent text-bg font-sans text-xs tracking-widest uppercase hover:bg-accent-dim transition-all">Make a Reservation</a>
          </div>
          <div className="md:w-1/2 relative aspect-[4/5] w-full max-w-md mx-auto">
            <Image 
              src="/images/google-maps/user-added-015.jpg" 
              alt="Reservations" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Branches CTA Section */}
      <section className="py-32 bg-surface text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-accent text-xs tracking-widest uppercase mb-8 block">Experience Us</span>
          <h2 className="font-serif text-5xl md:text-7xl mb-12 text-white">Visit our branches in <br /><span className="italic">Mbuya & Lugogo.</span></h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="/branches" className="px-12 py-4 border border-accent text-accent uppercase text-xs tracking-widest hover:bg-accent hover:text-bg transition-all">Explore Locations</a>
            <a href="/gallery" className="px-12 py-4 bg-accent text-bg uppercase text-xs tracking-widest hover:bg-accent-dim transition-all">View Our Gallery</a>
          </div>
        </div>
      </section>

      {/* Social Connect Section */}
      <section className="py-24 bg-bg border-t border-border-custom">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="font-mono text-accent text-[10px] tracking-[0.5em] uppercase mb-8 block">Stay Connected</span>
          <h2 className="font-serif text-4xl md:text-6xl mb-12 text-white">Join our story on <br /> <span className="italic">social media.</span></h2>
          <div className="flex flex-wrap justify-center gap-12">
            <a href="https://instagram.com/themazebistrombuya" target="_blank" className="group">
              <span className="font-mono text-xs tracking-widest uppercase text-muted group-hover:text-accent transition-colors">Instagram</span>
              <div className="h-[1px] w-0 group-hover:w-full bg-accent transition-all duration-300" />
            </a>
            <a href="#" className="group">
              <span className="font-mono text-xs tracking-widest uppercase text-muted group-hover:text-accent transition-colors">Facebook</span>
              <div className="h-[1px] w-0 group-hover:w-full bg-accent transition-all duration-300" />
            </a>
            <a href="#" className="group">
              <span className="font-mono text-xs tracking-widest uppercase text-muted group-hover:text-accent transition-colors">Twitter (X)</span>
              <div className="h-[1px] w-0 group-hover:w-full bg-accent transition-all duration-300" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
