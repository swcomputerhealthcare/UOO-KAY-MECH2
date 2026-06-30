import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Award } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-[#F6F7F8] text-[#161616] border-t-2 border-[#14429E] pt-16 pb-8 z-10 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footerGrid mb-16">
          
          {/* Column 1: Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="select-none block" style={{ marginLeft: "-10px" }} aria-label="Logo">
              <div className="relative w-[64px] h-[64px] flex-shrink-0">
                <Image
                  src="/uk-mech-v3.png"
                  alt="UK MECH Logo"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </Link>
            
            <p className="text-[#5E6673] text-xs leading-relaxed max-w-sm font-medium mt-2">
              Precision machining and engineering solutions serving Tier-1 industrial enterprises across India since 2004.
            </p>
            
            <div className="flex flex-col gap-2 text-xs font-mono font-bold text-[#5E6673] mt-6">
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#EC6713]" strokeWidth={1.5} /> GSTIN REGISTERED
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#EC6713]" strokeWidth={1.5} /> MSME CERTIFIED
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#EC6713]" strokeWidth={1.5} /> UDYAM CERTIFICATE
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
                    className="text-[#5E6673] hover:text-[#EC6713] transition-colors duration-200 block font-heading font-bold text-xs uppercase tracking-wider"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="font-heading font-bold text-xs text-[#161616] mb-6 uppercase tracking-[0.2em] border-b border-[#D7DDE5] pb-3">
              Contact Details
            </h3>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-3.5 items-start">
                <MapPin className="h-5 w-5 text-[#EC6713] shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-[#5E6673] leading-relaxed font-medium text-xs">
                  08 Pomal Industrial Estate, Kolshet Road, Thane – 400607, Maharashtra, India.
                </span>
              </li>
              <li className="flex gap-3.5 items-center">
                <Phone className="h-5 w-5 text-[#EC6713] shrink-0" strokeWidth={1.5} />
                <div className="flex flex-col text-[#5E6673] font-semibold text-xs leading-relaxed">
                  <a href="tel:+919987849605" className="hover:text-[#EC6713] transition-colors">Mobile: +91 99878 49605 (Sandeepkumar)</a>
                  <a href="tel:+919833053809" className="hover:text-[#EC6713] transition-colors mt-0.5">Office: +91 98330 53809</a>
                </div>
              </li>
              <li className="flex gap-3.5 items-center">
                <Mail className="h-5 w-5 text-[#EC6713] shrink-0" strokeWidth={1.5} />
                <a
                  href="mailto:uookaymechindustries@gmail.com"
                  className="text-[#5E6673] hover:text-[#EC6713] break-all transition-colors font-medium text-xs"
                >
                  uookaymechindustries@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Workshop Location */}
          <div>
            <h3 className="font-heading font-bold text-xs text-[#161616] mb-6 uppercase tracking-[0.2em] border-b border-[#D7DDE5] pb-3">
              Workshop Location
            </h3>
            
            <div className="space-y-3">
              <div className="footerMap">
                <iframe
                  title="UK Mech Industries Location Map"
                  src="https://maps.google.com/maps?q=19.22867202758789,72.98545837402344&z=17&hl=en&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
              <a
                href="https://maps.google.com/maps?q=19.22867202758789%2C72.98545837402344&z=17&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center border border-[#14429E] text-[#14429E] hover:bg-[#14429E] hover:text-white font-heading font-bold text-[10px] uppercase tracking-wider py-1.5 transition-all duration-200"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footerBottom">
          <p className="font-medium text-xs text-[#5E6673]" suppressHydrationWarning>
            &copy; {currentYear} UK MECH INDUSTRIES. Serving Industry Since 2004.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 font-mono font-bold tracking-wider uppercase text-[10px] text-[#14429E]">
            <span>GSTIN: 27BIRPS2093H1ZN</span>
            <span className="hidden sm:inline text-[#D7DDE5]">|</span>
            <span>UDYAM-MH-33-0322159</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
