"use client";

import {
  Code,
  ShoppingCart,
  Smartphone,
  Layers,
  LayoutDashboard,
  CreditCard,
  ArrowRight,
  ExternalLink,
  LucideIcon,
} from "lucide-react";

interface ServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  techs: string[];
}

const serviceList: ServiceItem[] = [
  {
    id: "web-dev",
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications and business websites built with modern technologies for optimal performance and SEO.",
    techs: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce Platforms",
    description:
      "Full-featured online stores with product catalog, cart, customer checkout, and automated inventory sync.",
    techs: ["Next.js", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: "ordering",
    icon: Smartphone,
    title: "Online Ordering Systems",
    description:
      "Tailored ordering systems for restaurants, bakeries, cafes, and local brands with instant checkout flow.",
    techs: ["React", "Express", "MongoDB", "Razorpay"],
  },
  {
    id: "dashboards",
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    description:
      "Intuitive control panels to manage products, customer orders, revenue analytics, and role-based permissions.",
    techs: ["React", "JWT Auth", "REST APIs", "Charts"],
  },
  {
    id: "ui-ux",
    icon: Layers,
    title: "UI/UX & Frontend Design",
    description:
      "Modern, user-centered interfaces with smooth micro-interactions, mobile responsiveness, and dark mode.",
    techs: ["Figma to Code", "CSS3", "Responsive Design"],
  },
  {
    id: "payments",
    icon: CreditCard,
    title: "Payment & API Integration",
    description:
      "Secure payment processing, webhook management, email dispatchers, and third-party API connectivity.",
    techs: ["Stripe", "Razorpay", "Webhooks", "Node.js"],
  },
];

export default function Services() {
  const scrollToProjects = () => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" className="section-padding" style={{ background: "var(--bg-surface)", position: "relative" }}>
      <div className="container-custom">
        {/* Header */}
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
            My <span style={{ color: "var(--accent)" }}>Services</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.05rem",
              maxWidth: "540px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* 6-Card Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
          className="services-grid"
        >
          {serviceList.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="glass-card"
                style={{
                  padding: "2rem",
                  opacity: 0,
                  animation: `fadeInUp 0.5s ease ${i * 0.08}s forwards`,
                  display: "flex",
                  flexDirection: "column",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "20px",
                }}
              >
                {/* Icon Container */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "rgba(255, 107, 0, 0.12)",
                    border: "1px solid rgba(255, 107, 0, 0.25)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <Icon size={22} color="var(--accent)" />
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    marginBottom: "0.75rem",
                    color: "#ffffff",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    marginBottom: "1.5rem",
                    flexGrow: 1,
                  }}
                >
                  {service.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {service.techs.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Buttons like in reference */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <button
            onClick={scrollToProjects}
            className="btn-primary"
            style={{ fontSize: "0.9375rem", padding: "0.75rem 1.75rem" }}
          >
            View All Projects <ArrowRight size={16} />
          </button>
          <button
            onClick={scrollToContact}
            className="btn-secondary"
            style={{ fontSize: "0.9375rem", padding: "0.75rem 1.75rem" }}
          >
            Get In Touch <ExternalLink size={15} />
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
