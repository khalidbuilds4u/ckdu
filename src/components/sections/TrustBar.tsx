"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Microscope, HeartHandshake } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: <Activity className="text-accent" size={28} />,
    title: "Advanced Robotic Surgery",
    description: "State-of-the-art precision for faster recovery."
  },
  {
    icon: <Microscope className="text-accent" size={28} />,
    title: "Modern Diagnostics",
    description: "Accurate detection using the latest medical imaging."
  },
  {
    icon: <ShieldCheck className="text-accent" size={28} />,
    title: "Evidence Based",
    description: "Treatments backed by global medical research."
  },
  {
    icon: <HeartHandshake className="text-accent" size={28} />,
    title: "Personalized Care",
    description: "Tailored treatment plans for every patient."
  }
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-white relative z-20 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_ITEMS.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F8FBFF] border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-text-primary mb-1">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
