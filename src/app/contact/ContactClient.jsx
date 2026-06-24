"use client";

import { Suspense, useRef } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ContactForm from "./ContactForm";
import { shouldAnimate } from "@/lib/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ContactClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (!shouldAnimate()) {
      gsap.set(".con-header-item, .con-info-row, .con-form-wrapper, .con-map-section", { opacity: 1, y: 0 });
      return;
    }

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

    gsap.fromTo(".con-map-section",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".con-map-section",
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-brand-bg py-24 sm:py-32 relative overflow-hidden select-none">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="border-l-2 border-[#D9893A] pl-6 mb-16">
          <span className="text-[10px] font-mono font-bold text-[#5E6673] tracking-[0.25em] uppercase block mb-1">
            [ RFQ & ENQUIRIES ]
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-[#17375E] uppercase tracking-wide con-header-item">
            Contact Us
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Column 1: Info Listing (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4 con-info-row opacity-0">
              <h2 className="font-heading text-2xl font-bold text-[#17375E] uppercase tracking-wide">
                Get In Touch
              </h2>
              <p className="text-[#5E6673] text-sm leading-relaxed font-sans font-medium">
                Have an engineering project, drawing blueprint, or request for quotation? Contact us today. Our engineering team responds within 24 hours.
              </p>
            </div>

            {/* Two-Column Contact Layout (India vs International) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 pt-6 border-t border-[#D7DDE5] con-info-row opacity-0">
              
              {/* Column 1.1: India Contacts */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold text-[#D9893A] tracking-wider uppercase block">
                  {"// Domestic Operations"}
                </span>
                <h3 className="font-heading font-bold text-base text-[#17375E] uppercase">
                  India Contact
                </h3>
                <p className="text-[#5E6673] text-xs leading-relaxed font-medium">
                  08 Pomal Industrial Estate, Kolshet Road, Thane – 400607, Maharashtra, India.
                </p>
                <div className="flex flex-col gap-1 text-xs text-[#5E6673] font-semibold">
                  <a href="tel:+919987849605" className="hover:text-[#D9893A] transition-colors">
                    Mobile: +91 99878 49605 (Sandeepkumar)
                  </a>
                  <a href="tel:+919833053809" className="hover:text-[#D9893A] transition-colors">
                    Office: +91 98330 53809
                  </a>
                  <a href="tel:+919821876397" className="hover:text-[#D9893A] transition-colors">
                    Sales: +91 98218 76397
                  </a>
                </div>
                
                {/* Clickable Action Buttons */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <a
                    href="tel:+919987849605"
                    className="inline-flex items-center gap-1.5 bg-[#17375E] hover:bg-[#1f497d] text-white font-heading font-bold text-[10px] uppercase tracking-wider py-2 px-4 transition-colors duration-200 premium-btn-hover"
                  >
                    <Phone className="h-3 w-3" />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919987849605"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact UOO Kay Mech Industries on WhatsApp"
                    className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba56] text-white font-heading font-bold text-[10px] uppercase tracking-wider py-2 px-4 transition-colors duration-200 premium-btn-hover"
                  >
                    <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Column 1.2: International Enquiries */}
              <div className="space-y-4 border-t sm:border-t-0 lg:border-t sm:border-l lg:border-l-0 border-[#D7DDE5] pt-6 sm:pt-0 lg:pt-6 sm:pl-8 lg:pl-0">
                <span className="text-[10px] font-mono font-bold text-[#D9893A] tracking-wider uppercase block">
                  {"// Overseas Desk"}
                </span>
                <h3 className="font-heading font-bold text-base text-[#17375E] uppercase">
                  International Business
                </h3>
                <p className="text-[#5E6673] text-xs leading-relaxed font-medium">
                  Dedicated desk managing custom fabrication, linear compliance audits, export documentation, and logistics support for overseas clients.
                </p>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-[10px] uppercase text-[#17375E]">
                    Global Enquiries:
                  </h4>
                  <a
                    href="mailto:uookaymechindustries@gmail.com"
                    className="text-xs text-[#5E6673] hover:text-[#D9893A] font-bold transition-colors break-all block"
                  >
                    uookaymechindustries@gmail.com
                  </a>
                </div>
              </div>

            </div>

            {/* Working hours */}
            <div className="border-t border-[#D7DDE5] pt-6 text-xs text-[#5E6673] font-medium font-sans flex gap-3 con-info-row opacity-0">
              <Clock className="h-4 w-4 text-[#D9893A] shrink-0" strokeWidth={1.5} />
              <div>
                <span className="font-heading font-bold text-[#17375E] uppercase text-[10px] block mb-1">Business Operations</span>
                Monday – Saturday: 9:00 AM – 6:00 PM (IST) <br />
                Sunday: Closed
              </div>
            </div>

          </div>

          {/* Column 2: Form */}
          <div id="contact-form" className="lg:col-span-7 scroll-mt-24 con-form-wrapper">
            <Suspense
              fallback={
                <div className="border-t-2 border-[#17375E] pt-6 min-h-[300px] flex items-center justify-center font-sans">
                  <span className="text-xs font-bold text-[#5E6673]">Loading Enquiry Form...</span>
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>

        </div>

        {/* Full-width Map Section */}
        <div className="mt-24 con-map-section opacity-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#D7DDE5] pb-3 mb-6">
            <h2 className="font-heading text-xl font-bold text-[#17375E] uppercase tracking-wide">
              Workshop Location
            </h2>
            <a
              href="https://maps.app.goo.gl/cUsSenREZjZH7TKh7?g_st=awb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-[#17375E] text-[#17375E] hover:bg-[#17375E] hover:text-white font-heading font-bold text-[10px] uppercase tracking-wider py-1.5 px-4 transition-all duration-200 premium-btn-hover"
            >
              Get Directions
            </a>
          </div>
          <div className="border border-[#D7DDE5] p-1 bg-white">
            <div className="w-full h-96 relative">
              <iframe
                title="UOO Kay Mech Industries Google Map"
                src="https://maps.google.com/maps?q=08%20Pomal%20Industrial%20Estate,%20Kolshet%20Road,%20Thane%20-%20400607&t=&z=16&ie=UTF8&iwloc=&output=embed"
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


