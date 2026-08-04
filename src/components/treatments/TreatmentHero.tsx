"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export function TreatmentHero({ title, description, image, slug }: { title: string, description: string, image: string, slug: string }) {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden bg-primary text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src={image} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#0a2342]/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
      </div>
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10 mb-8">
        <nav className="flex items-center text-sm text-gray-300 font-medium">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} className="mx-2" />
          <Link href="/treatments" className="hover:text-white transition-colors">Treatments</Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-white">{title}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight drop-shadow-md">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed drop-shadow-md">
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link 
              href={`#appointment`}
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
            >
              Book Appointment
            </Link>
            <Link 
              href="tel:+917065160017"
              className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-bold transition-all"
            >
              Call Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
