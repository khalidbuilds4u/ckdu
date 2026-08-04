"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { TreatmentData } from "@/data/treatments";

// Dynamic Icon Component
const DynamicIcon = ({ name, ...props }: { name: string, [key: string]: any }) => {
  const Icon = (Icons as any)[name];
  return Icon ? <Icon {...props} /> : <Icons.HelpCircle {...props} />;
};

export function TreatmentOverview({ overview }: { overview: TreatmentData["overview"] }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-6 text-gray-600 text-lg leading-relaxed">
            {overview.text.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="bg-primary/5 border border-primary/10 p-8 rounded-3xl">
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Quick Summary</h3>
            <p className="text-gray-700 italic border-l-4 border-accent pl-4">{overview.summary}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TreatmentSymptoms({ symptoms }: { symptoms: TreatmentData["symptoms"] }) {
  if (!symptoms.length) return null;
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-10 text-center">Common Symptoms</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {symptoms.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform group"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <DynamicIcon name={s.icon} size={24} className="text-accent" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm">{s.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TreatmentCauses({ causes }: { causes: TreatmentData["causes"] }) {
  if (!causes.length) return null;
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-10 text-center">What Causes This Condition?</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {causes.map((c, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold">
                {i + 1}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">{c.title}</h4>
                <p className="text-gray-600">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TreatmentOptions({ options }: { options: TreatmentData["options"] }) {
  if (!options.length) return null;
  return (
    <section className="py-20 bg-[#0B4F8C]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Treatment Options</h2>
          <p className="text-blue-100 text-lg">Advanced, customized solutions for optimal recovery.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {options.map((opt, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-transform">
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                {opt.type}
              </span>
              <h4 className="text-xl font-heading font-bold text-gray-900 mb-3">{opt.title}</h4>
              <p className="text-gray-600 leading-relaxed">{opt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TreatmentJourney({ journey }: { journey: TreatmentData["journey"] }) {
  if (!journey.length) return null;
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-16 text-center">Your Treatment Journey</h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
          {journey.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-gray-50 bg-white text-primary font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm">
                {item.step}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow text-left">
                <h4 className="font-heading font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
