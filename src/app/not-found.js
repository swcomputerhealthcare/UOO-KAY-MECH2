"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] bg-brand-bg flex items-center justify-center py-20 relative overflow-hidden px-4 sm:px-6 lg:px-8 select-none">
      {/* Decorative smooth ambient light gradients */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/5 to-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Cinematic Dark Wrapper Card */}
      <div className="w-full max-w-5xl bg-gradient-to-br from-[#1c1c1c] via-[#121212] to-[#0a0a0a] rounded-[2.5rem] border border-white/10 p-8 sm:p-16 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Copy and Helper Links */}
        <div className="flex-1 space-y-8 text-left z-10">
          <div>
            <span className="text-[10px] font-black text-[#5bdbf5] uppercase tracking-[0.25em] block mb-3">/ Page Not Found</span>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-wide mb-4">
              Lost in the Machine
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-semibold max-w-md">
              Looks like you&apos;ve taken a wrong turn. The engineering spec or resource page you are looking for has been decommissioned, moved, or never existed.
            </p>
          </div>

          {/* Navigation Helper Grid */}
          <div className="space-y-5 pt-8 border-t border-white/5 w-full">
            <h3 className="text-[10px] font-black uppercase text-[#5bdbf5] tracking-[0.15em] mb-4">
              Maybe you were looking for:
            </h3>
            
            <div className="space-y-4">
              {/* Home */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 group pb-3 border-b border-white/5">
                <span className="text-xs text-slate-300 font-semibold">Back to Safe Ground</span>
                <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-[#5bdbf5] hover:text-[#121212] text-white border border-white/10 rounded-xl text-[10px] font-heading font-extrabold uppercase tracking-wider transition-all duration-300 active:scale-[0.98]">
                  <span>Home</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Capabilities */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 group pb-3 border-b border-white/5">
                <span className="text-xs text-slate-300 font-semibold">Machinery & Capability Specs</span>
                <Link href="/products" className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-[#5bdbf5] hover:text-[#121212] text-white border border-white/10 rounded-xl text-[10px] font-heading font-extrabold uppercase tracking-wider transition-all duration-300 active:scale-[0.98]">
                  <span>Capabilities</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Contact Us */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 group">
                <span className="text-xs text-slate-300 font-semibold">Enquire for Custom Quotation</span>
                <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-[#5bdbf5] hover:text-[#121212] text-white border border-white/10 rounded-xl text-[10px] font-heading font-extrabold uppercase tracking-wider transition-all duration-300 active:scale-[0.98]">
                  <span>Contact Us</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Massive 4-Gear-4 Graphic */}
        <div className="flex items-center justify-center select-none z-10 shrink-0">
          <div className="flex items-center gap-3 text-white font-heading font-black text-8xl sm:text-[10rem] md:text-[12rem] leading-none tracking-tighter">
            <span>4</span>
            
            {/* Spinning Mechanical Cog SVG replacing the "0" */}
            <div className="p-2 sm:p-4 bg-white/5 rounded-full border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] flex items-center justify-center shrink-0">
              <svg
                className="w-20 h-20 sm:w-32 sm:h-32 md:w-36 md:h-36 text-[#5bdbf5] fill-current animate-[spin_35s_linear_infinite]"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer Cog Teeth */}
                <path
                  d="M50,5 C52,5 53,8 55,9 C57,10 59,10 61,8 C63,6 65,7 66,9 C67,11 66,13 67,15 C69,17 71,17 73,16 C75,15 77,16 78,18 C79,20 78,22 79,24 C81,26 83,27 85,25 C87,24 89,25 90,27 C91,29 90,31 91,33 C93,35 95,36 94,39 C94,41 93,42 93,44 C95,46 95,47 95,50 C95,53 92,54 91,55 C90,57 90,59, 92,61 C94,63 93,65 91,66 C89,67 87,66 85,67 C83,69 83,71 84,73 C85,75 84,77 82,78 C80,79 78,78 76,79 C74,81 73,83 75,85 C76,87 75,89 73,90 C71,91 69,90 67,91 C65,93 64,95 61,94 C59,94 58,93 56,93 C54,95 53,95 50,95 C47,95 46,92 45,91 C43,90 41,90 39,92 C37,94 35,93 34,91 C33,89 34,87 33,85 C31,83 29,83 27,84 C25,85 23,84 22,82 C21,80 22,78 21,76 C19,74 17,73 15,75 C13,76 11,75 10,73 C9,71 10,69 9,67 C7,65 5,64 6,61 C6,59 7,58 7,56 C5,54 5,53 5,50 C5,47 8,46 9,45 C10,43 10,41 8,39 C6,37 7,35 9,34 C11,33 13,34 15,33 C17,31 17,29 16,27 C15,25 16,23 18,22 C20,21 22,22 24,21 C26,19 27,17 25,15 C24,13 25,11 27,10 C29,9 31,10 33,9 C35,7 36,5 39,6 C41,6 42,7 44,7 C46,5 47,5 50,5 Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                {/* Internal rings and dial teeth */}
                <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3,3" fill="none" />
                <circle cx="50" cy="50" r="17" stroke="currentColor" strokeWidth="2.5" fill="none" />
                {/* Technical cross spokes */}
                <line x1="50" y1="17" x2="50" y2="83" stroke="currentColor" strokeWidth="1" />
                <line x1="17" y1="50" x2="83" y2="50" stroke="currentColor" strokeWidth="1" />
                {/* Center rotor shaft */}
                <circle cx="50" cy="50" r="5" fill="currentColor" />
              </svg>
            </div>
            <span>4</span>
          </div>
        </div>

      </div>
    </div>
  );
}


