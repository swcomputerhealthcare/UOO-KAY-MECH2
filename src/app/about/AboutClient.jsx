"use client";

import Image from "next/image";
import { Award, Compass, Eye, ShieldCheck } from "lucide-react";

export default function AboutClient() {
  const milestones = [
    {
      year: "2004",
      title: "Company Founded",
      desc: "UK Mech Industries established by Sandeepkumar K. Singh in Maharashtra, India, commencing manufacturing of conventional precision components.",
    },
    {
      year: "2010",
      title: "Vendor Approved Supplier",
      desc: "Officially registered as an approved supplier with Larsen & Toubro (L&T) and Godfrey Phillips, expanding infrastructure and production capacity.",
    },
    {
      year: "2016",
      title: "Advanced CNC Integration",
      desc: "Acquired ACE Micromatic CNC machining centres, digital height gauges, and conventional milling assets to deliver high-tolerance components.",
    },
    {
      year: "2020",
      title: "MSME & Udyam Registrations",
      desc: "Obtained Government MSME certifications and expanded vendor approval status with automation leaders like Emerson India.",
    },
    {
      year: "Present",
      title: "20 Years of Precision Engineering",
      desc: "Successfully delivering zero-defect industrial components, safety guards, and machined parts to top-tier organizations nationwide.",
    },
  ];

  return (
    <div className="bg-brand-bg min-h-screen select-none overflow-x-hidden">
      
      {/* Page Header */}
      <div className="pt-24 pb-8 sm:pt-32 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-2 border-[#EC6713] pl-6 about-header-item">
            <span className="text-[10px] font-mono font-bold text-[#5E6673] uppercase tracking-[0.25em] block mb-1">
              [ COMPANY OVERVIEW ]
            </span>
            <h1 className="sectionTitle font-heading text-5xl sm:text-6xl font-bold text-[#161616] uppercase tracking-wide">
              Who We Are
            </h1>
          </div>
        </div>
      </div>

      {/* 1. Introduction Section */}
      <section className="bg-white border-y border-[#D7DDE5] py-24 about-reveal-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Text details */}
            <div className="lg:col-span-7 space-y-6 about-reveal-item">
              <span className="font-mono text-xs font-bold text-[#EC6713] uppercase tracking-wider block">
                [ ESTABLISHED 2004 ]
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#161616] leading-tight tracking-tight aboutTitle">
                Delivering Industrial Excellence for Over Two Decades
              </h2>
              <p className="text-[#161616] text-base leading-relaxed font-sans font-semibold aboutDescription">
                UK MECH INDUSTRIES has been delivering precision engineering and machining solutions since 2004. With extensive expertise in machining and manufacturing, we serve various reputed organizations across India by providing high-quality industrial components tailored to customer requirements.
              </p>
              <p className="text-[#5E6673] text-sm leading-relaxed font-sans aboutDescription">
                Headquartered in Maharashtra, India, our facility is equipped with a robust infrastructure of CNC machining centres, lathe machines, grinders, and precise testing instruments. Over the last two decades, our absolute focus on reliability and quality has earned us vendor-approved status with enterprise leaders including Larsen & Toubro, Emerson India, and Parle Elizabeth Tools.
              </p>
              
              {/* Monospace registry badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#D7DDE5]">
                <div className="border border-[#D7DDE5] p-4 flex items-center gap-3 bg-[#F6F7F8] premium-card-hover">
                  <div className="text-[#EC6713]">
                    <Award className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#161616] uppercase tracking-wider">
                    MSME CERTIFIED REGISTRATION
                  </span>
                </div>
                <div className="border border-[#D7DDE5] p-4 flex items-center gap-3 bg-[#F6F7F8] premium-card-hover">
                  <div className="text-[#EC6713]">
                    <ShieldCheck className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#161616] uppercase tracking-wider">
                    APPROVED INDUSTRIAL SUPPLIER
                  </span>
                </div>
              </div>
            </div>

            {/* Industrial Photo Frame */}
            <div className="lg:col-span-5 border border-[#D7DDE5] p-1 bg-[#F6F7F8] about-reveal-image will-change-transform rounded-[24px] overflow-hidden shadow-sm aboutImage">
              <div className="relative h-96 w-full overflow-hidden">
                <Image
                  src="/images/products/machines and fabricated components 1.webp"
                  alt="UK MECH Workshop Facility"
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
      <section className="py-24 bg-brand-bg about-reveal-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-[#D7DDE5] pt-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              
              {/* Technical Profile ID */}
              <div className="md:col-span-4 space-y-4 about-reveal-item">
                <span className="font-mono text-xs text-[#EC6713] uppercase tracking-widest block">
                  [ LEADERSHIP REGISTER ]
                </span>
                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-[#161616] uppercase leading-tight">
                  Sandeepkumar K. Singh
                </h3>
                <p className="font-mono text-xs text-[#5E6673] uppercase tracking-wider">
                  Founder & Managing Director
                </p>
                
                <div className="border border-[#D7DDE5] p-4 bg-white space-y-2 font-mono rounded-[16px] shadow-sm">
                  <span className="text-[9px] font-bold text-[#5E6673] uppercase tracking-widest block">
                    REGISTRY_ID: MD-2004-SKS
                  </span>
                  <span className="text-[9px] font-bold text-[#5E6673] uppercase tracking-widest block">
                    COMPLIANCE_SIGN: VERIFIED
                  </span>
                </div>
              </div>
              
              {/* Letter / Quote */}
              <div className="md:col-span-8 space-y-6 md:border-l md:border-[#D7DDE5] md:pl-12 about-reveal-item">
                <blockquote className="text-[#161616] text-lg sm:text-xl font-semibold italic leading-relaxed font-sans">
                  &ldquo;We take pride in delivering precision, reliability, and quality to every customer. Our commitment since 2004 has been to build long-term relationships through engineering excellence and customer satisfaction.&rdquo;
                </blockquote>
                <p className="text-[#5E6673] text-sm leading-relaxed font-sans">
                  &ldquo;As manufacturing processes evolve, UK Mech Industries continues to stay at the cutting edge of industrial standards. We guarantee that every flange, safety guard, gear, and machined component that leaves our facility has passed strict checks to ensure compliance with drawings and tolerances.&rdquo;
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Section */}
      <section className="py-24 bg-white border-y border-[#D7DDE5] about-reveal-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 font-sans">
            
            {/* Vision Block */}
            <div className="space-y-6 md:pr-12 about-reveal-item">
              <div className="flex items-center gap-3 text-[#EC6713]">
                <Eye className="h-6 w-6" strokeWidth={1.5} />
                <span className="font-mono text-xs font-bold uppercase tracking-widest">[ SYSTEM_VISION ]</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-[#161616] uppercase tracking-wide leading-tight">
                Our Vision
              </h3>
              <p className="text-[#5E6673] text-sm leading-relaxed font-medium">
                To become a trusted leader in precision engineering and industrial machining solutions across India. We aim to continuously expand our machine capacities, foster innovation, and scale our service to set digital and physical benchmarks in the manufacturing sector.
              </p>
            </div>

            {/* Mission Block */}
            <div className="space-y-6 md:border-l md:border-[#D7DDE5] md:pl-12 about-reveal-item">
              <div className="flex items-center gap-3 text-[#EC6713]">
                <Compass className="h-6 w-6" strokeWidth={1.5} />
                <span className="font-mono text-xs font-bold uppercase tracking-widest">[ SYSTEM_MISSION ]</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-[#161616] uppercase tracking-wide leading-tight">
                Our Mission
              </h3>
              <p className="text-[#5E6673] text-sm leading-relaxed font-medium">
                Deliver high-quality engineering solutions while maintaining reliability, innovation, and customer satisfaction. We strive to maintain zero-tolerance inspection quality, guarantee timely dispatches, and optimize B2B procurement partners.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Timeline Section */}
      <section className="py-24 bg-brand-bg timeline-section-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-20 border-b border-[#D7DDE5] pb-6">
            <span className="font-mono text-xs font-bold text-[#EC6713] uppercase tracking-wider block mb-2">
              / MILESTONES & HISTORY
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#161616] uppercase tracking-wide leading-tight">
              Two Decades of Engineering Development
            </h2>
          </div>

          <div className="relative pl-8 md:pl-16 space-y-12 py-4">
            {/* Vertical drawing line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-[#EC6713]" />
            
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative timeline-node pl-4 md:pl-8">
                {/* Burnt copper node joint */}
                <div className="absolute left-[12px] md:left-[27px] top-2.5 h-[9px] w-[9px] bg-[#EC6713] border border-[#F6F7F8]" />
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start font-sans">
                  {/* Monospace Year Label */}
                  <div className="md:col-span-2">
                    <span className="font-mono text-sm font-bold text-[#EC6713] block">
                      [{milestone.year}]
                    </span>
                  </div>
                  {/* Content block */}
                  <div className="md:col-span-10 space-y-2">
                    <h3 className="font-heading text-xl font-bold text-[#161616] uppercase tracking-wide">
                      {milestone.title}
                    </h3>
                    <p className="text-[#5E6673] text-xs sm:text-sm leading-relaxed max-w-3xl font-medium">
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
