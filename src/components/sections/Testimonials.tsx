import { RiDoubleQuotesL } from "react-icons/ri";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem", color: "#ffffff" }}>
            Client <span style={{ color: "var(--accent)" }}>Feedback</span>
          </h2>
        </div>

        <div style={{ maxWidth: "520px", margin: "0 auto", textAlign: "center" }}>
          <div className="glass-card" style={{ padding: "3rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", background: "var(--bg-card)", borderRadius: "20px", border: "1px solid var(--border)" }}>
            <div style={{ width: "56px", height: "56px", background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.25)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <RiDoubleQuotesL size={24} color="var(--accent)" />
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.7, fontStyle: "italic" }}>
              Client testimonials are on their way. Once I complete real client projects, genuine reviews will appear here.
            </p>
            <p style={{ color: "var(--accent-light)", fontSize: "0.825rem", fontWeight: 600 }}>— Testimonials coming soon</p>
          </div>
        </div>
      </div>
    </section>
  );
}
