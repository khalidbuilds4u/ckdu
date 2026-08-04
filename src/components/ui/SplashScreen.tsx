"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SealLogo from "@/components/ui/SealLogo";

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling while splash screen is active
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    }, 2800); // Total animation time before unmounting

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          {/* Animated Logo / Icon */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-10 relative text-primary"
          >
            <SealLogo size={140} />
            
            {/* Pulsing ring around the icon */}
            <motion.div
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border-2 border-primary/30"
            />
          </motion.div>

          {/* Animated Text Sequence */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="font-heading font-extrabold text-3xl md:text-4xl text-gray-900 text-center tracking-tight"
            >
              Center for Kidney Disease
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mt-1">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="font-heading font-black text-2xl md:text-3xl text-primary text-center italic"
            >
              & Urology
            </motion.h2>
          </div>

          {/* Elegant Loading Line */}
          <div className="w-48 h-px bg-gray-100 mt-10 overflow-hidden relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ 
                duration: 1.5, 
                delay: 0.8, 
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-primary w-full h-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
