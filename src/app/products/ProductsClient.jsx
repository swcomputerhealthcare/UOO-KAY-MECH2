"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wrench, Settings, Layers, Cpu } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ProductsClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Symmetrical subtle reveals
    gsap.fromTo(".prod-header-item",
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }
    );

    gsap.fromTo(".prod-tabs-bar",
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.15
      }
    );

    const sections = gsap.utils.toArray(".prod-section-card");
    sections.forEach((sec) => {
      gsap.fromTo(sec,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-brand-bg py-24 sm:py-32 relative overflow-hidden select-none">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="border-l-2 border-[#C46A2D] pl-6 mb-16">
          <span className="text-[10px] font-mono font-bold text-[#666666] uppercase tracking-[0.25em] block mb-1">
            [ TECHNICAL DIRECTORY ]
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-[#151515] uppercase tracking-wide prod-header-item">
            Products & Services
          </h1>
        </div>

        {/* 1. Category Quick Links (Sharp Rectangles) */}
        <div className="border border-[#D9D9D9] p-2 bg-white mb-20 prod-tabs-bar">
          <div className="flex flex-wrap gap-2.5">
            {[
              { id: "guards", title: "Machine Safety Guards" },
              { id: "components", title: "Precision Machined Components" },
              { id: "gears", title: "Gear Manufacturing" },
              { id: "ladders", title: "Industrial Ladders" },
              { id: "fabrication", title: "Structural Fabrication" }
            ].map((cat) => (
              <a
                key={cat.id}
                href={`#category-${cat.id}`}
                className="bg-[#F6F5F3] hover:bg-[#EAE8E4] border border-[#D9D9D9] text-[#151515] font-heading font-bold text-xs px-6 py-3 transition-colors duration-200 uppercase tracking-wider"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>

        {/* 2. Detailed Categories Grid - Alternating Magazine Layout */}
        <div className="space-y-32 mt-12 w-full font-sans">
          
          {/* CATEGORY 1: MACHINE SAFETY GUARDS */}
          <section id="category-guards" className="prod-section-card scroll-mt-28 bg-white border-t-2 border-[#151515] py-16 px-6 sm:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Content Side */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-[10px] font-mono font-bold text-[#C46A2D] uppercase tracking-wider block">
                  CATEGORY 01 / MACHINE SAFETY GUARDS
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#151515] uppercase tracking-tight">
                  Operator Protection & Machine Safety
                </h2>
                <p className="text-[#666666] text-sm leading-relaxed max-w-xl font-medium">
                  We engineer high-durability safety guards to shield machine operators from mechanical hazards and rotating parts. Manufactured strictly per custom machinery layouts using high-gauge sheet metal and heavy polycarbonate observation windows.
                </p>

                {/* Checklist (Simple Spec lines) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-6 border-t border-[#D9D9D9]">
                  <div className="flex gap-2">
                    <span className="font-mono text-xs text-[#C46A2D] font-bold">[01]</span>
                    <div>
                      <h4 className="font-heading font-bold text-xs text-[#151515] uppercase tracking-wide">CNC Machine Guards</h4>
                      <p className="text-[10px] text-[#666666] font-medium mt-0.5">Telescopic sliding guards with viewing ports</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-mono text-xs text-[#C46A2D] font-bold">[02]</span>
                    <div>
                      <h4 className="font-heading font-bold text-xs text-[#151515] uppercase tracking-wide">Safety Covers</h4>
                      <p className="text-[10px] text-[#666666] font-medium mt-0.5">SS casing covers for flywheels & pulleys</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-mono text-xs text-[#C46A2D] font-bold">[03]</span>
                    <div>
                      <h4 className="font-heading font-bold text-xs text-[#151515] uppercase tracking-wide">Custom Guard Fab</h4>
                      <p className="text-[10px] text-[#666666] font-medium mt-0.5">Bespoke enclosures per client drawings</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-mono text-xs text-[#C46A2D] font-bold">[04]</span>
                    <div>
                      <h4 className="font-heading font-bold text-xs text-[#151515] uppercase tracking-wide">Split Shield Assemblies</h4>
                      <p className="text-[10px] text-[#666666] font-medium mt-0.5">Split acrylic shield guards with steel bushings</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#D9D9D9] flex items-center justify-between flex-wrap gap-4">
                  <span className="text-[10px] text-[#666666] font-bold uppercase tracking-wider">
                    RFQ: Custom size safety enclosures
                  </span>
                  <Link
                    href="/contact?interest=Machine%20Safety%20Guards#contact-form"
                    className="bg-[#C46A2D] hover:bg-[#A0531E] text-white font-heading font-bold px-6 py-3.5 text-xs uppercase tracking-wider transition-colors duration-200 text-center"
                  >
                    Request Safety Guard Quote
                  </Link>
                </div>
              </div>

              {/* Asymmetric Photo Stack (Editorial, no cards) */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="border border-[#D9D9D9] p-1 bg-[#F6F5F3] relative h-48 overflow-hidden">
                    <Image
                      src="/images/products/Picture19.jpg"
                      alt="SS safety guard cover"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-[#151515]/20" />
                    <span className="absolute bottom-3 left-3 text-[9px] font-mono font-bold text-white bg-[#151515] px-2 py-0.5 uppercase tracking-wider">
                      Safety Cover
                    </span>
                  </div>
                  <div className="border border-[#D9D9D9] p-1 bg-[#F6F5F3] relative h-36 overflow-hidden">
                    <Image
                      src="/images/products/machines and fabricated components 1.jpg"
                      alt="Split shield guard casing"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-[#151515]/20" />
                    <span className="absolute bottom-3 left-3 text-[9px] font-mono font-bold text-white bg-[#151515] px-2 py-0.5 uppercase tracking-wider">
                      Split Shield Casing
                    </span>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="border border-[#D9D9D9] p-1 bg-[#F6F5F3] relative h-44 overflow-hidden">
                    <Image
                      src="/images/products/Picture14.jpg"
                      alt="CNC Machine operator cabin enclosure"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-[#151515]/20" />
                    <span className="absolute bottom-3 left-3 text-[9px] font-mono font-bold text-white bg-[#151515] px-2 py-0.5 uppercase tracking-wider">
                      CNC Cabin
                    </span>
                  </div>
                  <div className="border border-[#D9D9D9] p-1 bg-[#F6F5F3] relative h-40 overflow-hidden">
                    <Image
                      src="/images/products/Picture12.jpg"
                      alt="Double-wheel grinder safety shields"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-[#151515]/20" />
                    <span className="absolute bottom-3 left-3 text-[9px] font-mono font-bold text-white bg-[#151515] px-2 py-0.5 uppercase tracking-wider">
                      Grinder Shield
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* CATEGORY 2: PRECISION MACHINED COMPONENTS */}
          <section id="category-components" className="prod-section-card scroll-mt-28 bg-white border-t-2 border-[#151515] py-16 px-6 sm:px-12">
            <div className="space-y-8">
              
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D9D9D9] pb-8">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono font-bold text-[#C46A2D] uppercase tracking-wider block">
                    CATEGORY 02 / PRECISION MACHINED COMPONENTS
                  </span>
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#151515] uppercase tracking-tight">
                    High-Tolerance Machined Parts
                  </h2>
                  <p className="text-[#666666] text-sm max-w-2xl font-medium leading-relaxed">
                    Custom metal parts machined with high linear and dimensional accuracy on CNC machining centres, turning centres, and conventional mills. Handled with absolute inspection tracking for Tier-1 buyers.
                  </p>
                </div>
                <Link
                  href="/contact?interest=Precision%20Machined%20Components#contact-form"
                  className="bg-[#C46A2D] hover:bg-[#A0531E] text-white font-heading font-bold px-6 py-3.5 text-xs uppercase tracking-wider transition-colors duration-200 text-center shrink-0"
                >
                  Submit CAD Drawings
                </Link>
              </div>

              {/* Symmetrical Outline grid of components (No cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Part 1: Weep Cups */}
                <div className="border border-[#D9D9D9] p-4 flex flex-col justify-between bg-transparent">
                  <div className="relative w-full h-44 border border-[#D9D9D9] p-0.5 bg-[#F6F5F3] mb-4">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/products/weep tubes cup.jpg"
                        alt="Turned weep cups stack"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-[#151515] uppercase tracking-wide">Weep Tubes & Cups</h4>
                    <p className="text-xs text-[#666666] font-semibold mt-1">Stack of highly polished turned stainless steel weep cups, precision drilled.</p>
                  </div>
                </div>

                {/* Part 2: Crane Shafts */}
                <div className="border border-[#D9D9D9] p-4 flex flex-col justify-between bg-transparent">
                  <div className="relative w-full h-44 border border-[#D9D9D9] p-0.5 bg-[#F6F5F3] mb-4">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/products/machine and fabricated component.jpg"
                        alt="Precision machined weep shaft"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-[#151515] uppercase tracking-wide">Crane & Pinion Shafts</h4>
                    <p className="text-xs text-[#666666] font-semibold mt-1">High-tensile steel shafts machined with custom radial weep holes and slots.</p>
                  </div>
                </div>

                {/* Part 3: Expanders */}
                <div className="border border-[#D9D9D9] p-4 flex flex-col justify-between bg-transparent">
                  <div className="relative w-full h-44 border border-[#D9D9D9] p-0.5 bg-[#F6F5F3] mb-4">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/products/Picture26.jpg"
                        alt="Machined metal expander"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-[#151515] uppercase tracking-wide">Bespoke Expanders</h4>
                    <p className="text-xs text-[#666666] font-semibold mt-1">Solid high-tensile steel expander/coupling adapter with a beautiful turned finish.</p>
                  </div>
                </div>

                {/* Part 4: Seal Plates */}
                <div className="border border-[#D9D9D9] p-4 flex flex-col justify-between bg-transparent">
                  <div className="relative w-full h-44 border border-[#D9D9D9] p-0.5 bg-[#F6F5F3] mb-4">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/products/Picture25.jpg"
                        alt="Machined seal ring flange"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-[#151515] uppercase tracking-wide">Seal Plates & Flanges</h4>
                    <p className="text-xs text-[#666666] font-semibold mt-1">Machined circular ring flange with mounting ears and guide slots.</p>
                  </div>
                </div>

                {/* Part 5: Guideway Assembly */}
                <div className="border border-[#D9D9D9] p-4 flex flex-col justify-between bg-transparent">
                  <div className="relative w-full h-44 border border-[#D9D9D9] p-0.5 bg-[#F6F5F3] mb-4">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/products/Picture20.png"
                        alt="Linear slide carriage block assembly"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-[#151515] uppercase tracking-wide">Custom Machined Assemblies</h4>
                    <p className="text-xs text-[#666666] font-semibold mt-1">Aluminium block structure assembled with linear guide rails and carriage slider blocks.</p>
                  </div>
                </div>

                {/* Part 6: Chain Mounting Bolts */}
                <div className="border border-[#D9D9D9] p-4 flex flex-col justify-between bg-transparent">
                  <div className="relative w-full h-44 border border-[#D9D9D9] p-0.5 bg-[#F6F5F3] mb-4">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/products/Picture22.jpg"
                        alt="Forked threaded chain mounting bolts"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-[#151515] uppercase tracking-wide">Chain Mounting Bolts</h4>
                    <p className="text-xs text-[#666666] font-semibold mt-1">High-tensile threaded fork mounting bolts finished with black oxide coating.</p>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* CATEGORY 3: GEAR MANUFACTURING */}
          <section id="category-gears" className="prod-section-card scroll-mt-28 bg-white border-t-2 border-[#151515] py-16 px-6 sm:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Technical Drawing Blueprint (Softer drawing visual style) */}
              <div className="lg:col-span-5 bg-[#151515] text-white p-8 border border-[#D9D9D9] h-[340px] flex flex-col justify-between select-none font-mono">
                {/* Header */}
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-[#C46A2D]" strokeWidth={1.5} />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white">Tooth Profile Schema</span>
                  </div>
                  <span className="text-[8px] text-[#666666]">DWG NO: UKM_G2026</span>
                </div>

                {/* Blueprint graphic */}
                <div className="my-auto flex items-center justify-center relative py-6">
                  {/* Outer circle gears sketch */}
                  <div className="w-36 h-36 rounded-full border border-dashed border-[#C46A2D]/40 flex items-center justify-center relative animate-spin" style={{ animationDuration: "30s" }}>
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-4 bg-[#C46A2D]/30 rounded-sm"
                        style={{
                          transform: `rotate(${i * 30}deg) translateY(-72px)`,
                          transformOrigin: "center 8px"
                        }}
                      />
                    ))}
                    <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border border-dashed border-[#C46A2D]/40 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-[#C46A2D]/20 border border-[#C46A2D]/50" />
                      </div>
                    </div>
                  </div>
                  {/* Index markings */}
                  <div className="absolute text-[8px] text-[#C46A2D] top-0 left-4">Module: M3.5</div>
                  <div className="absolute text-[8px] text-[#C46A2D] bottom-0 right-4">Tooth Profile: 20° PA</div>
                </div>

                {/* Footer spec */}
                <div className="border-t border-white/10 pt-4 flex justify-between text-[8px] text-[#666666]">
                  <span>Tolerance: ±0.02 mm</span>
                  <span>Calibrated Check</span>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-[10px] font-mono font-bold text-[#C46A2D] uppercase tracking-wider block">
                  CATEGORY 03 / GEAR MANUFACTURING
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#151515] uppercase tracking-tight">
                  Precision Gear Hobbing & Cutting
                </h2>
                <p className="text-[#666666] text-sm leading-relaxed max-w-xl font-medium">
                  We provide precision gear cutting, slotting, and hobbing services for quiet power transmission and long service life. Available in external spur gears, custom gearsets, pinions, and internal splines machined from alloy steel, brass, or industrial nylon.
                </p>

                {/* Item specs list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#D9D9D9]">
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-xs text-[#151515] uppercase tracking-wide flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#C46A2D]" />
                      Spur Gears
                    </h4>
                    <p className="text-[10px] text-[#666666] font-medium pl-3.5">Standard external and internal tooth profiles</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-xs text-[#151515] uppercase tracking-wide flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#C46A2D]" />
                      Custom Gearsets
                    </h4>
                    <p className="text-[10px] text-[#666666] font-medium pl-3.5">Cut per module drawing specifications</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-xs text-[#151515] uppercase tracking-wide flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#C46A2D]" />
                      Pinions & Splines
                    </h4>
                    <p className="text-[10px] text-[#666666] font-medium pl-3.5">Internal and external keyway splines</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-xs text-[#151515] uppercase tracking-wide flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#C46A2D]" />
                      Nylon Gears
                    </h4>
                    <p className="text-[10px] text-[#666666] font-medium pl-3.5">Quiet running light transmission gears</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#D9D9D9] flex items-center justify-between flex-wrap gap-4">
                  <span className="text-[10px] text-[#666666] font-bold uppercase tracking-wider">
                    RFQ: Spur gear hobbing solutions
                  </span>
                  <Link
                    href="/contact?interest=Gear%20Manufacturing#contact-form"
                    className="bg-[#C46A2D] hover:bg-[#A0531E] text-white font-heading font-bold px-6 py-3.5 text-xs uppercase tracking-wider transition-colors duration-200 text-center"
                  >
                    Get Gear Pricing
                  </Link>
                </div>
              </div>

            </div>
          </section>

          {/* CATEGORY 4: INDUSTRIAL LADDERS */}
          <section id="category-ladders" className="prod-section-card scroll-mt-28 bg-white border-t-2 border-[#151515] py-16 px-6 sm:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Content Side */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-[10px] font-mono font-bold text-[#C46A2D] uppercase tracking-wider block">
                  CATEGORY 04 / INDUSTRIAL LADDERS
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#151515] uppercase tracking-tight">
                  Safety Ladders & Work Platforms
                </h2>
                <p className="text-[#666666] text-sm leading-relaxed max-w-xl font-medium">
                  We design and fabricate robust, heavy-duty industrial safety ladders. Specially built for warehouses, machinery mounts, and chemical plants, using high-load structural steel and anti-slip stair rungs.
                </p>

                {/* Symmetrical Outline Boxes (No cards) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#D9D9D9]">
                  <div className="space-y-2 border border-[#D9D9D9] p-4 bg-transparent">
                    <h4 className="font-heading font-bold text-xs text-[#151515] uppercase">Mild Steel</h4>
                    <p className="text-[10px] text-[#666666] font-medium leading-relaxed">Heavy welded MS structural steel with anti-rust primers.</p>
                  </div>
                  <div className="space-y-2 border border-[#D9D9D9] p-4 bg-transparent">
                    <h4 className="font-heading font-bold text-xs text-[#151515] uppercase">Stainless Steel</h4>
                    <p className="text-[10px] text-[#666666] font-medium leading-relaxed">Corrosion resistant SS304/316 ladders for chemical plants.</p>
                  </div>
                  <div className="space-y-2 border border-[#D9D9D9] p-4 bg-transparent">
                    <h4 className="font-heading font-bold text-xs text-[#151515] uppercase">Aluminium</h4>
                    <p className="text-[10px] text-[#666666] font-medium leading-relaxed">Lightweight mobile safety ladders with platform wheels.</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#D9D9D9] flex items-center justify-between flex-wrap gap-4">
                  <span className="text-[10px] text-[#666666] font-bold uppercase tracking-wider">
                    RFQ: Custom safety work platforms
                  </span>
                  <Link
                    href="/contact?interest=Industrial%20Ladders#contact-form"
                    className="bg-[#C46A2D] hover:bg-[#A0531E] text-white font-heading font-bold px-6 py-3.5 text-xs uppercase tracking-wider transition-colors duration-200 text-center"
                  >
                    Request Ladder Quote
                  </Link>
                </div>
              </div>

              {/* Photo Column - Safety Platform Ladder (Symmetrical outline) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="border border-[#D9D9D9] p-1 bg-[#F6F5F3] w-full max-w-[340px]">
                  <div className="relative w-full h-[440px] overflow-hidden">
                    <Image
                      src="/images/products/Picture13.jpg"
                      alt="Tall platform warehouse safety ladder"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-[#151515]/20" />
                    <span className="absolute bottom-4 left-4 text-[9px] font-mono font-bold text-white bg-[#151515] px-3 py-1 uppercase tracking-wider border border-white/10">
                      Mobile Platform Ladder
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* CATEGORY 5: STRUCTURAL FABRICATION */}
          <section id="category-fabrication" className="prod-section-card scroll-mt-28 bg-white border-t-2 border-[#151515] py-16 px-6 sm:px-12">
            <div className="space-y-8">
              
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D9D9D9] pb-8">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono font-bold text-[#C46A2D] uppercase tracking-wider block">
                    CATEGORY 05 / STRUCTURAL FABRICATION
                  </span>
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#151515] uppercase tracking-tight">
                    Custom Steel & Sheet Metal Fabrication
                  </h2>
                  <p className="text-[#666666] text-sm max-w-2xl font-medium leading-relaxed">
                    Bespoke welding, structural framing, bending, cutting, and assembly of heavy industrial fixtures. Built in full conformance with drawing tolerances and structural loading codes.
                  </p>
                </div>
                <Link
                  href="/contact?interest=Structural%20Fabrication#contact-form"
                  className="bg-[#C46A2D] hover:bg-[#A0531E] text-white font-heading font-bold px-6 py-3.5 text-xs uppercase tracking-wider transition-colors duration-200 text-center shrink-0"
                >
                  Inquire for Fabrication
                </Link>
              </div>

              {/* Fabrication Items Grid (Symmetrical outlines) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* Fab 1: SS Trolley */}
                <div className="border border-[#D9D9D9] p-4 flex flex-col justify-between bg-transparent">
                  <div className="relative w-full h-40 border border-[#D9D9D9] p-0.5 bg-[#F6F5F3] mb-4">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/products/Picture18.jpg"
                        alt="SS Industrial Trolley"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs text-[#151515] uppercase tracking-wide">SS Industrial Trolleys</h4>
                    <p className="text-[10px] text-[#666666] font-semibold mt-1">Stainless steel work floor trolleys with handles and heavy castor wheels.</p>
                  </div>
                </div>

                {/* Fab 2: Industrial Workbench Table */}
                <div className="border border-[#D9D9D9] p-4 flex flex-col justify-between bg-transparent">
                  <div className="relative w-full h-40 border border-[#D9D9D9] p-0.5 bg-[#F6F5F3] mb-4">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/products/Picture16.png"
                        alt="Industrial Workbench Table"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs text-[#151515] uppercase tracking-wide">Industrial Workbench Tables</h4>
                    <p className="text-[10px] text-[#666666] font-semibold mt-1">Powder coated rigid steel worktables built with lower storage shelves.</p>
                  </div>
                </div>

                {/* Fab 3: Protective Cage */}
                <div className="border border-[#D9D9D9] p-4 flex flex-col justify-between bg-transparent">
                  <div className="relative w-full h-40 border border-[#D9D9D9] p-0.5 bg-[#F6F5F3] mb-4">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/products/Picture17.jpg"
                        alt="Tank structural support cage"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs text-[#151515] uppercase tracking-wide">Structural Support Cages</h4>
                    <p className="text-[10px] text-[#666666] font-semibold mt-1">Welded steel safety framing cages built to encase massive storage tanks.</p>
                  </div>
                </div>

                {/* Fab 4: Perforated Cylinder */}
                <div className="border border-[#D9D9D9] p-4 flex flex-col justify-between bg-transparent">
                  <div className="relative w-full h-40 border border-[#D9D9D9] p-0.5 bg-[#F6F5F3] mb-4">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/products/machine and fabricated component4.jpg"
                        alt="Perforated steel cylinder screen"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs text-[#151515] uppercase tracking-wide">Perforated Cylinders</h4>
                    <p className="text-[10px] text-[#666666] font-semibold mt-1">Rolled perforated sheet metal screen filters with solid end collars.</p>
                  </div>
                </div>

              </div>

            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
