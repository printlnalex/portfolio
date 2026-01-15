import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="container">
      <div style={{ marginBottom: 14 }}>
        <h1 className="h2">Projects</h1>
        <p className="p" style={{ marginTop: 8 }}>
          Each project includes a case study + links to code/dashboard when available.
        </p>
      </div>

      <div className="grid">
        {projects.map((p) => (
          <article key={p.slug} className="card">
            <div className="cardInner">
              <h2 style={{ margin: 0, fontSize: 18, letterSpacing: "-0.01em" }}>{p.title}</h2>
              <p className="p" style={{ marginTop: 8 }}>{p.oneLiner}</p>

              <div className="pillRow" style={{ marginTop: 10 }}>
                {p.tools.map((t) => <span className="pill" key={t}>{t}</span>)}
              </div>

              <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link className="btn btnPrimary" to={`/projects/${p.slug}`}>Case Study</Link>
                {p.github && <a className="btn" href={p.github} target="_blank" rel="noreferrer">GitHub</a>}
                {p.dashboard && <a className="btn" href={p.dashboard} target="_blank" rel="noreferrer">Dashboard</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
