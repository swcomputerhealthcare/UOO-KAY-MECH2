"use client";

import { useState } from "react";
import { FileText, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function InfrastructureClient() {
  const [activeTab, setActiveTab] = useState("machines");
  const [selectedAssetIdx, setSelectedAssetIdx] = useState(0);

  const machines = [
    { 
      name: "ACE Micromatic AMS MCV450", 
      spec: "800 × 500 × 450 mm", 
      category: "CNC Machining Centre", 
      featured: true,
      details: [
        { label: "Asset Type", value: "Vertical Machining Center (VMC)" },
        { label: "Axis Travel", value: "X: 800 | Y: 500 | Z: 450 mm" },
        { label: "Repeatability", value: "±0.005 mm" },
        { label: "Spindle Speed", value: "8,000 RPM high-torque" },
        { label: "CNC Controller", value: "FANUC / Mitsubishi Console" },
        { label: "Primary Operations", value: "High-precision milling, drilling, & pocketing" }
      ]
    },
    { 
      name: "CNC Lathe MONO-200XL", 
      spec: "Dia 300 × 550 mm", 
      category: "CNC Turning", 
      featured: true,
      details: [
        { label: "Asset Type", value: "High Precision CNC Lathe" },
        { label: "Turning Capacity", value: "Max Dia: 300 mm | Max Length: 550 mm" },
        { label: "Positioning Accuracy", value: "±0.008 mm" },
        { label: "Spindle Speed", value: "4,500 RPM variable drive" },
        { label: "CNC Controller", value: "Siemens Sinumerik System" },
        { label: "Primary Operations", value: "Precision turning, face threading, & boring" }
      ]
    },
    { 
      name: "Conventional Lathe (8 ft)", 
      spec: "8 ft Bed Length", 
      category: "Conventional Turning", 
      featured: false,
      details: [
        { label: "Asset Type", value: "Heavy Duty Lathe Machine" },
        { label: "Bed Capacity", value: "Length: 8 feet | Max Swing: 450 mm" },
        { label: "Linear Tolerance", value: "±0.02 mm" },
        { label: "Drive System", value: "Geared Headstock Multi-Clutch" },
        { label: "Operating Mode", value: "Manual Lever / Automated Feed" },
        { label: "Primary Operations", value: "Heavy shaft turning, step facing, & grooving" }
      ]
    },
    { 
      name: "Conventional Lathe (6 ft)", 
      spec: "6 ft Bed Length", 
      category: "Conventional Turning", 
      featured: false,
      details: [
        { label: "Asset Type", value: "Medium Duty Lathe Machine" },
        { label: "Bed Capacity", value: "Length: 6 feet | Max Swing: 350 mm" },
        { label: "Linear Tolerance", value: "±0.02 mm" },
        { label: "Drive System", value: "Manual V-belt speed transmission" },
        { label: "Operating Mode", value: "Manual feed control" },
        { label: "Primary Operations", value: "Precision spindle shafts & custom pinions" }
      ]
    },
    { 
      name: "Surface Grinding Machine", 
      spec: "1 Unit - Precision Flat", 
      category: "Grinding", 
      featured: false,
      details: [
        { label: "Asset Type", value: "Reciprocating Surface Grinder" },
        { label: "Table Dimension", value: "450 × 150 mm magnetic chuck" },
        { label: "Flatness Tolerance", value: "±0.003 mm" },
        { label: "Parallelism Rating", value: "±0.003 mm across full surface" },
        { label: "Wheel Diameter", value: "200 mm standard abrasive wheel" },
        { label: "Primary Operations", value: "High-flatness face grinding & finishing" }
      ]
    },
    { 
      name: "Milling Machine (DRO)", 
      spec: "Digital Readout Setup", 
      category: "Conventional Milling", 
      featured: false,
      details: [
        { label: "Asset Type", value: "Vertical Turret Milling Machine" },
        { label: "Table Dimension", value: "1270 × 254 mm geared feed" },
        { label: "DRO Readout", value: "3-Axis Digital System (X/Y/Z)" },
        { label: "Positioning Resolution", value: "0.005 mm scale read" },
        { label: "Spindle Taper", value: "ISO-30 standard" },
        { label: "Primary Operations", value: "Keyways, slotting, & face milling" }
      ]
    },
    { 
      name: "Cincinnati Milling", 
      spec: "1 Unit - Horizontal", 
      category: "Conventional Milling", 
      featured: false,
      details: [
        { label: "Asset Type", value: "Horizontal Milling Machine" },
        { label: "Table Drive", value: "Heavy-duty geared table indexer" },
        { label: "Spindle Arbor", value: "Horizontal cutter support arbor" },
        { label: "Milling Feeds", value: "Automatic indexing gear change" },
        { label: "Primary Operations", value: "Slab milling, multi-gear indexing, & slitting" }
      ]
    },
    { 
      name: "Drilling Machine", 
      spec: "1 Unit - Radial", 
      category: "Drilling", 
      featured: false,
      details: [
        { label: "Asset Type", value: "Heavy Radial Pillar Drill" },
        { label: "Drill Chuck Cap.", value: "Up to 38 mm in solid steel" },
        { label: "Speed Selection", value: "Geared change transmission" },
        { label: "Arm Travel", value: "Vertical lift & radial swing column" },
        { label: "Primary Operations", value: "Heavy boring, drilling, counterboring, & tapping" }
      ]
    },
    { 
      name: "Welding Machine", 
      spec: "1 Unit - Rectifier", 
      category: "Welding & Assembly", 
      featured: false,
      details: [
        { label: "Asset Type", value: "DC Arc Welding Rectifier Unit" },
        { label: "Current Capacity", value: "30 - 400 Amps variable output" },
        { label: "Duty Cycle", value: "60% at maximum load current" },
        { label: "Supported Welding", value: "MMA (Manual Metal Arc) & structural joints" },
        { label: "Primary Operations", value: "Heavy bracket welding & structural guards" }
      ]
    },
    { 
      name: "Cutter Machine", 
      spec: "1 Unit - Bandsaw", 
      category: "Raw Cutting", 
      featured: false,
      details: [
        { label: "Asset Type", value: "Geared Bandsaw Machine" },
        { label: "Cutting Capacity", value: "Up to 250 mm diameter bar stock" },
        { label: "Coolant Flow", value: "Integrated flood pump system" },
        { label: "Blade Speed", value: "Variable pulley selection" },
        { label: "Primary Operations", value: "Sizing raw bars, billets, and structural sections" }
      ]
    }
  ];

  const instruments = [
    { 
      name: "Digital Height Gauge (Mitutoyo)", 
      spec: "0 – 600 mm", 
      category: "Height Gauge",
      details: [
        { label: "Metrology Type", value: "High-Resolution Digital Height Gauge" },
        { label: "Measure Range", value: "0 - 600 mm stroke" },
        { label: "Min. Resolution", value: "0.001 mm / 0.00005 inch" },
        { label: "Repeatability Acc.", value: "±0.005 mm" },
        { label: "Data Output", value: "SPC Data transfer link enabled" },
        { label: "Calibration", value: "NABL certified annually" }
      ]
    },
    { 
      name: "Dial Height Gauge (Mitutoyo)", 
      spec: "0 – 300 mm", 
      category: "Height Gauge",
      details: [
        { label: "Metrology Type", value: "Mechanical Dial Height Gauge" },
        { label: "Measure Range", value: "0 - 300 mm" },
        { label: "Min. Resolution", value: "0.01 mm dial read" },
        { label: "Measuring Face", value: "Carbide tipped offset scriber" },
        { label: "Adjustment", value: "Fine adjust thumbwheel wheel" }
      ]
    },
    { 
      name: "Plug Gauges (H7 / H8 fits)", 
      spec: "Go / No-Go standard", 
      category: "Dimensional Check",
      details: [
        { label: "Metrology Type", value: "Double Ended Plug Gauges" },
        { label: "Gauge Sizes", value: "Various from 6mm to 80mm diameters" },
        { label: "Tolerance Class", value: "Class H7 and H8 limits check" },
        { label: "Material", value: "Hardened steel ground and lapped" },
        { label: "Application", value: "Pass/Fail inspection of CNC internal bores" }
      ]
    },
    { 
      name: "Thread Plug Gauges (Baker)", 
      spec: "ISO metric standard", 
      category: "Threading Tolerance",
      details: [
        { label: "Metrology Type", value: "Go / No-Go Thread Plug Gauges" },
        { label: "Thread Standard", value: "ISO Metric Fine and Coarse standard" },
        { label: "Thread Limit Class", value: "6H pitch class precision" },
        { label: "Manufacturer", value: "Baker Gauges India" },
        { label: "Application", value: "Verification of internal tapped threads" }
      ]
    },
    { 
      name: "Surface Plate (Granite)", 
      spec: "Grade 0 flat surface", 
      category: "Flatness Plate",
      details: [
        { label: "Metrology Type", value: "Black Granite Surface Inspection Table" },
        { label: "Table Dimensions", value: "1000 × 630 mm working face" },
        { label: "Flatness Standard", value: "Grade 0 per IS 7327 regulations" },
        { label: "Flatness Limit", value: "0.003 mm local variance" },
        { label: "Material Structure", value: "High density granite with anti-warp base" }
      ]
    },
    { 
      name: "Surface Plate (Cast Iron)", 
      spec: "Grade 1 scraped", 
      category: "Flatness Plate",
      details: [
        { label: "Metrology Type", value: "Geometrical Cast Iron Surface Plate" },
        { label: "Table Dimensions", value: "600 × 600 mm" },
        { label: "Flatness Standard", value: "Grade 1 inspection layout table" },
        { label: "Finish Style", value: "Hand scraped cross-hatch alignment finish" }
      ]
    },
    { 
      name: "Digital Vernier (Mitutoyo)", 
      spec: "0 – 300 mm range", 
      category: "Vernier",
      details: [
        { label: "Metrology Type", value: "Digital Vernier Caliper" },
        { label: "Measuring Range", value: "0 - 300 mm / 0 - 12 inch" },
        { label: "Min. Resolution", value: "0.01 mm digital readout" },
        { label: "Sensor Style", value: "AOS Electromagnetic Inductive encoder" },
        { label: "Jaw Style", value: "Standard inside, outside, and depth check" }
      ]
    },
    { 
      name: "Vernier Caliper", 
      spec: "0 – 600 mm range", 
      category: "Vernier",
      details: [
        { label: "Metrology Type", value: "Heavy Beam Vernier Caliper" },
        { label: "Measuring Range", value: "0 - 600 mm extended column" },
        { label: "Min. Resolution", value: "0.02 mm vernier scale" },
        { label: "Material Structure", value: "Satin chrome finished stainless steel" }
      ]
    },
    { 
      name: "Dial Vernier", 
      spec: "0 – 150 mm range", 
      category: "Vernier",
      details: [
        { label: "Metrology Type", value: "Mechanical Dial Caliper" },
        { label: "Measuring Range", value: "0 - 150 mm" },
        { label: "Min. Resolution", value: "0.02 mm rack and pinion pointer" },
        { dialFace: "Adjustable bezel dial face with zero lock", label: "Dial Face" }
      ]
    },
    { 
      name: "Bore Dial Gauge", 
      spec: "Internal bore checks", 
      category: "Tolerance Gauge",
      details: [
        { label: "Metrology Type", value: "Dial Bore Indicator Gauge" },
        { label: "Measuring Range", value: "50 - 150 mm diameter holes" },
        { label: "Min. Resolution", value: "0.01 mm pointer displacement" },
        { label: "Stem Length", value: "250 mm checking depth capacity" },
        { label: "Anvils Supplied", value: "Set of interchangeable carbide contact anvils" }
      ]
    },
    { 
      name: "Micrometers (Set)", 
      spec: "Multi-size high precision", 
      category: "Micro Precision",
      details: [
        { label: "Metrology Type", value: "External Screw Thread Micrometers" },
        { label: "Measuring Ranges", value: "0-25mm, 25-50mm, 50-75mm, 75-100mm" },
        { label: "Min. Resolution", value: "0.001 mm sleeve read" },
        { label: "Measuring Faces", value: "Flat carbide anvil and spindle tip" },
        { label: "Thimble Style", value: "Ratchet stop thimble for constant force" }
      ]
    },
    { 
      name: "Dial Indicator", 
      spec: "Plunger style metric", 
      category: "Indicator",
      details: [
        { label: "Metrology Type", value: "Plunger Type Dial Indicator" },
        { label: "Measuring Range", value: "0 - 10 mm continuous dial" },
        { label: "Min. Resolution", value: "0.01 mm resolution" },
        { label: "Stem Diameter", value: "8 mm metric fitting standard" },
        { label: "Dial Reading", value: "0-100 rotation pointer reset" }
      ]
    },
    { 
      name: "Finger Dial Indicator", 
      spec: "Lever-type precision", 
      category: "Indicator",
      details: [
        { label: "Metrology Type", value: "Lever Type Dial Test Indicator" },
        { label: "Measuring Range", value: "0 - 0.8 mm bidirectional" },
        { label: "Min. Resolution", value: "0.002 mm fine displacement check" },
        { label: "Stylus Contact", value: "Carbide stylus tip on swivelling lever hinge" },
        { label: "Application", value: "Run-out alignment testing on lathe chucks" }
      ]
    }
  ];

  const activeCollection = activeTab === "machines" ? machines : instruments;
  const activeAsset = activeCollection[selectedAssetIdx] || activeCollection[0];

  return (
    <motion.div 
      className="bg-brand-bg text-[#161616] pt-24 pb-8 sm:pt-32 sm:pb-12 relative overflow-hidden select-none"
      initial={{ opacity: 0.01, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <motion.div 
          className="border-l-2 border-[#EC6713] pl-6 mb-20 infra-header-item"
          initial={{ opacity: 0.01, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span className="text-[10px] font-mono font-bold text-[#5E6673] uppercase tracking-[0.25em] block mb-1">
            [ FACILITY INDEX ]
          </span>
          <h1 className="sectionTitle font-heading text-5xl sm:text-6xl font-bold uppercase tracking-wide text-[#09285F]">
            Infrastructure
          </h1>
        </motion.div>

        {/* Introduction */}
        <motion.p 
          className="text-[#5E6673] text-sm sm:text-base max-w-3xl leading-relaxed mb-16 font-sans font-medium infra-content-item"
          initial={{ opacity: 0.01, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          Our Thane manufacturing facility maintains conventional machining platforms and dedicated inspection instruments. Utilize the catalog register below to review the specifications of our operational assets.
        </motion.p>

        {/* Tab Controls (Flat Sharp Rectangles) */}
        <motion.div 
          className="border-b border-[#D7DDE5] pb-px w-full mb-16 flex overflow-x-auto gap-8 infra-content-item no-scrollbar"
          initial={{ opacity: 0.01, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <button
            onClick={() => {
              setActiveTab("machines");
              setSelectedAssetIdx(0);
            }}
            className={`pb-4 text-sm font-heading font-bold uppercase tracking-wider transition-all duration-200 border-b-2 ${
              activeTab === "machines"
                ? "border-[#EC6713] text-[#161616]"
                : "border-transparent text-[#5E6673] hover:text-[#161616]"
            }`}
          >
            Machinery & Equipment
          </button>
          <button
            onClick={() => {
              setActiveTab("instruments");
              setSelectedAssetIdx(0);
            }}
            className={`pb-4 text-sm font-heading font-bold uppercase tracking-wider transition-all duration-200 border-b-2 ${
              activeTab === "instruments"
                ? "border-[#EC6713] text-[#161616]"
                : "border-transparent text-[#5E6673] hover:text-[#161616]"
            }`}
          >
            Metrology Instruments
          </button>
        </motion.div>

        {/* Main Content Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start infra-content-item">
          
          {/* Left Panel: Scrollable Technical Row Listing */}
          <motion.div 
            layout 
            className="lg:col-span-5 space-y-2 max-h-[70vh] overflow-y-auto pr-4 no-scrollbar border-r border-[#D7DDE5] font-sans"
          >
            <AnimatePresence mode="popLayout">
              {activeCollection.map((asset, idx) => (
                <motion.div
                  layout
                  key={`${activeTab}-${idx}`}
                  onClick={() => setSelectedAssetIdx(idx)}
                  className={`asset-card-item p-4 cursor-pointer border transition-all duration-200 ${
                    selectedAssetIdx === idx
                      ? "bg-[#161616] border-[#161616] text-[#F6F7F8]"
                      : "bg-transparent border-[#D7DDE5] text-[#161616] hover:bg-[#EAE8E4] hover:border-[#5E6673]"
                  }`}
                  initial={{ opacity: 0.01, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="space-y-1 truncate pr-4">
                      <div className="flex items-center gap-3">
                        <span className={`font-mono text-[9px] ${selectedAssetIdx === idx ? "text-[#EC6713]" : "text-[#5E6673]"}`}>
                          [{String(idx + 1).padStart(2, "0")}]
                        </span>
                        <span className={`text-[9px] font-mono uppercase tracking-wide ${selectedAssetIdx === idx ? "text-[#EC6713]" : "text-[#5E6673]"}`}>
                          {asset.category}
                        </span>
                      </div>
                      <div className={`font-heading font-bold text-sm uppercase ${selectedAssetIdx === idx ? "text-white" : "text-[#161616]"}`}>
                        {asset.name}
                      </div>
                      <p className={`text-[10px] font-mono ${selectedAssetIdx === idx ? "text-[#5E6673]" : "text-[#5E6673]"}`}>
                        CAP: {asset.spec}
                      </p>
                    </div>
                    
                    <div className={`p-1 transition-transform duration-200 ${
                      selectedAssetIdx === idx ? "text-[#EC6713] translate-x-1" : "text-[#5E6673]"
                    }`}>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Right Panel: Clean Specification Sheet (No floating cards) */}
          <div className="lg:col-span-7 lg:sticky lg:top-28 console-detail-block">
            <motion.div 
              key={`${activeTab}-${selectedAssetIdx}`}
              className="border-t-2 border-[#161616] pt-6 font-sans"
              initial={{ opacity: 0.01, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              
              {/* Header Information */}
              <div className="pb-6 mb-6 border-b border-[#D7DDE5]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="border border-[#D7DDE5] text-[9px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider text-[#5E6673]">
                    {activeAsset.category}
                  </span>
                  {activeAsset.featured && (
                    <span className="border border-[#EC6713] text-[#EC6713] text-[9px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider">
                      PRIMARY
                    </span>
                  )}
                </div>
                <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold uppercase text-[#09285F] leading-tight">
                  {activeAsset.name}
                </h2>
              </div>

              {/* Technical Specifications Table */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-[#D7DDE5] pb-2">
                  <FileText className="h-4 w-4 text-[#5E6673]" />
                  <span className="text-[10px] font-mono font-bold text-[#5E6673] uppercase tracking-widest">
                    Specification Registry
                  </span>
                </div>
                
                <div className="divide-y divide-[#D7DDE5]">
                  {activeAsset.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="console-table-row flex justify-between items-center py-3.5"
                    >
                      <span className="text-[10px] font-mono font-bold text-[#5E6673] uppercase tracking-wider">
                        {detail.label}
                      </span>
                      <span className="text-xs font-sans font-bold text-[#161616] text-right max-w-[65%] leading-relaxed">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrology Compliances */}
              <div className="border-t border-[#D7DDE5] pt-6 mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[9px] font-mono font-bold text-[#5E6673] uppercase tracking-widest">
                <span>Verification: Standard Compliance</span>
                <span>Registry: UKM_{activeAsset.name.toUpperCase().replace(/\s/g, "_").slice(0, 10).replace(/[^A-Z0-9_]/g, "")}_2026</span>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </motion.div>

  );
}
