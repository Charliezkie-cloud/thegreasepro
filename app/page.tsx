/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
"use client"

import { motion, AnimatePresence } from 'motion/react';

import Navbar from '@/components/layouts/Navbar';
import Hero from '@/components/Hero';
import BookingForm from '@/components/forms/BookingForm';
import Stats from '@/components/Stats';
import Footer from '@/components/layouts/Footer';

export default function App() {
  return (
    <AnimatePresence>
      <div className="relative">
        <Navbar />
        <main>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Hero />
            <BookingForm />
            <Stats />
          </motion.div>
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}
