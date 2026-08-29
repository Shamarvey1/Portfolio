import {
  RiChatSmile2Line, RiBriefcaseLine, RiSmartphoneLine, RiCodeSSlashLine,
  RiShieldLine, RiFlashlightLine, RiFocusLine, RiCustomerService2Line,
} from "react-icons/ri";

type IconComponent = React.ComponentType<{ size?: number; color?: string }>;

const reasons: { icon: IconComponent; title: string; description: string }[] = [
  { icon: RiChatSmile2Line,      title: "Clear Communication",          description: "I keep you informed at every stage. No jargon, no surprises — just straightforward updates on progress and decisions." },
  { icon: RiBriefcaseLine,       title: "Business-Focused Development", description: "I start by understanding your business, not the code. Every feature I build is designed to serve a real business goal." },
  { icon: RiSmartphoneLine,      title: "Mobile-First Design",          description: "Every website I build works beautifully on all devices — phone, tablet, laptop, and desktop." },
  { icon: RiCodeSSlashLine,      title: "Clean, Maintainable Code",     description: "I write code that is readable, structured, and easy to build on. No shortcuts that create problems later." },
  { icon: RiShieldLine,          title: "Secure Integrations",          description: "Authentication, payments, and APIs are implemented securely and to industry best practices." },
  { icon: RiFlashlightLine,      title: "Modern Technologies",          description: "I use current, well-supported technologies that keep your product fast, scalable, and easy to maintain." },
  { icon: RiFocusLine,           title: "Attention to Detail",          description: "Every pixel, interaction, and edge case matters. I build products that feel polished and professional." },
  { icon: RiCustomerService2Line,title: "Post-Launch Support",          description: "I don't disappear after delivery. I provide support to make sure everything runs smoothly after launch." },
];

export default function WhyMe() {
  return (
    <section id="why-me" className="section-padding" style={{ background: "var(--bg-surface)" }}>
      <div className="container-custom">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem", color: "#ffffff" }}>
            Why Clients Choose to <span style={{ color: "var(--accent)" }}>Work With Me</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            Beyond writing code, I focus on delivering a professional, collaborative experience that you can rely on.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem" }} className="why-grid">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="glass-card" style={{ padding: "1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start", opacity: 0, animation: `fadeInUp 0.5s ease ${i * 0.07}s forwards`, background: "var(--bg-card)", borderRadius: "16px", border: "1px solid var(--border)" }}>
                <div style={{ width: "42px", height: "42px", background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.22)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={20} color="var(--accent)" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.975rem", marginBottom: "0.375rem", color: "#ffffff" }}>{reason.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.65 }}>{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px)  { .why-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (min-width: 1024px) { .why-grid { grid-template-columns: repeat(4, 1fr) !important; } }
      `}</style>
    </section>
  );
}
