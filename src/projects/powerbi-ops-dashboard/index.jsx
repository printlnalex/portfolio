export default function OpsDashboard({ project }) {
  return (
    <section className="card">
      <div className="cardInner" style={{ padding: 26 }}>
        <h1 className="h2">{project.title}</h1>
        <p className="p">{project.oneLiner}</p>

        <div className="pillRow" style={{ marginTop: 10 }}>
          {project.tools.map((t) => <span className="pill" key={t}>{t}</span>)}
        </div>

        <hr className="hr" />

        <h3>Problem</h3>
        <p className="p">
          Build a Power BI dashboard that tracks operational KPIs and allows
          stakeholders to drill into performance across time, category, and region.
        </p>

        <h3>Approach</h3>
        <ul>
          <li>Modeled data in Excel before importing to Power BI</li>
          <li>Built KPI cards and trend visuals</li>
          <li>Added filters for interactive analysis</li>
        </ul>

        <h3>Results</h3>
        <ul>
          <li>Clean executive-style dashboard</li>
          <li>Reusable layout for any ops dataset</li>
          <li>Ready to plug in real company data</li>
        </ul>

        <h3>Links</h3>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {project.dashboard ? (
            <a className="btn btnPrimary" href={project.dashboard} target="_blank" rel="noreferrer">
              View Dashboard
            </a>
          ) : (
            <span className="pill">Add Power BI link in projects.js</span>
          )}
        </div>
      </div>
    </section>
  );
}
