import { Calendar, MapPin, Clock, CheckCircle2, FlaskRound as OilBarrel, Settings2, Diamond, Wrench } from 'lucide-react';
import { motion } from 'motion/react';
import { ChangeEvent, SubmitEvent, useState } from 'react';

const packages = [
  { name: 'COMPACT CARS', sub: '(Civic, Corolla)', value: 'compact' },
  { name: 'MIDSIZE SEDANS', sub: '(Camry, Accord)', value: 'midsize' },
  { name: 'SMALL SUVS', sub: '(CR-V, RAV4)', value: 'small-suv' },
  { name: 'FULL-SIZE SUVS / TRUCK', sub: '(F-150, Silverado)', value: 'large' },
];

export default function BookingForm() {
  // States
  const [selectedPackage, setSelectedPackage] = useState(packages[0].value);
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [mobileNumber, setMobileNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const [serviceAddress, setServiceAddress] = useState("");
  const [vehicleDetails, setVehicleDetails] = useState("");

  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");

  // Handlers
  function handlePackageChange(e: ChangeEvent<HTMLInputElement>) {
    setSelectedPackage(e.target.value);
  }

  function bookingFormOnSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  
  return (
    <section id="booking" className="py-24 bg-[#131313]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="industrial-border bg-surface-container p-8 md:p-12 relative overflow-hidden">
          {/* Top border highlight */}
          <div className="absolute top-0 left-0 w-full h-1 button-gradient"></div>

          <div className="flex items-center gap-4 mb-10 border-b border-primary-container/20 pb-6">
            <Calendar className="w-8 h-8 text-primary-container" />
            <h2 className="font-display text-2xl text-white uppercase tracking-wider">
              Secure Your Service Appointment
            </h2>
          </div>

          <form className="space-y-12" onSubmit={bookingFormOnSubmit}>
            {/* Service Package Selection */}
            <div className="space-y-6">
              <label className="font-label text-on-surface-variant uppercase text-xs tracking-widest font-bold block mb-4">
                Select Your Service Package
              </label>

              <div className="industrial-border bg-surface-container-low p-6">
                <div className="flex items-center gap-3 mb-6 border-b border-outline-variant/30 pb-3">
                  <OilBarrel className="w-5 h-5 text-primary-container" />
                  <h4 className="font-display text-lg text-white uppercase tracking-wide">
                    FULL SYNTHETIC OIL CHANGE <span className="text-primary-container text-xs ml-2 opacity-80 font-sans tracking-normal">(SIGNATURE SERVICE)</span>
                  </h4>
                </div>
                
                <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] mb-6">
                  Premium oil + filter + full mobile convenience
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {packages.map((pkg) => (
                    <label 
                      key={pkg.value}
                      className="group flex justify-between items-center p-4 bg-surface-container-highest/20 border border-transparent hover:border-primary-container/50 hover:bg-surface-container-highest/40 cursor-pointer transition-all active:scale-[0.98]"
                    >
                      <div className="flex items-center gap-4">
                        <input
                          type="radio"
                          name="package"
                          value={pkg.value}
                          className="accent-primary-container h-4 w-4 bg-transparent border-gray-600"
                          checked={selectedPackage === pkg.value}
                          onChange={handlePackageChange}
                        />
                        <div>
                          <div className="text-white font-bold text-sm tracking-wide">{pkg.name}</div>
                          <div className="text-[10px] text-on-surface-variant uppercase">{pkg.sub}</div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Autocare Services */}
              <div className="industrial-border bg-surface-container-low p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Settings2 className="w-5 h-5 text-primary-container" />
                  <h4 className="font-display text-sm text-white uppercase tracking-widest">Autocare Services</h4>
                </div>
                <div className="space-y-4">
                  {[
                    { title: 'Brake Pad Replacement', sub: 'Front or Rear Axle' },
                    { title: 'Tire Rotation', sub: 'Even wear + pressure check' },
                    { title: 'Struts Replacement', sub: 'Improve ride comfort & safety' }
                  ].map((service, i) => (
                    <div key={i} className="border-l-2 border-primary-container pl-4">
                      <div className="text-white text-xs font-bold uppercase tracking-tight">{service.title}</div>
                      <div className="text-[10px] text-on-surface-variant uppercase">{service.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Luxury & European */}
              <div className="industrial-border bg-surface-container-low p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Diamond className="w-5 h-5 text-primary-container" />
                  <h4 className="font-display text-sm text-white uppercase tracking-widest">Luxury & European</h4>
                </div>
                <div className="space-y-4">
                  {[
                    { title: 'Luxury Sedans', sub: '(BMW, Benz, Audi, Lexus)' },
                    { title: 'Luxury SUVs / Performance', sub: 'High-precision maintenance' }
                  ].map((service, i) => (
                    <div key={i} className="border-l-2 border-primary-container pl-4">
                      <div className="text-white text-xs font-bold uppercase tracking-tight">{service.title}</div>
                      <div className="text-[10px] text-on-surface-variant uppercase">{service.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Minor Autocare */}
            <div className="industrial-border bg-surface-container-low p-6">
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="w-5 h-5 text-primary-container" />
                <h4 className="font-display text-sm text-white uppercase tracking-widest">Minor Autocare</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {[
                  'Air Filter Replacement',
                  'Cabin Filter Replacement',
                  'Wiper Blade Replacement',
                  'Battery Replacement',
                  'Fluid Top-Off / Maintenance'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 border-b border-outline-variant/10 pb-1">
                    <CheckCircle2 className="w-3 h-3 text-primary-container" />
                    <span className="text-xs text-on-surface hover:text-white transition-colors cursor-default">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-[0.3em] border border-outline-variant/30 px-4 py-1.5 inline-block">
                Price varies by location
              </span>
            </div>

            <div className="h-px w-full bg-outline-variant/20"></div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
                    First Name{" "}
                    <span className='text-red-500'>*</span>
                  </label>
                  <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="input-field" placeholder="Wrench" required />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
                    Last Name{" "}
                    <span className='text-red-500'>*</span>
                  </label>
                  <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="input-field" placeholder="Turner" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
                    Mobile Number{" "}
                    <span className='text-red-500'>*</span>
                  </label>
                  <div className="flex">
                    <div className="bg-surface-container-highest/40 border border-r-0 border-outline-variant px-4 flex items-center text-xs text-on-surface font-bold">
                      +1
                    </div>
                    <input value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} type="tel" className="input-field" placeholder="(555) 000-0000" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
                    Email Address{" "}
                    <span className='text-red-500'>*</span>
                  </label>
                  <input value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} type="email" className="input-field" placeholder="owner@garage.com" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
                  Service Address{" "}
                  <span className='text-red-500'>*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-primary-container opacity-60" />
                  <input value={serviceAddress} onChange={(e) => setServiceAddress(e.target.value)} type="text" className="input-field pl-10" placeholder="Street, City, Zip Code" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
                  Vehicle Details{" "}
                  <span className='text-red-500'>*</span>
                </label>
                <textarea 
                  className="input-field min-h-[100px] resize-none" 
                  placeholder="Year, Make, Model & Specific Concerns"
                  value={vehicleDetails} onChange={(e) => setVehicleDetails(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="pt-4">
                <label className="font-label text-primary-container uppercase text-[10px] tracking-[0.2em] font-bold block mb-6">
                  Preferred Date & Time{" "}
                  <span className='text-red-500'>*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">
                      Preferred Date{" "}
                      <span className='text-red-500'>*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="absolute right-3 top-3.5 w-4 h-4 text-primary-container cursor-pointer" />
                      <input value={preferredDate} onChange={(e) => setPreferredDate(e.target.value)} type="date" className="input-field pr-10 appearance-none" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">
                      Preferred Time{" "}
                      <span className='text-red-500'>*</span>
                    </label>
                    <div className="relative">
                      <Clock className="absolute right-3 top-3.5 w-4 h-4 text-primary-container cursor-pointer" />
                      <input value={preferredTime} onChange={(e) => setPreferredTime(e.target.value)} type="time" className="input-field pr-10 appearance-none" required />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Included in every service */}
            <div className="industrial-border border-primary-container/30 bg-primary-container/5 p-6 space-y-4">
              <h5 className="font-label text-primary-container uppercase text-[10px] tracking-[0.2em] font-bold">
                Included in Every Service
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                {[
                  'Premium Full Synthetic Oil',
                  'High-Quality Oil Filter',
                  'Fluid Level Check & Top-Off',
                  'Tire Pressure Check',
                  'Basic Vehicle Inspection',
                  'Clean, Mess-Free Service'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary-container" />
                    <span className="text-[10px] text-on-surface font-label uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full button-gradient text-white py-6 font-display text-xl uppercase tracking-widest industrial-border shadow-xl shadow-orange-900/10"
              type="submit"
            >
              Confirm Precision Booking
            </motion.button>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-outline-variant/30 flex flex-wrap justify-center gap-x-12 gap-y-6">
              {[
                { icon: Wrench, label: 'ASE-Certified' },
                { icon: CheckCircle2, label: 'Fully Bonded' },
                { icon: Clock, label: 'Same-Day Availability' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all opacity-60 hover:opacity-100">
                  <item.icon className="w-4 h-4 text-primary-container" />
                  <span className="text-on-surface-variant text-[10px] uppercase font-label font-bold tracking-widest">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
