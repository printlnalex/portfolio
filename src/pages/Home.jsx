import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <h1 style={{ fontSize: 40, marginBottom: 8 }}>Product + Data Portfolio</h1>
      <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 800 }}>
        I build data-driven dashboards, analysis notebooks, and product case studies.
        Skills: SQL, Python, Power BI/Tableau, Azure, and analytics storytelling.
      </p>

      <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link
          to="/projects"
          style={{
            padding: "10px 14px",
            border: "1px solid #111827",
            borderRadius: 10,
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          View Projects
        </Link>

        <a
          href="https://github.com/printlnalex"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: "10px 14px",
            border: "1px solid #e5e7eb",
            borderRadius: 10,
            textDecoration: "none",
          }}
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/alexis-lucatero"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: "10px 14px",
            border: "1px solid #e5e7eb",
            borderRadius: 10,
            textDecoration: "none",
          }}
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
