"use client";

import {
  RiBox3Line,
  RiFlashlightLine,
  RiFocusLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";
import type { IconType } from "react-icons";

type Stat = { value: string; label: string; description: string; icon: IconType };

const stats: Stat[] = [
  { icon: RiBox3Line,            value: "5+",           label: "Projects Built",        description: "End-to-end web products shipped" },
  { icon: RiFlashlightLine,      value: "10+",          label: "Technologies",          description: "Modern tools across the full stack" },
  { icon: RiFocusLine,           value: "Business-First",label: "Development Mindset",  description: "Code built around real business goals" },
  { icon: RiCheckboxCircleLine,  value: "Open",         label: "For Freelance",         description: "Ready to take on your project" },
];

export default function TrustStats() {
  return (
    <section
      id="trust"
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "3rem 0",
      }}
    >
      <div className="container-custom">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }} className="trust-grid">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                style={{
                  opacity: 0,
                  animation: `fadeInUp 0.5s ease ${i * 0.1}s forwards`,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.875rem",
                  padding: "1.25rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-light)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "38px", height: "38px", flexShrink: 0,
                    background: "rgba(99,102,241,0.1)",
                    border: "1px solid rgba(99,102,241,0.2)",
                    borderRadius: "10px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <Icon size={19} color="var(--accent-light)" />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.25rem", color: "var(--text-primary)", lineHeight: 1.2 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: "0.825rem", color: "var(--accent-light)", marginTop: "0.15rem" }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: "0.775rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) { .trust-grid { grid-template-columns: repeat(4, 1fr) !important; } }
      `}</style>
    </section>
  );
}
