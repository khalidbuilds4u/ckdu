"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const STORIES = [
  {
    patient: "Mr. Sharma, 54",
    condition: "Complex Staghorn Calculus",
    outcome: "Completely stone-free after a single session of PCNL.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
  },
  {
    patient: "Anonymous, 42",
    condition: "Early Stage Kidney Cancer",
    outcome: "Successful Robotic Partial Nephrectomy, saving 80% of the kidney.",
    image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=800&auto=format&fit=crop"
  }
];

export default function SuccessStoriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-primary/30"></span>
              Clinical Outcomes
            </h2>
            <h3 className="text-3xl lg:text-5xl font-heading font-bold text-text-primary mb-6 leading-tight">
              Success Stories
            </h3>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {STORIES.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#F8FBFF] rounded-[2rem] overflow-hidden border border-gray-100 flex flex-col sm:flex-row"
            >
              <div className="relative w-full sm:w-1/2 h-64 sm:h-auto">
                <Image 
                  src={story.image}
                  alt={story.condition}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 sm:w-1/2 flex flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Case Study</p>
                <h4 className="font-heading font-bold text-xl text-text-primary mb-4">{story.condition}</h4>
                <p className="text-sm text-text-secondary italic mb-6 leading-relaxed bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                  "{story.outcome}"
                </p>
                <Link 
                  href="#case-study"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors mt-auto"
                >
                  Read Full Case
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
