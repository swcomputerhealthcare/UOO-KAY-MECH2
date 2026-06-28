"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import LogoMarquee from "@/components/LogoMarquee";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ManufacturingBusiness",
        "@id": "https://uookaymechindustries.com/#business",
        "name": "UK Mech Industries",
        "description": "UK Mech Industries provides precision machining, CNC components, industrial parts and engineering solutions in Thane, Maharashtra.",
        "image": "https://uookaymechindustries.com/images/products/Custom Engineering Assemblies.webp",
        "telephone": ["+91 99878 49605", "+91 98330 53809"],
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
          "latitude": 19.22867202758789,
          "longitude": 72.98545837402344
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
        "name": "UK Mech Industries",
        "publisher": {
          "@id": "https://uookaymechindustries.com/#business"
        }
      }
    ]
  };

  return (
    <div className="flex flex-col bg-brand-bg select-none overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. Hero Section */}
      <section className="heroSection relative bg-[#F6F7F8] border-b border-[#D7DDE5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              className="lg:col-span-7 space-y-8 text-left"
              initial={{ opacity: 0.01, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span 
                className="text-[10px] font-mono font-bold text-[#5E6673] tracking-[0.25em] uppercase block hero-established"
                initial={{ opacity: 0.01, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.55 }}
              >
                [ ESTABLISHED 2004 — THANE, INDIA ]
              </motion.span>
              
              <div className="space-y-4">
                <motion.span 
                  className="text-xs sm:text-sm font-bold text-[#EC6713] tracking-wider uppercase block hero-company-label"
                  initial={{ opacity: 0.01, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.55 }}
                >
                  UK MECH
                </motion.span>
                <motion.h1 
                  className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[1.1] text-[#09285F]"
                  initial={{ opacity: 0.01, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.55 }}
                >
                  Precision Machining & Industrial Engineering Solutions
                </motion.h1>
                <motion.p 
                  className="text-sm sm:text-base font-bold text-[#5E6673] uppercase tracking-wide hero-sub"
                  initial={{ opacity: 0.01, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.55 }}
                >
                  Serving Industrial Clients Since 2004
                </motion.p>
              </div>

              <motion.p 
                className="text-xs sm:text-sm text-[#5E6673] max-w-xl leading-relaxed font-sans font-medium hero-desc"
                initial={{ opacity: 0.01, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.55 }}
              >
                Over two decades of expertise manufacturing precision machined components, CNC parts, custom tooling, dies, and assemblies for India&apos;s Tier-1 industrial enterprises.
              </motion.p>

              {/* CTAs */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center gap-4 pt-2"
                initial={{ opacity: 0.01, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.55 }}
              >
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
                  <Link
                    href="/contact"
                    className="connectBtn"
                  >
                    Connect With Us
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
                  <Link
                    href="/products"
                    className="w-full sm:w-auto border border-[#09285F] text-[#09285F] hover:bg-[#09285F] hover:text-white font-heading font-bold px-8 py-4 text-xs uppercase tracking-wider text-center hero-cta-btn block"
                  >
                    View Services
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Graphic / Photo */}
            <motion.div 
              className="lg:col-span-5 heroImageWrap border border-[#D7DDE5]"
              initial={{ opacity: 0.01, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 1.0, ease: "easeOut" }}
                className="w-full h-full relative"
              >
                <Image
                  src="/images/hero.jpeg"
                  alt="Precision engineered CNC machining workshop of UK Mech Industries"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </motion.div>
              
              {/* Technical Overlay Badges */}
              <motion.div 
                className="absolute bottom-4 left-4 bg-[#09285F] text-[#D7DDE5] text-[9px] font-mono py-1.5 px-3 uppercase tracking-wider border border-[#D7DDE5]/30 z-10"
                initial={{ opacity: 0.01, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                TOLERANCES: TO ±0.01 mm
              </motion.div>
              <motion.div 
                className="absolute top-4 right-4 bg-white/95 text-[#161616] text-[9px] font-mono py-1.5 px-3 uppercase tracking-wider border border-[#D7DDE5] shadow-sm z-10"
                initial={{ opacity: 0.01, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                MATERIALS: SS | MS | AL
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Company Experience Strip */}
      <section className="bg-[#09285F] text-[#D7DDE5] border-b border-[#D7DDE5]/20 py-10 stats-strip-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#D7DDE5]/20">
            <div className="space-y-1">
              <span className="font-heading text-4xl sm:text-5xl font-bold text-[#EC6713] block">
                <span>40</span>+
              </span>
              <span className="text-[10px] font-mono font-bold text-[#D7DDE5] uppercase tracking-wider block">Products Manufactured</span>
            </div>
            <div className="space-y-1 pt-4 md:pt-0">
              <span className="font-heading text-4xl sm:text-5xl font-bold text-[#EC6713] block">
                <span>25</span>+
              </span>
              <span className="text-[10px] font-mono font-bold text-[#D7DDE5] uppercase tracking-wider block">Years Experience</span>
            </div>
            <div className="space-y-1 pt-4 md:pt-0">
              <span className="font-heading text-4xl sm:text-5xl font-bold text-[#EC6713] block">
                <span>500</span>+
              </span>
              <span className="text-[10px] font-mono font-bold text-[#D7DDE5] uppercase tracking-wider block">Projects Delivered</span>
            </div>
            <div className="space-y-1 pt-4 md:pt-0">
              <span className="font-heading text-4xl sm:text-5xl font-bold text-[#EC6713] block">
                <span>100</span>%
              </span>
              <span className="text-[10px] font-mono font-bold text-[#D7DDE5] uppercase tracking-wider block">Quality Inspected</span>
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
          <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-items-center md:justify-end gap-x-8 md:gap-x-12 gap-y-4 w-full md:w-auto text-center font-heading font-bold text-xs tracking-widest text-[#09285F]">
            <span className="flex items-center justify-center min-h-[32px]">LARSEN & TOUBRO</span>
            <span className="flex items-center justify-center min-h-[32px]">EMERSON INDIA</span>
            <span className="flex items-center justify-center min-h-[32px]">GODFREY PHILLIPS</span>
            <span className="flex items-center justify-center min-h-[32px]">PARLE ELIZABETH</span>
          </div>
        </div>
      </section>

      {/* 4. Section 1: CNC Machining */}
      <motion.section 
        className="py-24 bg-white border-b border-[#D7DDE5] step-section"
        initial={{ opacity: 0.01, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              className="lg:col-span-8 homeSecondImageWrap"
              initial={{ opacity: 0.01, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative w-full h-[350px] sm:h-[480px]">
                <Image
                  src="/images/products/cnc-machined-components.webp"
                  alt="CNC machining center facility for highly precision component manufacturing at UK Mech Industries"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  loading="lazy"
                />
              </div>
            </motion.div>
            <motion.div 
              className="lg:col-span-4 space-y-6 step-text-reveal"
              initial={{ opacity: 0.01, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              <span className="font-mono text-xs font-bold text-[#EC6713] uppercase tracking-wider block">01 / CNC MACHINING</span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#09285F] leading-tight tracking-tight">
                High Precision CNC Machined Components
              </h2>
              <p className="text-[#5E6673] text-sm leading-relaxed font-sans font-medium">
                Custom shaft, die, mould, fixture and industrial machining solutions.
              </p>
              <div className="pt-2">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
                  <Link
                    href="/infrastructure"
                    className="inline-block bg-[#09285F] hover:bg-[#EC6713] text-white font-heading font-bold px-6 py-3.5 text-xs uppercase tracking-wider block"
                  >
                    View Facility Tech Spec
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 5. Section 2: Technical Drawing & CAD */}
      <motion.section 
        className="py-24 bg-[#F6F7F8] border-b border-[#D7DDE5] step-section"
        initial={{ opacity: 0.01, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              className="lg:col-span-5 space-y-6 step-text-reveal"
              initial={{ opacity: 0.01, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-mono text-xs font-bold text-[#EC6713] uppercase tracking-wider block">02 / CAD DRAFTING</span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#09285F] leading-tight tracking-tight">
                Engineering Feasibility Analysis
              </h2>
              <p className="text-[#5E6673] text-sm leading-relaxed font-sans font-medium">
                Every component is verified against chemical grades, linear tolerances, and process charts. Submit your 2D drawings or 3D files for rapid feasibility review, assuring correct structural tolerances before tooling setup.
              </p>
              <div className="pt-2">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
                  <Link
                    href="/contact"
                    className="inline-block bg-[#09285F] hover:bg-[#EC6713] text-white font-heading font-bold px-6 py-3.5 text-xs uppercase tracking-wider block"
                  >
                    Submit Drawings
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              className="lg:col-span-7 homeSecondImageWrap"
              initial={{ opacity: 0.01, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              <div className="relative w-full h-[350px] sm:h-[450px]">
                <Image
                  src="/images/products/water-tank-cover.webp"
                  alt="Precision machined turned weep cups by UK Mech Industries"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 6. Section 3: Dimensional Inspection */}
      <motion.section 
        className="py-24 bg-white border-b border-[#D7DDE5] step-section"
        initial={{ opacity: 0.01, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              className="lg:col-span-8 homeSecondImageWrap"
              initial={{ opacity: 0.01, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative w-full h-[350px] sm:h-[480px]">
                <Image
                  src="/images/products/quality-control-flange-inspection.webp"
                  alt="Quality control inspection of machined seal plate flange at UK Mech Industries"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  loading="lazy"
                />
              </div>
            </motion.div>
            <motion.div 
              className="lg:col-span-4 space-y-6 step-text-reveal"
              initial={{ opacity: 0.01, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              <span className="font-mono text-xs font-bold text-[#EC6713] uppercase tracking-wider block">03 / METROLOGY</span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#09285F] leading-tight tracking-tight">
                Calibrated Quality Inspections
              </h2>
              <p className="text-[#5E6673] text-sm leading-relaxed font-sans font-medium">
                We perform thread plug testing, bore gauge inspections, and granite plate flatness measurements. Our facility uses Mitutoyo digital height gauges and Baker calibrated instruments to confirm dimensional compliance for heavy machinery components.
              </p>
              <div className="pt-2">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
                  <Link
                    href="/quality"
                    className="inline-block bg-[#09285F] hover:bg-[#EC6713] text-white font-heading font-bold px-6 py-3.5 text-xs uppercase tracking-wider block"
                  >
                    Review Quality Standards
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 7. Section 4: Capabilities */}
      <motion.section 
        className="py-24 bg-[#F6F7F8] border-b border-[#D7DDE5] step-section"
        initial={{ opacity: 0.01, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              className="lg:col-span-6 space-y-8 step-text-reveal"
              initial={{ opacity: 0.01, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#EC6713] uppercase tracking-wider block mb-2">04 / CAPABILITIES</span>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#09285F] leading-tight tracking-tight">
                  Component & Custom Fabrication Range
                </h2>
              </div>
              <p className="text-[#5E6673] text-sm leading-relaxed font-sans font-medium">
                UK Mech Industries manufactures an extensive range of industrial assemblies, machine guards, and custom fabrication parts in Mild Steel (MS), Stainless Steel (SS), and Aluminum.
              </p>
              
              {/* Technical catalog spec list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-[#D7DDE5] font-sans">
                <motion.div 
                  className="border border-transparent hover:border-[#09285F]/12 p-3 rounded-[16px] bg-white/40"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="font-heading font-bold text-base text-[#09285F] uppercase tracking-wide">Precision Parts</h3>
                  <p className="text-xs text-[#5E6673] mt-1">Crane shafts, pinion shafts, gears, expanders, and weep tube cups.</p>
                </motion.div>
                <motion.div 
                  className="border border-transparent hover:border-[#09285F]/12 p-3 rounded-[16px] bg-white/40"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="font-heading font-bold text-base text-[#09285F] uppercase tracking-wide">Safety Guard Systems</h3>
                  <p className="text-xs text-[#5E6673] mt-1">SS and MS machine covers, safety shields, and frame encasings.</p>
                </motion.div>
                <motion.div 
                  className="border border-transparent hover:border-[#09285F]/12 p-3 rounded-[16px] bg-white/40"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="font-heading font-bold text-base text-[#09285F] uppercase tracking-wide">Industrial Access</h3>
                  <p className="text-xs text-[#5E6673] mt-1">Heavy-duty industrial ladders and platforms built in MS, SS, and Aluminum.</p>
                </motion.div>
                <motion.div 
                  className="border border-transparent hover:border-[#09285F]/12 p-3 rounded-[16px] bg-white/40"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="font-heading font-bold text-base text-[#09285F] uppercase tracking-wide">Structural Assembly</h3>
                  <p className="text-xs text-[#5E6673] mt-1">Welded structural works, base plates, and fixtures per CAD layout.</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-6 homeSecondImageWrap"
              initial={{ opacity: 0.01, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              <div className="relative w-full h-[350px] sm:h-[450px]">
                <Image
                  src="/images/products/machine-and-fabricated-component.webp"
                  alt="Custom machined base frames and steel structures at UK Mech Industries"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

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
      <motion.section 
        className="py-24 bg-white testimonials-section"
        initial={{ opacity: 0.01, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="mb-16 border-b border-[#D7DDE5] pb-6 testimonial-reveal-header"
            initial={{ opacity: 0.01, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <span className="font-mono text-xs font-bold text-[#EC6713] uppercase tracking-wider block mb-2">
              / PARTNER COMPLIANCE FEEDBACK
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#09285F] uppercase tracking-wide leading-tight">
              Procurement & Engineering Reviews
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-sans">
            
            {/* Testimonial 1 */}
            <motion.div 
              className="space-y-6 md:border-r md:border-[#D7DDE5] md:pr-8 testimonial-col"
              initial={{ opacity: 0.01, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              <blockquote className="text-[#161616] text-sm leading-relaxed font-semibold">
                &ldquo;UK Mech has been our approved supplier for machined shafts and assemblies since 2010. Their compliance with detailed engineering blueprints is impeccable.&rdquo;
              </blockquote>
              <div className="pt-2 border-t border-[#D7DDE5] max-w-xs">
                <div className="text-xs font-bold text-[#09285F] uppercase tracking-wider">Larsen & Toubro Ltd.</div>
                <span className="text-[10px] text-[#5E6673] font-mono uppercase tracking-wider mt-1 block">Procurement Division</span>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div 
              className="space-y-6 md:border-r md:border-[#D7DDE5] md:px-8 testimonial-col"
              initial={{ opacity: 0.01, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <blockquote className="text-[#161616] text-sm leading-relaxed font-semibold">
                &ldquo;The quality of sheet metal covers and machine safety guards they manufactured for our automation rigs exceeded our safety audit checklists. On-time delivery.&rdquo;
              </blockquote>
              <div className="pt-2 border-t border-[#D7DDE5] max-w-xs">
                <div className="text-xs font-bold text-[#09285F] uppercase tracking-wider">Emerson India Pvt. Ltd.</div>
                <span className="text-[10px] text-[#5E6673] font-mono uppercase tracking-wider mt-1 block">QA & Safety Team</span>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div 
              className="space-y-6 md:pl-8 testimonial-col"
              initial={{ opacity: 0.01, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.15 }}
            >
              <blockquote className="text-[#161616] text-sm leading-relaxed font-semibold">
                &ldquo;We have sourced spur gears and custom pinions from UK MECH. The module teeth tolerances are tight, resulting in quiet and smooth power transmission.&rdquo;
              </blockquote>
              <div className="pt-2 border-t border-[#D7DDE5] max-w-xs">
                <div className="text-xs font-bold text-[#09285F] uppercase tracking-wider">Godfrey Phillips India</div>
                <span className="text-[10px] text-[#5E6673] font-mono uppercase tracking-wider mt-1 block">Plant Engineering</span>
              </div>
            </motion.div>

          </div>

        </div>
      </motion.section>

    </div>
  );
}
