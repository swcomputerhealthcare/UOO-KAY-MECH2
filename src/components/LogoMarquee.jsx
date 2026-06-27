"use client";

function LTLogo() {
  return (
    <svg className="clientLogoImage" viewBox="0 0 290 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Monogram circle */}
      <circle cx="30" cy="30" r="24" fill="#09285F" />
      <circle cx="30" cy="30" r="22" stroke="#EC6713" strokeWidth="1.5" />
      {/* Monogram L & T paths */}
      <path d="M22 18h4v16.5c0 1.9 1.1 3 3 3h4v4h-5.5c-4 0-5.5-2-5.5-5.5V18z" fill="#EC6713" />
      <path d="M30 18h16v4H38v20h-4V22h-4v-4z" fill="#EC6713" />
      {/* Larsen & Toubro Text */}
      <text x="70" y="32" fontFamily="var(--font-heading)" fontSize="18" fontWeight="900" fill="#09285F" letterSpacing="1">LARSEN & TOUBRO</text>
      <text x="70" y="46" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#EC6713" letterSpacing="1.5">ENGINEERING SOLUTIONS</text>
    </svg>
  );
}

function EmersonLogo() {
  return (
    <svg className="clientLogoImage" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Globe Icon */}
      <circle cx="30" cy="30" r="24" stroke="#09285F" strokeWidth="3.5" fill="none" />
      <ellipse cx="30" cy="30" rx="14" ry="24" stroke="#09285F" strokeWidth="2" fill="none" />
      <ellipse cx="30" cy="30" rx="6" ry="24" stroke="#09285F" strokeWidth="1.5" fill="none" />
      <line x1="6" y1="30" x2="54" y2="30" stroke="#09285F" strokeWidth="2" />
      <path d="M12 18 C20 25, 40 25, 48 18" stroke="#09285F" strokeWidth="1.5" fill="none" />
      <path d="M12 42 C20 35, 40 35, 48 42" stroke="#09285F" strokeWidth="1.5" fill="none" />
      
      {/* Emerson lettermark */}
      <text x="72" y="36" fontFamily="var(--font-heading)" fontSize="22" fontWeight="900" fill="#09285F" letterSpacing="2.5">EMERSON</text>
      <text x="72" y="48" fontFamily="sans-serif" fontSize="9" fontWeight="800" fill="#64748B" letterSpacing="2">CONSIDER IT SOLVED.</text>
    </svg>
  );
}

function GodfreyLogo() {
  return (
    <svg className="clientLogoImage" viewBox="0 0 260 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield & Crown Crest */}
      <g transform="translate(10, 2)">
        {/* Crown */}
        <path d="M12,4 L16,10 L25,5 L34,10 L38,4 L34,14 L16,14 Z" fill="#D4AF37" stroke="#996515" strokeWidth="1" />
        <circle cx="12" cy="4" r="1.5" fill="#D4AF37" />
        <circle cx="25" cy="5" r="1.5" fill="#D4AF37" />
        <circle cx="38" cy="4" r="1.5" fill="#D4AF37" />
        {/* Shield */}
        <path d="M14,16 L36,16 C36,16 36,28 25,36 C14,28 14,16 14,16 Z" fill="#A62B2B" stroke="#D4AF37" strokeWidth="2" />
        <path d="M14,16 L25,36" stroke="#D4AF37" strokeWidth="1.5" />
        <path d="M36,16 L25,36" stroke="#D4AF37" strokeWidth="1.5" />
      </g>
      {/* Text */}
      <text x="65" y="32" fontFamily="var(--font-heading)" fontSize="17" fontWeight="900" fill="#09285F" letterSpacing="1">GODFREY PHILLIPS</text>
      <text x="65" y="46" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#A62B2B" letterSpacing="2">INDIA LIMITED</text>
    </svg>
  );
}

function ParleLogo() {
  return (
    <svg className="clientLogoImage" viewBox="0 0 260 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Gear Icon */}
      <g transform="translate(10, 6)" fill="#09285F">
        {/* Outer teeth */}
        <path d="M20,2 C21.1,2 22,2.9 22,4 L22,6 C25.3,6.7 28.3,8.2 30.9,10.2 L32.3,8.8 C33.1,8 34.4,8 35.2,8.8 L36.6,10.2 C37.4,11 37.4,12.3 36.6,13.1 L35.2,14.5 C37.2,17.1 38.7,20.1 39.4,23.4 L41.4,23.4 C42.5,23.4 43.4,24.3 43.4,25.4 L43.4,27.4 C43.4,28.5 42.5,29.4 41.4,29.4 L39.4,29.4 C38.7,32.7 37.2,35.7 35.2,38.3 L36.6,39.7 C37.4,40.5 37.4,41.8 36.6,42.6 L35.2,44 C34.4,44.8 33.1,44.8 32.3,44 L30.9,42.6 C28.3,44.6 25.3,46.1 22,46.8 L22,48.8 C22,49.9 21.1,50.8 20,50.8 L18,50.8 C16.9,50.8 16,49.9 16,48.8 L16,46.8 C12.7,46.1 9.7,44.6 7.1,42.6 L5.7,44 C4.9,44.8 3.6,44.8 3.2,44 L1.4,42.6 C0.6,41.8 0.6,40.5 1.4,39.7 L2.8,38.3 C0.8,35.7 -0.7,32.7 -1.4,29.4 L-3.4,29.4 C-4.5,29.4 -5.4,28.5 -5.4,27.4 L-5.4,25.4 C-5.4,24.3 -4.5,23.4 -3.4,23.4 L-1.4,23.4 C-0.7,20.1 0.8,17.1 2.8,14.5 L1.4,13.1 C0.6,12.3 0.6,11 1.4,10.2 L2.8,8.8 C3.6,8 4.9,8 5.7,8.8 L7.1,10.2 C9.7,8.2 12.7,6.7 16,6 L16,4 C16,2.9 16.9,2 18,2 Z" fill="#09285F" opacity="0.15" />
        
        {/* Core Ring */}
        <circle cx="18" cy="26" r="15" stroke="#09285F" strokeWidth="3.5" fill="none" />
        {/* Gear Center P */}
        <path d="M14,19 H21 C23.5,19 25,20.5 25,22.5 C25,24.5 23.5,26 21,26 H17 V32 H14 V19 Z M17,21 V24 H21 C22,24 22.5,23.5 22.5,22.5 C22.5,21.5 22,21 21,21 Z" fill="#09285F" />
      </g>
      {/* Lettermark */}
      <text x="65" y="31" fontFamily="var(--font-heading)" fontSize="16" fontWeight="900" fill="#09285F" letterSpacing="0.5">PARLE ELIZABETH</text>
      <text x="65" y="45" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#64748B" letterSpacing="1.5">TOOLS PVT. LTD.</text>
    </svg>
  );
}

export default function LogoMarquee() {
  const logos = [
    <LTLogo key="lt" />,
    <EmersonLogo key="emerson" />,
    <GodfreyLogo key="godfrey" />,
    <ParleLogo key="parle" />,
  ];

  // Double the logos to make it loop seamlessly
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden bg-white py-8 border-y border-border-dev/30 shadow-inner">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      
      <div className="animate-marquee gap-8 md:gap-12 items-center">
        {marqueeLogos.map((logo, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center transition-all duration-300 text-primary w-[260px] h-[60px]"
          >
            <div className="w-[200px] h-[50px] flex items-center justify-center">
              {logo}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


