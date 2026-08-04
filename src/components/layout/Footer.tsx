import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SealLogo from "@/components/ui/SealLogo";

export default function Footer() {
  return (
    <footer className="bg-[#0a2342] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-16 h-16 rounded-xl text-[#a3c9ff] flex items-center justify-center transition-colors">
                <SealLogo size={64} />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-white leading-tight text-xl md:text-2xl group-hover:text-[#a3c9ff] transition-colors">
                  Center for Kidney Disease
                </span>
                <span className="text-[11px] uppercase tracking-[0.15em] text-gray-400 font-semibold mt-1">
                  & Urology Clinic
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              India's Trusted Kidney & Urology Specialist. Providing advanced diagnosis, robotic surgery, and personalized care with over 30 years of excellence.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>} />
              <SocialLink href="#" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>} />
              <SocialLink href="#" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>} />
              <SocialLink href="#" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>} />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/about">About Dr. D. K. Chugh</FooterLink>
              <FooterLink href="/patient-stories">Patient Stories</FooterLink>
              <FooterLink href="/facilities">Advanced Technology</FooterLink>
              <FooterLink href="/facilities#gallery">Hospital Gallery</FooterLink>
              <FooterLink href="/blogs">Health Blogs</FooterLink>
              <FooterLink href="/#contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Column 3: Treatments */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Treatments</h3>
            <ul className="space-y-3">
              <FooterLink href="/treatments/kidney-transplant-surgery">Kidney Transplant Surgery</FooterLink>
              <FooterLink href="/treatments/kidney-cancer-surgery">Kidney Cancer Surgery</FooterLink>
              <FooterLink href="/treatments/kidney-stones">Kidney Stones</FooterLink>
              <FooterLink href="/treatments/reconstructive-kidney-surgery">Reconstructive Surgery</FooterLink>
              <FooterLink href="/treatments/kidney-infections-uti">Kidney Infections & UTI</FooterLink>
              <FooterLink href="/treatments/av-fistula">AV Fistula</FooterLink>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span>Center For Kidney Diseases and Urology,<br/>Chittaranjan Park, New Delhi 110019</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-accent shrink-0" />
                <span>+91 7065160017</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-accent shrink-0" />
                <span>ckdandurologyindia@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock size={18} className="text-accent shrink-0 mt-0.5" />
                <span>
                  Monday - Sunday<br />
                  8:00 AM - 8:00 PM (With Appointment Only)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Center for Kidney Disease & Urology. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-accent transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 text-sm hover:text-accent transition-colors flex items-center gap-2 group">
        <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-accent transition-colors"></span>
        {children}
      </Link>
    </li>
  );
}
