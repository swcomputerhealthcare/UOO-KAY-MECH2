"use client";

import StaggeredMenu from "./StaggeredMenu";
import { MapPin, Phone } from "lucide-react";

export default function Header() {
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
    <>
      {/* Top Utility Bar (Desktop only) */}
      <div className="fixed top-0 left-0 w-full h-10 bg-[#17375E] text-[#D7DDE5] text-[11px] items-center justify-between px-12 z-[60] border-b border-[#D7DDE5]/20 hidden md:flex font-sans font-medium">
        <div className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 text-[#D9893A]" />
          <span>08 Pomal Industrial Estate, Kolshet Road, Thane – 400607</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:+919987849605" className="flex items-center gap-1.5 hover:text-[#D9893A] transition-colors">
            <Phone className="h-3.5 w-3.5 text-[#D9893A]" />
            <span>Mobile: +91 99878 49605</span>
          </a>
          <a href="tel:+919833053809" className="flex items-center gap-1.5 hover:text-[#D9893A] transition-colors">
            <Phone className="h-3.5 w-3.5 text-[#D9893A]" strokeWidth={2} />
            <span>Office: +91 98330 53809</span>
          </a>
        </div>
      </div>

      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#17375E"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['#17375E', '#5E6673', '#D9893A']}
        accentColor="#D9893A"
        isFixed={true}
      />
    </>
  );
}


