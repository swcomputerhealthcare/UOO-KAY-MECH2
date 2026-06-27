"use client";

import { FileText, Award, BadgeCheck, ShieldCheck } from "lucide-react";

export default function QualityClient() {
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

  return (
    <div className="bg-brand-bg min-h-screen">

      {/* 1. Header & Certifications */}
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

      {/* 2. Process Timeline (Clean static responsive grid) */}
      <div className="bg-white border-y border-[#D7DDE5] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="border-l-2 border-[#EC6713] pl-6 mb-16">
            <span className="text-[10px] font-mono font-bold text-[#5E6673] uppercase tracking-[0.25em] block mb-1">
              [ OPERATIONAL PROCESS ]
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#161616] uppercase tracking-wide leading-tight">
              Our 4-Stage Quality Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((p, idx) => (
              <div
                key={idx}
                className="border-l-2 border-[#EC6713] pl-6 py-4 font-sans bg-[#F6F7F8] p-6 rounded-[16px] shadow-sm hover:border-[#09285F] transition-colors duration-300"
              >
                <div className="space-y-4">
                  {/* Step Marker */}
                  <div className="flex justify-between items-center border-b border-[#D7DDE5] pb-2">
                    <span className="font-heading text-xl sm:text-2xl font-black text-[#EC6713] tracking-tight leading-none">
                      STAGE {p.step}
                    </span>
                    <span className="font-mono text-[9px] text-[#5E6673] uppercase tracking-wider">
                      SPEC_AUDIT
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[#161616] uppercase tracking-wide">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#5E6673] leading-relaxed font-medium">
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
