"use client";

import { Suspense, useRef } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ContactForm from "./ContactForm";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ContactClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Symmetrical subtle reveals
    gsap.fromTo(".con-header-item",
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }
    );

    gsap.fromTo(".con-info-row",
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.1
      }
    );

    gsap.fromTo(".con-form-wrapper",
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.2
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-brand-bg py-24 sm:py-32 relative overflow-hidden select-none">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="border-l-2 border-[#C46A2D] pl-6 mb-16">
          <span className="text-[10px] font-mono font-bold text-[#666666] uppercase tracking-[0.25em] block mb-1">
            [ RFQ & ENQUIRIES ]
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-[#151515] uppercase tracking-wide con-header-item">
            Contact Us
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Column 1: Info Listing (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-[#151515] uppercase tracking-wide">
                Get In Touch
              </h2>
              <p className="text-[#666666] text-sm leading-relaxed font-sans font-medium">
                Have an engineering project, drawing blueprint, or request for quotation? Contact us today. Our engineering team responds within 24 hours.
              </p>
            </div>

            {/* Info Items (Flat lines and spacing) */}
            <div className="space-y-6">
              {/* Address */}
              <div className="con-info-row border-t border-[#D9D9D9] pt-6 flex gap-4 w-full font-sans">
                <div className="text-[#C46A2D] shrink-0">
                  <MapPin className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-sm uppercase text-[#151515]">Office & Workshop</h4>
                  <p className="text-[#666666] text-xs leading-relaxed font-medium">
                    W-184, MIDC Phase II, Kalyan-Shilphata Road, Dombivli East, Maharashtra - 421204, India.
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="con-info-row border-t border-[#D9D9D9] pt-6 flex gap-4 w-full font-sans">
                <div className="text-[#C46A2D] shrink-0">
                  <Phone className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-sm uppercase text-[#151515]">Call / WhatsApp</h4>
                  <div className="flex flex-col text-xs text-[#666666] font-medium leading-relaxed">
                    <a href="tel:9987849605" className="hover:text-[#C46A2D] transition-colors">9987849605 (Sandeepkumar Singh)</a>
                    <a href="tel:9821876397" className="hover:text-[#C46A2D] transition-colors mt-1">9821876397 (Sales Enquiry)</a>
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div className="con-info-row border-t border-[#D9D9D9] pt-6 flex gap-4 w-full font-sans">
                <div className="text-[#C46A2D] shrink-0">
                  <Mail className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-sm uppercase text-[#151515]">Email Enquiries</h4>
                  <a
                    href="mailto:uookaymechindustries@gmail.com"
                    className="text-xs text-[#666666] hover:text-[#C46A2D] font-medium transition-colors break-all"
                  >
                    uookaymechindustries@gmail.com
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="con-info-row border-t border-[#D9D9D9] pt-6 flex gap-4 w-full font-sans">
                <div className="text-[#C46A2D] shrink-0">
                  <Clock className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-sm uppercase text-[#151515]">Business Hours</h4>
                  <p className="text-[#666666] text-xs leading-relaxed font-medium">
                    Monday – Saturday: 9:00 AM – 6:00 PM <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Form (lg:col-span-7) */}
          <div id="contact-form" className="lg:col-span-7 scroll-mt-24 con-form-wrapper">
            <Suspense
              fallback={
                <div className="border-t-2 border-[#151515] pt-6 min-h-[300px] flex items-center justify-center font-sans">
                  <span className="text-xs font-bold text-[#666666]">Loading Enquiry Form...</span>
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>

        </div>

        {/* Full-width Map Section (Symmetrical layout) */}
        <div className="mt-24">
          <h3 className="font-heading text-xl font-bold text-[#151515] uppercase tracking-wide mb-6 border-b border-[#D9D9D9] pb-3">
            Workshop Location
          </h3>
          <div className="border border-[#D9D9D9] p-1 bg-white">
            <div className="w-full h-96 relative">
              <iframe
                title="Mech-India Engineers Pvt Ltd Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1884631342674!2d73.1092288!3d19.2127571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795783f2fa647%3A0x463c9cab94923757!2sMech-India%20Engineers%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1718465000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-100"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
