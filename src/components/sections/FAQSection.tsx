"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "Do I need a referral to see Dr. D.K Chughh?",
    answer: "No, a referral is not mandatory. You can directly book an appointment for a consultation. However, if you have previous medical records or scans, please bring them along."
  },
  {
    question: "How long does it take to recover from laser stone surgery?",
    answer: "Laser stone surgery (like RIRS) is minimally invasive. Most patients go home the same day or the next day and can resume normal activities within 2 to 3 days."
  },
  {
    question: "Is robotic surgery safe?",
    answer: "Yes, robotic surgery is highly safe and often preferred for complex urological procedures. It offers greater precision, less bleeding, and faster recovery compared to traditional open surgery."
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring any previous medical records, ultrasound/CT scans, blood test reports, a list of current medications, and a valid ID."
  },
  {
    question: "Do you accept medical insurance?",
    answer: "Yes, we are empaneled with all major health insurance providers and TPAs. Our cashless desk will assist you with the pre-authorization process."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 bg-[#F8FBFF]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3 justify-center flex items-center gap-2">
              <span className="w-8 h-px bg-primary/30"></span>
              Patient Queries
              <span className="w-8 h-px bg-primary/30"></span>
            </h2>
            <h3 className="text-3xl lg:text-5xl font-heading font-bold text-text-primary mb-6 leading-tight">
              Frequently Asked Questions
            </h3>
          </motion.div>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-white border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-primary shadow-md' : 'border-gray-200 hover:border-primary/50'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-semibold text-lg ${isOpen ? 'text-primary' : 'text-text-primary'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 text-text-secondary leading-relaxed border-t border-gray-100 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
