"use client";

import StaggeredMenu from "./StaggeredMenu";

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
    { label: "Call Us", link: "tel:9987849605" },
    { label: "WhatsApp", link: "https://wa.me/919987849605" },
    { label: "Email", link: "mailto:uookaymechindustries@gmail.com" }
  ];

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#121212"
      openMenuButtonColor="#fff"
      changeMenuColorOnOpen={true}
      colors={['#121212', '#262626', '#C46A2D']}
      accentColor="#C46A2D"
      isFixed={true}
    />
  );
}
