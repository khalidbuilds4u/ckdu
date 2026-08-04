"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

const FEATURES = [
  "Da Vinci Surgical System",
  "Holmium Laser (100W)",
  "Flexible Ureteroscopes",
  "3D Laparoscopy Setup",
  "Advanced Lithotripsy",
  "Modular Operation Theaters"
];

export default function TechnologySection() {
  return (
    <section id="technology" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image/3D representation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2"></div>
            
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 aspect-square">
              <Image 
                src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=1000&auto=format&fit=crop"
                alt="Advanced Robotic Surgery Equipment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white">
                  <p className="font-heading font-bold text-xl text-primary mb-2">Next-Gen Robotics</p>
                  <p className="text-sm text-text-secondary">Enabling extreme precision, smaller incisions, and faster recovery times for complex urological procedures.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-primary/30"></span>
              World-Class Infrastructure
            </h2>
            <h3 className="text-3xl lg:text-5xl font-heading font-bold text-text-primary mb-6 leading-tight">
              Advanced Technology <br/> for Better Outcomes
            </h3>
            
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              We invest in the latest global medical technologies to ensure our patients receive the safest and most effective treatments available. From AI-assisted diagnostics to state-of-the-art robotic surgical systems.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {FEATURES.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-success font-bold" />
                  </div>
                  <span className="text-text-primary font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-[#F8FBFF] rounded-2xl border border-primary/10 border-l-4 border-l-primary">
              <p className="text-text-secondary text-sm italic">
                "The integration of robotic surgery has revolutionized urology, allowing us to perform highly intricate procedures with minimal trauma to the patient."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
