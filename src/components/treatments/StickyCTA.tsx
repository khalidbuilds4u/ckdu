"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Calendar, MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling down 500px
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 w-full z-50 md:bottom-6 md:left-auto md:right-6 md:w-auto"
        >
          {/* Mobile Layout (Bottom Bar) */}
          <div className="md:hidden flex bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-gray-200 w-full">
            <Link 
              href="tel:+917065160017"
              className="flex-1 flex flex-col items-center justify-center py-3 text-gray-700 hover:bg-gray-50 border-r border-gray-200"
            >
              <Phone size={20} className="mb-1" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
            </Link>
            <Link 
              href="https://wa.me/917065160017"
              target="_blank"
              className="flex-1 flex flex-col items-center justify-center py-3 text-[#25D366] hover:bg-gray-50 border-r border-gray-200"
            >
              <MessageCircle size={20} className="mb-1" />
              <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
            </Link>
            <Link 
              href="#appointment"
              className="flex-[1.5] flex flex-col items-center justify-center py-3 bg-primary text-white hover:bg-primary-hover"
            >
              <Calendar size={20} className="mb-1" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Book Now</span>
            </Link>
          </div>

          {/* Desktop Layout (Floating Card) */}
          <div className="hidden md:flex bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 flex-col gap-4 w-80 relative">
            <button 
              onClick={() => {
                setIsVisible(false);
                setIsDismissed(true);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X size={18} />
            </button>
            
            <div>
              <h4 className="font-heading font-bold text-gray-900 text-lg">Need Assistance?</h4>
              <p className="text-sm text-gray-500">Book an appointment or talk to our experts.</p>
            </div>
            
            <Link 
              href="#appointment"
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-bold transition-colors shadow-sm"
            >
              <Calendar size={18} />
              Book Consultation
            </Link>
            
            <div className="grid grid-cols-2 gap-3">
              <Link 
                href="tel:+917065160017"
                className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-900 py-3 rounded-xl font-bold transition-colors text-sm"
              >
                <Phone size={16} />
                Call
              </Link>
              <Link 
                href="https://wa.me/917065160017"
                target="_blank"
                className="flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/20 py-3 rounded-xl font-bold transition-colors text-sm"
              >
                <MessageCircle size={16} />
                WhatsApp
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
