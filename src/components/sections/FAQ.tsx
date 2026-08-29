"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="section-padding" style={{ background: "var(--bg-surface)" }}>
      <div className="container-custom">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem", color: "#ffffff" }}>
            Common <span style={{ color: "var(--accent)" }}>Questions</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
            Answers to the questions I hear most often from potential clients.
          </p>
        </div>

        <div style={{ maxWidth: "740px", margin: "0 auto", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "20px", overflow: "hidden" }}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item" style={{ borderBottom: i === faqs.length - 1 ? "none" : undefined }}>
              <button className="faq-trigger" onClick={() => toggle(i)} id={`faq-question-${i}`} style={{ padding: "1.25rem 1.5rem" }}>
                <span style={{ paddingRight: "1rem" }}>{faq.question}</span>
                <span style={{ width: "28px", height: "28px", borderRadius: "8px", background: openIndex === i ? "var(--accent)" : "rgba(255,107,0,0.1)", border: `1px solid ${openIndex === i ? "var(--accent)" : "rgba(255,107,0,0.2)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.2s" }}>
                  {openIndex === i
                    ? <RiSubtractLine size={14} color="white" />
                    : <RiAddLine      size={14} color="var(--accent)" />
                  }
                </span>
              </button>
              <div className={`faq-content ${openIndex === i ? "open" : ""}`} style={{ padding: openIndex === i ? "0 1.5rem 1.25rem" : "0 1.5rem" }}>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.9375rem" }}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
