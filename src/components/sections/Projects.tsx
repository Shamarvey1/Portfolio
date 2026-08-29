"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, Project } from "@/data/projects";
import { RiCloseLine, RiExternalLinkLine, RiGithubLine, RiArrowRightSLine, RiLayoutLine } from "react-icons/ri";
import { ShoppingBag, BookOpen, Monitor, Store, LucideIcon, Sparkles } from "lucide-react";

function TypeBadge({ type }: { type: Project["type"] }) {
  const config = {
    demo: { label: "Demo Project", bg: "rgba(255,107,0,0.12)", border: "rgba(255,107,0,0.35)", color: "#ff8a30" },
    concept: { label: "Concept Project", bg: "rgba(251,146,60,0.1)", border: "rgba(251,146,60,0.25)", color: "#fb923c" },
    real: { label: "Client Project", bg: "rgba(34,197,94,0.15)", border: "rgba(34,197,94,0.35)", color: "#22c55e" },
  };
  const c = config[type];
  return (
    <span
      style={{
        fontSize: "0.7rem",
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        padding: "0.25rem 0.75rem",
        borderRadius: "100px",
        background: c.bg,
        border: `1px solid ${c.border}`,
        color: c.color,
        display: "inline-flex",
        alignItems: "center",
        gap: "0.35rem",
      }}
    >
      {type === "real" && <Sparkles size={11} color="#22c55e" />}
      {c.label}
    </span>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "1.75rem" }}>
      <h4
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: "1rem",
          color: "var(--accent-light)",
          marginBottom: "0.75rem",
          paddingBottom: "0.5rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {title}
      </h4>
      {children}
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div
          style={{
            padding: "1.75rem 2rem 1.25rem",
            borderBottom: "1px solid var(--border)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <div>
            <div style={{ marginBottom: "0.5rem" }}>
              <TypeBadge type={project.type} />
            </div>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "1.5rem",
                marginBottom: "0.25rem",
                color: "#ffffff",
              }}
            >
              {project.title}
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "0.4rem",
              cursor: "pointer",
              color: "var(--text-secondary)",
              display: "flex",
              flexShrink: 0,
            }}
            aria-label="Close"
          >
            <RiCloseLine size={18} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "2rem", overflowY: "auto", maxHeight: "70vh" }}>
          {/* Screenshot display */}
          <div
            style={{
              background: "#0c0806",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              height: "340px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "2rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: "contain", padding: "8px" }}
                unoptimized
              />
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "var(--text-muted)",
                  fontSize: "0.875rem",
                }}
              >
                <RiLayoutLine size={28} color="var(--accent)" />
                <span>Project screenshot / mockup</span>
              </div>
            )}
          </div>

          <Section title="Overview">
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>{project.description}</p>
          </Section>
          <Section title="The Challenge">
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>{project.challenge}</p>
          </Section>
          <Section title="The Solution">
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>{project.solution}</p>
          </Section>

          <Section title="Key Features">
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {project.features.map((f) => (
                <li
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    color: "var(--text-secondary)",
                    fontSize: "0.9rem",
                  }}
                >
                  <RiArrowRightSLine size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: "0.18rem" }} />
                  {f}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Technology Stack">
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {Object.entries(project.tech).map(([key, vals]) =>
                vals && vals.length > 0 ? (
                  <div key={key} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        textTransform: "capitalize",
                        minWidth: "80px",
                        paddingTop: "0.2rem",
                      }}
                    >
                      {key}:
                    </span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {vals.map((v) => (
                        <span key={v} className="tech-badge">
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </Section>
        </div>

        {/* Footer buttons */}
        <div
          style={{
            padding: "1.25rem 2rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          {project.liveUrl && project.liveUrl !== "#" ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: "0.875rem", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
            >
              <RiExternalLinkLine size={15} /> Live Demo
            </a>
          ) : (
            <span
              className="btn-primary"
              style={{
                fontSize: "0.875rem",
                opacity: 0.6,
                cursor: "not-allowed",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
              title="Client project preview available in modal"
            >
              <RiExternalLinkLine size={15} /> Client Project
            </span>
          )}
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: "0.875rem", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
            >
              <RiGithubLine size={15} /> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectIcons: Record<string, LucideIcon> = {
    "rationshop-pro": Store,
    "bakery-ordering": ShoppingBag,
    "booknest": BookOpen,
  };

  return (
    <>
      <section id="projects" className="section-padding">
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "0.75rem",
                color: "#ffffff",
              }}
            >
              Featured <span style={{ color: "var(--accent)" }}>Work</span>
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                maxWidth: "520px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Real client systems and full-stack applications that demonstrate production-ready engineering.
            </p>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.75rem" }}
            className="projects-grid"
          >
            {projects.map((project, i) => {
              const ProjectIcon = projectIcons[project.id] ?? Monitor;
              return (
                <div
                  key={project.id}
                  className="glass-card"
                  style={{
                    overflow: "hidden",
                    opacity: 0,
                    animation: `fadeInUp 0.6s ease ${i * 0.12}s forwards`,
                    cursor: "pointer",
                    background: "var(--bg-card)",
                    borderRadius: "20px",
                    border: "1px solid var(--border)",
                  }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Thumbnail */}
                  <div
                    style={{
                      height: "210px",
                      background: "linear-gradient(135deg, rgba(255,107,0,0.12) 0%, rgba(251,146,60,0.04) 100%)",
                      borderBottom: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          style={{ objectFit: "cover", objectPosition: "top center" }}
                          unoptimized
                        />
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background:
                              "linear-gradient(to top, rgba(14, 10, 8, 0.7) 0%, transparent 60%)",
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <div
                          style={{
                            position: "absolute",
                            top: "20%",
                            right: "10%",
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                            border: "1px solid rgba(255,107,0,0.2)",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            bottom: "15%",
                            left: "8%",
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            border: "1px solid rgba(255,107,0,0.15)",
                          }}
                        />
                        <div
                          style={{
                            textAlign: "center",
                            color: "var(--text-muted)",
                            fontSize: "0.8rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              width: "48px",
                              height: "48px",
                              borderRadius: "12px",
                              background: "rgba(255,107,0,0.12)",
                              border: "1px solid rgba(255,107,0,0.25)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginBottom: "0.5rem",
                            }}
                          >
                            <ProjectIcon size={24} color="var(--accent)" />
                          </div>
                          <div style={{ color: "var(--text-primary)", fontWeight: 600 }}>{project.title}</div>
                          <div style={{ fontSize: "0.7rem", marginTop: "0.2rem", color: "var(--text-muted)" }}>
                            [Click for details]
                          </div>
                        </div>
                      </>
                    )}

                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(255,107,0,0.18)",
                        opacity: 0,
                        transition: "opacity 0.3s",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      className="project-hover"
                    >
                      <span
                        style={{
                          background: "var(--accent-gradient)",
                          color: "white",
                          padding: "0.6rem 1.4rem",
                          borderRadius: "9999px",
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          boxShadow: "0 8px 24px var(--accent-glow-strong)",
                        }}
                      >
                        View Case Study →
                      </span>
                    </div>
                  </div>

                  <div style={{ padding: "1.5rem" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "0.75rem",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                      }}
                    >
                      <TypeBadge type={project.type} />
                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        {project.liveUrl && project.liveUrl !== "#" && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                              fontSize: "0.775rem",
                              padding: "0.3rem 0.75rem",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.35rem",
                              borderColor: "var(--accent)",
                              color: "var(--accent-light)",
                              background: "rgba(255, 107, 0, 0.08)",
                            }}
                          >
                            <RiExternalLinkLine size={13} color="var(--accent)" /> Live Demo
                          </a>
                        )}
                        {project.githubUrl && project.githubUrl !== "#" && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                              fontSize: "0.775rem",
                              padding: "0.3rem 0.75rem",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.3rem",
                            }}
                          >
                            <RiGithubLine size={12} /> Code
                          </a>
                        )}
                      </div>
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: "1.2rem",
                        marginBottom: "0.375rem",
                        color: "#ffffff",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p style={{ color: "var(--accent-light)", fontSize: "0.85rem", marginBottom: "0.75rem" }}>
                      {project.subtitle}
                    </p>
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.875rem",
                        lineHeight: 1.65,
                        marginBottom: "1.25rem",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {project.description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-badge">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
          @media (min-width: 768px) {
            .projects-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (min-width: 1100px) {
            .projects-grid {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }
          .glass-card:hover .project-hover {
            opacity: 1 !important;
          }
        `}</style>
      </section>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  );
}
