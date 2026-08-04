"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import Image from "next/image";

const LOCATIONS = [
  {
    title: "CHITTARANJAN PARK",
    address: "Center For Kidney Diseases and Urology- Lower Ground, A-9, Block A, Chittaranjan Park, New Delhi, Delhi 110019",
    image: "https://images.unsplash.com/photo-1587351021759-3e566d6af7cc?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "NOIDA",
    address: "Saraswati Multi-specialty Clinic- Lower Ground Floor, A, A-524, near Garden Glory, Sector 46, Noida, Uttar Pradesh 201303",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "KAROL BAGH",
    address: "Apollo Spectra Hospital- 34, Plot, Block No, Metro Pillar No. 77, Pusa Rd, opposite Bal Bharati Public School, Block 18 A, WEA, Karol Bagh, New Delhi, Delhi 110005",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=600&auto=format&fit=crop"
  }
];

export default function LocationsSection() {
  return (
    <section className="py-24 bg-[#F8FBFF]">
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
              Find Us
              <span className="w-8 h-px bg-primary/30"></span>
            </h2>
            <h3 className="text-3xl lg:text-5xl font-heading font-bold text-text-primary mb-6 leading-tight">
              Our Locations
            </h3>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-8">
          {LOCATIONS.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col sm:flex-row group"
            >
              <div className="relative w-full h-48">
                <Image 
                  src={loc.image}
                  alt={loc.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <MapPin size={20} />
                </div>
                <h4 className="font-heading font-bold text-xl text-text-primary mb-2">{loc.title}</h4>
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">{loc.address}</p>
                <a 
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors"
                >
                  <Navigation size={16} />
                  Get Directions
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
