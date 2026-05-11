'use client';

import React from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const menuData = [
  {
    category: "Starters",
    items: [
      { name: "The Maze Chicken Spring Rolls (4)", description: "Crispy fried rolls served with sweet chili sauce.", price: "22k" },
      { name: "Crispy Sesame Beef", description: "Fried beef tenderloin, sesame seeds, kaffir lime.", price: "39k" },
      { name: "Chicken Popcorn", description: "Crispy chicken cubes cooked to perfection.", price: "35k" },
      { name: "Crispy Onion Rings", description: "Crispy buttered onion rings, in-house spiced mayo.", price: "25k" },
      { name: "Chicken Nachos", description: "Shredded chicken cubes, tropical vegetables.", price: "30k" },
    ]
  },
  {
    category: "Soup",
    items: [
      { name: "Clear Chicken Soup", description: "Chef's Soup of the Day. Served with bread rolls & butter.", price: "18k" },
      { name: "Creamy Mushroom Soup", description: "Fresh homemade mushroom soup with bread rolls.", price: "20k" },
      { name: "Carrot & Pumpkin Soup", description: "Carrots, pumpkin, butter, two bread rolls.", price: "20k" },
      { name: "Clear Vegetable Soup", description: "Baby marrow, carrots, bell pepper, onions, tomatoes.", price: "18k" },
    ]
  },
  {
    category: "Salads",
    items: [
      { name: "Crispy Chicken Salad", description: "Crispy chicken fillet, cucumber, tomato, onion, egg, cheddar.", price: "34k" },
      { name: "Ceaser Salad", description: "Grilled chicken, croutons, hard boiled egg, parmesan.", price: "32k" },
      { name: "Bistecca", description: "Grilled chicken fillet, toasted cashews, mango slices, tomato.", price: "36k" },
      { name: "Avocado Salad", description: "Avocado slices, cucumber, mixed leaves & lemon dressing.", price: "32k" },
      { name: "Greek Salad", description: "Baby tomatoes, black olives, mint, cucumber, onions, feta.", price: "32k" },
    ]
  },
  {
    category: "Burgers & Sandwiches",
    items: [
      { name: "Maze's Cheese Burger", description: "200g beef patty, lettuce, tomato, onion, burger sauce, pickle.", price: "34k" },
      { name: "Chicken Hawaiian Burger", description: "Chicken, BBQ sauce, grilled pineapple, pickle, bacon, tomato.", price: "38k" },
      { name: "Super Maze Burger", description: "2 beef patties, fried egg, bacon, cheddar, onion rings.", price: "44k" },
      { name: "Monte Cristo Sandwich", description: "Sliced ham, bacon, cheese, bechamel sauce.", price: "30k" },
      { name: "Philly's Finest Cheese Steak", description: "Tender beef strips, green peppers, onions, beef jus, mozzarella.", price: "35k" },
    ]
  },
  {
    category: "Pastas & Pizzas",
    items: [
      { name: "Creamy Tuscan Chicken Pasta", description: "Chicken, spinach, creamy garlic parmesan sauce, penne.", price: "36k" },
      { name: "Pasta Carbonara", description: "Parmesan cream sauce, bacon, spaghetti pasta.", price: "36k" },
      { name: "BBQ Chicken Pizza", description: "Chicken breast, BBQ sauce, mozzarella cheese.", price: "32k" },
      { name: "Meaty Feast Pizza", description: "Beef sausages, beef strips, chicken cubes, tomato, mozzarella.", price: "36k" },
      { name: "Extra Supreme Beef Pizza", description: "Beef mince, onions, tomatoes, green peppers, black olives.", price: "39k" },
    ]
  },
  {
    category: "Mains (Chicken, Pork, Fish)",
    items: [
      { name: "Peri Peri Chicken", description: "Peri peri marinated chicken, salsa, plantains or fries.", price: "42k" },
      { name: "Chicken Casalinga", description: "Grilled chicken, fresh herbs, roasted garlic, baby potatoes.", price: "45k" },
      { name: "BBQ Pork Ribs", description: "Slow cooked pork ribs, glazed to perfection.", price: "48k" },
      { name: "Tilapia Fillet", description: "Pan-seared tilapia, creamy spinach sauce.", price: "42k" },
      { name: "Whole Tilapia", description: "Baked/Deep fried whole tilapia, vegetable sweet sauce.", price: "44k" },
      { name: "Salmon Fillet", description: "Pan-seared salmon fillet, creamy spinach sauce.", price: "62k" },
    ]
  },
  {
    category: "Goat & Steaks",
    items: [
      { name: "Oven Baked Goat Ribs", description: "Tendered goat ribs, recipes from the Far East, sweet chili sauce.", price: "48k" },
      { name: "Beef Steak Fillet", description: "Beef steak fillet, garlic and herb soy marinade, mushroom sauce.", price: "46k" },
      { name: "T-Bone Steak", description: "450g on-bone meat, grilled to perfection, grilled asparagus.", price: "56k" },
    ]
  },
  {
    category: "Asian Fusion",
    items: [
      { name: "Chicken Teriyaki", description: "Teriyaki chicken, white rice, steamed assorted veggies.", price: "44k" },
      { name: "Chicken Tikka Masala", description: "Marinated chicken tikka masala, white rice.", price: "40k" },
      { name: "Chicken Curry", description: "Slow cooked chicken in creamy coconut based curry sauce.", price: "38k" },
      { name: "Vegetable Curry", description: "Mixed veggies, curry, white rice and paneer.", price: "34k" },
    ]
  }
];

import Hero from '@/components/Hero';

// ... (menuData remains the same)

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-bg text-text text-white">
      <Nav />
      
      <Hero backgroundImage="https://lh3.googleusercontent.com/p/AF1QipNgjoalfVBcfH2ZQU_-ZibSHYdV3hUJNwltwmJK=s1200" />

      <section className="pt-24 pb-24 text-center">
        <span className="font-mono text-accent text-xs tracking-[0.4em] uppercase mb-6 block">Our Culinary Craft</span>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light mb-8">The Menu</h1>
        <p className="max-w-2xl mx-auto font-sans text-muted italic">
          A fusion of contemporary technique and traditional flavors, <br />
          sourced locally and prepared with precision.
        </p>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 pb-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24">
          {menuData.map((category, idx) => (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx % 2) * 0.1 }}
            >
              <h2 className="font-mono text-accent text-sm tracking-widest uppercase border-b border-accent/20 pb-4 mb-10">
                {category.category}
              </h2>
              <div className="space-y-10">
                {category.items.map((item) => (
                  <div key={item.name} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-serif text-2xl group-hover:text-accent transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex-grow border-b border-dotted border-accent/20 mx-4" />
                      <span className="font-mono text-lg text-accent">{item.price}</span>
                    </div>
                    <p className="font-sans text-muted text-sm max-w-[80%] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
