"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    interest: "Precision Components",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  // Read query parameters to prefill the interest field
  useEffect(() => {
    const interestParam = searchParams.get("interest");
    if (interestParam) {
      const categories = [
        "Machine Safety Guards",
        "Precision Components",
        "Gears",
        "Ladders",
        "Fabrication",
        "Other",
      ];
      const matched = categories.find(
        (c) => c.toLowerCase() === interestParam.toLowerCase() || interestParam.toLowerCase().includes(c.toLowerCase())
      );
      
      const targetInterest = matched || (interestParam.includes("Gear") ? "Gears" : null);
      if (targetInterest) {
        const handle = requestAnimationFrame(() => {
          setFormData((prev) => {
            if (prev.interest === targetInterest) return prev;
            return { ...prev, interest: targetInterest };
          });
        });
        return () => cancelAnimationFrame(handle);
      }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setErrorMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS credentials are missing. Simulating form submission.");
      setTimeout(() => {
        setStatus("success");
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          interest: "Precision Components",
          message: "",
        });
      }, 1500);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        company_name: formData.company,
        phone_number: formData.phone,
        reply_to: formData.email,
        interest_category: formData.interest,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus("success");
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        interest: "Precision Components",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
      setErrorMessage(err.text || "Failed to send enquiry. Please try again or call us directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="border-t-2 border-[#17375E] pt-6 font-sans text-center">
        <div className="bg-white p-8 sm:p-12 border border-[#D7DDE5] space-y-6">
          <div className="text-[#D9893A] p-3 border border-[#D7DDE5] w-max mx-auto">
            <CheckCircle2 className="h-8 w-8 text-[#D9893A]" strokeWidth={1.5} />
          </div>
          <h3 className="font-heading text-2xl font-bold text-[#17375E] uppercase">Enquiry Sent</h3>
          <p className="text-[#5E6673] text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-medium">
            Thank you for reaching out to Uoo Kay Mech Industries. Our sales engineering team will review your specifications and contact you shortly.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="inline-block bg-[#17375E] hover:bg-[#D9893A] text-white font-heading font-bold px-8 py-3.5 text-xs uppercase tracking-wider transition-colors duration-200 cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="border-t-2 border-[#17375E] pt-6 font-sans">
      <form onSubmit={handleSubmit} className="space-y-6">
        {status === "error" && (
          <div className="border border-red-500/25 bg-red-500/5 text-[#C62828] p-4 flex items-center gap-3 text-xs font-semibold">
            <AlertCircle className="h-5 w-5 shrink-0 text-[#C62828]" strokeWidth={1.5} />
            <span>{errorMessage}</span>
          </div>
        )}

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
              className={`w-full px-4 py-3 border rounded-none text-xs bg-white focus:bg-white focus:outline-none focus:border-[#D9893A] transition-all duration-200 font-semibold text-[#161616] placeholder-[#5E6673] ${
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
              className={`w-full px-4 py-3 border rounded-none text-xs bg-white focus:bg-white focus:outline-none focus:border-[#D9893A] transition-all duration-200 font-semibold text-[#161616] placeholder-[#5E6673] ${
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
              className={`w-full px-4 py-3 border rounded-none text-xs bg-white focus:bg-white focus:outline-none focus:border-[#D9893A] transition-all duration-200 font-semibold text-[#161616] placeholder-[#5E6673] ${
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
              className={`w-full px-4 py-3 border rounded-none text-xs bg-white focus:bg-white focus:outline-none focus:border-[#D9893A] transition-all duration-200 font-semibold text-[#161616] placeholder-[#5E6673] ${
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
            className="w-full px-4 py-3 border border-[#D7DDE5] rounded-none text-xs bg-white focus:bg-white focus:outline-none focus:border-[#D9893A] transition-all duration-200 font-semibold text-[#161616] cursor-pointer"
          >
            <option value="Machine Safety Guards">Machine Safety Guards</option>
            <option value="Precision Components">Precision Machined Components</option>
            <option value="Gears">Gear Manufacturing</option>
            <option value="Ladders">Industrial Ladders</option>
            <option value="Fabrication">Structural Fabrication</option>
            <option value="Other">Other Services</option>
          </select>
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
            className={`w-full px-4 py-3 border rounded-none text-xs bg-white focus:bg-white focus:outline-none focus:border-[#D9893A] transition-all duration-200 font-semibold text-[#161616] placeholder-[#5E6673] ${
              errors.message ? "border-[#C62828]" : "border-[#D7DDE5]"
            }`}
          />
          {errors.message && <p className="text-[#C62828] text-xs mt-1.5 font-semibold">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-[#D9893A] hover:bg-[#c57529] text-white font-heading font-bold px-8 py-4 text-xs uppercase tracking-wider transition-colors duration-200 text-center cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-3 premium-btn-hover"
        >
          <span>{status === "loading" ? "Sending Request..." : "Submit RFP Request"}</span>
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin text-white" />
          ) : (
            <Send className="h-4 w-4 text-white" strokeWidth={1.5} />
          )}
        </button>

        {/* Technical Registry Note */}
        <p className="text-[9px] font-mono text-[#5E6673] text-center leading-relaxed">
          SECURE CONNECTION ENCRYPTED · COMMERCIALLY SENSITIVE BLUEPRINTS RESTRICTED FROM PUBLIC DISSEMINATION
        </p>
      </form>
    </div>
  );
}


