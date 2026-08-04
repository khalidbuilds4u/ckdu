"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const BLOGS = [
  {
    title: "10 Daily Habits for Optimal Kidney Health",
    excerpt: "Discover simple lifestyle changes that can significantly improve your kidney function and prevent long-term diseases.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop",
    category: "Kidney Health",
    date: "August 12, 2026"
  },
  {
    title: "Understanding Prostate Enlargement Options",
    excerpt: "A comprehensive guide to modern, minimally invasive treatments for BPH and what patients should expect.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=600&auto=format&fit=crop",
    category: "Urology",
    date: "July 28, 2026"
  },
  {
    title: "How to Prevent Recurrent Kidney Stones",
    excerpt: "Dietary adjustments and hydration strategies to ensure you never have to deal with painful kidney stones again.",
    image: "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=600&auto=format&fit=crop",
    category: "Prevention",
    date: "July 15, 2026"
  }
];

export default function BlogSection() {
  return (
    <section id="blogs" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-primary/30"></span>
              Medical Insights
            </h2>
            <h3 className="text-3xl lg:text-5xl font-heading font-bold text-text-primary mb-6 leading-tight">
              Health Blogs & News
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              href="#all-blogs"
              className="inline-flex items-center justify-center gap-2 bg-[#F8FBFF] hover:bg-primary/5 text-primary border border-primary/20 px-6 py-3 rounded-xl font-semibold transition-all"
            >
              View All Articles
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                  {blog.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-xs text-text-secondary mb-3 font-medium">{blog.date}</p>
                <h4 className="font-heading font-bold text-xl text-text-primary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h4>
                <p className="text-text-secondary leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {blog.excerpt}
                </p>
                
                <Link 
                  href="#read"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary mt-auto"
                >
                  Read Article
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
