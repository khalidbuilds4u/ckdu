"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Stethoscope, Syringe, HeartPulse, Sparkles } from "lucide-react";

const STEPS = [
  {
    icon: <CalendarCheck size={24} />,
    title: "1. Appointment",
    description: "Book online or via WhatsApp. Same day priority consultation for urgent cases."
  },
  {
    icon: <Stethoscope size={24} />,
    title: "2. Diagnosis",
    description: "Detailed evaluation using advanced imaging and lab tests to pinpoint the issue."
  },
  {
    icon: <Syringe size={24} />,
    title: "3. Treatment",
    description: "Evidence-based medical or surgical intervention tailored to your condition."
  },
  {
    icon: <HeartPulse size={24} />,
    title: "4. Recovery",
    description: "Post-operative care with minimal pain protocols for faster healing."
  },
  {
    icon: <Sparkles size={24} />,
    title: "5. Follow-up",
    description: "Regular check-ins to ensure complete recovery and long-term kidney health."
  }
];

export default function PatientJourneySection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 hidden lg:block -translate-y-12"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3 justify-center flex items-center gap-2">
              <span className="w-8 h-px bg-primary/30"></span>
              Seamless Experience
              <span className="w-8 h-px bg-primary/30"></span>
            </h2>
            <h3 className="text-3xl lg:text-5xl font-heading font-bold text-text-primary mb-6 leading-tight">
              Your Patient Journey
            </h3>
            <p className="text-lg text-text-secondary">
              We ensure a smooth, transparent, and comfortable experience from your first consultation to your full recovery.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center group"
            >
              <div className="w-20 h-20 mx-auto bg-[#F8FBFF] border-2 border-white shadow-xl rounded-full flex items-center justify-center text-primary mb-6 relative z-10 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {step.icon}
                
                {/* Connecting dots for mobile/tablet */}
                {index !== STEPS.length - 1 && (
                  <div className="absolute top-full left-1/2 w-0.5 h-8 bg-gray-200 lg:hidden -translate-x-1/2 my-2"></div>
                )}
              </div>
              
              <h4 className="font-heading font-bold text-lg text-text-primary mb-3">
                {step.title}
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
