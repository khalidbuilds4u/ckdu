"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    treatment: "Robotic Prostate Surgery",
    text: "Dr. Chughh is truly a lifesaver. His calm demeanor and detailed explanation of the robotic surgery gave me immense confidence. I was back on my feet within days with almost no pain.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Amit Sharma",
    treatment: "Laser Stone Removal",
    text: "I was suffering from severe kidney stone pain. The team at CKDU attended to me immediately. The laser procedure was quick, and the hospital facilities are truly world-class.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Priya Singh",
    treatment: "Recurrent UTI Treatment",
    text: "After years of struggling with UTIs and visiting multiple doctors, Dr. Chughh finally diagnosed the root cause. His personalized approach to medicine is rare to find these days.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="patient-stories" className="py-24 bg-[#0a2342] text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3 justify-center flex items-center gap-2">
              <span className="w-8 h-px bg-accent/50"></span>
              Patient Stories
              <span className="w-8 h-px bg-accent/50"></span>
            </h2>
            <h3 className="text-3xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
              Real Impact, Real Lives
            </h3>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] p-8 relative group hover:bg-white/10 transition-colors duration-300"
            >
              <Quote className="absolute top-8 right-8 text-white/10 rotate-180" size={60} />
              
              <div className="flex items-center gap-1 text-yellow-400 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-white/20">
                  <Image 
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-xs text-accent uppercase tracking-wider font-semibold">{testimonial.treatment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
