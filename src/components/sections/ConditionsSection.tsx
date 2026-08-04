"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CONDITIONS = [
  {
    title: "Prostate Enlargement (BPH)",
    description: "Comprehensive diagnosis and management of enlarged prostate causing urinary symptoms.",
    icon: "https://cdn-icons-png.flaticon.com/512/8659/8659695.png",
    slug: "/#book"
  },
  {
    title: "End-Stage Renal Disease",
    description: "Advanced management and transplant evaluation for complete kidney failure.",
    icon: "https://cdn-icons-png.flaticon.com/512/3063/3063194.png",
    slug: "/treatments/kidney-transplant-surgery"
  },
  {
    title: "Kidney Stones",
    description: "Painful mineral deposits in the kidneys that require rapid clearance and prevention.",
    icon: "https://cdn-icons-png.flaticon.com/512/3063/3063194.png",
    slug: "/treatments/kidney-stones"
  },
  {
    title: "Bladder Problems",
    description: "Treatment for overactive bladder, incontinence, and structural abnormalities.",
    icon: "https://cdn-icons-png.flaticon.com/512/2864/2864273.png",
    slug: "/#book"
  },
  {
    title: "Chronic UTIs",
    description: "Investigation and targeted medical therapy for recurrent urinary tract infections.",
    icon: "https://cdn-icons-png.flaticon.com/512/3063/3063194.png",
    slug: "/treatments/kidney-infections-uti"
  },
  {
    title: "Kidney Tumors & Cysts",
    description: "Thorough oncological evaluation and surveillance for renal masses.",
    icon: "https://cdn-icons-png.flaticon.com/512/8659/8659695.png",
    slug: "/treatments/kidney-cancer-surgery"
  }
];

export default function ConditionsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3 justify-center flex items-center gap-2">
              <span className="w-8 h-px bg-primary/30"></span>
              Clinical Expertise
              <span className="w-8 h-px bg-primary/30"></span>
            </h2>
            <h3 className="text-3xl lg:text-5xl font-heading font-bold text-text-primary mb-6 leading-tight">
              Conditions We Treat
            </h3>
            <p className="text-lg text-text-secondary">
              Providing specialized, evidence-based care for a wide spectrum of urological and kidney diseases using the most advanced medical technology.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONDITIONS.map((condition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-[#F8FBFF] rounded-[2rem] p-8 h-full border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 group flex flex-col relative overflow-hidden">
                
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-[#F8FBFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                    <div className="relative w-8 h-8 opacity-80 group-hover:opacity-100">
                      <Image 
                        src={condition.icon} 
                        alt={condition.title}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  </div>
                  
                  <h4 className="font-heading font-bold text-xl text-text-primary mb-3">
                    {condition.title}
                  </h4>
                  
                  <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
                    {condition.description}
                  </p>
                  
                  <Link 
                    href={condition.slug}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-secondary transition-colors"
                  >
                    Learn More
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
