import React from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { getInstagramImages } from '@/lib/images';

const branches = [
  {
    id: "mbuya",
    name: "The Maze Bistro",
    address: "Mbuya Hill, Kampala",
    hours: "Mon–Sun, 11:00 AM – 11:00 PM",
    phone: "+256 700 000000",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7561666470697!2d32.63059787669271!3d0.3198122640170435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db9cf53b04123%3A0xe3f5cec879e80a78!2sThe%20Maze%20Bistro!5e0!3m2!1sen!2snl!4v1778517959212!5m2!1sen!2snl"
  },
  {
    id: "lugogo",
    name: "The Maze Restaurant & Lounge",
    address: "Forest Mall, Lugogo, Kampala",
    hours: "Mon–Sun, 11:00 AM – 11:00 PM",
    phone: "+256 700 000001",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7527005754346!2d32.603097476692604!3d0.32860866400349903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbbef6ed5043%3A0xbbfbf4bf59ea64d0!2sThe%20Maze%20Restaurant%20%26%20Lounge!5e0!3m2!1sen!2snl!4v1778517867323!5m2!1sen!2snl"
  }
];

export default function BranchesPage() {
  const images = getInstagramImages();

  return (
    <main className="min-h-screen bg-bg">
      <Nav />
      
      <section className="pt-48 pb-24 text-center">
        <span className="font-mono text-accent text-xs tracking-[0.4em] uppercase mb-6 block">Our Locations</span>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light">Find Us</h1>
      </section>

      {branches.map((branch, i) => (
        <section key={branch.id} className="min-h-[80vh] flex flex-col lg:flex-row">
          <div className={i % 2 === 0 ? "lg:w-1/2 order-1 lg:order-1" : "lg:w-1/2 order-1 lg:order-2"}>
            <div className="relative h-full min-h-[400px]">
              <Image
                src={branch.id === 'mbuya' 
                  ? "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEb3vvDl_3Z2VpkwP2bm5I3FFbQSHHeNlTug5QP4E3F4NinS1k9CQ857iWeG4rMmPiwI2NFdGeJWVcXiQXmU2ts8_DD_hKPnN9uFF499ApJA6V0tTJQ0bX0y4bnDIShtqutLeur=s680-w680-h510-rw"
                  : "https://lh3.googleusercontent.com/p/AF1QipNgjoalfVBcfH2ZQU_-ZibSHYdV3hUJNwltwmJK=s1200"
                }
                alt={branch.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className={i % 2 === 0 ? "lg:w-1/2 order-2 lg:order-2 bg-surface p-12 md:p-24 flex flex-col justify-center" : "lg:w-1/2 order-2 lg:order-1 bg-surface p-12 md:p-24 flex flex-col justify-center"}>
            <span className="font-mono text-accent text-xs tracking-widest uppercase mb-8 block">Branch 0{i + 1}</span>
            <h2 className="font-serif text-4xl md:text-6xl mb-8">{branch.name}</h2>
            
            <div className="space-y-6 mb-12">
              <div>
                <p className="font-mono text-[10px] tracking-widest uppercase text-muted mb-1">Address</p>
                <p className="font-sans text-xl">{branch.address}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest uppercase text-muted mb-1">Hours</p>
                <p className="font-sans text-xl">{branch.hours}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest uppercase text-muted mb-1">Contact</p>
                <p className="font-sans text-xl">{branch.phone}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="/reservations" 
                className="px-8 py-3 bg-accent text-bg uppercase text-xs tracking-widest hover:bg-accent-dim transition-all text-center"
              >
                Reserve at this branch
              </a>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-white/20 uppercase text-xs tracking-widest hover:border-accent transition-all text-center"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </section>
      ))}

      {/* Photo Highlights Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div>
              <span className="font-mono text-accent text-xs tracking-widest uppercase mb-4 block">Branch Moments</span>
              <h2 className="font-serif text-5xl md:text-7xl">Through the eyes <br /> of our guests.</h2>
            </div>
            <p className="max-w-md text-muted font-sans text-lg">A collection of moments captured by our visitors at Mbuya and Lugogo Forest Mall.</p>
          </div>

          <div className="flex overflow-x-auto gap-4 pb-8 scrollbar-hide">
            {images.filter(img => img.filename.includes('user-added')).map((img, i) => (
              <div key={i} className="min-w-[300px] md:min-w-[450px] aspect-[4/3] relative transition-all duration-500 cursor-crosshair">
                <Image
                  src={img.filename}
                  alt="Guest photo"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section className="py-24 bg-bg">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {branches.map((branch) => (
            <div key={branch.id} className="h-[400px] bg-surface rounded-sm overflow-hidden transition-all duration-700">
              <iframe
                src={branch.map}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
