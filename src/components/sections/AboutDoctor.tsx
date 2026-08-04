"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Trophy, Activity, Star, Award, Heart, CheckCircle2, 
  ShieldCheck, ArrowRight, Phone, MessageCircle, Stethoscope, Microscope
} from "lucide-react";

const EXPERTISE = [
  "Kidney Stones", "Kidney Disease", "Kidney Transplant", 
  "Laser Surgery", "Robotic Surgery", "Prostate Disorders", 
  "UTI", "Male Urology", "Female Urology", 
  "Bladder Disorders", "Endourology", "Reconstructive Urology"
];

const TIMELINE = [
  { year: "Medical Education", title: "Foundation of Excellence", desc: "Rigorous medical training establishing a strong foundation in patient care." },
  { year: "MCh (Urology)", title: "Specialized Expertise", desc: "Advanced surgical degree focused exclusively on the urinary tract and male reproductive organs." },
  { year: "Advanced Training", title: "Surgical Mastery", desc: "Years of dedicated training in complex kidney and urological surgeries." },
  { year: "Certification", title: "Robotic Surgery Specialist", desc: "Certified in state-of-the-art, minimally invasive robotic procedures." },
  { year: "Partnership", title: "Apollo Hospitals Association", desc: "Associated with one of Asia's most trusted and advanced healthcare networks." },
  { year: "Milestone", title: "6000+ Procedures", desc: "A remarkable track record of successful urological and transplant surgeries." },
];

const TRUST_REASONS = [
  { title: "Personalized Treatment Plans", desc: "Every patient receives a customized care pathway tailored to their unique condition.", icon: <Heart className="text-accent" size={24} /> },
  { title: "Advanced Surgical Expertise", desc: "Mastery in minimally invasive, laser, and robotic surgical techniques.", icon: <Stethoscope className="text-accent" size={24} /> },
  { title: "Evidence-Based Care", desc: "Treatments grounded in the latest global medical research and clinical guidelines.", icon: <Microscope className="text-accent" size={24} /> },
  { title: "Modern Technology", desc: "Utilizing world-class diagnostic and surgical equipment for precision.", icon: <Activity className="text-accent" size={24} /> },
  { title: "Compassionate Consultation", desc: "A patient-first approach ensuring you feel heard, understood, and supported.", icon: <Star className="text-accent" size={24} /> },
  { title: "Comprehensive Follow-Up", desc: "Dedicated post-treatment care to ensure complete recovery and long-term health.", icon: <ShieldCheck className="text-accent" size={24} /> },
];

export default function AboutDoctor() {
  return (
    <div className="bg-[#f8f9fa] w-full overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left: Image & Floating Badges */}
            <div className="lg:col-span-5 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-b from-blue-50 to-gray-200"
              >
                <Image 
                  src="/images/dr-chugh.png"
                  alt="Dr. D. K. Chugh"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </motion.div>

              {/* Floating Badge 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute top-12 -left-6 md:-left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white/40"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Trophy className="text-accent" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg leading-tight">15+ Years</p>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Experience</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-24 -right-6 md:-right-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white/40"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Activity className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg leading-tight">6000+</p>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Procedures</p>
                </div>
              </motion.div>
            </div>

            {/* Right: Bio */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">
                  Lead Specialist
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-4 leading-tight">
                  Meet Dr. D. K. Chugh
                </h2>
                <h3 className="text-xl md:text-2xl text-primary font-medium mb-8">
                  MCh (Urology), FICRS
                </h3>
                <p className="text-xl text-gray-700 italic border-l-4 border-accent pl-6 mb-10 leading-relaxed">
                  "Trusted Urologist & Kidney Specialist dedicated to advanced, minimally invasive, and patient-focused care."
                </p>
                
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    With over 15 years of dedicated medical practice, Dr. D. K. Chugh is recognized as a leading authority in urology and kidney care. His medical journey has been defined by a relentless passion for utilizing advanced technology to improve patient outcomes and quality of life.
                  </p>
                  <p>
                    Specializing in complex kidney and urinary disorders, Dr. Chugh brings world-class expertise to robotic surgery, laser urology, and kidney transplants. His commitment to personalized treatment means that every patient receives care uniquely tailored to their specific condition, grounded entirely in evidence-based healthcare.
                  </p>
                  <p>
                    Beyond surgical precision, Dr. Chugh is known for his compassionate patient care—ensuring you feel informed, comfortable, and confident at every step of your medical journey.
                  </p>
                </div>

                <div className="mt-10">
                  <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Apollo_Hospitals_Logo.svg/1024px-Apollo_Hospitals_Logo.svg.png" 
                    alt="Apollo Hospitals" 
                    width={180} 
                    height={60} 
                    className="opacity-70 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <p className="text-sm text-gray-500 mt-2 font-medium">Proudly Associated with Apollo Hospitals</p>
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. HIGHLIGHT CARDS */}
      <section className="py-16 bg-[#0B4F8C]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { label: "Years Experience", value: "15+", icon: Award },
              { label: "Successful Procedures", value: "6000+", icon: Activity },
              { label: "Kidney Transplants", value: "600+", icon: Heart },
              { label: "Patient Satisfaction", value: "99%", icon: Star },
              { label: "Advanced Technologies", value: "100%", icon: Microscope },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-2 cursor-pointer group"
              >
                <stat.icon className="mx-auto text-accent mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-3xl font-heading font-bold text-white mb-2">{stat.value}</h4>
                <p className="text-blue-200 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EXPERTISE & TIMELINE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col gap-24">
            
            {/* Expertise */}
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-heading font-bold text-gray-900 mb-8">Clinical Expertise</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {EXPERTISE.map((item, idx) => (
                    <span 
                      key={idx}
                      className="px-6 py-3 bg-gray-50 text-gray-700 rounded-full text-sm font-semibold border border-gray-100 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all cursor-default shadow-sm hover:shadow-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Timeline */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-heading font-bold text-gray-900">Professional Journey</h3>
                </div>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                  {TIMELINE.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md group-hover:scale-110 transition-transform">
                        <CheckCircle2 size={18} />
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow text-left">
                        <span className="font-bold text-accent text-sm tracking-wide uppercase mb-1 block">{item.year}</span>
                        <h4 className="font-heading font-bold text-gray-900 text-xl mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY PATIENTS TRUST & PROMISE */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">Why Patients Trust Dr. Chugh</h3>
            <p className="text-gray-600 text-lg">Delivering world-class urological care with a steadfast commitment to patient well-being and clinical excellence.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {TRUST_REASONS.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  {reason.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h4>
                <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Patient Promise Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-[#0E5B9E] p-12 md:p-16 rounded-[3rem] text-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <svg className="w-16 h-16 text-accent/40 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium text-white leading-relaxed mb-8">
                "My goal is not only to treat disease but to help every patient regain confidence, comfort, and quality of life through personalized kidney and urology care."
              </h3>
              <p className="text-accent font-bold tracking-widest uppercase text-sm">The Patient Promise</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-gray-50 p-10 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
            
            <div className="text-center lg:text-left max-w-xl">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                Take the First Step Towards Better Kidney & Urology Health
              </h3>
              <p className="text-gray-600 text-lg">
                Book a consultation today for expert diagnosis and advanced treatment options.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 w-full lg:w-auto shrink-0 mt-6 lg:mt-0">
              <Link 
                href="/#book"
                className="whitespace-nowrap shrink-0 flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg group"
              >
                Book Appointment
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="tel:+917065160017"
                className="whitespace-nowrap shrink-0 flex items-center justify-center gap-2 bg-white text-gray-900 border-2 border-gray-200 hover:border-primary hover:text-primary px-8 py-4 rounded-xl font-bold transition-all shadow-sm"
              >
                <Phone size={18} />
                Call Now
              </Link>
              
              <Link 
                href="https://wa.me/917065160017?text=Hello,%20I%20would%20like%20to%20book%20a%20consultation"
                target="_blank"
                className="whitespace-nowrap shrink-0 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                WhatsApp
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
