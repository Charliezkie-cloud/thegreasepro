import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { ReactNode, useEffect } from 'react';

interface ModalProps {
  Title?: string;
  visible: boolean;
  onClose?: () => void;
  children: ReactNode;
}

export default function Modal({ Title = 'Modal', visible, onClose, children }: ModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm px-4 md:px-0"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center pointer-events-none px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="pointer-events-auto w-full max-w-lg industrial-border bg-surface-container overflow-hidden shadow-2xl relative"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-outline-variant/20 relative">
                <div className="absolute top-0 left-0 w-full h-1 button-gradient"></div>
                <h3 className="font-display text-xl text-white uppercase tracking-wider">{Title}</h3>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/5 transition-colors text-on-surface-variant hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 max-h-[80vh] overflow-y-auto font-sans text-on-surface-variant leading-relaxed">
                {children}
              </div>

              {/* Footer (Optional simple one for consistency) */}
              {/* <div className="p-4 bg-surface-container-low border-t border-outline-variant/10 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-6 py-2 border border-outline-variant text-[10px] text-white uppercase tracking-widest font-bold hover:bg-white/5 transition-all"
                >
                  Dismiss
                </button>
              </div> */}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
