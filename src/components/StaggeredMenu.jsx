"use client";

import React, { useCallback, useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { menuPanel, staggerContainer, menuItem } from '../lib/motionPresets';
import './StaggeredMenu.css';

export const StaggeredMenu = ({
  items = [],
  socialItems = [],
  displaySocials = true,
  className,
  closeOnClickAway = true,
  onMenuOpen,
  onMenuClose,
  currentPath = "/"
}) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const toggleBtnRef = useRef(null);

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

  // Manage focus when menu opens/closes to prevent aria-hidden focus bug
  useEffect(() => {
    const panel = panelRef.current;
    const menuButton = toggleBtnRef.current;
    if (!panel) return;

    if (open) {
      panel.removeAttribute('aria-hidden');
      panel.removeAttribute('inert');

      requestAnimationFrame(() => {
        const firstFocusable = panel.querySelector(
          'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        firstFocusable?.focus();
      });
    } else {
      const activeElement = document.activeElement;
      if (activeElement && panel.contains(activeElement)) {
        activeElement.blur();
      }

      panel.setAttribute('inert', '');
      panel.setAttribute('aria-hidden', 'true');

      requestAnimationFrame(() => {
        menuButton?.focus();
      });
    }
  }, [open]);

  // Escape key support
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && open) {
        const panel = panelRef.current;
        const activeElement = document.activeElement;
        if (activeElement && panel?.contains(activeElement)) {
          activeElement.blur();
        }
        setOpen(false);
        onMenuClose?.();
        requestAnimationFrame(() => {
          toggleBtnRef.current?.focus();
        });
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onMenuClose]);

  // Handle menu item click: blur active element, close menu, return focus to trigger
  const handleMenuItemClick = useCallback(() => {
    const activeElement = document.activeElement;
    if (activeElement && panelRef.current?.contains(activeElement)) {
      activeElement.blur();
    }
    setOpen(false);
    onMenuClose?.();
    requestAnimationFrame(() => {
      toggleBtnRef.current?.focus();
    });
  }, [onMenuClose]);

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

  // Close menu and clean up scroll locks when route path changes
  useEffect(() => {
    setOpen(false);
    onMenuClose?.();
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    document.body.classList.remove("menu-open", "scroll-locked");
  }, [currentPath, onMenuClose]);

  // Clean up on component unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.classList.remove("menu-open", "scroll-locked");
    };
  }, []);

  return (
    <div
      className={`staggered-menu-wrapper ${className || ''}`}
      data-open={open ? "true" : "false"}
    >
      <header className="staggered-menu-header" aria-label="Main navigation header">
        <Link href="/" className="sm-logo logoWrap select-none" aria-label="Logo" onClick={closeMenu}>
          <div className="logoImg">
            <Image
              src="/uk-mech-logo-v3.png"
              alt="UK MECH Industries Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="logo-text">
            <span className="logoTextTop">
              UOO KAY MECH
            </span>
            <span className="logoTextBottom">
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
          <span className="sm-toggle-textWrap font-heading font-extrabold uppercase">
            {open ? 'Close' : 'Menu'}
          </span>
          <span className="sm-icon" aria-hidden="true">
            <span className="sm-icon-line" />
            <span className="sm-icon-line sm-icon-line-v" />
          </span>
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.aside
            id="staggered-menu-panel"
            ref={panelRef}
            className="staggered-menu-panel"
            aria-hidden="false"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuPanel}
          >
            <div className="sm-panel-inner">
              <motion.ul 
                className="sm-panel-list" 
                role="list"
                initial="closed"
                animate="open"
                variants={staggerContainer}
              >
                {items && items.length ? (
                  items.map((it, idx) => (
                    <motion.li 
                      className="sm-panel-itemWrap" 
                      key={it.label + idx}
                      variants={menuItem}
                    >
                      <Link 
                        className="sm-panel-item" 
                        href={it.link} 
                        aria-label={it.ariaLabel} 
                        data-index={String(idx + 1).padStart(2, "0")}
                        onClick={handleMenuItemClick}
                      >
                        <span className="sm-panel-itemLabel">{it.label}</span>
                      </Link>
                    </motion.li>
                  ))
                ) : (
                  <li className="sm-panel-itemWrap" aria-hidden="true">
                    <span className="sm-panel-item">
                      <span className="sm-panel-itemLabel">No items</span>
                    </span>
                  </li>
                )}
              </motion.ul>
              
              {displaySocials && socialItems && socialItems.length > 0 && (
                <motion.div 
                  className="sm-socials" 
                  aria-label="Contact Links"
                  initial={{ opacity: 1, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
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

                  <div className="sm-menu-contact border-t pt-6 mt-6 text-xs font-sans space-y-4">
                    <h4 className="font-heading font-bold text-[9px] uppercase tracking-widest text-white">
                      Office & Workshop
                    </h4>
                    <p className="leading-relaxed text-white/80">
                      08 Pomal Industrial Estate, Kolshet Road, Thane – 400607, Maharashtra, India.
                    </p>
                    <div className="flex flex-col gap-2">
                      <a href="tel:+919987849605" className="transition-colors text-white/80 hover:text-white">
                        Mobile: +91 99878 49605 (Sandeepkumar)
                      </a>
                      <a href="tel:+919833053809" className="transition-colors text-white/80 hover:text-white">
                        Office: +91 98330 53809
                      </a>
                      <a href="mailto:uookaymechindustries@gmail.com" className="transition-colors break-all text-white/80 hover:text-white">
                        Email: uookaymechindustries@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StaggeredMenu;

