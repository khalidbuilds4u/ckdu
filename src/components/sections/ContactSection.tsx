"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

const LOCATIONS = [
  {
    title: "Chittaranjan Park (Main Center)",
    address: "Center For Kidney Diseases and Urology- Lower Ground, A-9, Block A, Chittaranjan Park, New Delhi, Delhi 110019",
  },
  {
    title: "Noida",
    address: "Saraswati Multi-specialty Clinic- Lower Ground Floor, A, A-524, near Garden Glory, Sector 46, Noida, Uttar Pradesh 201303",
  },
  {
    title: "Karol Bagh",
    address: "Apollo Spectra Hospital- 34, Plot, Block No, Metro Pillar No. 77, Pusa Rd, opposite Bal Bharati Public School, Block 18 A, WEA, Karol Bagh, New Delhi, Delhi 110005",
  }
];

export default function ContactSection() {
  const [activeLocation, setActiveLocation] = useState(0);

  return (
    <section id="contact" className="py-24 bg-[#F8FBFF] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

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
              Get In Touch
              <span className="w-8 h-px bg-primary/30"></span>
            </h2>
            <h3 className="text-3xl lg:text-5xl font-heading font-bold text-text-primary mb-6 leading-tight">
              Contact & Locations
            </h3>
            <p className="text-lg text-text-secondary">
              We are available across multiple premium locations in Delhi NCR. Contact us directly or visit our nearest center.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Side: Contact Details & Locations List */}
          <div className="lg:col-span-5 space-y-8 flex flex-col">
            
            {/* Quick Contact Cards */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <Phone size={24} />
                </div>
                <h4 className="font-bold text-text-primary mb-1">Call Us</h4>
                <p className="text-text-secondary text-sm">+91 7065160017</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <Mail size={24} />
                </div>
                <h4 className="font-bold text-text-primary mb-1">Email Us</h4>
                <p className="text-text-secondary text-sm">ckdandurologyindia@gmail.com</p>
              </div>
            </motion.div>

            {/* Locations List */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 bg-primary text-white flex items-center gap-3">
                <MapPin size={24} />
                <h3 className="font-heading font-bold text-xl">Our Centers</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {LOCATIONS.map((loc, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveLocation(index)}
                    className={`w-full text-left p-6 transition-all duration-300 hover:bg-[#F8FBFF] flex items-start gap-4 ${
                      activeLocation === index ? "bg-[#F8FBFF] border-l-4 border-primary" : "border-l-4 border-transparent"
                    }`}
                  >
                    <div className={`mt-1 flex-shrink-0 transition-colors ${activeLocation === index ? "text-primary" : "text-gray-400"}`}>
                      <Navigation size={20} />
                    </div>
                    <div>
                      <h4 className={`font-bold mb-2 transition-colors ${activeLocation === index ? "text-primary" : "text-text-primary"}`}>
                        {loc.title}
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {loc.address}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Side: Interactive Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-gray-200 rounded-3xl shadow-xl border-4 border-white overflow-hidden min-h-[400px] h-full"
          >
            <iframe 
              src={`https://maps.google.com/maps?q=${encodeURIComponent(LOCATIONS[activeLocation].address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full transition-opacity duration-500"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
