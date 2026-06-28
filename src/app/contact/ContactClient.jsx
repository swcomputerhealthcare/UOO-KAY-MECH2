"use client";

import { useState, Suspense } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const FAQ_ITEMS = [
  {
    question: "What industries do you serve?",
    answer: "UK MECH Industries serves tier-1 industrial clients across multiple sectors including Pharmaceuticals, Food Processing, Oil & Gas, Chemicals, Automation, Packaging, HVAC, Switchgears, and General Engineering Assemblies."
  },
  {
    question: "What materials can you machine?",
    answer: "We machine a wide variety of materials, including Stainless Steel (SS304, SS316, SS316L), Alloy Steel (En24, AISI 4140), Tool Steel (D2, D3, H13, WPS), Mild Steel (MS), Carbon Steel, Brass Alloys (C360, C3600), Phosphor Bronze, and Aluminum (6082-T6)."
  },
  {
    question: "Do you manufacture custom parts?",
    answer: "Yes. We specialize in custom precision components, reverse-engineering from physical samples, custom tooling, dies, base frames, custom hinges, and special-purpose engineering assemblies according to client drawing blueprints."
  },
  {
    question: "Where is UK MECH Industries located?",
    answer: "Our manufacturing facility and tool room are located at 08 Pomal Industrial Estate, Kolshet Road, Thane – 400607, Maharashtra, India. You can view our map location above."
  },
  {
    question: "Can I request an RFQ?",
    answer: "Absolutely. You can submit your drawing blueprints, material specs, and quantities through our online enquiry form, via email at uookaymechindustries@gmail.com, or via telephone/WhatsApp. We provide detailed B2B quotations within 24 hours."
  },
  {
    question: "What CNC machines are available?",
    answer: "Our facility is equipped with state-of-the-art machinery including ACE Micromatic VMC (MCV450) centres, precision lathes, radial drilling machines, surface grinding machines, and metrology grade flat plates and height check instruments."
  }
];

export default function ContactClient() {
  return (
    <motion.div 
      className="bg-brand-bg pt-12 pb-6 sm:pt-16 sm:pb-8 relative overflow-x-hidden select-none"
      initial={{ opacity: 0.01, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <motion.div 
          className="border-l-2 border-[#EC6713] pl-6 mb-16"
          initial={{ opacity: 0.01, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span className="text-[10px] font-mono font-bold text-[#5E6673] tracking-[0.25em] uppercase block mb-1">
            [ RFQ & ENQUIRIES ]
          </span>
          <h1 className="sectionTitle font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#09285F] uppercase tracking-wide con-header-item">
            Contact Us
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Column 1: Info Listing (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              className="space-y-4 con-info-row"
              initial={{ opacity: 0.01, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <h2 className="font-heading text-2xl font-bold text-[#09285F] uppercase tracking-wide">
                Get In Touch
              </h2>
              <p className="text-[#5E6673] text-sm leading-relaxed font-sans font-medium">
                Have an engineering project, drawing blueprint, or request for quotation? Contact us today. Our engineering team responds within 24 hours.
              </p>
            </motion.div>

            {/* Two-Column Contact Layout (India vs International) */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 pt-6 border-t border-[#D7DDE5] con-info-row"
              initial={{ opacity: 0.01, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
            >
              
              {/* Column 1.1: India Contacts */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold text-[#EC6713] tracking-wider uppercase block">
                  {"// Domestic Operations"}
                </span>
                <h3 className="font-heading font-bold text-base text-[#09285F] uppercase">
                  India Contact
                </h3>
                <p className="text-[#5E6673] text-xs leading-relaxed font-medium">
                  08 Pomal Industrial Estate, Kolshet Road, Thane – 400607, Maharashtra, India.
                </p>
                <div className="flex flex-col gap-1 text-xs text-[#5E6673] font-semibold">
                  <a href="tel:+919987849605" className="hover:text-[#EC6713] transition-colors">
                    Mobile: +91 99878 49605 (Sandeepkumar)
                  </a>
                  <a href="tel:+919833053809" className="hover:text-[#EC6713] transition-colors">
                    Office: +91 98330 53809
                  </a>
                </div>
                
                {/* Clickable Action Buttons */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <motion.a
                    href="tel:+919987849605"
                    className="inline-flex items-center gap-1.5 bg-[#09285F] hover:bg-[#0b3070] text-white font-heading font-bold text-[10px] uppercase tracking-wider py-2 px-4 transition-colors duration-200 premium-btn-hover"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Phone className="h-3 w-3" />
                    Call Now
                  </motion.a>
                  <motion.a
                    href="https://wa.me/919987849605"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact UK Mech Industries on WhatsApp"
                    className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba56] text-white font-heading font-bold text-[10px] uppercase tracking-wider py-2 px-4 transition-colors duration-200 premium-btn-hover"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </motion.a>
                </div>
              </div>

              {/* Column 1.2: International Enquiries */}
              <div className="space-y-4 border-t sm:border-t-0 lg:border-t sm:border-l lg:border-l-0 border-[#D7DDE5] pt-6 sm:pt-0 lg:pt-6 sm:pl-8 lg:pl-0">
                <span className="text-[10px] font-mono font-bold text-[#EC6713] tracking-wider uppercase block">
                  {"// Overseas Desk"}
                </span>
                <h3 className="font-heading font-bold text-base text-[#09285F] uppercase">
                  International Business
                </h3>
                <p className="text-[#5E6673] text-xs leading-relaxed font-medium">
                  Dedicated desk managing custom machining solutions, linear compliance audits, export documentation, and logistics support for overseas clients.
                </p>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-[10px] uppercase text-[#09285F]">
                    Global Enquiries:
                  </h4>
                  <a
                    href="mailto:uookaymechindustries@gmail.com"
                    className="text-xs text-[#5E6673] hover:text-[#EC6713] font-bold transition-colors break-all block"
                  >
                    uookaymechindustries@gmail.com
                  </a>
                </div>
              </div>

            </motion.div>

            {/* Working hours */}
            <motion.div 
              className="border-t border-[#D7DDE5] pt-6 text-xs text-[#5E6673] font-medium font-sans flex gap-3 con-info-row"
              initial={{ opacity: 0.01, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              <Clock className="h-4 w-4 text-[#EC6713] shrink-0" strokeWidth={1.5} />
              <div>
                <span className="font-heading font-bold text-[#09285F] uppercase text-[10px] block mb-1">Business Operations</span>
                Monday – Saturday: 9:00 AM – 6:00 PM (IST) <br />
                Sunday: Closed
              </div>
            </motion.div>

          </div>

          {/* Column 2: Form */}
          <motion.div 
            id="contact-form" 
            className="lg:col-span-7 scroll-mt-24 con-form-wrapper"
            initial={{ opacity: 0.01, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          >
            <Suspense
              fallback={
                <div className="border-t-2 border-[#09285F] pt-6 min-h-[300px] flex items-center justify-center font-sans">
                  <span className="text-xs font-bold text-[#5E6673]">Loading Enquiry Form...</span>
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </motion.div>

        </div>

        {/* Full-width Map Section */}
        <div className="mt-24 con-map-section">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#D7DDE5] pb-3 mb-6">
            <h2 className="font-heading text-xl font-bold text-[#09285F] uppercase tracking-wide">
              Workshop Location
            </h2>
            <motion.a
              href="https://maps.google.com/maps?q=19.22867202758789%2C72.98545837402344&z=17&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-[#09285F] text-[#09285F] hover:bg-[#09285F] hover:text-white font-heading font-bold text-[10px] uppercase tracking-wider py-1.5 px-4 transition-all duration-200 premium-btn-hover"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Open in Google Maps
            </motion.a>
          </div>
          <div className="border border-[#D7DDE5] p-1 bg-white">
            <div className="w-full h-96 relative">
              <iframe
                title="UK Mech Industries Google Map"
                src="https://maps.google.com/maps?q=19.22867202758789,72.98545837402344&z=17&hl=en&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-100"
              />
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-28 border-t border-[#D7DDE5] pt-20 max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[10px] font-mono font-bold text-[#EC6713] tracking-[0.25em] uppercase block">
              [ FAQ ]
            </span>
            <h2 className="font-heading text-3xl font-bold text-[#09285F] uppercase tracking-wide">
              Manufacturing FAQ
            </h2>
            <p className="text-xs sm:text-sm text-[#5E6673] leading-relaxed font-sans max-w-lg mx-auto font-medium">
              Have technical queries about custom engineering tolerances, material capability, machine specs, or B2B RFQs? Browse our details below.
            </p>
          </div>

          <FAQAccordion />
        </div>

      </div>
    </motion.div>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://uookaymechindustries.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://uookaymechindustries.com/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-[#D7DDE5] bg-white rounded-2xl overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left font-heading font-bold text-xs sm:text-sm text-[#09285F] uppercase tracking-wide hover:bg-[#F6F7F8] transition-colors"
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span className="text-[#EC6713] text-lg font-mono leading-none">
                  {isOpen ? "–" : "+"}
                </span>
              </button>

              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="p-5 pt-0 border-t border-[#D7DDE5]/30 text-xs sm:text-sm text-[#5E6673] leading-relaxed font-sans font-medium">
                  {item.answer}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </>
  );
}
