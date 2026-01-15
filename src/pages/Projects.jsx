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
                <h2 style={{ margin: 0, fontSize: 18 }}>{p.title}</h2>
                <p className="p" style={{ marginTop: 8 }}>
                  {p.oneLiner}
                </p>

                <div className="pillRow" style={{ marginTop: 10 }}>
                  {p.tools.map((t) => (
                    <span className="pill" key={t}>{t}</span>
                  ))}
                </div>

                <div style={{ marginTop: 14, display: "flex", gap: 10 }}>
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

