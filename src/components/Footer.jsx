import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Award } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-[#151515] border-t-2 border-[#151515] pt-24 pb-12 z-10 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Logo & Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Image
                src="/images/products/LOGO.png"
                alt="UOO KAY MECH INDUSTRIES Logo"
                width={36}
                height={36}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading text-[#151515] font-extrabold text-md tracking-wider leading-none">
                  UOO KAY MECH
                </span>
                <span className="text-[9px] text-[#C46A2D] font-semibold tracking-widest uppercase mt-0.5">
                  Industries
                </span>
              </div>
            </div>
            <p className="text-[#666666] text-xs leading-relaxed max-w-sm font-medium">
              Precision Machined Components & Industrial Fabrication. Serving Tier-1 industrial enterprises across India with quality engineering solutions since 2004.
            </p>
            <div className="flex flex-col gap-2 text-xs font-mono font-bold text-[#666666]">
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#C46A2D]" strokeWidth={1.5} /> GSTIN REGISTERED
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#C46A2D]" strokeWidth={1.5} /> MSME CERTIFIED
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#C46A2D]" strokeWidth={1.5} /> UDYAM CERTIFICATE
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-xs text-[#151515] mb-6 uppercase tracking-[0.2em] border-b border-[#D9D9D9] pb-3">
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
                    className="text-[#666666] hover:text-[#C46A2D] transition-colors duration-200 block font-heading font-bold text-xs uppercase tracking-wider"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div>
            <h3 className="font-heading font-bold text-xs text-[#151515] mb-6 uppercase tracking-[0.2em] border-b border-[#D9D9D9] pb-3">
              Contact Details
            </h3>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-3.5 items-start">
                <MapPin className="h-5 w-5 text-[#C46A2D] shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-[#666666] leading-relaxed font-medium text-xs">
                  W-184, MIDC Phase II, Kalyan-Shilphata Road, Dombivli East, Thane, Maharashtra - 421204, India.
                </span>
              </li>
              <li className="flex gap-3.5 items-center">
                <Phone className="h-5 w-5 text-[#C46A2D] shrink-0" strokeWidth={1.5} />
                <div className="flex flex-col text-[#666666] font-semibold text-xs leading-relaxed">
                  <a href="tel:9987849605" className="hover:text-[#C46A2D] transition-colors">9987849605 (Sandeepkumar)</a>
                  <a href="tel:9821876397" className="hover:text-[#C46A2D] transition-colors mt-0.5">9821876397 (Sales Dept)</a>
                </div>
              </li>
              <li className="flex gap-3.5 items-center">
                <Mail className="h-5 w-5 text-[#C46A2D] shrink-0" strokeWidth={1.5} />
                <a
                  href="mailto:uookaymechindustries@gmail.com"
                  className="text-[#666666] hover:text-[#C46A2D] break-all transition-colors font-medium text-xs"
                >
                  uookaymechindustries@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Map */}
          <div>
            <h3 className="font-heading font-bold text-xs text-[#151515] mb-6 uppercase tracking-[0.2em] border-b border-[#D9D9D9] pb-3">
              Workshop Location
            </h3>
            
            {/* Symmetrical Outline Map */}
            <div className="border border-[#D9D9D9] p-1 bg-[#F6F5F3]">
              <div className="w-full h-40 overflow-hidden relative">
                <iframe
                  title="Mech-India Engineers Pvt Ltd Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1884631342674!2d73.1092288!3d19.2127571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795783f2fa647%3A0x463c9cab94923757!2sMech-India%20Engineers%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1718465000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D9D9D9] pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#666666] gap-4">
          <p className="font-medium" suppressHydrationWarning>
            &copy; {currentYear} UOO KAY MECH INDUSTRIES. All Rights Reserved.
          </p>
          <div className="flex gap-4 font-mono font-bold tracking-wider uppercase text-[10px] text-[#151515]">
            <span>GSTIN: 27BIRPS2093H1ZN</span>
            <span className="text-[#D9D9D9]">|</span>
            <span>UDYAM-MH-33-0322159</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
