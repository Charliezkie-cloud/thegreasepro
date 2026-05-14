import { Globe, Terminal, MessageSquare, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t-2 border-primary-container/20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="text-xl font-black text-white italic tracking-tighter">
            THE<span className="text-primary-container">GREASE</span>PRO
          </div>
          <p className="font-sans text-sm text-on-surface-variant leading-relaxed max-w-xs">
            Professional-grade mobile maintenance engineered for those who demand precision and reliability. We bring the garage to you.
          </p>
          <div className="flex gap-4">
            {[Globe, Terminal, MessageSquare].map((Icon, i) => (
              <a key={i} href="#" className="p-2 industrial-border hover:bg-primary-container hover:text-white text-primary-container transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-label text-xs text-white font-bold uppercase tracking-widest">Operations</h4>
            <div className="flex flex-col gap-3">
              {['Fleet Support', 'Safety Protocol', 'Service Area'].map((link) => (
                <a key={link} href="#" className="text-sm text-on-surface-variant hover:text-primary-container transition-colors font-sans">{link}</a>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-label text-xs text-white font-bold uppercase tracking-widest">Legal</h4>
            <div className="flex flex-col gap-3">
              {['Terms of Service', 'Privacy Policy', 'Warranties'].map((link) => (
                <a key={link} href="#" className="text-sm text-on-surface-variant hover:text-primary-container transition-colors font-sans">{link}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-6">
          <h4 className="font-label text-xs text-white font-bold uppercase tracking-widest">Newsletter</h4>
          <p className="text-sm text-on-surface-variant font-sans">Join our high-performance mailing list for maintenance alerts.</p>
          <div className="flex industrial-border overflow-hidden focus-within:ring-1 focus-within:ring-primary-container transition-all">
            <input
              type="email"
              placeholder="ENTER EMAIL"
              className="bg-surface-container-low border-none text-white text-xs px-4 py-3 focus:ring-0 w-full outline-none"
            />
            <button className="bg-primary-container text-white px-5 hover:bg-secondary-container transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-outline-variant/10 py-8 px-6 text-center">
        <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-[0.3em]">
          © 2026 THEGREASEPRO MOBILE AUTOCARE. ENGINEERED FOR PRECISION.
        </p>
      </div>
    </footer>
  );
}
