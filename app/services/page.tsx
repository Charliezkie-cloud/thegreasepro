"use client"

import { motion } from 'motion/react';
import { Droplet as Oil, Disc as Brake, Diamond, Wrench, ShieldCheck, Zap, Thermometer, Gauge } from 'lucide-react';
import Image from 'next/image';

import engineImage1 from "@/public/engine-1.jpg";
import engineImage2 from "@/public/engine-2.avif";
import engineImage3 from "@/public/engine-3.jpg";

const engineImages = [engineImage1, engineImage2, engineImage3];

const serviceCategories = [
  {
    id: 'oil-change',
    title: 'Full Synthetic Oil Change',
    icon: Oil,
    description: 'High-performance lubrication systems for demanding engines.',
    subDescription: "Premium oil + filter + full mobile experience",
    offerings: [
      { name: 'Compact Cars', price: 'From $125', features: ["Civic", 'Corolla'] },
      { name: 'Midsize Sedans', price: 'From $145', features: ['Camry', 'Accord'] },
      { name: 'Small SUVS', price: 'From $165', features: ['CR-V', 'RAV4'] },
      { name: 'Full-size SUVS/Trucks', price: 'From $185', features: ['F-150', 'Silverado'] }
    ]
  },
  {
    id: 'autocare-services',
    title: 'Autocare Services',
    icon: Brake,
    description: 'Expert installation of essential components to maintain vehicle integrity.',
    offerings: [
      { name: 'Tire Rotation', price: 'Starting at $40', features: ['Even Wear', 'Pressure Check'] },
      { name: 'Brake Pad Replacement', price: 'Starting at $150', features: ['Front Axle', 'Rear Axle'] },
      { name: 'Status Replacement', price: 'Starting at $250', features: ['Improve ride comfort & safety'] }
    ]
  },
  {
    id: 'luxury-care',
    title: 'Luxury & European Vehicles',
    icon: Diamond,
    description: 'Specialized maintenance for elite European and performance marques.',
    subDescription: "OEM-SPEC oil & high-performance filters",
    offerings: [
      { name: 'Luxury Sedans', price: 'From $185', features: ['BMW, Mercedes-Benz, Audi, Lexus'] },
      { name: 'Luxury SUVS / Performance', price: 'From $205 to $245+' }
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-[#131313] min-h-screen pt-32 pb-24">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className='inline-flex items-center gap-3 mb-6'>
            <div className="h-px w-8 bg-primary-container"></div>
            <span className="font-label text-primary-container uppercase tracking-widest text-[10px] font-bold">Comprehensive Capabilities</span>
            <div className="h-px w-8 bg-primary-container"></div>
          </div>

          <h1 className="font-display text-5xl md:text-6xl text-white uppercase mb-6">Service <span className="text-primary-container">Architecture</span></h1>
          <p className="font-sans text-on-surface-variant max-w-2xl mx-auto">
            Every procedure is executed with surgical precision. We don&apos;t just change parts; we maintain the mechanical integrity of your investment.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {serviceCategories.map((cat, index) => (
          <motion.section
            key={cat.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
          >
            <div className="lg:w-1/2 space-y-6">
              <div className="flex items-center gap-4">
                <cat.icon className="w-10 h-10 text-primary-container" />
                <h2 className="font-display text-3xl text-white uppercase tracking-wider">{cat.title}</h2>
              </div>
              <p className="text-on-surface-variant text-lg font-sans leading-relaxed">
                {cat.description}
              </p>
              {cat.subDescription && (
                <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-[0.3em] border border-outline-variant/30 px-4 py-1.5 inline-block">
                  {cat.subDescription}
                </span>
              )}

              <div className="space-y-4 pt-4">
                {cat.offerings.map((offering, i) => (
                  <div key={i} className="industrial-border bg-surface-container/50 p-6 group hover:border-primary-container transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-white font-bold uppercase tracking-wide">{offering.name}</h4>
                      <span className="font-display text-primary-container font-bold">{offering.price}</span>
                    </div>
                    {offering.features && (
                      <div className="flex flex-wrap gap-4">
                        {offering.features.map((feat, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <ShieldCheck className="w-3 h-3 text-primary-container opacity-50" />
                            <span className="text-[10px] text-on-surface-variant uppercase tracking-wider">{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative aspect-video w-full overflow-hidden industrial-border">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <Image
                src={engineImages[index]}
                alt={`Engine Image ${index}`}
                className='w-full h-full object-cover grayscale brightness-50 contrast-125 group-hover:scale-110 transition-transform duration-700'
              />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="flex items-center gap-2 mb-2 text-primary-container">
                  <Zap className="w-4 h-4 fill-primary-container" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Technical Spec-0{index + 1}</span>
                </div>
                <div className="text-white text-xs font-label uppercase tracking-widest opacity-80">Industrial Grade Tooling Only</div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Diagnostics Section */}
      <section className="bg-surface-container-low mt-32 py-24 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { label: 'Thermal Analysis', value: 'Live', icon: Thermometer },
            { label: 'Drivetrain Logic', value: 'OBD-II', icon: Gauge },
            { label: 'Safety Index', value: '100', icon: ShieldCheck },
            { label: 'Minor Autocare', value: 'Express', icon: Wrench },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-center">
              <div className="p-3 industrial-border border-primary-container/20">
                <item.icon className="w-6 h-6 text-primary-container" />
              </div>
              <div>
                <div className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">{item.label}</div>
                <div className="text-white font-display text-xl uppercase">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <div className="max-w-7xl mx-auto px-6 mt-32 text-center">
        <div className="industrial-border bg-surface-container p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Wrench className="w-64 h-64 rotate-45" />
          </div>
          <h2 className="font-display text-4xl text-white uppercase mb-6 tracking-tight">Ready for Precision Maintenance?</h2>
          <p className="text-on-surface-variant mb-10 max-w-xl mx-auto font-sans">
            Secure your spot in our workflow. We bring mobile engineering excellence directly to your garage.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/#booking"
            className="button-gradient text-white px-12 py-5 font-display font-bold uppercase tracking-widest text-lg shadow-2xl shadow-orange-950/20"
          >
            Go to Booking
          </motion.a>
        </div>
      </div>
    </div>
  );
}
