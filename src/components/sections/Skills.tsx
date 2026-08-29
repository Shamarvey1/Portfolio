"use client";

import { skillGroups } from "@/data/skills";
import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNextjsLine,
  RiNodejsLine,
  RiDatabase2Line,
  RiGitBranchLine,
  RiGithubLine,
  RiCodeLine,
  RiToolsLine,
  RiLink,
  RiShieldLine,
  RiBankCardLine,
  RiServerLine,
  RiMailSendLine,
  RiPaletteLine,
  RiStackLine,
  RiSettingsLine,
  RiLinksLine,
} from "react-icons/ri";
import { SiTypescript, SiTailwindcss, SiExpress, SiPython, SiMongodb, SiPostgresql, SiMysql, SiDocker } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import type { IconType } from "react-icons";

/* ─── Per-skill icon map ─── */
const skillIconMap: Record<string, IconType> = {
  "HTML5":                RiHtml5Line,
  "CSS3":                 RiCss3Line,
  "JavaScript":           RiJavascriptLine,
  "TypeScript":           SiTypescript,
  "React":                RiReactjsLine,
  "Next.js":              RiNextjsLine,
  "Tailwind CSS":         SiTailwindcss,
  "Node.js":              RiNodejsLine,
  "Express.js":           SiExpress,
  "REST APIs":            TbApi,
  "Python":               SiPython,
  "MongoDB":              SiMongodb,
  "PostgreSQL":           SiPostgresql,
  "MySQL":                SiMysql,
  "Git":                  RiGitBranchLine,
  "GitHub":               RiGithubLine,
  "Docker":               SiDocker,
  "VS Code":              VscVscode,
  "Vercel":               RiServerLine,
  "Railway":              RiServerLine,
  "Payment Integration":  RiBankCardLine,
  "Authentication / JWT": RiShieldLine,
  "Email APIs":           RiMailSendLine,
  "Third-party APIs":     RiLinksLine,
};

/* ─── Per-category group icon map ─── */
const groupIconMap: Record<string, IconType> = {
  "Frontend":        RiPaletteLine,
  "Backend":         RiNodejsLine,
  "Database":        RiDatabase2Line,
  "Tools & DevOps":  RiSettingsLine,
  "Integrations":    RiStackLine,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ background: "var(--bg-surface)" }}>
      <div className="container-custom">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem", color: "#ffffff" }}>
            <span style={{ color: "var(--accent)" }}>Skills</span> & Experience
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
            My technical expertise and professional journey
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }} className="skills-outer-grid">
          {skillGroups.map((group, gi) => {
            const GroupIcon = groupIconMap[group.category] ?? RiCodeLine;
            return (
              <div
                key={group.category}
                className="glass-card"
                style={{
                  padding: "1.75rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "20px",
                  opacity: 0,
                  animation: `fadeInUp 0.5s ease ${gi * 0.1}s forwards`,
                }}
              >
                {/* Category header */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <div style={{ width: "36px", height: "36px", background: "rgba(255,107,0,0.12)", border: "1px solid rgba(255,107,0,0.25)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <GroupIcon size={18} color="var(--accent)" />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.05rem", color: "#ffffff" }}>
                    {group.category}
                  </h3>
                </div>

                {/* Skill pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {group.skills.map((skill) => {
                    const SkillIcon = skillIconMap[skill] ?? RiCodeLine;
                    return (
                      <div key={skill} className="skill-item">
                        <SkillIcon size={14} color="var(--accent-light)" />
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <p style={{ textAlign: "center", marginTop: "2.5rem", color: "var(--text-muted)", fontSize: "0.85rem" }}>
          I keep up with modern practices and continuously expand my toolkit.
        </p>
      </div>

      <style>{`
        @media (min-width: 640px)  { .skills-outer-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (min-width: 1024px) { .skills-outer-grid { grid-template-columns: repeat(3, 1fr) !important; } }
      `}</style>
    </section>
  );
}
