"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Calendar, MessageCircle } from "lucide-react";

export default function AppointmentFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the WhatsApp message
    const message = `Hello, I would like to book an appointment.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Interested In:* ${formData.service || 'General Consultation'}%0A*Preferred Date:* ${formData.date || 'As soon as possible'}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/917065160017?text=${message}`, '_blank');
  };

  return (
    <section id="book" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="bg-[#0B4F8C] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
          
          {/* Background decorations */}
          <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[400px] h-[400px] bg-[#14B8A6]/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 relative z-10">
            {/* Left side: Context/Text */}
            <div className="p-10 md:p-16 lg:p-20 text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                Book Your Consultation Today
              </h2>
              <p className="text-blue-100 text-lg mb-10 max-w-md">
                Take the first step towards better kidney and urological health. Fill out the form, and our team will get back to you immediately via WhatsApp to confirm your appointment.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Call Us Directly</p>
                    <p className="font-bold text-lg">+91 7065160017</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Calendar className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Consultation Hours</p>
                    <p className="font-bold text-lg">Mon - Sun (8:00 AM - 8:00 PM)</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side: Form */}
            <div className="p-10 md:p-16 bg-white/5 backdrop-blur-md border-l border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-200 rounded-xl px-5 py-4 outline-none focus:border-[#14B8A6] focus:bg-white/20 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-blue-100 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-200 rounded-xl px-5 py-4 outline-none focus:border-[#14B8A6] focus:bg-white/20 transition-all"
                    placeholder="Enter your 10-digit number"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-blue-100 mb-2">Interested In</label>
                  <select 
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#0E5B9E] border border-white/20 text-white rounded-xl px-5 py-4 outline-none focus:border-[#14B8A6] appearance-none transition-all"
                  >
                    <option value="">Select a treatment (Optional)</option>
                    <option value="Kidney Transplant Surgery">Kidney Transplant Surgery</option>
                    <option value="Kidney Cancer Surgery">Kidney Cancer Surgery</option>
                    <option value="Kidney Stones">Kidney Stones</option>
                    <option value="Reconstructive Kidney Surgery">Reconstructive Kidney Surgery</option>
                    <option value="Kidney Infections & UTI">Kidney Infections & UTI</option>
                    <option value="AV Fistula">AV Fistula</option>
                    <option value="General Consultation">General Urology Consultation</option>
                    <option value="Second Opinion">Second Opinion</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-blue-100 mb-2">Preferred Date</label>
                  <input 
                    type="date" 
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-5 py-4 outline-none focus:border-[#14B8A6] focus:bg-white/20 transition-all"
                    style={{ colorScheme: 'dark' }}
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#14B8A6] hover:bg-[#11a393] text-white py-4 rounded-xl font-bold transition-all mt-4 group shadow-lg shadow-[#14B8A6]/20"
                >
                  <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                  Book via WhatsApp
                </button>
                <p className="text-xs text-blue-200 text-center mt-3">
                  You will be redirected to WhatsApp to confirm your appointment.
                </p>
                
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
