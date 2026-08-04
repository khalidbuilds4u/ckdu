"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const TREATMENTS = [
  {
    title: "Kidney Transplant Surgery",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop",
    tags: ["Transplant Surgery", "Autotransplantation", "Donor Nephrectomy"],
    slug: "/treatments/kidney-transplant-surgery"
  },
  {
    title: "Kidney Cancer Surgery",
    image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=800&auto=format&fit=crop",
    tags: ["Kidney Sparing", "Partial Nephrectomy", "Radical Nephrectomy"],
    slug: "/treatments/kidney-cancer-surgery"
  },
  {
    title: "Kidney Stones",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    tags: ["Laser Surgery", "PCNL / Mini PCNL", "RIRS"],
    slug: "/treatments/kidney-stones"
  },
  {
    title: "Reconstructive Surgery",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    tags: ["Pyeloplasty", "Ureteric Reimplantation", "Cyst Decortication"],
    slug: "/treatments/reconstructive-kidney-surgery"
  },
  {
    title: "Kidney Infections & UTI",
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=800&auto=format&fit=crop",
    tags: ["Chronic UTIs", "Pyelonephritis"],
    slug: "/treatments/kidney-infections-uti"
  },
  {
    title: "AV Fistula",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    tags: ["Dialysis Access", "Fistula Creation", "Vascular Surgery"],
    slug: "/treatments/av-fistula"
  }
];

export default function TreatmentsSection({ limit, variant = "default" }: { limit?: number, variant?: "default" | "editorial" }) {
  const displayTreatments = limit ? TREATMENTS.slice(0, limit) : TREATMENTS;

  const isEditorial = variant === "editorial";

  return (
    <section id="treatments" className={`py-24 lg:py-32 relative overflow-hidden ${isEditorial ? 'bg-white' : 'bg-[#0a2342] text-white'}`}>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className={`text-sm font-bold tracking-widest uppercase mb-3 flex items-center gap-2 ${isEditorial ? 'text-primary' : 'text-accent'}`}>
              <span className={`w-8 h-px ${isEditorial ? 'bg-primary/50' : 'bg-accent/50'}`}></span>
              Procedures
            </h2>
            <h3 className={`text-4xl lg:text-5xl font-heading font-black mb-6 leading-tight ${isEditorial ? 'text-gray-900 tracking-tight' : ''}`}>
              Advanced Surgical Treatments
            </h3>
            <p className={`text-lg ${isEditorial ? 'text-gray-500 font-medium' : 'text-gray-400'}`}>
              Utilizing state-of-the-art robotic and laser technology to perform complex procedures with unparalleled precision and minimal recovery time.
            </p>
          </motion.div>

          {isEditorial && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                href="/treatments"
                className="inline-flex items-center justify-center gap-2 bg-[#0a2342] hover:bg-primary text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-[0_8px_30px_-4px_rgba(10,35,66,0.3)] hover:-translate-y-1"
              >
                View All Procedures
              </Link>
            </motion.div>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {displayTreatments.map((treatment, index) => {
            const isMiddle = index % 3 === 1; // Staggers the middle column for every row
            
            return (
              <Link href={treatment.slug} key={index} className="group block">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`${isEditorial && isMiddle ? 'lg:mt-16' : ''}`}
                >
                  {isEditorial ? (
                    // Editorial Staggered Layout
                    <div className="flex flex-col">
                      <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] mb-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] group-hover:shadow-[0_20px_50px_-10px_rgba(0,100,250,0.15)] transition-shadow duration-500">
                        <Image 
                          src={treatment.image}
                          alt={treatment.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {treatment.tags.slice(0, 2).map((tag, i) => (
                          <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-primary bg-blue-50 px-3 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h4 className="font-heading font-black text-2xl text-gray-900 mb-4 group-hover:text-primary transition-colors">
                        {treatment.title}
                      </h4>
                      
                      <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                        Read More 
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  ) : (
                    // Default Dark Layout
                    <div className="relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer">
                      <Image 
                        src={treatment.image}
                        alt={treatment.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a2342] via-[#0a2342]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {treatment.tags.map((tag, i) => (
                            <span key={i} className="text-[10px] uppercase tracking-wider font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h4 className="font-heading font-bold text-2xl text-white mb-2 leading-tight">
                          {treatment.title}
                        </h4>
                        <div className="flex items-center gap-2 text-accent text-sm font-semibold opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          Read More 
                          <ArrowUpRight size={16} />
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
