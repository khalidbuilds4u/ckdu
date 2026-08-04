"use client";

import { useState } from "react";
import { CheckCircle2, User, Phone, Mail, Calendar, Clock, MapPin, MessageSquare, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

export function TreatmentAppointmentForm({ treatmentName }: { treatmentName: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="appointment" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Benefits */}
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
              Book Your Consultation
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Take the first step towards recovery. Schedule an expert consultation with Dr. D. K. Chugh today.
            </p>
            <div className="space-y-6">
              {[
                "Expert Diagnosis & Consultation",
                "Personalized Treatment Plans",
                "Fast, Priority Appointments",
                "Trusted By Thousands of Patients"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-accent" size={20} />
                  </div>
                  <span className="font-bold text-gray-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100 relative">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Sent Successfully!</h3>
                <p className="text-gray-600">
                  Thank you for contacting Dr. D. K. Chugh. Our team will contact you shortly to confirm your consultation for <strong>{treatmentName}</strong>.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Book Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Appointment</h3>
                
                {/* Pre-filled Treatment */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Treatment Area</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Stethoscope className="text-primary" size={18} />
                    </div>
                    <input 
                      type="text" 
                      value={treatmentName} 
                      readOnly 
                      className="w-full pl-11 pr-4 py-3 bg-primary/5 border border-primary/20 text-primary font-bold rounded-xl focus:outline-none cursor-not-allowed"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Automatically selected based on the page you are viewing.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <User size={18} />
                    </div>
                    <input required type="text" placeholder="Full Name" className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <Phone size={18} />
                    </div>
                    <input required type="tel" placeholder="Phone Number" className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <Calendar size={18} />
                    </div>
                    <input required type="date" className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <MapPin size={18} />
                    </div>
                    <select required className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none">
                      <option value="">Select Clinic Location</option>
                      <option value="chittaranjan-park">Chittaranjan Park, Delhi</option>
                      <option value="noida">Noida, Sector 27</option>
                      <option value="karol-bagh">Karol Bagh, Delhi</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute top-3 left-0 pl-4 pointer-events-none text-gray-400">
                    <MessageSquare size={18} />
                  </div>
                  <textarea rows={3} placeholder="Briefly describe your symptoms (optional)" className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : "Submit Appointment Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
