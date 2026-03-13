import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div style={{ padding: "4rem 24px", maxWidth: 780, margin: "0 auto" }}>
      <div className="sectionLabel">All projects</div>
      <h1 className="h2" style={{ marginBottom: "0.5rem" }}>Work</h1>
      <p className="p" style={{ marginBottom: "3rem" }}>
        Real products, academic work, and everything in between.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 12, overflow: "hidden" }}>
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              gap: "1.5rem",
              alignItems: "start",
              padding: "1.75rem 2rem",
              background: "#fafaf8",
              textDecoration: "none",
              transition: "background 0.15s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#f2f1ed"}
            onMouseLeave={e => e.currentTarget.style.background = "#fafaf8"}
          >
            <span style={{ fontSize: 12, color: "#a0a0a0", fontWeight: 500, paddingTop: 3, minWidth: 24 }}>
              0{i + 1}
            </span>
            <div>
              <div style={{ fontSize: 17, fontWeight: 500, marginBottom: 4, letterSpacing: "-0.2px" }}>{p.title}</div>
              <div style={{ fontSize: 14, color: "#5a5a5a", lineHeight: 1.6, marginBottom: 10 }}>{p.oneLiner}</div>
              <div className="pillRow">
                {p.tools.map(t => <span className="pill" key={t}>{t}</span>)}
              </div>
            </div>
            <span style={{ color: "#a0a0a0", fontSize: 16, paddingTop: 3 }}>↗</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
