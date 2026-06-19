"use client";

import { useRef } from "react";
import Image from "next/image";
import { Award, Compass, Eye, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function AboutClient() {
  const containerRef = useRef(null);

  const milestones = [
    {
      year: "2004",
      title: "Company Founded",
      desc: "Uoo Kay Mech Industries established by Sandeepkumar K. Singh in Thane, Maharashtra, commencing manufacturing of conventional precision components.",
    },
    {
      year: "2010",
      title: "Vendor Approved Supplier",
      desc: "Officially registered as an approved supplier with Larsen & Toubro (L&T) and Godfrey Phillips, expanding infrastructure and production capacity.",
    },
    {
      year: "2016",
      title: "Advanced CNC Integration",
      desc: "Acquired ACE Micromatic CNC machining centres, digital height gauges, and conventional milling assets to deliver high-tolerance fabrication.",
    },
    {
      year: "2020",
      title: "MSME & Udyam Registrations",
      desc: "Obtained Government MSME certifications and expanded vendor approval status with automation leaders like Emerson India.",
    },
    {
      year: "Present",
      title: "20 Years of Precision Engineering",
      desc: "Successfully delivering zero-defect industrial components, safety guards, and fabrications to top-tier organizations nationwide.",
    },
  ];

  useGSAP(() => {
    // 1. Header load
    gsap.from(".about-header-item", {
      opacity: 0,
      y: 15,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    });

    // 2. Intro reveal
    gsap.from(".about-intro-text, .about-intro-image", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-intro-section",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    // 3. Founder reveal
    gsap.from(".about-founder-section", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-founder-section",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    // 4. Vision/Mission reveal
    gsap.from(".vision-mission-section", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".vision-mission-section",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    // 5. Timeline nodes reveal
    gsap.from(".timeline-node", {
      opacity: 0,
      y: 15,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".timeline-section",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-brand-bg min-h-screen select-none">
      
      {/* Page Header */}
      <div className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-2 border-[#C46A2D] pl-6 about-header-item">
            <span className="text-[10px] font-mono font-bold text-[#666666] uppercase tracking-[0.25em] block mb-1">
              [ COMPANY OVERVIEW ]
            </span>
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-[#151515] uppercase tracking-wide">
              Who We Are
            </h1>
          </div>
        </div>
      </div>

      {/* 1. Introduction Section (Large Image / Small Text Block style) */}
      <section className="bg-white border-y border-[#D9D9D9] py-24 about-intro-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Text details (col-span-7) */}
            <div className="lg:col-span-7 space-y-6 about-intro-text">
              <span className="font-mono text-xs font-bold text-[#C46A2D] uppercase tracking-wider block">
                [ ESTABLISHED 2004 ]
              </span>
              <h2 className="font-heading text-4xl font-bold uppercase text-[#151515] leading-none tracking-tight">
                Delivering Industrial Excellence for Over Two Decades
              </h2>
              <p className="text-[#151515] text-base leading-relaxed font-sans font-semibold">
                UOO KAY MECH INDUSTRIES has been delivering precision engineering and fabrication solutions since 2004. With extensive expertise in machining and manufacturing, we serve various reputed organizations across India by providing high-quality industrial components tailored to customer requirements.
              </p>
              <p className="text-[#666666] text-sm leading-relaxed font-sans">
                Headquartered in Thane, Maharashtra, our facility is equipped with a robust infrastructure of CNC machining centres, lathe machines, grinders, and precise testing instruments. Over the last two decades, our absolute focus on reliability and quality has earned us vendor-approved status with enterprise leaders including Larsen & Toubro, Emerson India, and Parle Elizabeth Tools.
              </p>
              
              {/* Monospace registry badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#D9D9D9]">
                <div className="border border-[#D9D9D9] p-4 flex items-center gap-3 bg-[#F6F5F3]">
                  <div className="text-[#C46A2D]">
                    <Award className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#151515] uppercase tracking-wider">
                    MSME CERTIFIED REGISTRATION
                  </span>
                </div>
                <div className="border border-[#D9D9D9] p-4 flex items-center gap-3 bg-[#F6F5F3]">
                  <div className="text-[#C46A2D]">
                    <ShieldCheck className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#151515] uppercase tracking-wider">
                    APPROVED INDUSTRIAL SUPPLIER
                  </span>
                </div>
              </div>
            </div>

            {/* Industrial Photo Frame (col-span-5) */}
            <div className="lg:col-span-5 border border-[#D9D9D9] p-1 bg-[#F6F5F3] about-intro-image">
              <div className="relative h-96 w-full overflow-hidden border border-[#D9D9D9]/30">
                <Image
                  src="/images/products/machines and fabricated components 1.jpg"
                  alt="UOO KAY MECH Workshop Facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Founder / MD Profile */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-[#D9D9D9] pt-16 about-founder-section">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              
              {/* Technical Profile ID */}
              <div className="md:col-span-4 space-y-4">
                <span className="font-mono text-xs text-[#C46A2D] uppercase tracking-widest block">
                  [ LEADERSHIP REGISTER ]
                </span>
                <h3 className="font-heading text-3xl font-bold text-[#151515] uppercase">
                  Sandeepkumar K. Singh
                </h3>
                <p className="font-mono text-xs text-[#666666] uppercase tracking-wider">
                  Founder & Managing Director
                </p>
                
                <div className="border border-[#D9D9D9] p-4 bg-white space-y-2 font-mono">
                  <span className="text-[9px] font-bold text-[#666666] uppercase tracking-widest block">
                    REGISTRY_ID: MD-2004-SKS
                  </span>
                  <span className="text-[9px] font-bold text-[#666666] uppercase tracking-widest block">
                    COMPLIANCE_SIGN: VERIFIED
                  </span>
                </div>
              </div>
              
              {/* Letter / Quote */}
              <div className="md:col-span-8 space-y-6 md:border-l md:border-[#D9D9D9] md:pl-12">
                <blockquote className="text-[#151515] text-lg sm:text-xl font-semibold italic leading-relaxed font-sans">
                  &ldquo;We take pride in delivering precision, reliability, and quality to every customer. Our commitment since 2004 has been to build long-term relationships through engineering excellence and customer satisfaction.&rdquo;
                </blockquote>
                <p className="text-[#666666] text-sm leading-relaxed font-sans">
                  &ldquo;As manufacturing processes evolve, Uoo Kay Mech Industries continues to stay at the cutting edge of industrial standards. We guarantee that every flange, safety guard, gear, and machined component that leaves our facility has passed strict checks to ensure compliance with drawings and tolerances.&rdquo;
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Section (Flat split grid, no rounded badges or colors) */}
      <section className="py-24 bg-white border-y border-[#D9D9D9] vision-mission-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 font-sans">
            
            {/* Vision Block */}
            <div className="space-y-6 md:pr-12">
              <div className="flex items-center gap-3 text-[#C46A2D]">
                <Eye className="h-6 w-6" strokeWidth={1.5} />
                <span className="font-mono text-xs font-bold uppercase tracking-widest">[ SYSTEM_VISION ]</span>
              </div>
              <h3 className="font-heading text-3xl font-bold text-[#151515] uppercase tracking-wide">
                Our Vision
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed font-medium">
                To become a trusted leader in precision engineering and industrial fabrication solutions across India. We aim to continuously expand our machine capacities, foster innovation, and scale our service to set digital and physical benchmarks in the manufacturing sector.
              </p>
            </div>

            {/* Mission Block */}
            <div className="space-y-6 md:border-l md:border-[#D9D9D9] md:pl-12">
              <div className="flex items-center gap-3 text-[#C46A2D]">
                <Compass className="h-6 w-6" strokeWidth={1.5} />
                <span className="font-mono text-xs font-bold uppercase tracking-widest">[ SYSTEM_MISSION ]</span>
              </div>
              <h3 className="font-heading text-3xl font-bold text-[#151515] uppercase tracking-wide">
                Our Mission
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed font-medium">
                Deliver high-quality engineering solutions while maintaining reliability, innovation, and customer satisfaction. We strive to maintain zero-tolerance inspection quality, guarantee timely dispatches, and optimize lead times for our valuable B2B procurement partners.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Timeline Section (Sober line with burnt copper node joints) */}
      <section className="py-24 bg-brand-bg timeline-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-20 border-b border-[#D9D9D9] pb-6">
            <span className="font-mono text-xs font-bold text-[#C46A2D] uppercase tracking-wider block mb-2">
              / MILESTONES & HISTORY
            </span>
            <h2 className="font-heading text-4xl font-bold text-[#151515] uppercase tracking-wide">
              Two Decades of Engineering Development
            </h2>
          </div>

          <div className="relative pl-8 md:pl-16 space-y-12 py-4">
            {/* Vertical solid line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[1px] bg-[#D9D9D9]" />
            
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative timeline-node pl-4 md:pl-8">
                {/* Burnt copper node joint */}
                <div className="absolute left-[12px] md:left-[27px] top-2.5 h-[9px] w-[9px] bg-[#C46A2D] border border-[#F6F5F3]" />
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start font-sans">
                  {/* Monospace Year Label */}
                  <div className="md:col-span-2">
                    <span className="font-mono text-sm font-bold text-[#C46A2D] block">
                      [{milestone.year}]
                    </span>
                  </div>
                  {/* Content block */}
                  <div className="md:col-span-10 space-y-2">
                    <h3 className="font-heading text-xl font-bold text-[#151515] uppercase tracking-wide">
                      {milestone.title}
                    </h3>
                    <p className="text-[#666666] text-xs sm:text-sm leading-relaxed max-w-3xl font-medium">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
