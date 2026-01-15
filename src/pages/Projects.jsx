import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section>
      <h1 style={{ fontSize: 32, marginBottom: 12 }}>Projects</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        {projects.map((p) => (
          <article
            key={p.slug}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 14,
              padding: 16,
            }}
          >
            <h2 style={{ margin: 0, fontSize: 20 }}>{p.title}</h2>
            <p style={{ marginTop: 8, opacity: 0.85 }}>{p.oneLiner}</p>
            <p style={{ marginTop: 8, fontSize: 14, opacity: 0.75 }}>
              {p.tools.join(" • ")}
            </p>

            <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
              <Link
                to={`/projects/${p.slug}`}
                style={{ textDecoration: "none", fontWeight: 700 }}
              >
                Read case study →
              </Link>

              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}