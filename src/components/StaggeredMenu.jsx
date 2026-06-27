"use client";

import React, { useCallback, useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './StaggeredMenu.css';

export const StaggeredMenu = ({
  position = 'right',
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  accentColor = '#EC6713',
  closeOnClickAway = true,
  onMenuOpen,
  onMenuClose
}) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const toggleBtnRef = useRef(null);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setOpen((prev) => {
      const next = !prev;
      if (next) {
        onMenuOpen?.();
      } else {
        onMenuClose?.();
      }
      return next;
    });
  }, [onMenuOpen, onMenuClose]);

  const closeMenu = useCallback(() => {
    if (open) {
      setOpen(false);
      onMenuClose?.();
    }
  }, [open, onMenuClose]);

  useEffect(() => {
    if (!closeOnClickAway || !open) return;

    const handleClickOutside = event => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeOnClickAway, open, closeMenu]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div
      className={`group staggered-menu-wrapper ${className || ''}`}
      style={accentColor ? { ['--sm-accent']: accentColor } : undefined}
      data-position={position}
      data-open={open || undefined}
    >
      <header className={`staggered-menu-header ${scrolled ? 'scrolled-header' : ''}`} aria-label="Main navigation header">
        <Link href="/" className="sm-logo logoWrap select-none" aria-label="Logo" onClick={closeMenu}>
          <div className="logoImg">
            <Image
              src="/uk-mech-logo-v3.png"
              alt="UOO KAY MECH Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-heading text-[#09285F] font-bold tracking-wider leading-none transition-all duration-300 group-data-[open]:text-white lg:group-data-[open]:text-[#09285F] logoTextTop">
              UOO KAY MECH
            </span>
            <span className="text-[#EC6713] font-bold tracking-[0.18em] uppercase transition-all duration-300 group-data-[open]:text-white/85 lg:group-data-[open]:text-[#EC6713] logoTextBottom">
              INDUSTRIES
            </span>
          </div>
        </Link>
        
        <button
          ref={toggleBtnRef}
          className="sm-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="staggered-menu-panel"
          onClick={toggleMenu}
          type="button"
        >
          <span className="sm-toggle-textWrap font-heading font-extrabold uppercase text-[10px]">
            {open ? 'Close' : 'Menu'}
          </span>
          <span className="sm-icon" aria-hidden="true">
            <span className="sm-icon-line" />
            <span className="sm-icon-line sm-icon-line-v" />
          </span>
        </button>
      </header>

      <aside id="staggered-menu-panel" ref={panelRef} className="staggered-menu-panel" aria-hidden={!open}>
        <div className="sm-panel-inner">
          <ul className="sm-panel-list" role="list" data-numbering={displayItemNumbering || undefined}>
            {items && items.length ? (
              items.map((it, idx) => (
                <li className="sm-panel-itemWrap" key={it.label + idx}>
                  <Link 
                    className="sm-panel-item" 
                    href={it.link} 
                    aria-label={it.ariaLabel} 
                    data-index={idx + 1}
                    onClick={closeMenu}
                  >
                    <span className="sm-panel-itemLabel">{it.label}</span>
                  </Link>
                </li>
              ))
            ) : (
              <li className="sm-panel-itemWrap" aria-hidden="true">
                <span className="sm-panel-item">
                  <span className="sm-panel-itemLabel">No items</span>
                </span>
              </li>
            )}
          </ul>
          
          {displaySocials && socialItems && socialItems.length > 0 && (
            <div className="sm-socials" aria-label="Contact Links">
              <h3 className="sm-socials-title">Contact & Socials</h3>
              <ul className="sm-socials-list" role="list">
                {socialItems.map((s, i) => (
                  <li key={s.label + i} className="sm-socials-item">
                    <a href={s.link} target={s.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="sm-socials-link">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="sm-menu-contact border-t border-white/20 pt-6 mt-6 text-xs text-white/80 font-sans space-y-4">
                <h4 className="font-heading font-bold text-[9px] uppercase tracking-widest text-white/90">
                  Office & Workshop
                </h4>
                <p className="leading-relaxed text-white/80">
                  08 Pomal Industrial Estate, Kolshet Road, Thane – 400607, Maharashtra, India.
                </p>
                <div className="flex flex-col gap-2 text-white/80">
                  <a href="tel:+919987849605" className="hover:text-white transition-colors">
                    Mobile: +91 99878 49605 (Sandeepkumar)
                  </a>
                  <a href="tel:+919833053809" className="hover:text-white transition-colors">
                    Office: +91 98330 53809
                  </a>
                  <a href="mailto:uookaymechindustries@gmail.com" className="hover:text-white transition-colors break-all">
                    Email: uookaymechindustries@gmail.com
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default StaggeredMenu;
