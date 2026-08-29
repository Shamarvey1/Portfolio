"use client";

import Image from "next/image";
import { ArrowRight, Download, Sparkles, Code2, Layers, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToProjects = () => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "100px",
        paddingBottom: "4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Warm ambient background glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 107, 0, 0.22) 0%, rgba(255, 107, 0, 0.05) 50%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(251, 146, 60, 0.12) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container-custom" style={{ width: "100%", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left: Content */}
          <div style={{ opacity: 0, animation: "fadeInUp 0.7s ease 0.1s forwards" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <span className="status-available">
                <span
                  className="animate-pulse-dot"
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                Available for Freelance Projects
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                marginBottom: "0.75rem",
                color: "#ffffff",
              }}
            >
              Hi, I&apos;m{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #ff8a30 0%, #ff5200 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                Ajit
              </span>{" "}
              <span style={{ display: "inline-block", animation: "float 3s ease-in-out infinite", fontSize: "0.85em" }}>
                ⚡
              </span>
            </h1>

            <h2
              style={{
                fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
                fontWeight: 600,
                color: "var(--accent-light)",
                marginBottom: "1.25rem",
                letterSpacing: "-0.01em",
              }}
            >
              Full Stack Developer & Business Solutions Specialist
            </h2>

            <p
              style={{
                fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                maxWidth: "520px",
                marginBottom: "2.25rem",
              }}
            >
              I build digital solutions that combine cutting-edge technology with high-converting, reliable design.
              Let&apos;s turn your ideas into reality.
            </p>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
              <button
                onClick={scrollToContact}
                className="btn-primary"
                id="hero-cta-contact"
                style={{ fontSize: "1rem", padding: "0.85rem 2rem" }}
              >
                Contact Me <ArrowRight size={18} />
              </button>
              <button
                onClick={scrollToProjects}
                className="btn-secondary"
                id="hero-cta-work"
                style={{ fontSize: "1rem", padding: "0.85rem 2rem" }}
              >
                <Download size={18} color="var(--accent-light)" /> View My Work
              </button>
            </div>

            {/* Stats Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--border)",
                maxWidth: "460px",
              }}
            >
              {[
                { value: "5+", label: "Projects Built" },
                { value: "3+", label: "Years Exp" },
                { value: "10+", label: "Tech Stack" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 800,
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      color: "var(--accent)",
                      lineHeight: 1,
                      marginBottom: "0.35rem",
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: "0.825rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Portrait with Glowing Orange Halo */}
          <div
            style={{
              opacity: 0,
              animation: "fadeInUp 0.7s ease 0.3s forwards",
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
            className="hero-avatar-wrapper"
          >
            {/* Glowing Backdrop Arch / Frame */}
            <div
              style={{
                position: "relative",
                width: "min(360px, 85vw)",
                height: "min(430px, 95vw)",
                borderRadius: "180px 180px 48px 48px",
                background: "linear-gradient(145deg, #ff7a18 0%, #b45309 50%, #1a120d 100%)",
                padding: "6px",
                boxShadow: "0 25px 70px rgba(255, 107, 0, 0.35), 0 0 90px rgba(255, 107, 0, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Inner Arch Image Container */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "174px 174px 42px 42px",
                  overflow: "hidden",
                  position: "relative",
                  background: "#160f0b",
                  border: "3px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                <Image
                  src="/images/ajit-profile.jpg"
                  alt="Ajit Kumar Prasad - Full Stack Developer"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ objectFit: "cover", objectPosition: "center 8%" }}
                  priority
                  unoptimized
                />
              </div>

              {/* Floating Badge 1 - Top Left */}
              <div
                className="animate-float"
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: "-15px",
                  background: "rgba(22, 16, 12, 0.88)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 107, 0, 0.35)",
                  padding: "0.6rem 1rem",
                  borderRadius: "14px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 107, 0, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#ffffff",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "8px",
                    background: "rgba(255, 107, 0, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Code2 size={16} color="var(--accent)" />
                </div>
                <span>Full-Stack Engineer</span>
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div
                className="animate-float"
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "-20px",
                  animationDelay: "1.5s",
                  background: "rgba(22, 16, 12, 0.88)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 107, 0, 0.35)",
                  padding: "0.6rem 1rem",
                  borderRadius: "14px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 107, 0, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#ffffff",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "8px",
                    background: "rgba(34, 197, 94, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CheckCircle2 size={16} color="#22c55e" />
                </div>
                <span>100% Client Focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
