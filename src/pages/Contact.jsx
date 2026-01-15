import { useState } from "react";

export default function Contact() {
  const email = "alexislucateroperez@gmail.com";
  const linkedin = "https://linkedin.com/in/alexis-lucatero";

  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // fallback: do nothing
    }
  }

  return (
    <div className="container">
      <section className="card">
        <div className="cardInner" style={{ padding: 26 }}>
          <h1 className="h2">Contact</h1>
          <p className="p" style={{ marginTop: 8 }}>
            Fastest response: email or LinkedIn.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
            <a className="btn btnPrimary" href={`mailto:${email}`}>Email me</a>
            <button className="btn" onClick={copyEmail} style={{ cursor: "pointer" }}>
              {copied ? "Copied ✅" : "Copy email"}
            </button>
            <a className="btn" href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn" href="https://github.com/printlnalex" target="_blank" rel="noreferrer">GitHub</a>
          </div>

          <hr className="hr" />

          <h3 style={{ marginTop: 0 }}>Send a quick message</h3>
          <p className="p">This opens your email client with a pre-filled subject.</p>

          <div style={{ display: "grid", gap: 10, maxWidth: 700 }}>
            <a
              className="btn"
              href={`mailto:${email}?subject=${encodeURIComponent("Portfolio inquiry")}&body=${encodeURIComponent("Hi Ales,\n\nI saw your portfolio and wanted to connect about...\n\nThanks,\n")}`}
            >
              Compose message →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

