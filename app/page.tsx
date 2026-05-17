"use client"

import { motion } from 'motion/react';
import Image from 'next/image';

import BookingForm from '@/components/forms/BookingForm';
import HeroBackground from "@/public/hero-background.jpg";

const stats = [
  { value: '12k+', label: 'Oil Changes Completed' },
  { value: '4.9/5', label: 'Customer Satisfaction' },
  { value: '24/7', label: 'Support Response' },
  { value: '100%', label: 'Tool Precision Grade' },
];

export default function App() {
  return (
    <main>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>

        {/* Hero section */}
        <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src={HeroBackground} loading='eager' alt='Dark SUV Background' className="w-full h-full object-cover brightness-[0.3]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#131313] via-transparent to-transparent opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent opacity-60"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-0.5 w-12 bg-primary-container"></div>
                <span className="font-label text-primary-container uppercase tracking-[0.3em] text-[10px] font-bold">
                  Precision Mobile Engineering
                </span>
                <div className="h-0.5 w-12 bg-primary-container"></div>
              </div>

              <h1 className="font-display text-5xl md:text-7xl text-white mb-6 uppercase leading-[1.1] tracking-tight">
                PREMIUM CARE AT <br />
                <span className="text-primary-container">YOUR DOORSTEP</span>
              </h1>

              <p className="font-sans text-lg text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
                Professional-grade maintenance delivered directly to your location. No waiting rooms, no hassle—only mechanical perfection for your performance vehicle.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="button-gradient text-white px-10 py-4 font-display font-bold uppercase tracking-widest text-sm industrial-border"
                  href="#booking"
                >
                  Schedule Now
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(243, 112, 33, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  href='/services'
                  className="border-2 border-primary-container text-white px-10 py-4 font-display font-bold uppercase tracking-widest text-sm transition-colors"
                >
                  Our Services
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        <BookingForm />

        {/* Stats section */}
        <section className="py-24 bg-surface-container-lowest border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="font-display text-4xl md:text-5xl text-primary-container mb-3 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                    {stat.value}
                  </div>
                  <div className="font-label text-[10px] md:text-xs text-on-surface-variant uppercase tracking-[0.2em] font-bold">
                    {stat.label}
                  </div>
                  <div className="mt-4 flex justify-center">
                    <div className="h-0.5 w-8 bg-outline-variant/30 group-hover:w-16 group-hover:bg-primary-container transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </main>
  );
}
