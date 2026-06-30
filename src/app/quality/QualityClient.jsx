"use client";

import { FileText, Award, BadgeCheck, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

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
    <motion.div 
      className="bg-brand-bg"
      initial={{ opacity: 0.01, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >

      {/* 1. Header & Certifications */}
      <div className="pt-12 pb-6 sm:pt-16 sm:pb-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page Header */}
          <motion.div 
            className="border-l-2 border-[#EC6713] pl-6 mb-24 qual-header-item"
            initial={{ opacity: 0.01, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="text-[10px] font-mono font-bold text-[#5E6673] uppercase tracking-[0.25em] block mb-1">
              [ TECHNICAL STANDARDS ]
            </span>
            <h1 className="sectionTitle font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14429E] uppercase tracking-wide">
              Quality Assurance
            </h1>
          </motion.div>

          {/* Certifications Block */}
          <div className="mb-12">
            <motion.span 
              className="text-[10px] font-mono font-bold text-[#5E6673] tracking-[0.2em] uppercase block mb-2"
              initial={{ opacity: 0.01, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              [ COMPLIANCE REGISTRY ]
            </motion.span>
            <motion.h2 
              className="font-heading text-xl sm:text-2xl md:text-2xl font-bold text-[#14429E] uppercase tracking-wide border-b border-[#D7DDE5] pb-4 mb-8 leading-tight"
              initial={{ opacity: 0.01, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
            >
              Registration & Certifications
            </motion.h2>

            <motion.div 
              className="certGrid gap-8 certs-list font-sans"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.05 }}
            >
              {certifications.map((cert, idx) => (
                <motion.article
                  key={idx}
                  className="certCard cert-row premium-card-hover cursor-pointer"
                  initial={{ opacity: 0.01, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: idx * 0.05 }}
                  whileHover={{ y: -4, borderTopColor: "#EC6713", boxShadow: "0 10px 30px rgba(20, 66, 158, 0.05)" }}
                >
                  <div className="certTop space-y-4">
                    <div className="text-slate-700">
                      {cert.icon}
                    </div>
                    <h3 className="font-heading font-bold text-[#14429E] text-lg uppercase tracking-wide">
                      {cert.title}
                    </h3>
                    <p className="text-[#5E6673] text-xs leading-relaxed font-medium">
                      {cert.desc}
                    </p>
                  </div>
                  <div className="certMeta">
                    <span className="block text-[#5E6673] uppercase font-bold tracking-wider text-[10px] font-mono">{cert.label}</span>
                    <strong className="block text-[#14429E] font-extrabold tracking-wide uppercase break-all text-[11px] font-mono mt-0.5">{cert.id}</strong>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* 2. Process Timeline (Clean static responsive grid) */}
      <div className="bg-white border-y border-[#D7DDE5] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="border-l-2 border-[#EC6713] pl-6 mb-16"
            initial={{ opacity: 0.01, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <span className="text-[10px] font-mono font-bold text-[#5E6673] uppercase tracking-[0.25em] block mb-1">
              [ OPERATIONAL PROCESS ]
            </span>
            <h2 className="font-heading text-xl sm:text-2xl md:text-2xl font-bold text-[#14429E] uppercase tracking-wide leading-tight">
              Our 4-Stage Quality Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((p, idx) => (
              <motion.div
                key={idx}
                className="border-l-2 border-[#EC6713] pl-6 py-4 font-sans bg-[#F6F7F8] p-6 rounded-[16px] shadow-sm transition-colors duration-300"
                initial={{ opacity: 0.01, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: idx * 0.05 }}
                whileHover={{ borderColor: "#14429E" }}
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

                  <h3 className="font-heading text-lg font-bold text-[#14429E] uppercase tracking-wide">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#5E6673] leading-relaxed font-medium">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </motion.div>

  );
}
