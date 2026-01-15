import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <section className="card">
        <div className="cardInner" style={{ padding: 26 }}>
          <p className="pill" style={{ display: "inline-flex", margin: 0 }}>
            Product • Data • BI
          </p>

          <h1 className="h1" style={{ marginTop: 14 }}>
            Modern analytics + product work,
            <span style={{ color: "var(--accent)" }}> packaged as proof.</span>
          </h1>

          <p className="p" style={{ maxWidth: 820, marginTop: 12 }}>
            I build dashboards, SQL analysis packs, and product case studies that turn messy data into clear decisions.
            Tools: SQL, Python, Power BI/Tableau, Azure, Excel, React.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
            <Link to="/projects" className="btn btnPrimary">View Projects</Link>
            <a className="btn" href="https://github.com/printlnalex" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>

          <hr className="hr" />

          <div className="pillRow">
            {["SQL", "Python", "Power BI", "Azure", "Excel", "React", "Firebase"].map((s) => (
              <span className="pill" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
