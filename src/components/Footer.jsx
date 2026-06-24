import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Award } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F6F7F8] text-[#161616] border-t-2 border-[#17375E] pt-24 pb-12 z-10 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Logo & Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-3.5">
              <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <defs>
                  <linearGradient id="brushedSteelFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F1F5F9" />
                    <stop offset="25%" stopColor="#E2E8F0" />
                    <stop offset="50%" stopColor="#94A3B8" />
                    <stop offset="75%" stopColor="#CBD5E1" />
                    <stop offset="100%" stopColor="#64748B" />
                  </linearGradient>
                  <filter id="acrylicGlowFooter" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="1" dy="1.5" stdDeviation="1" floodColor="#000000" floodOpacity="0.25" />
                  </filter>
                </defs>
                <circle cx="50" cy="50" r="48" stroke="#17375E" strokeWidth="2.5" strokeDasharray="4 2" opacity="0.6" />
                <polygon points="50,12 83,31 83,69 50,88 17,69 17,31" fill="url(#brushedSteelFooter)" stroke="#5E6673" strokeWidth="2.5" />
                <line x1="25" y1="35" x2="75" y2="35" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />
                <line x1="20" y1="50" x2="80" y2="50" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />
                <line x1="25" y1="65" x2="75" y2="65" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />
                <circle cx="50" cy="50" r="30" stroke="#5E6673" strokeWidth="0.5" strokeDasharray="1 3" opacity="0.5" />
                <text x="50" y="58" textAnchor="middle" fill="#17375E" fontSize="32" fontWeight="700" fontFamily="Montserrat, sans-serif" filter="url(#acrylicGlowFooter)">U</text>
                <path d="M35 66 L65 66" stroke="#D9893A" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <div className="flex flex-col">
                <span className="font-heading text-[#17375E] font-bold text-lg sm:text-xl tracking-wider leading-none">
                  UOO KAY MECH
                </span>
                <span className="text-xs sm:text-sm text-[#D9893A] font-semibold tracking-widest uppercase mt-1">
                  Industries
                </span>
              </div>
            </div>
            <p className="text-[#5E6673] text-xs leading-relaxed max-w-sm font-medium">
              Precision Machined Components & Industrial Fabrication. Serving Tier-1 industrial enterprises across India with quality engineering solutions since 2004.
            </p>
            <div className="flex flex-col gap-2 text-xs font-mono font-bold text-[#5E6673]">
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#D9893A]" strokeWidth={1.5} /> GSTIN REGISTERED
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#D9893A]" strokeWidth={1.5} /> MSME CERTIFIED
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#D9893A]" strokeWidth={1.5} /> UDYAM CERTIFICATE
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-xs text-[#161616] mb-6 uppercase tracking-[0.2em] border-b border-[#D7DDE5] pb-3">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Products & Services", href: "/products" },
                { name: "Infrastructure", href: "/infrastructure" },
                { name: "Quality & Certifications", href: "/quality" },
                { name: "Our Clients", href: "/clients" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#5E6673] hover:text-[#D9893A] transition-colors duration-200 block font-heading font-bold text-xs uppercase tracking-wider"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div>
            <h3 className="font-heading font-bold text-xs text-[#161616] mb-6 uppercase tracking-[0.2em] border-b border-[#D7DDE5] pb-3">
              Contact Details
            </h3>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-3.5 items-start">
                <MapPin className="h-5 w-5 text-[#D9893A] shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-[#5E6673] leading-relaxed font-medium text-xs">
                  08 Pomal Industrial Estate, Kolshet Road, Thane – 400607, Maharashtra, India.
                </span>
              </li>
              <li className="flex gap-3.5 items-center">
                <Phone className="h-5 w-5 text-[#D9893A] shrink-0" strokeWidth={1.5} />
                <div className="flex flex-col text-[#5E6673] font-semibold text-xs leading-relaxed">
                  <a href="tel:+919987849605" className="hover:text-[#D9893A] transition-colors">Mobile: +91 99878 49605 (Sandeepkumar)</a>
                  <a href="tel:+919833053809" className="hover:text-[#D9893A] transition-colors mt-0.5">Office: +91 98330 53809</a>
                  <a href="tel:+919821876397" className="hover:text-[#D9893A] transition-colors mt-0.5">Sales Dept: +91 98218 76397</a>
                </div>
              </li>
              <li className="flex gap-3.5 items-center">
                <Mail className="h-5 w-5 text-[#D9893A] shrink-0" strokeWidth={1.5} />
                <a
                  href="mailto:uookaymechindustries@gmail.com"
                  className="text-[#5E6673] hover:text-[#D9893A] break-all transition-colors font-medium text-xs"
                >
                  uookaymechindustries@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Map */}
          <div>
            <h3 className="font-heading font-bold text-xs text-[#161616] mb-6 uppercase tracking-[0.2em] border-b border-[#D7DDE5] pb-3">
              Workshop Location
            </h3>
            
            {/* Symmetrical Outline Map */}
            <div className="border border-[#D7DDE5] p-1 bg-[#F6F7F8]">
              <div className="w-full h-40 overflow-hidden relative">
                <iframe
                  title="Uoo Kay Mech Industries Location Map"
                  src="https://maps.google.com/maps?q=08%20Pomal%20Industrial%20Estate,%20Kolshet%20Road,%20Thane%20-%20400607&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D7DDE5] pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5E6673] gap-4">
          <p className="font-medium" suppressHydrationWarning>
            &copy; {currentYear} UOO KAY MECH INDUSTRIES. Serving Industry Since 2004.
          </p>
          <div className="flex gap-4 font-mono font-bold tracking-wider uppercase text-[10px] text-[#17375E]">
            <span>GSTIN: 27BIRPS2093H1ZN</span>
            <span className="text-[#D7DDE5]">|</span>
            <span>UDYAM-MH-33-0322159</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


