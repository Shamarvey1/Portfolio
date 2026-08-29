"use client";

import { useState, useEffect } from "react";
import { RiMenuLine, RiCloseLine, RiCodeSSlashLine } from "react-icons/ri";

const navLinks = [
  { href: "#services",  label: "Services" },
  { href: "#about",     label: "About Me" },
  { href: "#skills",    label: "Skills" },
  { href: "#projects",  label: "Projects" },
  { href: "#why-me",    label: "Why Me" },
  { href: "#contact",   label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (href: string) => {
    closeMenu();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.3s ease",
          background: scrolled ? "rgba(14, 10, 8, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
        }}
      >
        <div
          className="container-custom"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}
        >
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <div
              style={{
                width: "34px", height: "34px",
                background: "var(--accent-gradient)", borderRadius: "10px",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 16px var(--accent-glow)",
              }}
            >
              <RiCodeSSlashLine size={18} color="white" />
            </div>
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.15rem", color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
              Dev<span style={{ color: "var(--accent)" }}>Portfolio</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="nav-link"
                style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "0.9rem" }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-primary"
              style={{ padding: "0.6rem 1.4rem", fontSize: "0.875rem" }}
            >
              Let&apos;s Talk
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="show-mobile"
            style={{
              background: "none", border: "1px solid var(--border)", borderRadius: "8px",
              padding: "0.375rem", cursor: "pointer", color: "var(--text-primary)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <RiCloseLine size={20} /> : <RiMenuLine size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`} onClick={closeMenu} />

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem" }}>
          <div style={{ width: "28px", height: "28px", background: "var(--accent)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <RiCodeSSlashLine size={16} color="white" />
          </div>
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.95rem" }}>
            Ajit Kumar Prasad
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "var(--font-sans)", fontSize: "1rem", fontWeight: 500,
                color: "var(--text-secondary)", textAlign: "left",
                padding: "0.75rem 0", borderBottom: "1px solid var(--border)", transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => handleNavClick("#contact")}
          className="btn-primary"
          style={{ marginTop: "1.5rem", width: "100%", justifyContent: "center" }}
        >
          Let&apos;s Work Together
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
        @media (min-width: 769px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
      `}</style>
    </>
  );
}
