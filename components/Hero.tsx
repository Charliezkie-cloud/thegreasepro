import { motion } from 'motion/react';
import Image from 'next/image';

import HeroBackground from "@/public/hero-background.jpg";

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={HeroBackground} alt='Dark SUV Background' className="w-full h-full object-cover brightness-[0.3]" />
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
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(243, 112, 33, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary-container text-white px-10 py-4 font-display font-bold uppercase tracking-widest text-sm transition-colors"
            >
              Our Expertise
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
