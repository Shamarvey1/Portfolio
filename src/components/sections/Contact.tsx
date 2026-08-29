"use client";

import { useState } from "react";
import { RiSendPlaneLine, RiMailLine, RiGithubLine, RiLinkedinBoxLine, RiArrowRightLine, RiPhoneLine } from "react-icons/ri";
import { CheckCircle2, AlertCircle, Loader2, ShieldCheck } from "lucide-react";

const projectTypes = [
  "Business Website",
  "E-Commerce Store",
  "Online Ordering System",
  "Admin Dashboard",
  "Custom Web Application",
  "Payment Integration",
  "Other / Not Sure",
];

const budgetRanges = [
  "Prefer not to say",
  "Under ₹20,000",
  "₹20,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Let's discuss",
];

const contactLinks = [
  { href: "tel:+918260553671",                                         icon: RiPhoneLine,        label: "Phone / WhatsApp", value: "+91 8260553671" },
  { href: "mailto:ajitlookforbest@gmail.com",                           icon: RiMailLine,         label: "Email",            value: "ajitlookforbest@gmail.com" },
  { href: "https://github.com/Shamarvey1",                              icon: RiGithubLine,       label: "GitHub",           value: "github.com/Shamarvey1" },
  { href: "https://www.linkedin.com/in/ajit-kumar-prasad-105814323/",   icon: RiLinkedinBoxLine,  label: "LinkedIn",         value: "ajit-kumar-prasad" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", projectType: "", budget: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("https://formsubmit.co/ajax/d2f7e1b319d54f3b393c49feb8ff9583", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: form.name,
          Email: form.email,
          "Project Type": form.projectType,
          Budget: form.budget || "Not Specified",
          Message: form.message,
          _subject: `New Project Inquiry from ${form.name} (${form.projectType})`,
          _replyto: form.email,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", projectType: "", budget: "", message: "" });
      } else {
        throw new Error("Failed to send inquiry");
      }
    } catch {
      setErrorMsg("Something went wrong while sending your inquiry. Please try again or reach out directly by phone or email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem", color: "#ffffff" }}>
            Have a Project <span style={{ color: "var(--accent)" }}>in Mind?</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            Let&apos;s discuss your idea and turn it into a professional digital product. Fill in the form and I&apos;ll get back to you shortly.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "start" }} className="contact-grid">

          {/* Left: Contact links */}
          <div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.2rem", marginBottom: "1.5rem", color: "#ffffff" }}>Get In Touch</h3>

            {contactLinks.map(({ href, icon: Icon, label, value }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") || href.startsWith("tel") ? undefined : "_blank"}
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.875rem", padding: "1.1rem 1.25rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "16px", marginBottom: "0.875rem", transition: "all 0.2s", color: "var(--text-primary)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 16px var(--accent-glow)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ width: "38px", height: "38px", background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.25)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={18} color="var(--accent)" />
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.1rem" }}>{label}</div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 600 }}>{value}</div>
                </div>
                <RiArrowRightLine size={15} style={{ marginLeft: "auto", color: "var(--text-muted)" }} />
              </a>
            ))}

            <div style={{ padding: "1rem 1.25rem", background: "rgba(255,107,0,0.06)", border: "1px solid rgba(255,107,0,0.2)", borderRadius: "14px", fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, marginTop: "0.375rem" }}>
              <span style={{ color: "var(--accent)", fontWeight: 600 }}>Response time: </span>
              I typically respond to project inquiries within 24 hours.
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="glass-card" style={{ padding: "3rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", background: "var(--bg-card)", borderRadius: "20px", border: "1px solid var(--border)" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <CheckCircle2 size={32} color="#22c55e" />
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.3rem", color: "#ffffff" }}>Inquiry Sent Successfully!</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  Thank you for reaching out. Your message has been dispatched to <strong>ajitlookforbest@gmail.com</strong>. I&apos;ll review the details and respond within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary" style={{ marginTop: "0.5rem" }}>
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem", background: "var(--bg-card)", borderRadius: "20px", border: "1px solid var(--border)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem" }} className="form-row">
                  <div>
                    <label htmlFor="contact-name" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-secondary)" }}>
                      Your Name <span style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <input id="contact-name" name="name" type="text" required placeholder="e.g. Rahul Verma" className="form-input" value={form.name} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-secondary)" }}>
                      Email Address <span style={{ color: "var(--accent)" }}>*</span>
                    </label>
                    <input id="contact-email" name="email" type="email" required placeholder="rahul@example.com" className="form-input" value={form.email} onChange={handleChange} />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-project-type" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-secondary)" }}>
                    Project Type <span style={{ color: "var(--accent)" }}>*</span>
                  </label>
                  <select id="contact-project-type" name="projectType" required className="form-input" value={form.projectType} onChange={handleChange}>
                    <option value="" disabled>Select project type...</option>
                    {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-budget" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-secondary)" }}>
                    Budget Range <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(optional)</span>
                  </label>
                  <select id="contact-budget" name="budget" className="form-input" value={form.budget} onChange={handleChange}>
                    <option value="">Select a range...</option>
                    {budgetRanges.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-secondary)" }}>
                    Project Details <span style={{ color: "var(--accent)" }}>*</span>
                  </label>
                  <textarea id="contact-message" name="message" required rows={5} placeholder="Tell me about your project — what you need, who it's for, any features or ideas you have in mind..." className="form-input" value={form.message} onChange={handleChange} style={{ resize: "vertical", minHeight: "120px" }} />
                </div>

                {errorMsg && (
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1rem", borderRadius: "10px", background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.25)", color: "#ef4444", fontSize: "0.85rem" }}>
                    <AlertCircle size={16} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.775rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                  <ShieldCheck size={15} color="var(--accent)" style={{ flexShrink: 0 }} />
                  <span>Inquiries are delivered directly to <strong>ajitlookforbest@gmail.com</strong>.</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  id="contact-submit"
                  style={{
                    justifyContent: "center",
                    fontSize: "1rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending Inquiry...
                    </>
                  ) : (
                    <>
                      <RiSendPlaneLine size={16} /> Send Project Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) { .contact-grid { grid-template-columns: 1fr 1.4fr !important; } .form-row { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
