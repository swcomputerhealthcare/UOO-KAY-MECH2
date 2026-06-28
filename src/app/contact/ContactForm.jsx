"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    interest: "Precision Components",
    material: "",
    quantity: "",
    tolerance: "",
    timeline: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Read query parameters to prefill the interest, material, tolerance, and message fields
  useEffect(() => {
    const interestParam = searchParams.get("interest") || searchParams.get("enquiry");
    if (interestParam) {
      // Clean up "Request for Quote: " prefix if present
      const cleanInterest = interestParam.replace(/^Request for Quote:\s*/i, "");

      const materialParam = searchParams.get("material") || "";
      const toleranceParam = searchParams.get("tolerance") || "";
      const treatmentParam = searchParams.get("treatment") || "";

      // 1. Determine target category for the dropdown
      const categories = [
        "Machine Safety Guards",
        "Precision Components",
        "Gears",
        "Ladders",
        "Machining Solutions",
        "Other",
      ];
      
      let targetInterest = categories.find(
        (c) => c.toLowerCase() === cleanInterest.toLowerCase() || cleanInterest.toLowerCase().includes(c.toLowerCase())
      );
      
      if (!targetInterest) {
        const lower = cleanInterest.toLowerCase();
        if (lower.includes("guard") || lower.includes("enclosure") || lower.includes("cage") || lower.includes("cabinet") || lower.includes("racking")) {
          targetInterest = "Machine Safety Guards";
        } else if (lower.includes("gear") || lower.includes("roller")) {
          targetInterest = "Gears";
        } else if (lower.includes("ladder")) {
          targetInterest = "Ladders";
        } else if (lower.includes("tool") || lower.includes("die") || lower.includes("punch") || lower.includes("fixture") || lower.includes("expander") || lower.includes("probe")) {
          targetInterest = "Machining Solutions";
        } else {
          targetInterest = "Precision Components";
        }
      }
      
      // 2. Prefill form state
      setFormData((prev) => ({
        ...prev,
        interest: targetInterest,
        material: materialParam || prev.material,
        tolerance: toleranceParam || prev.tolerance,
        message: prev.message || `Inquiry regarding: ${cleanInterest}.${treatmentParam ? `\nHardness/Treatment: ${treatmentParam}.` : ""}\n\nPlease provide quotation and technical feasibility details for this component.`
      }));
    }
  }, [searchParams]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/[\s-()]/g, ""))) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.message.trim()) newErrors.message = "Message requirements are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(
      "RFQ Request - UK MECH INDUSTRIES"
    );

    const body = encodeURIComponent(`RFQ REQUEST

Name: ${formData.name}

Company: ${formData.company}

Email: ${formData.email}

Phone: ${formData.phone}

Component Required: ${formData.interest}

Material: ${formData.material || "Not Specified"}

Quantity: ${formData.quantity || "Not Specified"}

Tolerance: ${formData.tolerance || "Not Specified"}

Delivery Timeline: ${formData.timeline || "Not Specified"}

Additional Requirements:
${formData.message}

----------------------------
Submitted via UK MECH INDUSTRIES Website`);

    window.location.href = `mailto:uookaymechindustries@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="border-t-2 border-[#09285F] pt-6 font-sans">
      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#5E6673] mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=""
              className={`w-full px-4 py-3 border rounded-none text-xs bg-white focus:bg-white focus:outline-none focus:border-[#EC6713] transition-all duration-200 font-semibold text-[#161616] placeholder-[#5E6673] ${
                errors.name ? "border-[#C62828]" : "border-[#D7DDE5]"
              }`}
            />
            {errors.name && <p className="text-[#C62828] text-xs mt-1.5 font-semibold">{errors.name}</p>}
          </div>

          {/* Company Name */}
          <div>
            <label htmlFor="company" className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#5E6673] mb-2">
              Company Name *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder=""
              className={`w-full px-4 py-3 border rounded-none text-xs bg-white focus:bg-white focus:outline-none focus:border-[#EC6713] transition-all duration-200 font-semibold text-[#161616] placeholder-[#5E6673] ${
                errors.company ? "border-[#C62828]" : "border-[#D7DDE5]"
              }`}
            />
            {errors.company && <p className="text-[#C62828] text-xs mt-1.5 font-semibold">{errors.company}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#5E6673] mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder=""
              className={`w-full px-4 py-3 border rounded-none text-xs bg-white focus:bg-white focus:outline-none focus:border-[#EC6713] transition-all duration-200 font-semibold text-[#161616] placeholder-[#5E6673] ${
                errors.phone ? "border-[#C62828]" : "border-[#D7DDE5]"
              }`}
            />
            {errors.phone && <p className="text-[#C62828] text-xs mt-1.5 font-semibold">{errors.phone}</p>}
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#5E6673] mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=""
              className={`w-full px-4 py-3 border rounded-none text-xs bg-white focus:bg-white focus:outline-none focus:border-[#EC6713] transition-all duration-200 font-semibold text-[#161616] placeholder-[#5E6673] ${
                errors.email ? "border-[#C62828]" : "border-[#D7DDE5]"
              }`}
            />
            {errors.email && <p className="text-[#C62828] text-xs mt-1.5 font-semibold">{errors.email}</p>}
          </div>
        </div>

        {/* Product Interest Dropdown */}
        <div>
          <label htmlFor="interest" className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#5E6673] mb-2">
            Product / Service Interest *
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#D7DDE5] rounded-none text-xs bg-white focus:bg-white focus:outline-none focus:border-[#EC6713] transition-all duration-200 font-semibold text-[#161616] cursor-pointer"
          >
            <option value="Machine Safety Guards">Machine Safety Guards</option>
            <option value="Precision Components">Precision Machined Components</option>
            <option value="Gears">Gear Manufacturing</option>
            <option value="Ladders">Industrial Ladders</option>
            <option value="Fabrication">Industrial Machining Solutions</option>
            <option value="Other">Other Services</option>
          </select>
        </div>

        {/* Material & Quantity Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Material */}
          <div>
            <label htmlFor="material" className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#5E6673] mb-2">
              Material Specification
            </label>
            <input
              type="text"
              id="material"
              name="material"
              value={formData.material}
              onChange={handleChange}
              placeholder="e.g. SS316, Mild Steel, Aluminum"
              className="w-full px-4 py-3 border border-[#D7DDE5] rounded-none text-xs bg-white focus:bg-white focus:outline-none focus:border-[#EC6713] transition-all duration-200 font-semibold text-[#161616] placeholder-[#5E6673]"
            />
          </div>

          {/* Quantity */}
          <div>
            <label htmlFor="quantity" className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#5E6673] mb-2">
              Quantity Required
            </label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g. 50 units, 1000 pcs"
              className="w-full px-4 py-3 border border-[#D7DDE5] rounded-none text-xs bg-white focus:bg-white focus:outline-none focus:border-[#EC6713] transition-all duration-200 font-semibold text-[#161616] placeholder-[#5E6673]"
            />
          </div>
        </div>

        {/* Tolerance & Delivery Timeline Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Tolerance */}
          <div>
            <label htmlFor="tolerance" className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#5E6673] mb-2">
              Tolerances Required
            </label>
            <input
              type="text"
              id="tolerance"
              name="tolerance"
              value={formData.tolerance}
              onChange={handleChange}
              placeholder="e.g. ±0.02 mm, Standard"
              className="w-full px-4 py-3 border border-[#D7DDE5] rounded-none text-xs bg-white focus:bg-white focus:outline-none focus:border-[#EC6713] transition-all duration-200 font-semibold text-[#161616] placeholder-[#5E6673]"
            />
          </div>

          {/* Delivery Timeline */}
          <div>
            <label htmlFor="timeline" className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#5E6673] mb-2">
              Delivery Timeline
            </label>
            <input
              type="text"
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              placeholder="e.g. 2-3 weeks, Urgent"
              className="w-full px-4 py-3 border border-[#D7DDE5] rounded-none text-xs bg-white focus:bg-white focus:outline-none focus:border-[#EC6713] transition-all duration-200 font-semibold text-[#161616] placeholder-[#5E6673]"
            />
          </div>
        </div>

        {/* Message Requirements */}
        <div>
          <label htmlFor="message" className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[#5E6673] mb-2">
            Message / Engineering Requirements *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder=""
            className={`w-full px-4 py-3 border rounded-none text-xs bg-white focus:bg-white focus:outline-none focus:border-[#EC6713] transition-all duration-200 font-semibold text-[#161616] placeholder-[#5E6673] ${
              errors.message ? "border-[#C62828]" : "border-[#D7DDE5]"
            }`}
          />
          {errors.message && <p className="text-[#C62828] text-xs mt-1.5 font-semibold">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full bg-[#EC6713] hover:bg-[#c57529] text-white font-heading font-bold px-8 py-4 text-xs uppercase tracking-wider transition-colors duration-200 text-center cursor-pointer flex items-center justify-center gap-3 premium-btn-hover"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
        >
          <span>Submit RFQ Request</span>
          <Send className="h-4 w-4 text-white" strokeWidth={1.5} />
        </motion.button>

        {/* Technical Registry Note */}
        <p className="text-[9px] font-mono text-[#5E6673] text-center leading-relaxed">
          SECURE CONNECTION ENCRYPTED · COMMERCIALLY SENSITIVE BLUEPRINTS RESTRICTED FROM PUBLIC DISSEMINATION
        </p>
      </form>
    </div>
  );
}
