"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import StaggeredMenu from "./StaggeredMenu";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About Us", ariaLabel: "Learn about us", link: "/about" },
    { label: "Products & Services", ariaLabel: "View our products & capabilities", link: "/products" },
    { label: "Infrastructure", ariaLabel: "Our manufacturing facility", link: "/infrastructure" },
    { label: "Quality", ariaLabel: "Quality standards & compliance", link: "/quality" },
    { label: "Clients", ariaLabel: "Our partners & clients", link: "/clients" },
    { label: "Contact Us", ariaLabel: "Get in touch for RFQ", link: "/contact" }
  ];

  const socialItems = [
    { label: "Call Us", link: "tel:+919987849605" },
    { label: "WhatsApp", link: "https://wa.me/919987849605" },
    { label: "Email", link: "mailto:uookaymechindustries@gmail.com" }
  ];

  return (
    <motion.nav
      className={`site-header ${scrolled ? "scrolled" : ""}`}
      aria-label="Main navigation"
      animate={{
        boxShadow: scrolled
          ? "0 8px 24px rgba(9, 40, 95, 0.10)"
          : "0 0 0 rgba(0, 0, 0, 0)"
      }}
      transition={{ duration: 0.25 }}
    >
      {/* Top Utility Bar — slim brand accent bar */}
      <div className="top-utility-bar">
        <div className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 text-[#EC6713] shrink-0" />
          <span className="truncate">08 Pomal Industrial Estate, Kolshet Road, Thane – 400607</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 shrink-0">
          <a href="tel:+919987849605" className="flex items-center gap-1.5 hover:text-[#EC6713] transition-colors">
            <Phone className="h-3.5 w-3.5 text-[#EC6713]" />
            <span>+91 99878 49605</span>
          </a>
          <a href="tel:+919833053809" className="flex items-center gap-1.5 hover:text-[#EC6713] transition-colors">
            <Phone className="h-3.5 w-3.5 text-[#EC6713]" strokeWidth={2} />
            <span>+91 98330 53809</span>
          </a>
        </div>
      </div>

      <StaggeredMenu
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        currentPath={pathname}
      />
    </motion.nav>
  );
}
