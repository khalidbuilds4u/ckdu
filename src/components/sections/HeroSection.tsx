"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-[#f4f7f9]">
      {/* Decorative Ambient Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>
      
      {/* Subtle Grid Pattern for texture */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.03]"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] mb-8">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-gray-800 uppercase tracking-widest">Accepting New Patients</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-[5rem] font-heading font-extrabold text-[#0a2342] leading-[1.05] tracking-tight mb-8">
              Advanced <br/>
              <span className="text-primary relative inline-block italic pr-2">
                Urology Care
                {/* Elegant underline */}
                <svg className="absolute w-full h-2 -bottom-2 left-0 text-accent opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" fill="transparent" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span> <br/>
              By Dr. D. K. Chugh
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg font-medium">
              World-class diagnosis, robotic surgery, and laser procedures. Personalized excellence for complex kidney and urological conditions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mb-14">
              <Link 
                href="/#book"
                className="inline-flex items-center justify-center gap-2 bg-[#0a2342] hover:bg-primary text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-[0_8px_30px_-4px_rgba(10,35,66,0.3)] hover:shadow-[0_8px_30px_-4px_rgba(10,35,66,0.5)] hover:-translate-y-1 active:translate-y-0 group"
              >
                Book Appointment
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm text-gray-800 border border-white hover:bg-white px-8 py-4 rounded-xl font-semibold transition-all shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-md hover:-translate-y-1 active:translate-y-0"
              >
                Meet Dr. Chugh
              </Link>
            </div>

            {/* Quick stats - Editorial style (minimal, typographic) */}
            <div className="flex gap-8 lg:gap-12 pt-8 border-t border-gray-200/60">
              <div>
                <p className="text-4xl font-heading font-black text-[#0a2342] mb-1">15<span className="text-primary">+</span></p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-black text-[#0a2342] mb-1">6k<span className="text-primary">+</span></p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Procedures</p>
              </div>
              <div className="hidden md:block">
                <p className="text-4xl font-heading font-black text-[#0a2342] mb-1">600<span className="text-primary">+</span></p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Transplants</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Image/Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-lg mt-10 lg:mt-0"
          >
            {/* Seamless Image Merge (mix-blend-multiply removes white background) */}
            <div className="relative aspect-[4/5] mix-blend-multiply transform transition-transform duration-700 hover:scale-[1.02]">
              <Image 
                src="/images/dr-chugh.png" 
                alt="Dr. D.K Chugh - Senior Urologist"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            
            {/* Floating Glassmorphic Name Plate */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl rounded-2xl p-5 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] border border-white"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-heading font-black text-gray-900 text-lg leading-tight">Dr. D. K. Chugh</p>
                  <p className="text-sm text-gray-500 font-medium mt-0.5">MCh (Urology), FICRS</p>
                </div>
              </div>
            </motion.div>
            
            {/* Floating Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] border border-white hidden md:flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Award className="text-accent" size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Associated With</p>
                <p className="font-bold text-gray-900">Apollo Hospitals</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
