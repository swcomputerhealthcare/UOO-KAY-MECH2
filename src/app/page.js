"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LogoMarquee from "@/components/LogoMarquee";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home() {
  const homeRef = useRef(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ManufacturingBusiness",
        "@id": "https://uookaymechindustries.com/#business",
        "name": "UOO KAY MECH INDUSTRIES",
        "description": "Precision Machined Components & Industrial Fabrication since 2004 in Maharashtra, India.",
        "image": "https://uookaymechindustries.com/images/products/machines and fabricated components 1.jpg",
        "telephone": "9987849605",
        "email": "uookaymechindustries@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "W-184, MIDC Phase II, Kalyan-Shilphata Road, Dombivli East",
          "addressLocality": "Dombivli East",
          "addressRegion": "Maharashtra",
          "postalCode": "421204",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "19.2127571",
          "longitude": "73.1092288"
        },
        "foundingDate": "2004",
        "founder": {
          "@type": "Person",
          "name": "Sandeepkumar K. Singh"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://uookaymechindustries.com/#website",
        "url": "https://uookaymechindustries.com",
        "name": "UOO KAY MECH INDUSTRIES",
        "publisher": {
          "@id": "https://uookaymechindustries.com/#business"
        }
      }
    ]
  };

  useGSAP(() => {
    // 1. Hero Section Load Stagger
    gsap.from(".hero-reveal", {
      opacity: 0,
      y: 15,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    });

    // 2. Step Sections Scroll Reveal
    const stepSections = gsap.utils.toArray(".step-section");
    stepSections.forEach((sec) => {
      // Image reveal
      const img = sec.querySelector(".step-image-wrap");
      if (img) {
        gsap.from(img, {
          opacity: 0,
          scale: 0.98,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });
      }

      // Text reveal
      const txt = sec.querySelector(".step-text-reveal");
      if (txt) {
        gsap.from(txt, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });
      }
    });

    // 3. Testimonials Section Reveal
    gsap.from(".testimonial-reveal-header", {
      opacity: 0,
      y: 15,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    gsap.from(".testimonial-col", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });
  }, { scope: homeRef });

  return (
    <div ref={homeRef} className="flex flex-col min-h-screen bg-brand-bg select-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-brand-bg pt-28 pb-20 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          {/* Tagline */}
          <span className="text-[10px] font-mono font-bold text-[#666666] tracking-[0.25em] uppercase block hero-reveal">
            [ EST. 2004 — MAHARASHTRA, INDIA ]
          </span>

          {/* Simple, Bold, Industrial H1 */}
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[1.05] text-[#151515] hero-reveal">
            Custom Fabrication<br />
            For Industrial Operations
          </h1>

          <p className="text-sm sm:text-base text-[#666666] max-w-2xl mx-auto leading-relaxed font-sans hero-reveal">
            Manufacturing components, assemblies and engineered solutions for Indian industry.
          </p>

          {/* Flat Industrial CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 hero-reveal">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[#C46A2D] hover:bg-[#A0531E] text-white font-heading font-bold px-8 py-3.5 text-xs uppercase tracking-wider transition-colors duration-200 text-center"
            >
              Request a Quote
            </Link>
            <Link
              href="/infrastructure"
              className="w-full sm:w-auto border border-[#D9D9D9] bg-[#F6F5F3] hover:bg-[#EAE8E4] text-[#151515] font-heading font-bold px-8 py-3.5 text-xs uppercase tracking-wider transition-colors duration-200 text-center"
            >
              Explore Infrastructure
            </Link>
          </div>

        </div>
      </section>

      {/* 2. Trust Registry Section */}
      <section className="bg-white border-y border-[#D9D9D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-[10px] font-mono font-bold text-[#666666] uppercase tracking-[0.2em]">
            [ APPROVED SUPPLIER REGISTRY ]
          </span>
          <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-items-center md:justify-end gap-x-8 md:gap-x-12 gap-y-4 opacity-75 w-full md:w-auto text-center font-heading font-bold text-xs tracking-widest text-[#151515]">
            <span className="flex items-center justify-center min-h-[32px]">LARSEN & TOUBRO</span>
            <span className="flex items-center justify-center min-h-[32px]">EMERSON INDIA</span>
            <span className="flex items-center justify-center min-h-[32px]">GODFREY PHILLIPS</span>
            <span className="flex items-center justify-center min-h-[32px]">PARLE ELIZABETH</span>
          </div>
        </div>
      </section>

      {/* 3. Section 1: CNC Machining (Large Image / Small Text Block) */}
      <section className="py-24 bg-white border-b border-[#D9D9D9] step-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Large Image (col-span-8) */}
            <div className="lg:col-span-8 border border-[#D9D9D9] p-1 bg-[#F6F5F3] step-image-wrap">
              <div className="relative w-full h-[350px] sm:h-[480px]">
                <Image
                  src="/images/products/machine and fabricated component3.jpg"
                  alt="CNC Machining center at Thane workshop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>
            </div>
            {/* Small Text Block (col-span-4) */}
            <div className="lg:col-span-4 space-y-6 step-text-reveal">
              <span className="font-mono text-xs font-bold text-[#C46A2D] uppercase tracking-wider block">01 / CNC MACHINING</span>
              <h2 className="font-heading text-4xl font-bold uppercase text-[#151515] leading-none tracking-tight">
                High-Tolerance Component Fabrication
              </h2>
              <p className="text-[#666666] text-sm leading-relaxed font-sans">
                Our workshop operates high-end MCV450 machining centers and CNC turning platforms. We manufacture custom shafts, pinions, and gears to tolerances down to ±0.01 mm, meeting complex blueprint requirements for Tier-1 industrial buyers.
              </p>
              <div className="pt-2">
                <Link
                  href="/infrastructure"
                  className="inline-block bg-[#151515] hover:bg-[#333333] text-white font-heading font-bold px-6 py-3 text-xs uppercase tracking-wider transition-colors duration-200"
                >
                  View Facility Tech Spec
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section 2: Technical Drawing & CAD (Large Text Block / Small Image) */}
      <section className="py-24 bg-[#F6F5F3] border-b border-[#D9D9D9] step-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Large Text Block (col-span-5) */}
            <div className="lg:col-span-5 space-y-6 step-text-reveal">
              <span className="font-mono text-xs font-bold text-[#C46A2D] uppercase tracking-wider block">02 / CAD DRAFTING</span>
              <h2 className="font-heading text-4xl font-bold uppercase text-[#151515] leading-none tracking-tight">
                Engineering Feasibility Analysis
              </h2>
              <p className="text-[#666666] text-sm leading-relaxed font-sans">
                Every component is verified against chemical grades, linear tolerances, and process charts. Submit your 2D drawings or 3D files for rapid feasibility review, assuring correct structural tolerances before tooling setup.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block bg-[#151515] hover:bg-[#333333] text-white font-heading font-bold px-6 py-3 text-xs uppercase tracking-wider transition-colors duration-200"
                >
                  Submit Drawings
                </Link>
              </div>
            </div>
            {/* Small Image (col-span-7) */}
            <div className="lg:col-span-7 border border-[#D9D9D9] p-1 bg-white step-image-wrap">
              <div className="relative w-full h-[350px] sm:h-[450px]">
                <Image
                  src="/images/products/weep tubes cup.jpg"
                  alt="Precision machined turned weep cups"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section 3: Dimensional Inspection (Large Image / Small Text Block) */}
      <section className="py-24 bg-white border-b border-[#D9D9D9] step-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Large Image (col-span-8) */}
            <div className="lg:col-span-8 border border-[#D9D9D9] p-1 bg-[#F6F5F3] step-image-wrap">
              <div className="relative w-full h-[350px] sm:h-[480px]">
                <Image
                  src="/images/products/Picture15.jpg"
                  alt="Quality metrology checking on seal plate flange"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </div>
            {/* Small Text Block (col-span-4) */}
            <div className="lg:col-span-4 space-y-6 step-text-reveal">
              <span className="font-mono text-xs font-bold text-[#C46A2D] uppercase tracking-wider block">03 / METROLOGY</span>
              <h2 className="font-heading text-4xl font-bold uppercase text-[#151515] leading-none tracking-tight">
                Calibrated Quality Inspections
              </h2>
              <p className="text-[#666666] text-sm leading-relaxed font-sans">
                We perform thread plug testing, bore gauge inspections, and granite plate flatness measurements. Our facility uses Mitutoyo digital height gauges and Baker calibrated instruments to confirm dimensional compliance for heavy machinery components.
              </p>
              <div className="pt-2">
                <Link
                  href="/quality"
                  className="inline-block bg-[#151515] hover:bg-[#333333] text-white font-heading font-bold px-6 py-3 text-xs uppercase tracking-wider transition-colors duration-200"
                >
                  Review Quality Standards
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section 4: Capabilities (Large Text Block / Small Image) */}
      <section className="py-24 bg-[#F6F5F3] border-b border-[#D9D9D9] step-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Large Text Block (col-span-6) */}
            <div className="lg:col-span-6 space-y-8 step-text-reveal">
              <div>
                <span className="font-mono text-xs font-bold text-[#C46A2D] uppercase tracking-wider block mb-2">04 / CAPABILITIES</span>
                <h2 className="font-heading text-4xl font-bold uppercase text-[#151515] leading-none tracking-tight">
                  Component & Custom Fabrication Range
                </h2>
              </div>
              <p className="text-[#666666] text-sm leading-relaxed font-sans">
                Uoo Kay Mech Industries manufactures an extensive range of industrial assemblies, machine guards, and custom fabrication parts in Mild Steel (MS), Stainless Steel (SS), and Aluminum.
              </p>
              
              {/* Technical catalog spec list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-[#D9D9D9] font-sans">
                <div>
                  <h4 className="font-heading font-bold text-base text-[#151515] uppercase tracking-wide">Precision Parts</h4>
                  <p className="text-xs text-[#666666] mt-1">Crane shafts, pinion shafts, gears, expanders, and weep tube cups.</p>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#151515] uppercase tracking-wide">Safety Guard Systems</h4>
                  <p className="text-xs text-[#666666] mt-1">SS and MS machine covers, safety shields, and frame encasings.</p>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#151515] uppercase tracking-wide">Industrial Access</h4>
                  <p className="text-xs text-[#666666] mt-1">Heavy-duty industrial ladders and platforms built in MS, SS, and Aluminum.</p>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#151515] uppercase tracking-wide">Structural Assembly</h4>
                  <p className="text-xs text-[#666666] mt-1">Welded structural works, base plates, and fixtures per CAD layout.</p>
                </div>
              </div>
            </div>
            
            {/* Small Image (col-span-6) */}
            <div className="lg:col-span-6 border border-[#D9D9D9] p-1 bg-white step-image-wrap">
              <div className="relative w-full h-[350px] sm:h-[450px]">
                <Image
                  src="/images/products/machine and fabricated component.jpg"
                  alt="Custom fabricated base plates and machine components"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Client Logo Marquee Section */}
      <section className="bg-white border-b border-[#D9D9D9] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <span className="font-mono text-xs font-bold text-[#666666] uppercase tracking-widest block">
            [ INDUSTRIAL PARTNERS & AUDITS ]
          </span>
        </div>
        <LogoMarquee />
      </section>

      {/* 8. Testimonials Section (No cards, flat columns) */}
      <section className="py-24 bg-white testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 border-b border-[#D9D9D9] pb-6 testimonial-reveal-header">
            <span className="font-mono text-xs font-bold text-[#C46A2D] uppercase tracking-wider block mb-2">
              / PARTNER COMPLIANCE FEEDBACK
            </span>
            <h2 className="font-heading text-4xl font-bold text-[#151515] uppercase tracking-wide">
              Procurement & Engineering Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-sans font-sans">
            
            {/* Testimonial 1 */}
            <div className="space-y-6 md:border-r md:border-[#D9D9D9] md:pr-8 testimonial-col">
              <blockquote className="text-[#151515] text-sm leading-relaxed font-semibold">
                &ldquo;Uoo Kay Mech has been our approved supplier for machined shafts and assemblies since 2010. Their compliance with detailed engineering blueprints is impeccable.&rdquo;
              </blockquote>
              <div className="pt-2 border-t border-[#D9D9D9] max-w-xs">
                <h5 className="text-xs font-bold text-[#151515] uppercase tracking-wider">Larsen & Toubro Ltd.</h5>
                <span className="text-[10px] text-[#666666] font-mono uppercase tracking-wider mt-1 block">Procurement Division</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="space-y-6 md:border-r md:border-[#D9D9D9] md:px-8 testimonial-col">
              <blockquote className="text-[#151515] text-sm leading-relaxed font-semibold">
                &ldquo;The quality of sheet metal covers and machine safety guards they manufactured for our automation rigs exceeded our safety audit checklists. On-time delivery.&rdquo;
              </blockquote>
              <div className="pt-2 border-t border-[#D9D9D9] max-w-xs">
                <h5 className="text-xs font-bold text-[#151515] uppercase tracking-wider">Emerson India Pvt. Ltd.</h5>
                <span className="text-[10px] text-[#666666] font-mono uppercase tracking-wider mt-1 block">QA & Safety Team</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="space-y-6 md:pl-8 testimonial-col">
              <blockquote className="text-[#151515] text-sm leading-relaxed font-semibold">
                &ldquo;We have sourced spur gears and custom pinions from UOO KAY MECH. The module teeth tolerances are tight, resulting in quiet and smooth power transmission.&rdquo;
              </blockquote>
              <div className="pt-2 border-t border-[#D9D9D9] max-w-xs">
                <h5 className="text-xs font-bold text-[#151515] uppercase tracking-wider">Godfrey Phillips India</h5>
                <span className="text-[10px] text-[#666666] font-mono uppercase tracking-wider mt-1 block">Plant Engineering</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}