"use client"

import { Phone, Menu, X, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// const BUSINESS_NUMBER = process.env.NEXT_PUBLIC_BUSINESS_NUMBER ?? "";
const BUSINESS_EMAIL = process.env.NEXT_PUBLIC_BUSINESS_EMAIL ?? "";

const urls = [
  { name: "Booking", url: "/" },
  { name: "Services", url: "/services" },
  // { name: "Expertise", url: "/expertise" },
];

export default function Navbar() {
  // Hooks
  const pathname = usePathname();

  // States
  const [offcanvas, setOffcanvas] = useState(false);

  // Handlers
  function toggleOffcanvas() {
    setOffcanvas(prev => !prev);
  }

  return (
    <>
      {/* Desktop nav */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b-2 border-primary-container">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black text-white italic tracking-tighter hover:text-primary-container transition-colors cursor-pointer flex items-center gap-1">
            <span>THE<span className="text-primary-container">GREASE</span>PRO</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {urls.map((item, index) => {
              const currentPath = pathname;

              return (
                <a
                  key={`nav-url-${index}`}
                  href={item.url}
                  className={`text-xs font-label font-bold uppercase tracking-widest transition-all ${item.url === currentPath ? 'text-primary-container border-b-2 border-primary-container pb-1' : 'text-zinc-400 hover:text-primary-container'}`}
                >
                  {item.name}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary-container" />
              <span className="text-white font-label font-bold text-xs tracking-widest">{BUSINESS_EMAIL}</span>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block button-gradient text-white px-6 py-2.5 font-display font-bold uppercase tracking-widest text-xs industrial-border shadow-lg shadow-primary-container/20"
              href='/#booking'
            >
              Book Now
            </motion.a>
            <button className="lg:hidden text-white" onClick={toggleOffcanvas}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav offcanvas */}
      <div className={`fixed top-0 left-0 bottom-0 right-0 z-40 backdrop-blur-md transition-opacity duration-500 ease-in-out ${offcanvas ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} />
      <aside className={`fixed top-0 left-0 bottom-0 right-0 z-50 transition duration-500 ease-in-out ${offcanvas ? "" : "-translate-x-full"}`}>
        <div className='bg-black/100 border-primary-container w-96 h-screen flex flex-col'>
          <div className='p-6 inline-flex justify-between'>
            <div className="text-2xl font-black text-white italic tracking-tighter hover:text-primary-container transition-colors cursor-pointer flex items-center gap-1">
              <span>THE<span className="text-primary-container">GREASE</span>PRO</span>
            </div>
            <button className='text-white' onClick={toggleOffcanvas}><X/></button>
          </div>

          <nav className="flex flex-col items-start justify-center gap-8 p-6">
            {urls.map((item, index) => {
              const currentPath = pathname;

              return (
                <a
                  key={`nav-url-${index}`}
                  href={item.url}
                  className={`text-xs font-label font-bold uppercase tracking-widest transition-all ${item.url === currentPath ? 'text-primary-container border-b-2 border-primary-container pb-1' : 'text-zinc-400 hover:text-primary-container'}`}
                >
                  {item.name}
                </a>
              )
            })}
          </nav>

          <div className="flex flex-col items-start justify-center gap-6 p-6">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary-container" />
              <span className="text-white font-label font-bold text-xs tracking-widest">{BUSINESS_EMAIL}</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full button-gradient text-white px-6 py-2.5 font-display font-bold uppercase tracking-widest text-xs industrial-border shadow-lg shadow-primary-container/20"
            >
              Book Now
            </motion.button>
          </div>
        </div>
      </aside>
    </>
  );
}
