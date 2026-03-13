import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <section style={{
        padding: "6rem 24px 4rem",
        maxWidth: 780,
        margin: "0 auto",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}>
        <p style={{
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#a0a0a0",
          marginBottom: "1.25rem",
        }}>
          Founder · Builder · UW Informatics
        </p>

        <h1 className="h1">
          Ales<br />
          <em style={{ fontStyle: "italic", color: "#5a5a5a" }}>builds things</em>
        </h1>

        <p className="p" style={{ maxWidth: 480, marginTop: "1.5rem", fontSize: 17 }}>
          I build software products from zero — SaaS platforms, internal tools,
          full-stack apps. Currently running two companies while finishing my
          degree at UW.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: "2rem" }}>
          <Link to="/projects" className="btn btnPrimary">View work</Link>
          <Link to="/contact" className="btn">Get in touch</Link>
          <a className="btn" href="https://github.com/printlnalex" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>

        <div className="pillRow" style={{ marginTop: "2rem" }}>
          {["Next.js", "React", "TypeScript", "Supabase", "Tailwind", "Python", "AI/ML"].map(s => (
            <span className="pill" key={s}>{s}</span>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section style={{ padding: "4rem 24px", maxWidth: 780, margin: "0 auto" }}>
        <div className="sectionLabel">Featured projects</div>

        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 12, overflow: "hidden" }}>
          {featured.map((p, i) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                gap: "1.5rem",
                alignItems: "center",
                padding: "1.5rem 1.75rem",
                background: "#fafaf8",
                textDecoration: "none",
                transition: "background 0.15s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#f2f1ed"}
              onMouseLeave={e => e.currentTarget.style.background = "#fafaf8"}
            >
              <span style={{ fontSize: 12, color: "#a0a0a0", fontWeight: 500, minWidth: 24 }}>
                0{i + 1}
              </span>
              <div>
                <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 3 }}>{p.title}</div>
                <div style={{ fontSize: 13, color: "#5a5a5a" }}>{p.oneLiner}</div>
                <div className="pillRow" style={{ marginTop: 8 }}>
                  {p.tools.slice(0, 4).map(t => <span className="pill" key={t}>{t}</span>)}
                </div>
              </div>
              <span style={{ color: "#a0a0a0", fontSize: 16 }}>↗</span>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <Link to="/projects" className="btn">All projects →</Link>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section style={{
        borderTop: "1px solid rgba(0,0,0,0.08)",
        background: "#f2f1ed",
        padding: "4rem 24px",
      }}>
        <div style={{ maxWidth: 780, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
          <div>
            <div className="sectionLabel">About</div>
            <h2 className="h2" style={{ marginBottom: "1.25rem" }}>
              Founder who codes,<br />
              <em style={{ fontStyle: "italic", color: "#5a5a5a" }}>developer who ships</em>
            </h2>
            <p className="p">
              I started building products because I saw real operational problems
              in my appliance repair business and decided to fix them myself. That
              turned into FieldAlpha — an AI-powered field service SaaS used by
              live technicians today.
            </p>
            <p className="p" style={{ marginTop: "0.75rem" }}>
              I build across the full stack and care deeply about things that
              actually work in production.
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            background: "rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: 12,
            overflow: "hidden",
          }}>
            {[
              { num: "2", label: "Companies founded" },
              { num: "Live", label: "Production users" },
              { num: "3+", label: "Years building" },
              { num: "UW", label: "Informatics '26" },
            ].map(s => (
              <div key={s.label} style={{ background: "#fafaf8", padding: "1.5rem" }}>
                <div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "2.25rem", lineHeight: 1, letterSpacing: "-1px", marginBottom: 4 }}>{s.num}</div>
                <div style={{ fontSize: 12, color: "#a0a0a0" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
