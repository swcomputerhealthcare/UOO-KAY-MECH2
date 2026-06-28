"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, X, Search, Cpu, Layers, Settings, Wrench, Shield, Compass, Phone, FileText } from "lucide-react";

// 1. STATS DATA
const STATS = [
  { value: "16+", label: "Products Manufactured" },
  { value: "25+", label: "Years Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "100%", label: "Quality Inspected" }
];

// 2. CATEGORIES
const CATEGORIES = [
  "All",
  "Precision Parts",
  "Shafts",
  "Custom Components",
  "Fabrication",
  "Tooling"
];

// 3. COMPLETE PRODUCTS CATALOG
// 3. COMPLETE PRODUCTS CATALOG
const PRODUCTS = [
  {
    id: "manifold-air-testing",
    name: "Manifold for Air Testing",
    category: "Custom Components",
    image: "/images/products/manifold-air-testing.webp",
    fit: "contain",
    isLongPart: true,
    desc: "Precision manifold designed for high-pressure pneumatic air testing and calibration setups.",
    specs: {
      tolerances: "±0.02 mm",
      materials: "Stainless Steel, Brass",
      operations: "CNC Drilling, Tapping, Deburring",
      hardness: "Natural Clean Finish",
      applications: "Pneumatic testing circuits, gas manifolds, pressure calibration rigs",
      industries: "Oil & Gas, Chemical Process, Defense"
    }
  },
  {
    id: "hydro-test-probe",
    name: "Hydro Test Probe",
    category: "Tooling",
    image: "/images/products/hydro-test-probe.webp",
    fit: "contain",
    isLongPart: true,
    desc: "Heavy-duty testing probe engineered for hydrostatic pressure testing and vessel validation.",
    specs: {
      tolerances: "±0.01 mm",
      materials: "High-Tensile Alloy Steel, SS316",
      operations: "CNC turning, cylindrical grinding, surface hardening",
      hardness: "Hardened & Tempered",
      applications: "Pipeline testing, hydrostatic pressure vessels, valve sealing inspection",
      industries: "Piping, Valve Manufacturing, Energy Sector"
    }
  },
  {
    id: "heavy-duty-chain-mounting-bolt",
    name: "Heavy Duty Chain Mounting Bolt",
    category: "Precision Parts",
    image: "/images/products/heavy-duty-chain-mounting-bolt.webp",
    fit: "contain",
    isLongPart: true,
    desc: "High-tensile mounting bolt designed for secure links in industrial chain conveyance and hoisting systems.",
    specs: {
      tolerances: "±0.02 mm",
      materials: "En24 Hardened Alloy Steel",
      operations: "Precision thread rolling, step turning",
      hardness: "32-38 HRC (Grade 10.9)",
      applications: "Chain tensioners, conveyor link connections, heavy crane hoists",
      industries: "Material Handling, Cement & Steel Plants, Crane Manufacturing"
    }
  },
  {
    id: "water-tank-cover",
    name: "Water Tank Cover",
    category: "Fabrication",
    image: "/images/products/water-tank-cover.webp",
    fit: "contain",
    desc: "Precision fabricated corrosion-resistant water tank cover assembly for industrial liquid containment.",
    specs: {
      tolerances: "±0.5 mm",
      materials: "Stainless Steel (SS304 / SS316)",
      operations: "Deep drawing, blanking, TIG welding",
      hardness: "Satin Polish Finish",
      applications: "Liquid storage containers, process reactors, chemical tanks",
      industries: "Food & Beverage, Water Treatment, Pharma"
    }
  },
  {
    id: "display-unit",
    name: "Display Unit",
    category: "Custom Components",
    image: "/images/products/display-unit.webp",
    fit: "contain",
    desc: "Custom engineered display frames and panel structures built for industrial mockups and exhibitions.",
    specs: {
      tolerances: "±1.0 mm",
      materials: "Mild Steel, Powder Coated",
      operations: "Laser cutting, sheet metal folding, powder coating",
      hardness: "Textured Powder Coating (Rust Protection)",
      applications: "Control desks, display stands, server consoles",
      industries: "Retail Displays, Exhibitions, Control Rooms"
    }
  },
  {
    id: "cabinet",
    name: "Cabinet",
    category: "Fabrication",
    image: "/images/products/cabinet.webp",
    fit: "contain",
    desc: "Heavy-duty industrial cabinet enclosure for electrical assemblies, automation hardware, and storage systems.",
    specs: {
      tolerances: "±0.5 mm",
      materials: "Cold Rolled Steel, Powder Coated",
      operations: "Bending, MIG/TIG welding, hardware installation",
      hardness: "Structured Powder Coating",
      applications: "Electrical panels, server enclosures, heavy tool storage cabinets",
      industries: "Power Distribution, Automation, Factories"
    }
  },
  {
    id: "trolley",
    name: "Trolley",
    category: "Fabrication",
    image: "/images/products/trolley.webp",
    fit: "contain",
    desc: "Heavy-duty workshop utility trolley for efficient material handling and parts logistics across shop floors.",
    specs: {
      tolerances: "±1.0 mm",
      materials: "Structural Mild Steel, PU Castors",
      operations: "Welding, frame cutting, paint finish",
      hardness: "Industrial PU Paint coating",
      applications: "Heavy mold transit, machined parts movement, tooling carts",
      industries: "Automotive, Aerospace, Heavy Machinery"
    }
  },
  {
    id: "expander",
    name: "Expander",
    category: "Tooling",
    image: "/images/products/expander.webp",
    fit: "contain",
    isLongPart: true,
    desc: "High-durability expander tool assemblies for tube expansion and cold mechanical jointing systems.",
    specs: {
      tolerances: "±0.01 mm",
      materials: "D2 / H13 Tool Steel",
      operations: "VMC Milling, Cylindrical grinding, vacuum heat treatment",
      hardness: "58-62 HRC",
      applications: "Heat exchanger fabrication, condenser maintenance, pipe flaring",
      industries: "HVAC, Power Plants, Boiler Maintenance"
    }
  },
  {
    id: "heavy-duty-machined-hinge",
    name: "Heavy Duty Machined Hinge",
    category: "Precision Parts",
    image: "/images/products/hinge.webp",
    fit: "contain",
    desc: "Precision heavy-duty machined hinges for heavy machine gates and security enclosure doors.",
    specs: {
      tolerances: "±0.01 mm",
      materials: "Stainless Steel SS304 / SS316",
      operations: "Milling, precision boring, hinge pin assembly",
      hardness: "Passivated Finish",
      applications: "Acoustic enclosure doors, machine guards, heavy gates",
      industries: "Enclosure Manufacturing, Heavy Engineering"
    }
  },
  {
    id: "precision-parts",
    name: "Precision Parts",
    category: "Precision Parts",
    image: "/images/products/precision-parts.webp",
    fit: "contain",
    desc: "High-tolerance sliding block guides with parallel ground surfaces and custom alignment channels.",
    specs: {
      tolerances: "±0.005 mm (5 microns)",
      materials: "AISI 4140 Alloy Steel",
      operations: "CNC Milling, surface grinding, induction hardening",
      hardness: "50-54 HRC",
      applications: "Actuator mounts, slide guides, inspection fixtures",
      industries: "Machine Tools, Packaging, Robotics"
    }
  },
  {
    id: "cnc-machined-components",
    name: "CNC Machined Components",
    category: "Precision Parts",
    image: "/images/products/cnc-machined-components.webp",
    fit: "contain",
    desc: "Multi-axis milled complex housing blocks and custom precision components.",
    specs: {
      tolerances: "±0.005 mm (5 microns)",
      materials: "Aluminum 6082-T6 / Mild Steel",
      operations: "5-axis milling, coordinate indexing, CNC turning",
      hardness: "Anodized / Zinc Plated Finish",
      applications: "Fluid control manifolds, sensor housings, custom actuator blocks",
      industries: "Automotive, Electronics, Hydraulics"
    }
  },
  {
    id: "threaded-shafts",
    name: "Threaded Shafts",
    category: "Shafts",
    image: "/images/products/threaded-shaft.webp",
    fit: "contain",
    isLongPart: true,
    desc: "High-concentricity step shafts with ground finish tolerances and precision external threading.",
    specs: {
      tolerances: "±0.005 mm (5 microns)",
      materials: "En24 Alloy Steel",
      operations: "Step turning, cylindrical grinding, thread rolling",
      hardness: "55-58 HRC",
      applications: "Pump spindles, motor shafts, linear lead screws",
      industries: "Pumps, Power Transmission, Actuators"
    }
  },
  {
    id: "stainless-steel-work-table",
    name: "Stainless Steel Work Table",
    category: "Fabrication",
    image: "/images/products/stainless-steel-work-table.webp",
    fit: "contain",
    desc: "Heavy-duty stainless steel work table with lower storage shelves and rigid support structures for assembly lines.",
    specs: {
      tolerances: "±0.5 mm",
      materials: "SS304 / SS316",
      operations: "Shearing, bending, TIG welding, satin finishing",
      hardness: "Polished Finish",
      applications: "Assembly workstations, packaging tables, cleanroom environments",
      industries: "Pharma, Food Processing, Electronics"
    }
  },
  {
    id: "structural-support-cage",
    name: "Structural Support Cage",
    category: "Fabrication",
    image: "/images/products/structural-support-cage.webp",
    fit: "contain",
    desc: "Welded steel safety framing and reinforcement cages designed to encase and protect massive storage tanks.",
    specs: {
      tolerances: "±1.0 mm",
      materials: "Structural Mild Steel, Epoxy Primer",
      operations: "MIG welding, profile cutting, structural bracing",
      hardness: "Industrial Paint Protection",
      applications: "Tank reinforcement, safety enclosures, load-bearing frames",
      industries: "Chemical Process, Oil & Gas, Water Storage"
    }
  },
  {
    id: "industrial-machine-enclosure",
    name: "Industrial Machine Enclosure",
    category: "Fabrication",
    image: "/images/products/industrial-machine-enclosure.webp",
    fit: "contain",
    desc: "Custom sheet metal machine covers, acoustic encasings, and safety guards for automation machinery.",
    specs: {
      tolerances: "±0.2 mm",
      materials: "Cold Rolled Carbon Steel",
      operations: "Laser cutting, CNC bending, welding, powder coating",
      hardness: "Textured Powder Coating",
      applications: "Machine guarding, electric control cabinet outer frame, safety barriers",
      industries: "Automation, Packaging, General Engineering"
    }
  },
  {
    id: "fabricated-access-ladder",
    name: "Fabricated Access Ladder",
    category: "Fabrication",
    image: "/images/products/fabricated-access-ladder.webp",
    fit: "contain",
    isLongPart: true,
    desc: "High-safety industrial platform ladders and access systems built with safety railings and non-slip steps.",
    specs: {
      tolerances: "±1.0 mm",
      materials: "High-Strength Steel, SS304",
      operations: "Tube bending, structural welding, hot-dip galvanizing",
      hardness: "Galvanized / Powder Coated",
      applications: "Mezzanine access, tank maintenance platforms, warehouse operations",
      industries: "Logistics, Warehouse, Chemical Process"
    }
  }
];

// 4. FEATURED PRODUCTS
const FEATURED_ITEMS = [
  {
    title: "Concentric Transmission Shaft",
    image: "/images/products/threaded-shaft.webp",
    isLongPart: true,
    specs: {
      tolerance: "±0.005 mm (5 microns)",
      material: "En24 Hardened Alloy Steel",
      treatment: "Vacuum Hardened (55-58 HRC)",
      application: "Motor shafts, turbine spindles, power transmission axles"
    }
  },
  {
    title: "Weep Tube Cup Forming Die",
    image: "/images/products/cup-forming-die-assembly.webp",
    isLongPart: false,
    specs: {
      tolerance: "±0.01 mm (10 microns)",
      material: "D2 Tool Steel / Tungsten Carbide",
      treatment: "High Polish Lapped (62-64 HRC)",
      application: "Can manufacturing, deep drawn weep cups, metal stamping"
    }
  },
  {
    title: "Expander Assembly",
    image: "/images/products/expander.webp",
    isLongPart: true,
    specs: {
      tolerance: "±0.01 mm",
      material: "High-Grade Alloy Steel / Stainless Steel",
      treatment: "Hardened & Ground",
      application: "Expansion assemblies, tube expanders, industrial tooling"
    }
  }
];

// 5. CAPABILITIES GRID DATA
const CAPABILITIES_GRID = [
  {
    title: "CNC Machining",
    desc: "Multi-axis VMC and CNC turning centres for highly complex blueprints.",
    icon: <Cpu className="h-5 w-5 text-[#EC6713]" strokeWidth={1.5} />
  },
  {
    title: "Milling",
    desc: "Geared slotting, keyway cutting, and flat surface mechanical milling.",
    icon: <Layers className="h-5 w-5 text-[#EC6713]" strokeWidth={1.5} />
  },
  {
    title: "Turning",
    desc: "Conventional and automatic lathe assets for custom cylinders.",
    icon: <Settings className="h-5 w-5 text-[#EC6713]" strokeWidth={1.5} />
  },
  {
    title: "Grinding",
    desc: "Surface and cylindrical grinding down to ±0.003 mm flatness.",
    icon: <Wrench className="h-5 w-5 text-[#EC6713]" strokeWidth={1.5} />
  },
  {
    title: "Custom Manufacturing",
    desc: "Bespoke engineering solutions for unique design and assembly needs.",
    icon: <Settings className="h-5 w-5 text-[#EC6713]" strokeWidth={1.5} />
  },
  {
    title: "Assembly",
    desc: "Mating and integration of parts into operational machinery assemblies.",
    icon: <Layers className="h-5 w-5 text-[#EC6713]" strokeWidth={1.5} />
  },
  {
    title: "Quality Inspection",
    desc: "Mitutoyo digital height gauges and calibrated Grade 0 granite surface tables.",
    icon: <Shield className="h-5 w-5 text-[#EC6713]" strokeWidth={1.5} />
  },
  {
    title: "Tool Design",
    desc: "Stamping punches, forming dies, and welding holding fixtures custom design.",
    icon: <Compass className="h-5 w-5 text-[#EC6713]" strokeWidth={1.5} />
  }
];

// 6. CARD SUB-COMPONENT WITH FRAMER MOTION EFFECTS
function ProductCard({ product, onViewDetails }) {
  const shouldReduceMotion = useReducedMotion();
  
  const hoverTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.25, ease: [0.22, 1, 0.36, 1] };

  return (
    <motion.article
      layout
      onClick={() => onViewDetails(product)}
      className="group relative bg-white rounded-[16px] border border-[#D7DDE5] p-4 shadow-sm flex flex-col justify-between md:h-[400px] h-auto cursor-pointer overflow-hidden select-none productCard"
      whileHover={shouldReduceMotion ? {} : { 
        y: -6,
        scale: 1.015,
        boxShadow: "0 12px 30px -10px rgba(9, 40, 95, 0.08)",
        borderColor: "rgba(236, 103, 19, 0.4)"
      }}
      transition={hoverTransition}
    >
      {/* Orange Accent Top Line */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-1 bg-[#EC6713]"
        initial={{ scaleX: 0 }}
        whileHover={shouldReduceMotion ? { scaleX: 0 } : { scaleX: 1 }}
        transition={hoverTransition}
      />
      
      <div>
        {/* Product Image */}
        <div 
          className={`relative w-full rounded-[12px] overflow-hidden bg-[#F6F7F8] mb-4 productImageWrap ${product.isLongPart ? "longPart" : ""}`}
          style={{ position: 'relative' }}
        >
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
            transition={hoverTransition}
            className="w-full h-full"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              loading="lazy"
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Category Badge */}
        <span className="text-[9px] font-mono font-bold text-[#EC6713] tracking-wider uppercase block mb-1 productCategory">
          {product.category}
        </span>

        {/* Product Title */}
        <motion.h3 
          className="font-heading font-bold text-sm sm:text-base text-[#09285F] uppercase tracking-wide md:line-clamp-1 line-clamp-none leading-snug productTitle"
          whileHover={shouldReduceMotion ? {} : { color: "#EC6713" }}
          transition={hoverTransition}
        >
          {product.name}
        </motion.h3>

        {/* Product Short Description */}
        <p className="text-[11px] text-[#5E6673] font-medium leading-relaxed mt-1.5 md:line-clamp-2 line-clamp-none productDescription">
          {product.desc}
        </p>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-[#D7DDE5]/30 productActions">
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(product);
          }}
          className="text-[10px] font-mono font-bold tracking-wider text-[#09285F] flex items-center justify-center gap-1 py-1.5 uppercase border border-[#09285F]/10 bg-white"
          whileHover={shouldReduceMotion ? {} : { 
            color: "#EC6713",
            borderColor: "rgba(236, 103, 19, 0.2)"
          }}
          transition={hoverTransition}
        >
          View Details
        </motion.button>
        <motion.div
          whileHover={shouldReduceMotion ? {} : { y: -2 }}
          transition={hoverTransition}
        >
          <Link
            href={`/contact?interest=${encodeURIComponent(product.name)}#contact-form`}
            onClick={(e) => e.stopPropagation()}
            className="text-[10px] font-mono font-bold tracking-wider text-white bg-[#09285F] transition-all py-1.5 text-center uppercase block"
            style={{ backgroundColor: "#09285F" }}
          >
            Request RFQ
          </Link>
        </motion.div>
      </div>
    </motion.article>
  );
}

export default function ProductsClient() {
  const shouldReduceMotion = useReducedMotion();
  
  const hoverTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.25, ease: [0.22, 1, 0.36, 1] };

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);


  // Stop page scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  const handleOpenModal = (product) => {
    setActiveProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      setActiveProduct(null);
    }, 300);
  };

  // Filtering Logic
  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-brand-bg relative overflow-x-hidden font-sans select-none">
      
      {/* 1. SECTION HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-left">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-mono font-bold text-[#5E6673] uppercase tracking-[0.25em]">
            [ PRODUCT CATALOGUE ]
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#EC6713]" />
          <span className="text-[10px] font-mono font-bold text-[#EC6713] uppercase tracking-[0.25em]">
            UK MECH INDUSTRIES
          </span>
        </div>

        <h1 className="sectionTitle font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#09285F] uppercase tracking-tight mb-4">
          Our Products
        </h1>
        <div className="w-20 h-1 bg-[#EC6713] mb-6" />
        <p className="text-sm sm:text-base text-[#5E6673] leading-relaxed max-w-3xl font-medium">
          Precision Engineered Components manufactured with strict quality control and custom specifications for industrial applications.
        </p>
      </div>

      {/* 2. QUICK STATS (Animated Counters) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <div 
              key={idx} 
              className="border border-[#D7DDE5] bg-white p-6 rounded-[16px] text-center shadow-sm flex flex-col justify-center h-28 sm:h-32 hover:border-[#09285F]/30 transition-all duration-300"
            >
              <div className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#09285F] uppercase tracking-tight">
                <span>{stat.value}</span>
              </div>
              <p className="text-[10px] sm:text-xs font-mono font-bold text-[#5E6673] uppercase tracking-wider mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. PRODUCT FILTERS & SEARCH */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#D7DDE5] pb-6">
          
          {/* Category Chips scroll container */}
          <div className="productFilters flex flex-nowrap items-center gap-2 overflow-x-auto pb-3 lg:pb-0 pr-4">
            {CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`filterChip px-4 py-2 border rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shrink-0 ${
                  selectedCategory === cat
                    ? "bg-[#09285F] border-[#09285F] text-white"
                    : "bg-white border-[#D7DDE5] text-[#5E6673] hover:border-[#09285F] hover:text-[#09285F]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar Input */}
          <div className="productSearch relative w-full lg:w-72">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5E6673]">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Components..."
              className="w-full pl-10 pr-4 py-2.5 border border-[#D7DDE5] bg-white focus:outline-none focus:border-[#EC6713] text-xs font-semibold text-[#161616] placeholder-[#5E6673]"
            />
          </div>
        </div>
      </div>

      {/* 4. RESPONSIVE PRODUCT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {filteredProducts.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 min-[390px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <motion.div 
                layout
                key={product.id}
                className="transition-all duration-300 transform scale-100 opacity-100"
              >
                <ProductCard product={product} onViewDetails={handleOpenModal} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20 border border-[#D7DDE5] border-dashed rounded-[24px] bg-white space-y-4 max-w-lg mx-auto">
            <div className="text-[#5E6673] font-mono text-[10px] uppercase tracking-widest block">
              [ NO MATCHES FOUND ]
            </div>
            <p className="text-xs text-[#5E6673] font-medium max-w-xs mx-auto">
              We couldn&apos;t find any components matching &ldquo;{searchQuery}&rdquo;. Try another term or contact us for custom requests.
            </p>
          </div>
        )}
      </div>

      {/* 5. STATIC FEATURED COMPONENTS SECTION */}
      <section className="bg-white border-y border-[#D7DDE5] py-24 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="mb-16 border-b border-[#D7DDE5] pb-6"
            initial={{ opacity: 1, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <span className="text-[10px] font-mono font-bold text-[#EC6713] uppercase tracking-[0.25em] block mb-1">
              [ COMPONENT HIGHLIGHTS ]
            </span>
            <h2 className="font-heading text-3xl font-bold text-[#09285F] uppercase tracking-wide">
              Featured Components
            </h2>
          </motion.div>

          <div className="space-y-20">
            {FEATURED_ITEMS.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="featuredComponentCard border border-[#D7DDE5] p-6 sm:p-10 bg-[#F6F7F8] rounded-[24px] shadow-sm hover:border-[#09285F]/20 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 1, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Left: Product Image */}
                <div 
                  className={`featuredImageWrap ${item.isLongPart ? "longPart" : ""}`}
                  style={{ position: "relative" }}
                >
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.025 }}
                    transition={hoverTransition}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      loading="lazy"
                    />
                  </motion.div>
                </div>

                {/* Right: Specifications details */}
                <div className="space-y-6 text-left">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#EC6713] uppercase tracking-[0.2em] block mb-1">
                      FEATURED COMPONENT 0{idx + 1}
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#09285F] uppercase tracking-tight leading-none">
                      {item.title}
                    </h3>
                  </div>

                  <div className="space-y-4 font-mono text-xs border-y border-[#D7DDE5] py-6 max-w-lg">
                    <div className="flex justify-between border-b border-[#D7DDE5]/30 pb-2">
                      <span className="text-[#5E6673] uppercase font-semibold">Tolerances</span>
                      <span className="text-[#161616] text-right font-bold">{item.specs.tolerance}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#D7DDE5]/30 pb-2">
                      <span className="text-[#5E6673] uppercase font-semibold">Material</span>
                      <span className="text-[#161616] text-right font-bold">{item.specs.material}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#D7DDE5]/30 pb-2">
                      <span className="text-[#5E6673] uppercase font-semibold">Treatment</span>
                      <span className="text-[#161616] text-right font-bold">{item.specs.treatment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#5E6673] uppercase font-semibold">Applications</span>
                      <span className="text-[#161616] text-right font-bold max-w-[65%] truncate sm:max-w-none sm:break-words">{item.specs.application}</span>
                    </div>
                  </div>

                  <div>
                    <Link
                      href={`/contact?interest=${encodeURIComponent(item.title)}#contact-form`}
                      className="inline-flex items-center gap-2 bg-[#EC6713] hover:bg-[#09285F] text-white font-heading font-bold text-xs uppercase tracking-wider py-4 px-8 transition-colors duration-200"
                    >
                      Inquire Component <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* 6. CAPABILITIES SECTION (4x2 Responsive Grid) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-left">
        <div className="border-b border-[#D7DDE5] pb-6 mb-12">
          <span className="text-[10px] font-mono font-bold text-[#EC6713] uppercase tracking-wider block">
            [ IN-HOUSE OPERATIONS ]
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#09285F] uppercase tracking-wide mt-2">
            Manufacturing Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {CAPABILITIES_GRID.map((cap, idx) => (
            <div 
              key={idx}
              className="border border-[#D7DDE5] bg-white p-5 rounded-[16px] shadow-sm flex flex-col justify-between h-44 hover:border-[#09285F]/30 transition-all duration-300"
            >
              <div className="p-2 border border-[#D7DDE5] rounded-[10px] w-max bg-[#FAF8F5]">
                {cap.icon}
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-[#09285F] uppercase tracking-wide">
                  {cap.title}
                </h3>
                <p className="text-[11px] text-[#5E6673] font-medium leading-relaxed mt-1">
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. REQUEST RFQ CTA SECTION */}
      <div className="bg-[#EC6713] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">
              Need a Custom Component?
            </h2>
            <p className="text-sm sm:text-base text-white/95 font-medium leading-relaxed">
              Upload your drawing or requirements and receive a competitive quotation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
            <Link
              href="/contact#contact-form"
              className="w-full sm:w-auto bg-[#09285F] hover:bg-[#0b3070] text-white font-heading font-bold text-xs uppercase tracking-wider py-4 px-8 text-center transition-colors duration-200"
            >
              Request RFQ
            </Link>
            <a
              href="https://wa.me/919987849605"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba56] text-white font-heading font-bold text-xs uppercase tracking-wider py-4 px-8 text-center transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <a
              href="tel:+919987849605"
              className="w-full sm:w-auto bg-transparent border border-white hover:bg-white hover:text-[#EC6713] text-white font-heading font-bold text-xs uppercase tracking-wider py-4 px-8 text-center transition-colors duration-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* 8. PRODUCT DETAILS MODAL */}
      {activeProduct && (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 transition-all duration-300 ${modalOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#161616]/80 backdrop-blur-sm"
            onClick={handleCloseModal}
          />
          
          {/* Modal Box */}
          <div className={`relative bg-white text-[#161616] w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-[24px] border border-[#D7DDE5] shadow-2xl flex flex-col md:flex-row overflow-hidden transition-all duration-300 transform ${modalOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-4 opacity-0'} z-10 no-scrollbar`}>
            
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#161616] hover:text-[#EC6713] border border-[#D7DDE5] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close details"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Left: Large Image */}
            <div 
              className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[450px] bg-[#F6F7F8]"
              style={{ position: 'relative' }}
            >
              <Image
                src={activeProduct.image}
                alt={activeProduct.name}
                fill
                className={activeProduct.fit === "contain" ? "object-contain p-4" : "object-cover"}
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute top-4 left-4 bg-[#EC6713] text-white font-mono text-[9px] font-bold px-3 py-1 uppercase tracking-wider rounded">
                {activeProduct.category}
              </div>
            </div>

            {/* Right: Technical specifications */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#EC6713] uppercase tracking-wider block mb-1">
                    [ TECHNICAL SPECIFICATIONS ]
                  </span>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#09285F] uppercase tracking-wide">
                    {activeProduct.name}
                  </h2>
                  <p className="text-xs text-[#5E6673] font-medium leading-relaxed mt-2">
                    {activeProduct.desc}
                  </p>
                </div>

                <div className="space-y-3 font-mono text-[11px] border-t border-[#D7DDE5]/30 pt-4">
                  <div className="grid grid-cols-3 py-1 border-b border-[#D7DDE5]/10">
                    <span className="text-[#5E6673] font-bold">Tolerances</span>
                    <span className="col-span-2 font-bold text-[#09285F]">{activeProduct.specs.tolerances}</span>
                  </div>
                  <div className="grid grid-cols-3 py-1 border-b border-[#D7DDE5]/10">
                    <span className="text-[#5E6673] font-bold">Materials</span>
                    <span className="col-span-2 font-bold text-[#09285F]">{activeProduct.specs.materials}</span>
                  </div>
                  <div className="grid grid-cols-3 py-1 border-b border-[#D7DDE5]/10">
                    <span className="text-[#5E6673] font-bold">Process</span>
                    <span className="col-span-2 font-bold text-[#09285F]">{activeProduct.specs.operations}</span>
                  </div>
                  <div className="grid grid-cols-3 py-1 border-b border-[#D7DDE5]/10">
                    <span className="text-[#5E6673] font-bold">Treatment</span>
                    <span className="col-span-2 font-bold text-[#09285F]">{activeProduct.specs.hardness}</span>
                  </div>
                  <div className="grid grid-cols-3 py-1 border-b border-[#D7DDE5]/10">
                    <span className="text-[#5E6673] font-bold">Applications</span>
                    <span className="col-span-2 font-bold text-[#09285F]">{activeProduct.specs.applications}</span>
                  </div>
                  <div className="grid grid-cols-3 py-1">
                    <span className="text-[#5E6673] font-bold">Industries</span>
                    <span className="col-span-2 font-bold text-[#09285F]">{activeProduct.specs.industries}</span>
                  </div>
                </div>
              </div>

              {/* Footer Action */}
              <div className="mt-8 pt-4 border-t border-[#D7DDE5]/30 flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/contact?interest=${encodeURIComponent(activeProduct.name)}#contact-form`}
                  onClick={handleCloseModal}
                  className="flex-1 bg-[#EC6713] hover:bg-[#c57529] text-white font-heading font-bold text-xs uppercase tracking-wider py-3.5 text-center transition-colors duration-200"
                >
                  Request RFQ
                </Link>
                <button
                  onClick={handleCloseModal}
                  className="flex-1 bg-transparent hover:bg-[#FAF8F5] text-[#5E6673] hover:text-[#161616] font-heading font-bold text-xs uppercase tracking-wider py-3 text-center border border-[#D7DDE5] transition-colors"
                >
                  Close Specs
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
