"use client";

import { useRef, useState, useEffect } from "react";
import { FileText, Award, BadgeCheck, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { shouldAnimate } from "@/lib/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function QualityClient() {
  const containerRef = useRef(null);
  const pinRef = useRef(null);
  const scrollTrackRef = useRef(null);
  const [canScroll, setCanScroll] = useState(false);

  const certifications = [
    {
      title: "GST Registered",
      desc: "Tax compliant with active GST registration, facilitating transparent billing and corporate commercial audits.",
      id: "27BIRPS2093H1ZN",
      label: "GSTIN",
      icon: <FileText className="h-5 w-5 text-[#EC6713]" strokeWidth={1.5} />,
    },
    {
      title: "MSME Registered",
      desc: "Registered Micro, Small & Medium Enterprise, supporting industrial supplier eligibility criteria.",
      id: "UDYAM-MH-33-0322159",
      label: "MSME Reg No",
      icon: <Award className="h-5 w-5 text-[#EC6713]" strokeWidth={1.5} />,
    },
    {
      title: "Udyam Registration",
      desc: "Official Government of India Udyam certificate registration holding vendor compliance standards.",
      id: "UDYAM-MH-33-0322159",
      label: "Udyam No",
      icon: <BadgeCheck className="h-5 w-5 text-[#EC6713]" strokeWidth={1.5} />,
    },
    {
      title: "Approved Vendor",
      desc: "Verified and listed in the supplier registers of conglomerates including L&T, Emerson, and Parle Tools.",
      id: "L&T & Emerson Approved Vendor",
      label: "Status",
      icon: <ShieldCheck className="h-5 w-5 text-[#EC6713]" strokeWidth={1.5} />,
    },
  ];

  const processes = [
    {
      step: "01",
      title: "Material Inspection",
      desc: "Raw material is verified against specifications and chemical grades before machining begins. Visual inspects and initial dimensional checks are performed to prevent source defects.",
    },
    {
      step: "02",
      title: "Precision Machining",
      desc: "Components are machined on CNC and conventional machines strictly in accordance with customer drawings, tolerance standards, and process charts.",
    },
    {
      step: "03",
      title: "Dimensional Testing",
      desc: "All components are measured in-process and post-machining with calibrated instruments, including Mitutoyo height gauges, bore dials, micrometers, and vernier calipers.",
    },
    {
      step: "04",
      title: "Final Inspection & Dispatch",
      desc: "Complete final quality assurance check. Components are carefully packed per industrial packaging standards and dispatched with formal delivery challans and test reports.",
    },
  ];

  // 1. Detect track width vs viewport to toggle pinning layout
  useEffect(() => {
    const checkScroll = () => {
      const track = scrollTrackRef.current;
      if (track) {
        setCanScroll(track.scrollWidth > window.innerWidth);
      }
    };

    const timer = setTimeout(checkScroll, 150); // allow styles to fully hydrate
    window.addEventListener("resize", checkScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  // 2. Load animations (Run once)
  useGSAP(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile || !shouldAnimate()) {
      gsap.set(".qual-header-item, .cert-row", {
        opacity: 1,
        y: 0,
        visibility: "visible"
      });
      ScrollTrigger.getAll().forEach(t => t.kill());
      return;
    }

    gsap.fromTo(".qual-header-item",
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }
    );

    gsap.fromTo(".cert-row",
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".certs-list",
          start: "top 90%",
          toggleActions: "play none none none"
        }
      }
    );
  }, { scope: containerRef });

  // 3. ScrollTrigger Horizontal scroll (Depends on canScroll)
  useGSAP(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile || !shouldAnimate()) return;

    const track = scrollTrackRef.current;
    const container = pinRef.current;

    if (!canScroll || !track || !container) return;

    const scrollWidth = track.scrollWidth;
    const viewportWidth = window.innerWidth;
    const amount = scrollWidth - viewportWidth;

    const st = ScrollTrigger.create({
      trigger: container,
      pin: true,
      scrub: 1,
      start: "top top",
      end: () => `+=${amount + 150}`,
      invalidateOnRefresh: true,
      animation: gsap.to(track, {
        x: -amount - 64, // translate distance with safe padding margin
        ease: "none"
      })
    });

    return () => st.kill(true);
  }, { scope: containerRef, dependencies: [canScroll] });

  const animEnabled = typeof window !== "undefined" ? (!window.matchMedia("(max-width: 768px)").matches && shouldAnimate()) : true;

  return (
    <div ref={containerRef} className="bg-brand-bg min-h-screen">

      {/* 1. Header & Certifications (whitespace and thin line borders) */}
      <div className="pt-24 pb-8 sm:pt-32 sm:pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page Header */}
          <div className="border-l-2 border-[#EC6713] pl-6 mb-24 qual-header-item">
            <span className="text-[10px] font-mono font-bold text-[#5E6673] uppercase tracking-[0.25em] block mb-1">
              [ TECHNICAL STANDARDS ]
            </span>
            <h1 className="sectionTitle font-heading text-5xl sm:text-6xl font-bold text-[#161616] uppercase tracking-wide">
              Quality Assurance
            </h1>
          </div>

          {/* Certifications Block */}
          <div className="mb-12">
            <span className="text-[10px] font-mono font-bold text-[#5E6673] tracking-[0.2em] uppercase block mb-2">
              [ COMPLIANCE REGISTRY ]
            </span>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-[#161616] uppercase tracking-wide border-b border-[#D7DDE5] pb-4 mb-8 leading-tight">
              Registration & Certifications
            </h2>

            <div className="certGrid gap-8 certs-list font-sans">
              {certifications.map((cert, idx) => (
                <article
                  key={idx}
                  className="certCard cert-row premium-card-hover"
                >
                  <div className="certTop space-y-4">
                    <div className="text-slate-700">
                      {cert.icon}
                    </div>
                    <h3 className="font-heading font-bold text-[#161616] text-lg uppercase tracking-wide">
                      {cert.title}
                    </h3>
                    <p className="text-[#5E6673] text-xs leading-relaxed font-medium">
                      {cert.desc}
                    </p>
                  </div>
                  <div className="certMeta">
                    <span className="block text-[#5E6673] uppercase font-bold tracking-wider text-[10px] font-mono">{cert.label}</span>
                    <strong className="block text-[#09285F] font-extrabold tracking-wide uppercase break-all text-[11px] font-mono mt-0.5">{cert.id}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 2. Process Timeline (Horizontal Scroll on white background canvas) */}
      <div
        ref={pinRef}
        className={`min-h-screen flex flex-col justify-center bg-white relative overflow-hidden border-y border-[#D7DDE5] py-16 ${!animEnabled ? "h-auto min-h-0" : ""
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full shrink-0 mb-16">
          <div className="border-l-2 border-[#EC6713] pl-6">
            <span className="text-[10px] font-mono font-bold text-[#5E6673] uppercase tracking-[0.25em] block mb-1">
              [ OPERATIONAL PROCESS ]
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#161616] uppercase tracking-wide leading-tight">
              Our 4-Stage Quality Process
            </h2>
          </div>
        </div>

        {/* Horizontal track container */}
        <div className={`w-full proc-track-container ${animEnabled ? "overflow-hidden" : "overflow-x-auto scroll-smooth pb-6"}`}>
          <div
            ref={scrollTrackRef}
            className={`flex gap-16 px-8 sm:px-16 ${canScroll && animEnabled ? "" : "md:justify-center"}`}
          >
            {processes.map((p, idx) => (
              <div
                key={idx}
                className="proc-block w-[300px] sm:w-[400px] shrink-0 border-l-2 border-[#EC6713] pl-8 py-4 font-sans"
              >
                <div className="space-y-6">
                  {/* Step Marker */}
                  <div className="flex justify-between items-center border-b border-[#D7DDE5] pb-3">
                    <span className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-[#EC6713] tracking-tight leading-none">
                      STAGE {p.step}
                    </span>
                    <span className="font-mono text-[9px] text-[#5E6673] uppercase tracking-wider">
                      SPEC_AUDIT
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#161616] uppercase tracking-wide">
                    {p.title}
                  </h3>

                  <p className="text-[#5E6673] text-xs sm:text-sm leading-relaxed font-medium">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}


