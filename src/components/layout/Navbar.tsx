"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import SealLogo from "@/components/ui/SealLogo";

const NAV_LINKS = [
  { name: "About", href: "/about" },
  { name: "Treatments", href: "/treatments" },
  { name: "Facilities", href: "/facilities" },
  { name: "Patient Stories", href: "/patient-stories" },
  { name: "Blogs", href: "/blogs" },
  { name: "FAQs", href: "/faqs" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine text color based on route and scroll state
  // If not scrolled and not on homepage, we need white text to contrast with the dark blue PageHeader
  const textColor = (!isScrolled && !isHomePage) ? "text-white" : "text-text-primary";
  const logoTextColor = (!isScrolled && !isHomePage) ? "text-white" : "text-primary";
  const logoSubtextColor = (!isScrolled && !isHomePage) ? "text-white/80" : "text-text-secondary";
  const hoverTextColor = (!isScrolled && !isHomePage) ? "hover:text-blue-200" : "hover:text-primary";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${!isScrolled && !isHomePage ? "text-primary" : "text-primary"}`}>
              <SealLogo size={44} />
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-bold ${logoTextColor} leading-tight text-base sm:text-lg md:text-xl transition-colors max-w-[180px] sm:max-w-none truncate sm:whitespace-normal`}>
                Center for Kidney Disease
              </span>
              <span className={`text-[9px] sm:text-[11px] uppercase tracking-[0.15em] ${logoSubtextColor} font-semibold transition-colors mt-0.5`}>
                & Urology Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative group h-full flex items-center py-6">
                <Link
                  href={link.href}
                  className={`text-sm font-medium ${textColor} ${hoverTextColor} transition-colors relative group-hover:text-accent`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${(!isScrolled && !isHomePage) ? "bg-white" : "bg-accent"} transition-all duration-300 group-hover:w-full rounded-full`}></span>
                </Link>

                {/* MEGA MENU for Treatments */}
                {link.name === "Treatments" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-[#0a192f] rounded-xl shadow-2xl border border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 p-8 cursor-default flex gap-8 z-50">
                    
                    {/* Column 1 */}
                    <div className="flex-1 space-y-8">
                      <div>
                        <Link href="/treatments/kidney-transplant-surgery" className="block border-b border-gray-700/50 pb-2 mb-4 group/heading">
                          <h4 className="text-[#c5a867] font-heading font-bold text-sm tracking-wider uppercase group-hover/heading:text-white transition-colors">Kidney Transplant Surgery</h4>
                        </Link>
                        <ul className="space-y-3">
                          <li><Link href="/treatments/kidney-transplant-surgery" className="text-gray-300 hover:text-white text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-500"></span>Kidney Transplant Surgery</Link></li>
                          <li><Link href="/treatments/kidney-transplant-surgery" className="text-gray-300 hover:text-white text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-500"></span>Kidney Autotransplantation</Link></li>
                          <li><Link href="/treatments/kidney-transplant-surgery" className="text-gray-300 hover:text-white text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-500"></span>Donor Nephrectomy</Link></li>
                        </ul>
                      </div>
                      <div>
                        <Link href="/treatments/kidney-cancer-surgery" className="block border-b border-gray-700/50 pb-2 mb-4 group/heading">
                          <h4 className="text-[#c5a867] font-heading font-bold text-sm tracking-wider uppercase group-hover/heading:text-white transition-colors">Kidney Cancer Surgery</h4>
                        </Link>
                        <ul className="space-y-3">
                          <li><Link href="/treatments/kidney-cancer-surgery" className="text-gray-300 hover:text-white text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-500"></span>Kidney Sparing Surgery</Link></li>
                          <li><Link href="/treatments/kidney-cancer-surgery" className="text-gray-300 hover:text-white text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-500"></span>Partial Nephrectomy</Link></li>
                          <li><Link href="/treatments/kidney-cancer-surgery" className="text-gray-300 hover:text-white text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-500"></span>Radical Nephrectomy</Link></li>
                          <li><Link href="/treatments/kidney-cancer-surgery" className="text-gray-300 hover:text-white text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-500"></span>Bilateral Nephrectomy</Link></li>
                        </ul>
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex-1 space-y-8">
                      <div>
                        <Link href="/treatments/kidney-stones" className="block border-b border-gray-700/50 pb-2 mb-4 group/heading">
                          <h4 className="text-[#c5a867] font-heading font-bold text-sm tracking-wider uppercase group-hover/heading:text-white transition-colors">Kidney Stones</h4>
                        </Link>
                        <ul className="space-y-3">
                          <li><Link href="/treatments/kidney-stones" className="text-gray-300 hover:text-white text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-500"></span>Non-Surgical Treatment</Link></li>
                          <li><Link href="/treatments/kidney-stones" className="text-gray-300 hover:text-white text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-500"></span>Laser Stone Surgery</Link></li>
                          <li><Link href="/treatments/kidney-stones" className="text-gray-300 hover:text-white text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-500"></span>PCNL / Mini PCNL</Link></li>
                          <li><Link href="/treatments/kidney-stones" className="text-gray-300 hover:text-white text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-500"></span>RIRS</Link></li>
                          <li><Link href="/treatments/kidney-stones" className="text-gray-300 hover:text-white text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-500"></span>URSL</Link></li>
                          <li><Link href="/treatments/kidney-stones" className="text-gray-300 hover:text-white text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-500"></span>Laparoscopic Stone Surgery</Link></li>
                          <li><Link href="/treatments/kidney-stones" className="text-gray-300 hover:text-white text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-500"></span>Open Stone Surgery</Link></li>
                        </ul>
                      </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex-1 space-y-8">
                      <div>
                        <Link href="/treatments/reconstructive-kidney-surgery" className="block border-b border-gray-700/50 pb-2 mb-4 group/heading">
                          <h4 className="text-[#c5a867] font-heading font-bold text-sm tracking-wider uppercase group-hover/heading:text-white transition-colors">Reconstructive Kidney Surgery</h4>
                        </Link>
                        <ul className="space-y-3">
                          <li><Link href="/treatments/reconstructive-kidney-surgery" className="text-gray-300 hover:text-white text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-500"></span>Pyeloplasty for PUJO</Link></li>
                          <li><Link href="/treatments/reconstructive-kidney-surgery" className="text-gray-300 hover:text-white text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-500"></span>Kidney Cyst Decortication</Link></li>
                          <li><Link href="/treatments/reconstructive-kidney-surgery" className="text-gray-300 hover:text-white text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-500"></span>Ureterocalicostomy</Link></li>
                          <li><Link href="/treatments/reconstructive-kidney-surgery" className="text-gray-300 hover:text-white text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-500"></span>Ureteroureterostomy</Link></li>
                          <li><Link href="/treatments/reconstructive-kidney-surgery" className="text-gray-300 hover:text-white text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-500"></span>Ureteric Reimplantation</Link></li>
                          <li><Link href="/treatments/reconstructive-kidney-surgery" className="text-gray-300 hover:text-white text-sm flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gray-500"></span>Nephropexy</Link></li>
                        </ul>
                      </div>
                      <div className="pt-2">
                        <Link href="/treatments/kidney-infections-uti" className="text-[#c5a867] font-heading font-bold text-sm tracking-wider uppercase block hover:text-white transition-colors">Kidney Infections & UTI</Link>
                      </div>
                      <div className="pt-2">
                        <Link href="/treatments/av-fistula" className="text-[#c5a867] font-heading font-bold text-sm tracking-wider uppercase block hover:text-white transition-colors">AV Fistula</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/#contact"
              className={`text-sm font-medium ${textColor} ${hoverTextColor} transition-colors`}
            >
              Contact
            </Link>
            <Link
              href="/#book"
              className={`${(!isScrolled && !isHomePage) ? "bg-white text-primary hover:bg-blue-50" : "bg-primary text-white hover:bg-primary-hover"} px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm hover:shadow-md active:scale-95`}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-text-primary py-2 border-b border-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="text-base font-medium text-text-primary py-2 border-b border-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/#book"
                className="bg-primary text-white text-center py-3 rounded-lg text-sm font-semibold mt-2 shadow-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
