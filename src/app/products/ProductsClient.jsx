"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { shouldAnimate } from "@/lib/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CAPABILITIES = [
  {
    title: "Precision Tooling & Dies",
    subtitle: "Custom dies, punches, and engineering solutions",
    description: "Manufacturing custom dies, tooling assemblies, punch components and precision engineered solutions for industrial applications.",
    heroImage: "/images/products/Flange Punch Dies.webp",
    images: [
      "/images/products/Flange Punch Dies.webp",
      "/images/products/Weep Tube Cup Punch Set.webp",
      "/images/products/Precision Punch & Die Components.webp",
      "/images/products/Cup Forming Die Assembly.webp"
    ],
    specs: {
      tolerances: "±0.01 mm (10 microns)",
      materials: "D2, H13, O1 Tool Steels, Tungsten Carbide, Alloy Steel",
      operations: "CNC Milling, Wire Cut EDM, Jig Grinding, Precision Lathe Turning",
      hardness: "58 - 62 HRC (Vacuum Hardened & Double Tempered)",
      applications: "Automotive press tools, sheet metal packaging, weep tube cup punch sets, forming tools."
    }
  },
  {
    title: "Precision Machined Components",
    subtitle: "High-tolerance CNC machined industrial parts",
    description: "Custom metal parts machined with high linear and dimensional accuracy on CNC machining centres, turning centres, and conventional mills.",
    heroImage: "/images/products/Precision Machined Block.webp",
    images: [
      "/images/products/Precision Machined Block.webp",
      "/images/products/Split Clamp.webp",
      "/images/products/Threaded Roller Precision Roller.webp",
      "/images/products/Machined Hinge Component.webp"
    ],
    specs: {
      tolerances: "±0.005 mm (5 microns)",
      materials: "AISI 4140 Alloy Steel, SS304/316, Al 6082-T6, Delrin/Nylon",
      operations: "3-Axis CNC Machining, CNC Turning, Radial Hole Drilling, Thread Milling",
      hardness: "Per client drawing (Case hardening, nitriding available)",
      applications: "Crane pinion shafts, custom block clamps, actuator housings, slider carriages."
    }
  },
  {
    title: "Brass & Non-Ferrous Components",
    subtitle: "High precision turned brass and copper parts",
    description: "High precision brass and non-ferrous machined components manufactured to customer specifications.",
    heroImage: "/images/products/Brass Machined Bushes.webp",
    images: [
      "/images/products/Brass Machined Bushes.webp",
      "/images/products/Custom Brass Bushings.webp",
      "/images/products/Brass Fabricated Bracket.webp"
    ],
    specs: {
      tolerances: "±0.015 mm",
      materials: "Free Cutting Brass (IS 319), CZ121, Bronze Alloys (PB1/PB2), Copper",
      operations: "High-speed auto sliding-head turning, CNC turning & milling",
      hardness: "Natural brass hardness, heat treatment as required",
      applications: "Threaded bushings, contact terminals, custom brass pins, fabricated brass brackets."
    }
  },
  {
    title: "Industrial Fabrication",
    subtitle: "Heavy duty steel fabrication and workshop equipment",
    description: "Bespoke welding, structural framing, bending, cutting, and assembly of heavy industrial fixtures.",
    heroImage: "/images/products/Industrial Machine Enclosure.webp",
    images: [
      "/images/products/Industrial Machine Enclosure.webp",
      "/images/products/Stainless Steel Blind Flange.webp",
      "/images/products/Fabricated Access Ladder.webp",
      "/images/products/Material Handling Storage Trolley.webp",
      "/images/products/Bench Grinder Workstation.webp"
    ],
    specs: {
      tolerances: "±1.0 mm (General Fabrication)",
      materials: "IS 2062 Mild Steel, High-gauge Sheet Metal, Structural steel channels",
      operations: "AWS D1.1 Welding, Laser cutting, CNC Press brake bending, assembly",
      hardness: "Not applicable (Coated/primed finishes)",
      applications: "Heavy machine enclosures, warehouse access ladders, material storage trolleys, custom workstations."
    }
  },
  {
    title: "Stainless Steel Fabrication",
    subtitle: "Food & pharma-grade corrosion resistant structures",
    description: "Stainless steel fabrication including worktables, tank supports, and enclosures built for hygienic and industrial environments.",
    heroImage: "/images/products/Stainless Steel Work Table.webp",
    images: [
      "/images/products/Stainless Steel Work Table.webp",
      "/images/products/Tank Cladding.webp",
      "/images/products/Fabricated Stainless Assembly.webp",
      "/images/products/Display Stand Structure.webp"
    ],
    specs: {
      tolerances: "±0.5 mm on sheet metal structures",
      materials: "Grade 304, 304L, 316, 316L Stainless Steel",
      operations: "GTAW (TIG) Welding with argon purging, sheet metal bending, polishing",
      hardness: "Not applicable (Finishes: Brushed, 240-grit, mirror polish)",
      applications: "Pharma-grade tables, tank supports, custom stainless steel enclosures, display stands."
    }
  },
  {
    title: "Custom Engineering Structures",
    subtitle: "Heavy structural foundations and frames",
    description: "Heavy structural frameworks, machine base frames, mounting assemblies, and custom support jigs designed for heavy equipment integration.",
    heroImage: "/images/products/Machine Base Frame.webp",
    images: [
      "/images/products/Machine Base Frame.webp",
      "/images/products/Fabricated Structures.webp",
      "/images/products/Industrial Support Frames.webp",
      "/images/products/Custom Engineering Assemblies.webp"
    ],
    specs: {
      tolerances: "±0.5 mm on mounting points",
      materials: "IS 2062 Structural Steel, Tubing, Heavy Plate profiles",
      operations: "Heavy MIG/TIG welding, structural alignment checks, precision drilling",
      hardness: "Epoxy primer + Polyurethane industrial paint",
      applications: "Machine base frames, structural fabrication supports, mounting frames, locks."
    }
  },
  {
    title: "Fixtures & Special Purpose Components",
    subtitle: "Precision jigs, welding fixtures, and anchor systems",
    description: "Custom engineered fixtures, anchor bolts, machined rings, and special purpose mechanical assemblies.",
    heroImage: "/images/products/Threaded Tooling Fixture.webp",
    images: [
      "/images/products/Threaded Tooling Fixture.webp",
      "/images/products/Industrial Fixtures.webp",
      "/images/products/Machined Rings.webp",
      "/images/products/Special Purpose Components.webp"
    ],
    specs: {
      tolerances: "±0.02 mm (alignment and spacing)",
      materials: "En8, En24, AISI 1045, wear-resistant steel",
      operations: "Jig boring, wire EDM, precision surface grinding, dimensional validation",
      hardness: "Treated surface hardening or natural finishes",
      applications: "Anchor bolts, guide rings, custom machinery forks, industrial holding fixtures."
    }
  }
];

export default function ProductsClient() {
  const [activeDrawer, setActiveDrawer] = useState(null);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const horizontalRef = useRef(null);

  // Stop page scroll when drawer is open
  useEffect(() => {
    if (activeDrawer !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeDrawer]);

  useGSAP(() => {
    if (!horizontalRef.current || !triggerRef.current) return;

    const scrollWidth = horizontalRef.current.scrollWidth;
    const totalScroll = scrollWidth - window.innerWidth;

    // 1. Pinned Horizontal Scrolling Timeline
    const pinTween = gsap.to(horizontalRef.current, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 0.5,
        start: "top top",
        end: () => `+=${totalScroll}`,
        invalidateOnRefresh: true,
      }
    });

    // 2. Controlled Scroll-Triggered Transitions inside each slide
    const sections = gsap.utils.toArray(".capability-slide");
    sections.forEach((sec) => {
      if (!shouldAnimate()) {
        gsap.set(sec.querySelectorAll(".reveal-label, .reveal-heading, .reveal-desc, .reveal-cta, .reveal-image-item"), {
          opacity: 1,
          y: 0,
          scale: 1
        });
        return;
      }

      const label = sec.querySelector(".reveal-label");
      const heading = sec.querySelector(".reveal-heading");
      const desc = sec.querySelector(".reveal-desc");
      const cta = sec.querySelector(".reveal-cta");
      const images = sec.querySelectorAll(".reveal-image-item");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sec,
          containerAnimation: pinTween,
          start: "left 45%",
          toggleActions: "play none none reverse",
        }
      });

      // Label reveals first
      if (label) tl.fromTo(label, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4 }, 0);
      // Heading reveals second
      if (heading) tl.fromTo(heading, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 }, 0.06);
      // Description reveals third
      if (desc) tl.fromTo(desc, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 0.12);
      // CTA reveals fourth
      if (cta) tl.fromTo(cta, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4 }, 0.18);
      // Image elements reveal in staggered sequence (scale 1.04 -> 1)
      if (images.length) {
        tl.fromTo(images,
          { opacity: 0, scale: 1.04, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.6,
            ease: "power2.out"
          },
          0.24
        );
      }
    });

    // Custom Scroll zoom for brass hero image (remains scrubbed)
    if (shouldAnimate()) {
      gsap.fromTo(".brass-hero-image",
        { scale: 1.12 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "#capability-2",
            containerAnimation: pinTween,
            start: "left right",
            end: "left left",
            scrub: true,
          }
        }
      );
    }

  }, { scope: containerRef });

  const handleScrollToCapability = (index) => {
    if (!containerRef.current || !horizontalRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const start = rect.top + scrollTop;
    const totalDistance = horizontalRef.current.scrollWidth - window.innerWidth;
    const targetScroll = start + (index / 6) * totalDistance + 3;
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    });
  };

  return (
    <div ref={containerRef} className="bg-brand-bg relative overflow-x-hidden font-sans select-none">
      
      {/* 1. STAGE ONE: Vertical Intro */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-24 border-b border-[#D7DDE5]/30">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-[10px] font-mono font-bold text-[#5E6673] uppercase tracking-[0.25em]">
            [ UOO KAY MECH INDUSTRIES ]
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9893A]" />
          <span className="text-[10px] font-mono font-bold text-[#D9893A] uppercase tracking-[0.25em]">
            ENGINEERING SINCE 2004
          </span>
        </div>

        <div className="border-l-4 border-[#17375E] pl-6 mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#161616] uppercase tracking-wide">
            Capabilities & Catalog
          </h1>
          <p className="text-[#5E6673] text-sm md:text-base leading-relaxed max-w-3xl mt-4 font-medium">
            We manufacture premium precision tooling, machined components, and custom engineering structures. 
            Scroll down to review each capability in our horizontal catalog or click direct index markers below.
          </p>
        </div>

        {/* Index Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CAPABILITIES.map((cap, i) => (
            <button
              key={i}
              onClick={() => handleScrollToCapability(i)}
              className="bg-white border border-[#D7DDE5] hover:border-[#17375E] p-6 text-left transition-all duration-300 group flex flex-col justify-between h-48 cursor-pointer premium-card-hover"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#D9893A] block mb-2">
                  [ 0{i + 1} ]
                </span>
                <div className="font-heading font-bold text-sm text-[#161616] uppercase tracking-wide group-hover:text-[#17375E] transition-colors">
                  {cap.title}
                </div>
                <p className="text-[11px] text-[#5E6673] font-semibold mt-2 line-clamp-2 leading-relaxed">
                  {cap.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-[#17375E] uppercase tracking-wider group-hover:translate-x-1.5 transition-transform duration-300 mt-4">
                JUMP TO SECTION <ArrowRight className="h-3 w-3 text-[#D9893A]" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 2. STAGE TWO: Pinned Horizontal Showcase */}
      <div ref={triggerRef} className="relative w-full overflow-hidden bg-[#F6F7F8]">
        <div 
          ref={horizontalRef} 
          className="flex flex-row flex-nowrap"
          style={{ width: "700vw" }}
        >
          {CAPABILITIES.map((cap, index) => {
            const isDark = index === 5;
            
            return (
              <section
                id={`capability-${index}`}
                key={index}
                className={`w-screen h-[calc(100vh-64px)] md:h-[calc(100vh-104px)] flex-shrink-0 flex items-center justify-center border-r border-[#D7DDE5]/30 relative px-6 md:px-16 lg:px-24 py-8 capability-slide ${
                  isDark ? "bg-[#17375E]" : "bg-[#F6F7F8]"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center w-full max-w-7xl mx-auto h-full overflow-y-auto md:overflow-hidden no-scrollbar">
                  
                  {/* --- CAPABILITY 01: Precision Tooling & Dies --- */}
                  {index === 0 && (
                    <>
                      {/* Left: Large Image */}
                      <div className="col-span-1 md:col-span-6 h-[35vh] md:h-[65vh] relative rounded-[24px] overflow-hidden border border-[#D7DDE5] bg-white shadow-sm reveal-image-item opacity-0 will-change-transform">
                        <Image
                          src={cap.heroImage}
                          alt="Custom dies and punch tooling component by UOO Kay Mech Industries"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 45vw"
                          priority
                        />
                      </div>
                      {/* Right: Content & Sequential Images */}
                      <div className="col-span-1 md:col-span-6 flex flex-col justify-center space-y-6">
                        <div>
                          <span className="text-[10px] font-mono font-bold text-[#D9893A] uppercase tracking-wider block mb-1 reveal-label opacity-0">
                            CAPABILITY 01
                          </span>
                          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#161616] uppercase tracking-tight reveal-heading opacity-0">
                            {cap.title}
                          </h2>
                        </div>
                        
                        <p className="text-[#5E6673] text-xs sm:text-sm font-medium leading-relaxed max-w-xl reveal-desc opacity-0">
                          {cap.description}
                        </p>

                        {/* Staggered sequential tooling images */}
                        <div className="grid grid-cols-3 gap-3 pt-2">
                          {cap.images.slice(1).map((img, tIdx) => (
                            <div key={tIdx} className="relative aspect-square rounded-[16px] overflow-hidden border border-[#D7DDE5] bg-white reveal-image-item opacity-0 will-change-transform">
                              <Image
                                src={img}
                                alt={`Precision tooling die set component detail ${tIdx + 1} manufactured by UOO Kay Mech Industries`}
                                fill
                                className="object-cover"
                                sizes="15vw"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>

                        <div className="reveal-cta opacity-0">
                          <button
                            onClick={() => setActiveDrawer(index)}
                            className="group inline-flex items-center gap-3 text-xs font-mono font-bold tracking-wider text-[#D9893A] hover:text-[#c57529] transition-colors duration-200 premium-btn-hover"
                          >
                            VIEW DETAILS
                            <span className="w-8 h-8 rounded-full border border-[#D9893A] group-hover:border-[#c57529] flex items-center justify-center transition-colors duration-200 arrow-circle">
                              <ArrowRight className="h-4 w-4 transform" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </>
                  )}

                  {/* --- CAPABILITY 02: Precision Machined Components --- */}
                  {index === 1 && (
                    <>
                      {/* Left: Content */}
                      <div className="col-span-1 md:col-span-5 flex flex-col justify-center space-y-6">
                        <div>
                          <span className="text-[10px] font-mono font-bold text-[#D9893A] uppercase tracking-wider block mb-1 reveal-label opacity-0">
                            CAPABILITY 02
                          </span>
                          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#161616] uppercase tracking-tight reveal-heading opacity-0">
                            {cap.title}
                          </h2>
                        </div>
                        
                        <p className="text-[#5E6673] text-xs sm:text-sm font-medium leading-relaxed max-w-xl reveal-desc opacity-0">
                          {cap.description}
                        </p>

                        <div className="reveal-cta opacity-0">
                          <button
                            onClick={() => setActiveDrawer(index)}
                            className="group inline-flex items-center gap-3 text-xs font-mono font-bold tracking-wider text-[#D9893A] hover:text-[#c57529] transition-colors duration-200 premium-btn-hover"
                          >
                            VIEW DETAILS
                            <span className="w-8 h-8 rounded-full border border-[#D9893A] group-hover:border-[#c57529] flex items-center justify-center transition-colors duration-200 arrow-circle">
                              <ArrowRight className="h-4 w-4 transform" />
                            </span>
                          </button>
                        </div>
                      </div>
                      {/* Right: Engineered 2x2 Industrial Grid */}
                      <div className="col-span-1 md:col-span-7 flex items-center justify-center w-full">
                        <div className="grid grid-cols-2 gap-4 md:gap-5 w-full max-w-[680px]">
                          {/* Left Column: Main Large Image */}
                          <div className="col-span-2 md:col-span-1 h-[220px] md:h-[380px] relative rounded-[24px] overflow-hidden border border-[#17375E]/12 bg-white shadow-sm reveal-image-item opacity-0 will-change-transform">
                            <Image
                              src={cap.images[0]}
                              alt="Precision machined steel block component with tight linear tolerances by UOO Kay Mech Industries"
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 30vw"
                              loading="lazy"
                            />
                            <div className="absolute bottom-3 left-3 bg-[#161616]/80 text-white font-mono text-[9px] px-2 py-0.5 rounded uppercase tracking-wider">
                              Main machined block
                            </div>
                          </div>

                          {/* Right Column: 2x2 Supporting Sub-Grid */}
                          <div className="col-span-2 md:col-span-1 grid grid-cols-2 gap-4 md:gap-5 h-full">
                            <div className="h-[150px] md:h-[180px] relative rounded-[24px] overflow-hidden border border-[#17375E]/12 bg-white shadow-sm reveal-image-item opacity-0 will-change-transform col-span-1">
                              <Image
                                src={cap.images[1]}
                                alt="Precision CNC machined split clamp component by UOO Kay Mech Industries"
                                fill
                                className="object-cover"
                                sizes="15vw"
                                loading="lazy"
                              />
                            </div>
                            
                            <div className="h-[150px] md:h-[180px] relative rounded-[24px] overflow-hidden border border-[#17375E]/12 bg-white shadow-sm reveal-image-item opacity-0 will-change-transform col-span-1">
                              <Image
                                src={cap.images[2]}
                                alt="Heavy-duty threaded precision roller component by UOO Kay Mech Industries"
                                fill
                                className="object-cover"
                                sizes="15vw"
                                loading="lazy"
                              />
                            </div>

                            <div className="h-[150px] md:h-[180px] relative rounded-[24px] overflow-hidden border border-[#17375E]/12 bg-white shadow-sm reveal-image-item opacity-0 will-change-transform col-span-1">
                              <Image
                                src={cap.images[3]}
                                alt="CNC turned machined hinge component by UOO Kay Mech Industries"
                                fill
                                className="object-cover"
                                sizes="15vw"
                                loading="lazy"
                              />
                            </div>

                            {/* Technical Specs Info Box */}
                            <div className="h-[150px] md:h-[180px] rounded-[24px] border border-[#17375E]/12 bg-[#F6F7F8] p-4 flex flex-col justify-between reveal-image-item opacity-0 will-change-transform col-span-1 shadow-sm font-mono text-[10px]">
                              <div>
                                <span className="text-[#D9893A] font-bold block mb-1">
                                  [ UKM-SPEC ]
                                </span>
                                <span className="text-[#5E6673] uppercase tracking-wider block text-[8px] font-semibold">
                                  Tolerance Rating
                                </span>
                                <span className="text-[#161616] font-bold block text-xs">
                                  ±0.005 mm
                                </span>
                              </div>
                              <div className="border-t border-[#17375E]/10 pt-2">
                                <span className="text-[#5E6673] uppercase tracking-wider block text-[8px] font-semibold">
                                  Quality Check
                                </span>
                                <span className="text-[#17375E] font-bold block">
                                  100% INSPECTED
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* --- CAPABILITY 03: Brass & Non-Ferrous Components --- */}
                  {index === 2 && (
                    <>
                      {/* Left: Giant visual focus */}
                      <div className="col-span-1 md:col-span-7 h-[35vh] md:h-[70vh] relative rounded-[24px] overflow-hidden border border-[#D7DDE5] bg-white shadow-sm reveal-image-item opacity-0 will-change-transform">
                        <Image
                          src={cap.heroImage}
                          alt="Custom turned brass bushings and non-ferrous components by UOO Kay Mech Industries"
                          fill
                          className="object-cover brass-hero-image"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          loading="lazy"
                        />
                      </div>
                      {/* Right: Content & details */}
                      <div className="col-span-1 md:col-span-5 flex flex-col justify-center space-y-6">
                        <div>
                          <span className="text-[10px] font-mono font-bold text-[#D9893A] uppercase tracking-wider block mb-1 reveal-label opacity-0">
                            CAPABILITY 03
                          </span>
                          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#161616] uppercase tracking-tight reveal-heading opacity-0">
                            {cap.title}
                          </h2>
                        </div>
                        
                        <p className="text-[#5E6673] text-xs sm:text-sm font-medium leading-relaxed max-w-xl reveal-desc opacity-0">
                          {cap.description}
                        </p>

                        <div className="grid grid-cols-2 gap-3 pt-2">
                          {cap.images.slice(1).map((img, bIdx) => (
                            <div key={bIdx} className="relative aspect-[4/3] rounded-[16px] overflow-hidden border border-[#D7DDE5] bg-white reveal-image-item opacity-0 will-change-transform">
                              <Image
                                src={img}
                                alt={`High precision turned brass components detail ${bIdx + 1} by UOO Kay Mech Industries`}
                                fill
                                className="object-cover"
                                sizes="15vw"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>

                        <div className="reveal-cta opacity-0">
                          <button
                            onClick={() => setActiveDrawer(index)}
                            className="group inline-flex items-center gap-3 text-xs font-mono font-bold tracking-wider text-[#D9893A] hover:text-[#c57529] transition-colors duration-200 premium-btn-hover"
                          >
                            VIEW DETAILS
                            <span className="w-8 h-8 rounded-full border border-[#D9893A] group-hover:border-[#c57529] flex items-center justify-center transition-colors duration-200 arrow-circle">
                              <ArrowRight className="h-4 w-4 transform" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </>
                  )}

                  {/* --- CAPABILITY 04: Industrial Fabrication --- */}
                  {index === 3 && (
                    <>
                      {/* Left: Content */}
                      <div className="col-span-1 md:col-span-5 flex flex-col justify-center space-y-6">
                        <div>
                          <span className="text-[10px] font-mono font-bold text-[#D9893A] uppercase tracking-wider block mb-1 reveal-label opacity-0">
                            CAPABILITY 04
                          </span>
                          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#161616] uppercase tracking-tight reveal-heading opacity-0">
                            {cap.title}
                          </h2>
                        </div>
                        
                        <p className="text-[#5E6673] text-xs sm:text-sm font-medium leading-relaxed max-w-xl reveal-desc opacity-0">
                          {cap.description}
                        </p>

                        <div className="reveal-cta opacity-0">
                          <button
                            onClick={() => setActiveDrawer(index)}
                            className="group inline-flex items-center gap-3 text-xs font-mono font-bold tracking-wider text-[#D9893A] hover:text-[#c57529] transition-colors duration-200 premium-btn-hover"
                          >
                            VIEW DETAILS
                            <span className="w-8 h-8 rounded-full border border-[#D9893A] group-hover:border-[#c57529] flex items-center justify-center transition-colors duration-200 arrow-circle">
                              <ArrowRight className="h-4 w-4 transform" />
                            </span>
                          </button>
                        </div>
                      </div>
                      {/* Right: Bento Grid */}
                      <div className="col-span-1 md:col-span-7 h-[38vh] md:h-[65vh] grid grid-cols-6 grid-rows-4 gap-3">
                        <div className="col-span-4 row-span-4 relative rounded-[24px] overflow-hidden border border-[#D7DDE5] hover:border-[#D9893A] hover:scale-[1.01] transition-all duration-300 reveal-image-item opacity-0 will-change-transform bg-white shadow-sm">
                          <Image
                            src={cap.images[0]}
                            alt="Heavy duty steel machine enclosure fabrication by UOO Kay Mech Industries"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 30vw"
                            loading="lazy"
                          />
                        </div>
                        <div className="col-span-2 row-span-2 relative rounded-[24px] overflow-hidden border border-[#D7DDE5] hover:border-[#D9893A] hover:scale-[1.01] transition-all duration-300 reveal-image-item opacity-0 will-change-transform bg-white shadow-sm">
                          <Image
                            src={cap.images[2]}
                            alt="Fabricated access ladder and industrial safety platform by UOO Kay Mech Industries"
                            fill
                            className="object-cover"
                            sizes="15vw"
                            loading="lazy"
                          />
                        </div>
                        <div className="col-span-2 row-span-2 relative rounded-[24px] overflow-hidden border border-[#D7DDE5] hover:border-[#D9893A] hover:scale-[1.01] transition-all duration-300 reveal-image-item opacity-0 will-change-transform bg-white shadow-sm">
                          <Image
                            src={cap.images[3]}
                            alt="Material handling storage trolley fabrication by UOO Kay Mech Industries"
                            fill
                            className="object-cover"
                            sizes="15vw"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* --- CAPABILITY 05: Stainless Steel Fabrication --- */}
                  {index === 4 && (
                    <>
                      {/* Left: Editorial Grid */}
                      <div className="col-span-1 md:col-span-7 h-[38vh] md:h-[65vh] grid grid-cols-4 grid-rows-2 gap-3">
                        <div className="col-span-2 row-span-2 relative rounded-[24px] overflow-hidden border border-[#D7DDE5] reveal-image-item opacity-0 will-change-transform bg-white shadow-sm">
                          <Image
                            src={cap.images[0]}
                            alt="Food grade stainless steel work table by UOO Kay Mech Industries"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 30vw"
                            loading="lazy"
                          />
                        </div>
                        <div className="col-span-2 row-span-1 relative rounded-[24px] overflow-hidden border border-[#D7DDE5] reveal-image-item opacity-0 will-change-transform bg-white shadow-sm">
                          <Image
                            src={cap.images[1]}
                            alt="Corrosion resistant stainless steel tank cladding and support structure by UOO Kay Mech Industries"
                            fill
                            className="object-cover"
                            sizes="20vw"
                            loading="lazy"
                          />
                        </div>
                        <div className="col-span-1 row-span-1 relative rounded-[24px] overflow-hidden border border-[#D7DDE5] reveal-image-item opacity-0 will-change-transform bg-white shadow-sm">
                          <Image
                            src={cap.images[2]}
                            alt="Argon purged TIG welded stainless steel assembly by UOO Kay Mech Industries"
                            fill
                            className="object-cover"
                            sizes="12vw"
                            loading="lazy"
                          />
                        </div>
                        <div className="col-span-1 row-span-1 relative rounded-[24px] overflow-hidden border border-[#D7DDE5] reveal-image-item opacity-0 will-change-transform bg-white shadow-sm">
                          <Image
                            src={cap.images[3]}
                            alt="Custom fabricated stainless steel display stand structure by UOO Kay Mech Industries"
                            fill
                            className="object-cover"
                            sizes="12vw"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      {/* Right: Content */}
                      <div className="col-span-1 md:col-span-5 flex flex-col justify-center space-y-6">
                        <div>
                          <span className="text-[10px] font-mono font-bold text-[#D9893A] uppercase tracking-wider block mb-1 reveal-label opacity-0">
                            CAPABILITY 05
                          </span>
                          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#161616] uppercase tracking-tight reveal-heading opacity-0">
                            {cap.title}
                          </h2>
                        </div>
                        
                        <p className="text-[#5E6673] text-xs sm:text-sm font-medium leading-relaxed max-w-xl reveal-desc opacity-0">
                          {cap.description}
                        </p>

                        <div className="reveal-cta opacity-0">
                          <button
                            onClick={() => setActiveDrawer(index)}
                            className="group inline-flex items-center gap-3 text-xs font-mono font-bold tracking-wider text-[#D9893A] hover:text-[#c57529] transition-colors duration-200 premium-btn-hover"
                          >
                            VIEW DETAILS
                            <span className="w-8 h-8 rounded-full border border-[#D9893A] group-hover:border-[#c57529] flex items-center justify-center transition-colors duration-200 arrow-circle">
                              <ArrowRight className="h-4 w-4 transform" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </>
                  )}

                  {/* --- CAPABILITY 06: Custom Engineering Structures --- */}
                  {index === 5 && (
                    <>
                      {/* Left: Content */}
                      <div className="col-span-1 md:col-span-5 flex flex-col justify-center space-y-6 text-white">
                        <div>
                          <span className="text-[10px] font-mono font-bold text-[#D9893A] uppercase tracking-wider block mb-1 reveal-label opacity-0">
                            CAPABILITY 06
                          </span>
                          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-tight reveal-heading opacity-0">
                            {cap.title}
                          </h2>
                        </div>
                        
                        <p className="text-[#D7DDE5] text-xs sm:text-sm font-medium leading-relaxed max-w-xl reveal-desc opacity-0">
                          {cap.description}
                        </p>

                        <div className="reveal-cta opacity-0">
                          <button
                            onClick={() => setActiveDrawer(index)}
                            className="group inline-flex items-center gap-3 text-xs font-mono font-bold tracking-wider text-white hover:text-[#D9893A] transition-colors duration-200 premium-btn-hover"
                          >
                            VIEW DETAILS
                            <span className="w-8 h-8 rounded-full border border-white group-hover:border-[#D9893A] flex items-center justify-center transition-colors duration-200 arrow-circle">
                              <ArrowRight className="h-4 w-4 transform" />
                            </span>
                          </button>
                        </div>
                      </div>
                      {/* Right: Structural visuals */}
                      <div className="col-span-1 md:col-span-7 h-[38vh] md:h-[65vh] grid grid-cols-2 gap-4">
                        <div className="relative rounded-[24px] overflow-hidden border border-white/10 reveal-image-item opacity-0 will-change-transform bg-[#17375E]/30 shadow-md">
                          <Image
                            src={cap.images[0]}
                            alt="Heavy welded steel machine base frame by UOO Kay Mech Industries"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 25vw"
                            loading="lazy"
                          />
                        </div>
                        <div className="relative rounded-[24px] overflow-hidden border border-white/10 reveal-image-item opacity-0 will-change-transform bg-[#17375E]/30 shadow-md">
                          <Image
                            src={cap.images[1]}
                            alt="Welded structural engineering frames and assemblies by UOO Kay Mech Industries"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 25vw"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* --- CAPABILITY 07: Fixtures & Special Purpose Components --- */}
                  {index === 6 && (
                    <>
                      {/* Left: Masonry Grid */}
                      <div className="col-span-1 md:col-span-7 h-[38vh] md:h-[70vh] grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                          <div className="relative h-[18vh] md:h-[32vh] rounded-[24px] overflow-hidden border border-[#D7DDE5] reveal-image-item opacity-0 will-change-transform bg-white shadow-sm">
                            <Image
                              src={cap.images[0]}
                              alt="Custom threaded tooling fixture by UOO Kay Mech Industries"
                              fill
                              className="object-cover"
                              sizes="20vw"
                              loading="lazy"
                            />
                          </div>
                          <div className="relative h-[14vh] md:h-[28vh] rounded-[24px] overflow-hidden border border-[#D7DDE5] reveal-image-item opacity-0 will-change-transform bg-white shadow-sm">
                            <Image
                              src={cap.images[2]}
                              alt="CNC turned machined steel rings by UOO Kay Mech Industries"
                              fill
                              className="object-cover"
                              sizes="20vw"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="space-y-4 pt-8">
                          <div className="relative h-[14vh] md:h-[28vh] rounded-[24px] overflow-hidden border border-[#D7DDE5] reveal-image-item opacity-0 will-change-transform bg-white shadow-sm">
                            <Image
                              src={cap.images[1]}
                              alt="Precision engineered industrial welding holding fixtures by UOO Kay Mech Industries"
                              fill
                              className="object-cover"
                              sizes="20vw"
                              loading="lazy"
                            />
                          </div>
                          <div className="relative h-[18vh] md:h-[32vh] rounded-[24px] overflow-hidden border border-[#D7DDE5] reveal-image-item opacity-0 will-change-transform bg-white shadow-sm">
                            <Image
                              src={cap.images[3]}
                              alt="Special purpose mechanical components and assemblies by UOO Kay Mech Industries"
                              fill
                              className="object-cover"
                              sizes="20vw"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                      {/* Right: Floating Content */}
                      <div className="col-span-1 md:col-span-5 flex flex-col justify-center space-y-6">
                        <div>
                          <span className="text-[10px] font-mono font-bold text-[#D9893A] uppercase tracking-wider block mb-1 reveal-label opacity-0">
                            CAPABILITY 07
                          </span>
                          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#161616] uppercase tracking-tight reveal-heading opacity-0">
                            {cap.title}
                          </h2>
                        </div>
                        
                        <p className="text-[#5E6673] text-xs sm:text-sm font-medium leading-relaxed max-w-xl reveal-desc opacity-0">
                          {cap.description}
                        </p>

                        <div className="reveal-cta opacity-0">
                          <button
                            onClick={() => setActiveDrawer(index)}
                            className="group inline-flex items-center gap-3 text-xs font-mono font-bold tracking-wider text-[#D9893A] hover:text-[#c57529] transition-colors duration-200 premium-btn-hover"
                          >
                            VIEW DETAILS
                            <span className="w-8 h-8 rounded-full border border-[#D9893A] group-hover:border-[#c57529] flex items-center justify-center transition-colors duration-200 arrow-circle">
                              <ArrowRight className="h-4 w-4 transform" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </>
                  )}

                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* 4. PREMIUM SPECIFICATION SLIDE-OUT DRAWER */}
      {activeDrawer !== null && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 z-[100] bg-[#161616]/75 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setActiveDrawer(null)}
          />

          {/* Drawer Panel */}
          <div className="fixed top-0 right-0 h-full z-[110] w-full max-w-[520px] bg-[#1A1E24] text-[#F6F7F8] border-l border-white/10 shadow-2xl flex flex-col transition-all duration-300 ease-in-out transform font-sans">
            
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono font-bold text-[#D9893A] uppercase tracking-wider block">
                  TECHNICAL DATASHEET / CAPABILITY 0{activeDrawer + 1}
                </span>
                <h3 className="font-heading font-bold text-lg md:text-xl text-white uppercase tracking-wide mt-1">
                  {CAPABILITIES[activeDrawer].title}
                </h3>
              </div>
              <button
                onClick={() => setActiveDrawer(null)}
                className="w-9 h-9 rounded-full border border-white/20 hover:border-[#D9893A] hover:text-[#D9893A] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close datasheet"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Content Container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar">
              
              {/* Detailed Specs Table */}
              <div className="space-y-4">
                <h4 className="text-[10px] font-mono font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
                  [ SPECIFICATIONS ]
                </h4>
                <div className="space-y-3.5 text-xs">
                  <div className="grid grid-cols-3 py-1.5 border-b border-white/5">
                    <span className="text-[#5E6673] font-mono font-semibold">Tolerances</span>
                    <span className="col-span-2 font-medium text-white">{CAPABILITIES[activeDrawer].specs.tolerances}</span>
                  </div>
                  <div className="grid grid-cols-3 py-1.5 border-b border-white/5">
                    <span className="text-[#5E6673] font-mono font-semibold">Materials</span>
                    <span className="col-span-2 font-medium text-white">{CAPABILITIES[activeDrawer].specs.materials}</span>
                  </div>
                  <div className="grid grid-cols-3 py-1.5 border-b border-white/5">
                    <span className="text-[#5E6673] font-mono font-semibold">Processes</span>
                    <span className="col-span-2 font-medium text-white">{CAPABILITIES[activeDrawer].specs.operations}</span>
                  </div>
                  <div className="grid grid-cols-3 py-1.5 border-b border-white/5">
                    <span className="text-[#5E6673] font-mono font-semibold">Treatment / Paint</span>
                    <span className="col-span-2 font-medium text-white">{CAPABILITIES[activeDrawer].specs.hardness}</span>
                  </div>
                  <div className="grid grid-cols-3 py-1.5 border-b border-white/5">
                    <span className="text-[#5E6673] font-mono font-semibold">Applications</span>
                    <span className="col-span-2 font-medium text-white">{CAPABILITIES[activeDrawer].specs.applications}</span>
                  </div>
                </div>
              </div>

              {/* Capability Catalog Gallery */}
              <div className="space-y-4">
                <h4 className="text-[10px] font-mono font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
                  [ CATALOGUE IMAGES ]
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {CAPABILITIES[activeDrawer].images.map((img, i) => (
                    <div key={i} className="relative aspect-video rounded-[16px] overflow-hidden border border-white/10 bg-black/40">
                      <Image
                        src={img}
                        alt={`${CAPABILITIES[activeDrawer].title} technical data sheet catalogue detail ${i + 1} by UOO Kay Mech Industries`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="200px"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Footer Action */}
            <div className="p-6 border-t border-white/10 bg-[#161a1f] flex flex-col gap-3">
              <Link
                href={`/contact?interest=${encodeURIComponent(CAPABILITIES[activeDrawer].title)}#contact-form`}
                onClick={() => setActiveDrawer(null)}
                className="w-full bg-[#D9893A] hover:bg-[#c57529] text-white font-heading font-bold text-xs uppercase tracking-wider py-3.5 text-center transition-colors duration-200"
              >
                Inquire About This Capability
              </Link>
              <button
                onClick={() => setActiveDrawer(null)}
                className="w-full bg-transparent hover:bg-white/5 text-white/70 hover:text-white font-heading font-bold text-xs uppercase tracking-wider py-3 text-center border border-white/10 transition-colors"
              >
                Close Datasheet
              </button>
            </div>

          </div>
        </>
      )}

    </div>
  );
}
