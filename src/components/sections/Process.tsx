import { processSteps } from "@/data/process";
import { RiSearchLine, RiMapLine, RiPencilRulerLine, RiCodeSSlashLine, RiRocketLine } from "react-icons/ri";

type IconComponent = React.ComponentType<{ size?: number; color?: string }>;

const stepIcons: Record<string, IconComponent> = {
  "01": RiSearchLine,
  "02": RiMapLine,
  "03": RiPencilRulerLine,
  "04": RiCodeSSlashLine,
  "05": RiRocketLine,
};

export default function Process() {
  return (
    <section id="process" className="section-padding">
      <div className="container-custom">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="section-label" style={{ justifyContent: "center" }}><span>///</span> Process</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
            How I <span className="gradient-text">Work</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            A clear, structured process so you always know what&apos;s happening and what comes next.
          </p>
        </div>

        {/* Desktop: horizontal */}
        <div className="process-steps-desktop">
          {processSteps.map((step, i) => {
            const Icon = stepIcons[step.number] ?? RiCodeSSlashLine;
            return (
              <div key={step.number} style={{ flex: 1, position: "relative" }}>
                {i < processSteps.length - 1 && (
                  <div style={{ position: "absolute", top: "24px", left: "calc(50% + 28px)", right: "-50%", height: "1px", background: "linear-gradient(to right, var(--border-light), var(--border))" }} />
                )}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--bg-card)", border: "2px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem", position: "relative", zIndex: 1, boxShadow: "0 0 20px var(--accent-glow)" }}>
                    <Icon size={20} color="var(--accent-light)" />
                  </div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--accent)", marginBottom: "0.375rem" }}>{step.number}</div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.625rem" }}>{step.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6 }}>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: vertical */}
        <div className="process-steps-mobile">
          {processSteps.map((step, i) => {
            const Icon = stepIcons[step.number] ?? RiCodeSSlashLine;
            return (
              <div key={step.number} style={{ display: "flex", gap: "1.25rem" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--bg-card)", border: "2px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 0 16px var(--accent-glow)" }}>
                    <Icon size={18} color="var(--accent-light)" />
                  </div>
                  {i < processSteps.length - 1 && (
                    <div style={{ width: "1px", flex: 1, minHeight: "2rem", background: "linear-gradient(to bottom, var(--border-light), var(--border))", margin: "0.5rem 0" }} />
                  )}
                </div>
                <div style={{ paddingBottom: i < processSteps.length - 1 ? "1.75rem" : 0 }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--accent)", marginBottom: "0.25rem" }}>{step.number}</div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{step.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.65 }}>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .process-steps-desktop { display: none; grid-template-columns: repeat(5, 1fr); gap: 1rem; }
        .process-steps-mobile  { display: flex; flex-direction: column; }
        @media (min-width: 900px) {
          .process-steps-desktop { display: grid !important; }
          .process-steps-mobile  { display: none !important; }
        }
      `}</style>
    </section>
  );
}
