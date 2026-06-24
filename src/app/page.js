"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LogoMarquee from "@/components/LogoMarquee";
import { shouldAnimate } from "@/lib/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const homeRef = useRef(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ManufacturingBusiness",
        "@id": "https://uookaymechindustries.com/#business",
        "name": "UOO Kay Mech Industries",
        "description": "UOO Kay Mech Industries provides industrial fabrication, precision machining, stainless steel fabrication, tooling, dies, fixtures and custom engineering solutions in Thane, Maharashtra.",
        "image": "https://uookaymechindustries.com/images/products/machines and fabricated components 1.webp",
        "telephone": ["+91 99878 49605", "+91 98330 53809"],
        "email": "uookaymechindustries@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "08 Pomal Industrial Estate, Kolshet Road",
          "addressLocality": "Thane",
          "addressRegion": "Maharashtra",
          "postalCode": "400607",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 19.228591,
          "longitude": 72.9854787
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
        "name": "UOO Kay Mech Industries",
        "publisher": {
          "@id": "https://uookaymechindustries.com/#business"
        }
      }
    ]
  };

  useGSAP(() => {
    // Check if the user prefers reduced motion
    if (!shouldAnimate()) {
      // Set all animated elements to fully visible immediately
      gsap.set(".hero-title-word, .counter-val", { opacity: 1, y: 0, scale: 1 });
      const stats = document.querySelectorAll(".counter-val");
      stats.forEach(el => el.textContent = el.dataset.target);
      return;
    }

    // 1. Page Load Animation Timeline (Restrained & snappy, completes under 1.2s)
    const loadTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Desktop top bar & header slide down
    loadTl.fromTo(".fixed.top-0.left-0.w-full.h-10",
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4 },
      0
    );
    loadTl.fromTo(".staggered-menu-header",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4 },
      0.08
    );

    // Logo & company text fade-in
    loadTl.fromTo(".sm-logo",
      { opacity: 0 },
      { opacity: 1, duration: 0.3 },
      0.15
    );

    // Hero title line-by-line stagger (using split words)
    loadTl.fromTo(".hero-established",
      { opacity: 0, x: -15 },
      { opacity: 1, x: 0, duration: 0.4 },
      0.2
    );
    loadTl.fromTo(".hero-company-label",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4 },
      0.25
    );
    loadTl.fromTo(".hero-title-word",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, stagger: 0.03, duration: 0.5 },
      0.3
    );
    loadTl.fromTo(".hero-sub",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4 },
      0.55
    );
    loadTl.fromTo(".hero-desc",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5 },
      0.65
    );

    // Hero image scales down and settles into view (from 1.06 to 1)
    loadTl.fromTo(".hero-image-wrap",
      { scale: 1.06, opacity: 0 },
      { scale: 1, opacity: 0.9, duration: 0.9 },
      0.3
    );

    // CTA buttons fade up after text
    loadTl.fromTo(".hero-cta-btn",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, stagger: 0.08, duration: 0.4 },
      0.75
    );

    // 2. Company Experience Strip: Count-up animation once
    gsap.fromTo(".counter-val",
      { textContent: 0 },
      {
        textContent: (i, target) => target.dataset.target,
        duration: 1.6,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: ".stats-strip-container",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );

    // 3. Step Sections: Unified scroll reveals (triggers when 15% of section enters viewport)
    const stepSections = gsap.utils.toArray(".step-section");
    stepSections.forEach((sec) => {
      // Image reveal: scale 1.06 -> 1, opacity 0 -> 1, duration 1.0s, ease power3.out
      const img = sec.querySelector(".step-image-wrap");
      if (img) {
        gsap.fromTo(img,
          { opacity: 0, scale: 1.06 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Text elements reveal: y 40 -> 0, opacity 0 -> 1, duration 0.8s, ease power3.out, stagger 0.08
      const txtItems = sec.querySelectorAll(".step-text-reveal > *");
      if (txtItems.length) {
        gsap.fromTo(txtItems,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    // 4. Testimonials Section Stagger Reveal
    gsap.fromTo(".testimonial-reveal-header",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".testimonial-col",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, { scope: homeRef });

  return (
    <div ref={homeRef} className="flex flex-col min-h-screen bg-brand-bg select-none overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-[#F6F7F8] pt-32 pb-24 border-b border-[#D7DDE5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <span className="text-[10px] font-mono font-bold text-[#5E6673] tracking-[0.25em] uppercase block hero-established opacity-0">
                [ ESTABLISHED 2004 — THANE, INDIA ]
              </span>
              
              <div className="space-y-4">
                <span className="text-xs sm:text-sm font-bold text-[#D9893A] tracking-wider uppercase block hero-company-label opacity-0">
                  UOO KAY MECH INDUSTRIES
                </span>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[1.1] text-[#17375E]">
                  {"Precision Fabrication & Engineering Solutions".split(" ").map((w, idx) => (
                    <span key={idx} className="inline-block overflow-hidden mr-[0.25em] vertical-align-bottom">
                      <span className="inline-block hero-title-word opacity-0 will-change-transform">
                        {w}
                      </span>
                    </span>
                  ))}
                </h1>
                <p className="text-sm sm:text-base font-bold text-[#5E6673] uppercase tracking-wide hero-sub opacity-0">
                  Serving Industrial Clients Since 2004
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#5E6673] max-w-xl leading-relaxed font-sans font-medium hero-desc opacity-0">
                Over two decades of expertise manufacturing heavy-duty machine safety guards, precision machined components, industrial access platforms, and custom welded structural assemblies for India&apos;s Tier-1 industrial enterprises.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto bg-[#D9893A] hover:bg-[#c57529] text-white font-heading font-bold px-8 py-4 text-xs uppercase tracking-wider text-center hero-cta-btn premium-btn-hover opacity-0"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/products"
                  className="w-full sm:w-auto border border-[#17375E] text-[#17375E] hover:bg-[#17375E] hover:text-white font-heading font-bold px-8 py-4 text-xs uppercase tracking-wider text-center hero-cta-btn premium-btn-hover opacity-0"
                >
                  View Capabilities
                </Link>
              </div>
            </div>

            {/* Right Graphic / Photo */}
            <div className="lg:col-span-5 border border-[#D7DDE5] p-1 bg-white hero-image-wrap opacity-0 will-change-transform">
              <div className="relative w-full h-[320px] sm:h-[400px]">
                <Image
                  src="/images/products/machines and fabricated components 1.webp"
                  alt="Precision engineered metal fabrication workshop of UOO Kay Mech Industries"
                  fill
                  className="object-cover grayscale opacity-90 transition-all duration-500 hover:grayscale-0"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                
                {/* Technical Overlay Badges */}
                <div className="absolute bottom-4 left-4 bg-[#17375E] text-[#D7DDE5] text-[9px] font-mono py-1.5 px-3 uppercase tracking-wider border border-[#D7DDE5]/30">
                  TOLERANCES: TO ±0.01 mm
                </div>
                <div className="absolute top-4 right-4 bg-white/95 text-[#161616] text-[9px] font-mono py-1.5 px-3 uppercase tracking-wider border border-[#D7DDE5] shadow-sm">
                  MATERIALS: SS | MS | AL
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Company Experience Strip */}
      <section className="bg-[#17375E] text-[#D7DDE5] border-b border-[#D7DDE5]/20 py-10 stats-strip-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#D7DDE5]/20">
            <div className="space-y-1">
              <span className="font-heading text-4xl sm:text-5xl font-bold text-[#D9893A] block">
                <span className="counter-val" data-target="20">0</span>+
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider block opacity-75">Years Experience</span>
            </div>
            <div className="space-y-1 pt-4 md:pt-0">
              <span className="font-heading text-4xl sm:text-5xl font-bold text-[#D9893A] block">
                <span className="counter-val" data-target="2013">0</span>
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider block opacity-75">Registered Company</span>
            </div>
            <div className="space-y-1 pt-4 md:pt-0">
              <span className="font-heading text-4xl sm:text-5xl font-bold text-[#D9893A] block">
                <span className="counter-val" data-target="100">0</span>+
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider block opacity-75">Projects Delivered</span>
            </div>
            <div className="space-y-1 pt-4 md:pt-0">
              <span className="font-heading text-4xl sm:text-5xl font-bold text-[#D9893A] block">
                <span className="counter-val" data-target="24">0</span>/7
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider block opacity-75">Engineering Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Approved Supplier Registry Section */}
      <section className="bg-white border-b border-[#D7DDE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-[10px] font-mono font-bold text-[#5E6673] uppercase tracking-[0.2em]">
            [ APPROVED SUPPLIER REGISTRY ]
          </span>
          <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-items-center md:justify-end gap-x-8 md:gap-x-12 gap-y-4 opacity-80 w-full md:w-auto text-center font-heading font-bold text-xs tracking-widest text-[#17375E]">
            <span className="flex items-center justify-center min-h-[32px]">LARSEN & TOUBRO</span>
            <span className="flex items-center justify-center min-h-[32px]">EMERSON INDIA</span>
            <span className="flex items-center justify-center min-h-[32px]">GODFREY PHILLIPS</span>
            <span className="flex items-center justify-center min-h-[32px]">PARLE ELIZABETH</span>
          </div>
        </div>
      </section>

      {/* 4. Section 1: CNC Machining */}
      <section className="py-24 bg-white border-b border-[#D7DDE5] step-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8 border border-[#D7DDE5] p-1 bg-[#F6F7F8] step-image-wrap opacity-0 will-change-transform rounded-[24px] overflow-hidden">
              <div className="relative w-full h-[350px] sm:h-[480px]">
                <Image
                  src="/images/products/machine and fabricated component3.webp"
                  alt="CNC machining center facility for high-tolerance component fabrication at UOO Kay Mech Industries"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:col-span-4 space-y-6 step-text-reveal">
              <span className="font-mono text-xs font-bold text-[#D9893A] uppercase tracking-wider block">01 / CNC MACHINING</span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#17375E] leading-tight tracking-tight">
                High-Tolerance Component Fabrication
              </h2>
              <p className="text-[#5E6673] text-sm leading-relaxed font-sans font-medium">
                Our workshop operates high-end MCV450 machining centers and CNC turning platforms. We manufacture custom shafts, pinions, and gears to tolerances down to ±0.01 mm, meeting complex blueprint requirements for Tier-1 industrial buyers.
              </p>
              <div className="pt-2">
                <Link
                  href="/infrastructure"
                  className="inline-block bg-[#17375E] hover:bg-[#D9893A] text-white font-heading font-bold px-6 py-3.5 text-xs uppercase tracking-wider transition-colors duration-200 premium-btn-hover"
                >
                  View Facility Tech Spec
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section 2: Technical Drawing & CAD */}
      <section className="py-24 bg-[#F6F7F8] border-b border-[#D7DDE5] step-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6 step-text-reveal">
              <span className="font-mono text-xs font-bold text-[#D9893A] uppercase tracking-wider block">02 / CAD DRAFTING</span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#17375E] leading-tight tracking-tight">
                Engineering Feasibility Analysis
              </h2>
              <p className="text-[#5E6673] text-sm leading-relaxed font-sans font-medium">
                Every component is verified against chemical grades, linear tolerances, and process charts. Submit your 2D drawings or 3D files for rapid feasibility review, assuring correct structural tolerances before tooling setup.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block bg-[#17375E] hover:bg-[#D9893A] text-white font-heading font-bold px-6 py-3.5 text-xs uppercase tracking-wider transition-colors duration-200 premium-btn-hover"
                >
                  Submit Drawings
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7 border border-[#D7DDE5] p-1 bg-white step-image-wrap opacity-0 will-change-transform rounded-[24px] overflow-hidden">
              <div className="relative w-full h-[350px] sm:h-[450px]">
                <Image
                  src="/images/products/weep tubes cup.webp"
                  alt="Precision machined turned weep cups by UOO Kay Mech Industries"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section 3: Dimensional Inspection */}
      <section className="py-24 bg-white border-b border-[#D7DDE5] step-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8 border border-[#D7DDE5] p-1 bg-[#F6F7F8] step-image-wrap opacity-0 will-change-transform rounded-[24px] overflow-hidden">
              <div className="relative w-full h-[350px] sm:h-[480px]">
                <Image
                  src="/images/products/Picture15.webp"
                  alt="Quality control inspection of machined seal plate flange at UOO Kay Mech Industries"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:col-span-4 space-y-6 step-text-reveal">
              <span className="font-mono text-xs font-bold text-[#D9893A] uppercase tracking-wider block">03 / METROLOGY</span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#17375E] leading-tight tracking-tight">
                Calibrated Quality Inspections
              </h2>
              <p className="text-[#5E6673] text-sm leading-relaxed font-sans font-medium">
                We perform thread plug testing, bore gauge inspections, and granite plate flatness measurements. Our facility uses Mitutoyo digital height gauges and Baker calibrated instruments to confirm dimensional compliance for heavy machinery components.
              </p>
              <div className="pt-2">
                <Link
                  href="/quality"
                  className="inline-block bg-[#17375E] hover:bg-[#D9893A] text-white font-heading font-bold px-6 py-3.5 text-xs uppercase tracking-wider transition-colors duration-200 premium-btn-hover"
                >
                  Review Quality Standards
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Section 4: Capabilities */}
      <section className="py-24 bg-[#F6F7F8] border-b border-[#D7DDE5] step-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-8 step-text-reveal">
              <div>
                <span className="font-mono text-xs font-bold text-[#D9893A] uppercase tracking-wider block mb-2">04 / CAPABILITIES</span>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#17375E] leading-tight tracking-tight">
                  Component & Custom Fabrication Range
                </h2>
              </div>
              <p className="text-[#5E6673] text-sm leading-relaxed font-sans font-medium">
                Uoo Kay Mech Industries manufactures an extensive range of industrial assemblies, machine guards, and custom fabrication parts in Mild Steel (MS), Stainless Steel (SS), and Aluminum.
              </p>
              
              {/* Technical catalog spec list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-[#D7DDE5] font-sans">
                <div className="premium-card-hover border border-transparent hover:border-[#17375E]/12 p-3 rounded-[16px] bg-white/40">
                  <h3 className="font-heading font-bold text-base text-[#17375E] uppercase tracking-wide">Precision Parts</h3>
                  <p className="text-xs text-[#5E6673] mt-1">Crane shafts, pinion shafts, gears, expanders, and weep tube cups.</p>
                </div>
                <div className="premium-card-hover border border-transparent hover:border-[#17375E]/12 p-3 rounded-[16px] bg-white/40">
                  <h3 className="font-heading font-bold text-base text-[#17375E] uppercase tracking-wide">Safety Guard Systems</h3>
                  <p className="text-xs text-[#5E6673] mt-1">SS and MS machine covers, safety shields, and frame encasings.</p>
                </div>
                <div className="premium-card-hover border border-transparent hover:border-[#17375E]/12 p-3 rounded-[16px] bg-white/40">
                  <h3 className="font-heading font-bold text-base text-[#17375E] uppercase tracking-wide">Industrial Access</h3>
                  <p className="text-xs text-[#5E6673] mt-1">Heavy-duty industrial ladders and platforms built in MS, SS, and Aluminum.</p>
                </div>
                <div className="premium-card-hover border border-transparent hover:border-[#17375E]/12 p-3 rounded-[16px] bg-white/40">
                  <h3 className="font-heading font-bold text-base text-[#17375E] uppercase tracking-wide">Structural Assembly</h3>
                  <p className="text-xs text-[#5E6673] mt-1">Welded structural works, base plates, and fixtures per CAD layout.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 border border-[#D7DDE5] p-1 bg-white step-image-wrap opacity-0 will-change-transform rounded-[24px] overflow-hidden">
              <div className="relative w-full h-[350px] sm:h-[450px]">
                <Image
                  src="/images/products/machine and fabricated component.webp"
                  alt="Custom fabricated base frames and steel structures at UOO Kay Mech Industries"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Client Logo Marquee Section */}
      <section className="bg-white border-b border-[#D7DDE5] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <span className="font-mono text-xs font-bold text-[#5E6673] uppercase tracking-widest block">
            [ INDUSTRIAL PARTNERS & AUDITS ]
          </span>
        </div>
        <LogoMarquee />
      </section>

      {/* 9. Testimonials Section */}
      <section className="py-24 bg-white testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 border-b border-[#D7DDE5] pb-6 testimonial-reveal-header">
            <span className="font-mono text-xs font-bold text-[#D9893A] uppercase tracking-wider block mb-2">
              / PARTNER COMPLIANCE FEEDBACK
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#17375E] uppercase tracking-wide leading-tight">
              Procurement & Engineering Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-sans">
            
            {/* Testimonial 1 */}
            <div className="space-y-6 md:border-r md:border-[#D7DDE5] md:pr-8 testimonial-col">
              <blockquote className="text-[#161616] text-sm leading-relaxed font-semibold">
                &ldquo;Uoo Kay Mech has been our approved supplier for machined shafts and assemblies since 2010. Their compliance with detailed engineering blueprints is impeccable.&rdquo;
              </blockquote>
              <div className="pt-2 border-t border-[#D7DDE5] max-w-xs">
                <div className="text-xs font-bold text-[#17375E] uppercase tracking-wider">Larsen & Toubro Ltd.</div>
                <span className="text-[10px] text-[#5E6673] font-mono uppercase tracking-wider mt-1 block">Procurement Division</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="space-y-6 md:border-r md:border-[#D7DDE5] md:px-8 testimonial-col">
              <blockquote className="text-[#161616] text-sm leading-relaxed font-semibold">
                &ldquo;The quality of sheet metal covers and machine safety guards they manufactured for our automation rigs exceeded our safety audit checklists. On-time delivery.&rdquo;
              </blockquote>
              <div className="pt-2 border-t border-[#D7DDE5] max-w-xs">
                <div className="text-xs font-bold text-[#17375E] uppercase tracking-wider">Emerson India Pvt. Ltd.</div>
                <span className="text-[10px] text-[#5E6673] font-mono uppercase tracking-wider mt-1 block">QA & Safety Team</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="space-y-6 md:pl-8 testimonial-col">
              <blockquote className="text-[#161616] text-sm leading-relaxed font-semibold">
                &ldquo;We have sourced spur gears and custom pinions from UOO KAY MECH. The module teeth tolerances are tight, resulting in quiet and smooth power transmission.&rdquo;
              </blockquote>
              <div className="pt-2 border-t border-[#D7DDE5] max-w-xs">
                <div className="text-xs font-bold text-[#17375E] uppercase tracking-wider">Godfrey Phillips India</div>
                <span className="text-[10px] text-[#5E6673] font-mono uppercase tracking-wider mt-1 block">Plant Engineering</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
