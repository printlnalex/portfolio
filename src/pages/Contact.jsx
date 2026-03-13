import { useState } from "react";

export default function Contact() {
  const email = "ales@fieldalpha.dev";
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  return (
    <div style={{ padding: "4rem 24px", maxWidth: 780, margin: "0 auto" }}>
      <div className="sectionLabel">Contact</div>

      <h1 className="h1" style={{ marginBottom: "1rem" }}>
        Let's build<br />
        <em style={{ fontStyle: "italic", color: "#5a5a5a" }}>something real</em>
      </h1>

      <p className="p" style={{ maxWidth: 420, marginBottom: "2.5rem", fontSize: 16 }}>
        Investor, potential co-founder, employer, or just want to talk shop — I'm always up for a good conversation.
      </p>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <a href={`mailto:${email}`} className="btn btnPrimary">{email}</a>
        <button className="btn" onClick={copyEmail}>{copied ? "Copied ✓" : "Copy email"}</button>
        <a className="btn" href="https://linkedin.com/in/alexis-lucatero" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a className="btn" href="https://github.com/printlnalex" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a className="btn" href="https://fieldalpha.dev" target="_blank" rel="noreferrer">FieldAlpha ↗</a>
      </div>
    </div>
  );
}
