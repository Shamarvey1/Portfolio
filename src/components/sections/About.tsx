"use client";

import Image from "next/image";
import { ArrowRight, Mail, Code, Database, Palette, Cpu, Sparkles } from "lucide-react";

export default function About() {
  const scrollToProjects = () => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  const techCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: "React, Next.js, JavaScript, TypeScript, Tailwind CSS",
    },
    {
      icon: Database,
      title: "Backend",
      skills: "Node.js, Express, MongoDB, PostgreSQL, REST APIs",
    },
    {
      icon: Palette,
      title: "Design",
      skills: "UI/UX Design, Figma, Responsive Design, Prototyping",
    },
    {
      icon: Cpu,
      title: "Tools",
      skills: "Git, Docker, Vercel, VS Code, Webhooks & JWT",
    },
  ];

  return (
    <section id="about" className="section-padding" style={{ position: "relative" }}>
      <div className="container-custom">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left: 4-Image Collage with Floating Experience Badge */}
          <div
            style={{
              position: "relative",
              maxWidth: "520px",
              margin: "0 auto",
              width: "100%",
            }}
          >
            {/* 2x2 Collage Container */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                padding: "1rem",
                background: "rgba(255, 107, 0, 0.05)",
                border: "1px solid rgba(255, 107, 0, 0.2)",
                borderRadius: "24px",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
              }}
            >
              {/* Photo 1 */}
              <div
                style={{
                  position: "relative",
                  height: "170px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid var(--border-light)",
                }}
              >
                <Image
                  src="/images/about-1.jpg"
                  alt="Code Editor Setup"
                  fill
                  sizes="250px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Photo 2 */}
              <div
                style={{
                  position: "relative",
                  height: "170px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid var(--border-light)",
                }}
              >
                <Image
                  src="/images/about-2.jpg"
                  alt="Creative Network Art"
                  fill
                  sizes="250px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Photo 3 */}
              <div
                style={{
                  position: "relative",
                  height: "170px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid var(--border-light)",
                }}
              >
                <Image
                  src="/images/about-3.jpg"
                  alt="Mobile UI Mockup"
                  fill
                  sizes="250px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Photo 4 */}
              <div
                style={{
                  position: "relative",
                  height: "170px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid var(--border-light)",
                }}
              >
                <Image
                  src="/images/about-4.jpg"
                  alt="Analytics Dashboard Screen"
                  fill
                  sizes="250px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Floating Experience Badge matching reference */}
            <div
              className="animate-float"
              style={{
                position: "absolute",
                bottom: "-15px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "var(--accent-gradient)",
                padding: "0.6rem 1.5rem",
                borderRadius: "9999px",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "0 8px 30px var(--accent-glow-strong)",
                whiteSpace: "nowrap",
                zIndex: 2,
              }}
            >
              <Sparkles size={16} color="#ffffff" />
              <span>3+ Years Experience</span>
            </div>
          </div>

          {/* Right: Text & Skill Groups */}
          <div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "0.5rem",
                color: "#ffffff",
              }}
            >
              About <span style={{ color: "var(--accent)" }}>Me</span>
            </h2>

            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "var(--accent-light)",
                marginBottom: "1.25rem",
              }}
            >
              Full-Stack Developer & UI/UX Designer
            </h3>

            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                fontSize: "0.95rem",
                marginBottom: "2rem",
              }}
            >
              I create digital experiences that combine innovative technology with elegant design. With expertise in both
              frontend and backend development, I deliver solutions that are visually stunning, highly functional, and
              user-friendly.
            </p>

            {/* 4 Competency Boxes */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.25rem",
                marginBottom: "2.5rem",
              }}
              className="about-skills-grid"
            >
              {techCategories.map(({ icon: Icon, title, skills }) => (
                <div
                  key={title}
                  style={{
                    padding: "1rem 1.15rem",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "14px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "0.4rem",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "#ffffff",
                    }}
                  >
                    <Icon size={16} color="var(--accent)" />
                    <span>{title}</span>
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                    {skills}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button
                onClick={scrollToProjects}
                className="btn-primary"
                style={{ padding: "0.75rem 1.75rem", fontSize: "0.9375rem" }}
              >
                View Portfolio <ArrowRight size={16} />
              </button>
              <button
                onClick={scrollToContact}
                className="btn-secondary"
                style={{ padding: "0.75rem 1.75rem", fontSize: "0.9375rem" }}
              >
                <Mail size={16} color="var(--accent-light)" /> Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr 1.1fr !important;
          }
        }
        @media (max-width: 540px) {
          .about-skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
