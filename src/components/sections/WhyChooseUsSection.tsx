"use client";

import { motion } from "framer-motion";
import { Users, Clock, Shield, ThumbsUp } from "lucide-react";

const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "6,000+", label: "Successful Procedures" },
  { value: "600+", label: "Kidney Transplants" },
  { value: "Top", label: "Apollo Hospital Association" },
];

const REASONS = [
  {
    icon: <Users className="text-white" size={24} />,
    title: "Patient-First Approach",
    description: "Every treatment plan is customized to the individual's specific medical history and lifestyle."
  },
  {
    icon: <Clock className="text-white" size={24} />,
    title: "Same Day Consultation",
    description: "We prioritize urgent cases to ensure you don't have to wait when you are in pain."
  },
  {
    icon: <Shield className="text-white" size={24} />,
    title: "Ethical Practice",
    description: "100% transparent pricing and medical advice focused entirely on what is best for the patient."
  },
  {
    icon: <ThumbsUp className="text-white" size={24} />,
    title: "End-to-End Care",
    description: "From initial diagnosis through surgery and complete post-operative rehabilitation."
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-[#F8FBFF]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Stats Box */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary rounded-[2.5rem] p-10 lg:p-12 shadow-2xl text-white relative overflow-hidden"
            >
              {/* Decorative circle */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 border-[30px] border-white/5 rounded-full pointer-events-none"></div>
              
              <h3 className="text-3xl font-heading font-bold mb-10 leading-tight relative z-10">
                A Legacy of Medical Excellence
              </h3>
              
              <div className="grid grid-cols-2 gap-x-6 gap-y-10 relative z-10">
                {STATS.map((stat, index) => (
                  <div key={index}>
                    <p className="text-4xl lg:text-5xl font-heading font-bold text-accent mb-2">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-300 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Reasons */}
          <div className="lg:col-span-7 lg:pl-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-primary/30"></span>
                Why Choose Us
              </h2>
              <h3 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-10 leading-tight">
                Setting the Standard in Urological Care
              </h3>

              <div className="grid sm:grid-cols-2 gap-8">
                {REASONS.map((reason, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 shadow-md">
                      {reason.icon}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-text-primary mb-2">{reason.title}</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
