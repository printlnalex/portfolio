import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Home() {
  const featured = projects.slice(0, 2); // change to 3 later when you add more

  return (
    <div className="container">
      {/* HERO */}
      <section
        className="card"
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="cardInner" style={{ padding: 26 }}>
          <p className="pill" style={{ display: "inline-flex", margin: 0 }}>
            Product • Data • BI
          </p>

          <h1 className="h1" style={{ marginTop: 14 }}>
            Alexis Lucatero
            <span style={{ color: "var(--accent)" }}> Data Analyst </span>
          </h1>

          <p className="p" style={{ maxWidth: 820, marginTop: 12 }}>
            I build dashboards, SQL analysis packs, and product case studies that turn messy data into clear decisions.
            Tools: SQL, Python, Power BI/Tableau, Azure, Excel, React.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
            <Link to="/projects" className="btn btnPrimary">View Projects</Link>
            <a className="btn" href="https://github.com/printlnalex" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href="https://linkedin.com/in/alexis-lucatero" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>

          <hr className="hr" />

          <div className="pillRow">
            {["SQL", "Python", "Power BI", "Azure", "Excel", "React", "Firebase"].map((s) => (
              <span className="pill" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section style={{ marginTop: 22 }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12 }}>
          <div>
            <h2 className="h2">Featured</h2>
            <p className="p" style={{ marginTop: 6 }}>
              The fastest way to see what I can do.
            </p>
          </div>
          <Link className="btn" to="/projects">All projects →</Link>
        </div>

        <div style={{ marginTop: 14 }} className="grid">
          {featured.map((p) => (
            <article key={p.slug} className="card">
              <div className="cardInner">
                <div
                  style={{
                    height: 140,
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
                  <div style={{ fontWeight: 800 }}>{p.title}</div>
                  <div style={{ color: "var(--muted)", fontSize: 12, marginTop: 4 }}>
                    {p.tools.slice(0, 3).join(" • ")}
                  </div>
                </div>

                <p className="p" style={{ margin: 0 }}>{p.oneLiner}</p>

                <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <Link className="btn btnPrimary" to={`/projects/${p.slug}`}>Case Study</Link>
                  {p.github && <a className="btn" href={p.github} target="_blank" rel="noreferrer">GitHub</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
