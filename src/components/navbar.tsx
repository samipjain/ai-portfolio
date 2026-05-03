"use client";

import { useState, useEffect } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { label: "Projects", href: "#work" },
  { label: "Press", href: "#press" },
  { label: "Talks", href: "#talks" },
  { label: "Play", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 640) setMobileOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner glass">
        <a href="#top" className="nav__brand">
          <span className="nav__brand-name">Samip.</span>
        </a>
        <nav className="nav__links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className={`nav__menu-btn ${mobileOpen ? "is-open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-links"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <HiXMark size={18} /> : <HiBars3 size={18} />}
        </button>
        <ThemeToggle />
        <nav
          id="mobile-nav-links"
          className={`nav__mobile ${mobileOpen ? "is-open" : ""}`}
          aria-hidden={!mobileOpen}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
