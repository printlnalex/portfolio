import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 0",
      }}
    >
      {/* Header section */}
      <div className="container">
        <h1 className="h2">Projects</h1>
        <p className="p" style={{ marginTop: 8, maxWidth: 700 }}>
          Each project includes a case study + links to code or dashboards.
        </p>
      </div>

      {/* Full-width project grid */}
      <div
        style={{
          width: "100%",
          marginTop: 24,
          padding: "0 5vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1400px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 20,
          }}
        >
          {projects.map((p) => (
            <article key={p.slug} className="card">
              <div className="cardInner">
                {/* Project cover (placeholder gradient) */}
                <div
                  style={{
                    height: 160,
                    borderRadius: 14,
                    marginBottom: 12,
                    border: "1px solid var(--border)",
                    background:
                      p.cover === "sql"
                        ? "linear-gradient(135deg, rgba(139,147,255,.22), rgba(17,24,39,.9))"
                        : p.cover === "bi"
                        ? "linear-gradient(135deg, rgba(45,212,191,.20), rgba(15,23,42,.9))"
                        : "linear-gradient(135deg, rgba(255,255,255,.05), rgba(15,23,42,.85))",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: 14,
                  }}
                >
                  <div style={{ fontWeight: 800, letterSpacing: "-0.01em" }}>
                    {p.title}
                  </div>
                  <div style={{ color: "var(--muted)", fontSize: 12, marginTop: 4 }}>
                    {p.tools.slice(0, 3).join(" • ")}
                  </div>
                </div>

                <h2 style={{ margin: 0, fontSize: 18 }}>{p.title}</h2>
                <p className="p" style={{ marginTop: 8 }}>
                  {p.oneLiner}
                </p>

                <div className="pillRow" style={{ marginTop: 10 }}>
                  {p.tools.map((t) => (
                    <span className="pill" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <Link className="btn btnPrimary" to={`/projects/${p.slug}`}>
                    Case Study
                  </Link>

                  {p.github && (
                    <a className="btn" href={p.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}

                  {p.dashboard && (
                    <a className="btn" href={p.dashboard} target="_blank" rel="noreferrer">
                      Dashboard
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
