import { Phone, Menu } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b-2 border-primary-container">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black text-white italic tracking-tighter hover:text-primary-container transition-colors cursor-pointer flex items-center gap-1">
          <span>THE<span className="text-primary-container">GREASE</span>PRO</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['Services', 'Booking', 'Expertise', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-xs font-label font-bold uppercase tracking-widest transition-all ${item === 'Booking' ? 'text-primary-container border-b-2 border-primary-container pb-1' : 'text-zinc-400 hover:text-primary-container'
                }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary-container" />
            <span className="text-white font-label font-bold text-xs tracking-widest">800-GREASE-PRO</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-gradient text-white px-6 py-2.5 font-display font-bold uppercase tracking-widest text-xs industrial-border shadow-lg shadow-primary-container/20"
          >
            Book Now
          </motion.button>
          <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
