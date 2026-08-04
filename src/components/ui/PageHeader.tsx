"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image?: string;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  image = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop" 
}: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-primary text-white relative overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0a2342]/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
      </div>

      {/* Abstract Background decorations */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent z-0"></div>
      <div className="absolute -right-32 -top-32 w-96 h-96 bg-accent rounded-full blur-[120px] opacity-20 pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight drop-shadow-md">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 drop-shadow-md">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
