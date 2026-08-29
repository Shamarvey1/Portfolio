"use client";

import { RiCodeSSlashLine, RiGithubLine, RiLinkedinBoxLine, RiMailLine, RiArrowRightUpLine, RiPhoneLine } from "react-icons/ri";

const footerLinks = [
  { href: "#home",     label: "Home" },
  { href: "#about",    label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#skills",   label: "Skills" },
  { href: "#process",  label: "Process" },
  { href: "#contact",  label: "Contact" },
];

const socials = [
  { href: "tel:+918260553671",                                            icon: RiPhoneLine,        label: "+91 8260553671" },
  { href: "mailto:ajitlookforbest@gmail.com",                             icon: RiMailLine,         label: "Email" },
  { href: "https://github.com/Shamarvey1",                                icon: RiGithubLine,       label: "GitHub" },
  { href: "https://www.linkedin.com/in/ajit-kumar-prasad-105814323/",     icon: RiLinkedinBoxLine,  label: "LinkedIn" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)", paddingTop: "3.5rem", paddingBottom: "2rem" }}>
      <div className="container-custom">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem", marginBottom: "3rem" }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div style={{ width: "34px", height: "34px", background: "var(--accent-gradient)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 16px var(--accent-glow)" }}>
                <RiCodeSSlashLine size={18} color="white" />
              </div>
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.15rem", color: "var(--text-primary)" }}>
                Dev<span style={{ color: "var(--accent)" }}>Portfolio</span>
              </span>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", maxWidth: "300px", lineHeight: "1.65" }}>
              Freelance Full-Stack Developer building modern, high-converting websites and web applications for businesses.
            </p>
            <div style={{ display: "flex", gap: "0.625rem", marginTop: "1.25rem", flexWrap: "wrap" }}>
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  aria-label={label}
                >
                  <Icon size={15} /> {label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p style={{ fontWeight: 600, fontSize: "0.875rem", marginBottom: "1rem", color: "var(--text-primary)" }}>Navigation</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{ color: "var(--text-secondary)", fontSize: "0.875rem", transition: "color 0.2s", display: "inline-block" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-light)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p style={{ fontWeight: 600, fontSize: "0.875rem", marginBottom: "1rem", color: "var(--text-primary)" }}>Start a Project</p>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: "1.65", marginBottom: "1.25rem" }}>
              Have a business idea or a project you want to build? Let&apos;s talk.
            </p>
            <a href="#contact" className="btn-primary" style={{ fontSize: "0.875rem", padding: "0.625rem 1.25rem", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              Get in Touch <RiArrowRightUpLine size={15} />
            </a>
          </div>
        </div>

        <hr className="divider" />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1.5rem", flexWrap: "wrap", gap: "0.75rem" }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.8125rem" }}>
            © {year} <span style={{ color: "var(--text-secondary)" }}>Ajit Kumar Prasad</span>. All rights reserved.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.8125rem" }}>Freelance Full-Stack Developer</p>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) { .footer-grid { grid-template-columns: 1.5fr 1fr 1.2fr !important; } }
      `}</style>
    </footer>
  );
}
