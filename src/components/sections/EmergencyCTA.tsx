"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EmergencyCTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="absolute -left-32 -top-32 w-96 h-96 bg-accent rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-16 text-center max-w-4xl mx-auto shadow-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Ready to start your journey <br className="hidden md:block"/> to better kidney health?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Schedule a consultation with Dr. D. K. Chugh today. We provide same-day priority appointments for urgent medical conditions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/#book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl active:scale-95 group"
              >
                <Calendar size={20} />
                Book Appointment
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform ml-1" />
              </Link>
              
              <Link 
                href="tel:+917065160017"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border-2 border-white/20 px-8 py-4 rounded-xl font-bold transition-all active:scale-95"
              >
                <Phone size={20} />
                Call Now
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
