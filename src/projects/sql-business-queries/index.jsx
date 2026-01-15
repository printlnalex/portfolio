export default function SqlBusinessQueries({ project }) {
  return (
    <section className="card">
      <div className="cardInner" style={{ padding: 26 }}>
        <h1 className="h2" style={{ marginBottom: 6 }}>{project.title}</h1>
        <p className="p">{project.oneLiner}</p>

        <div className="pillRow" style={{ marginTop: 10 }}>
          {project.tools.map((t) => <span className="pill" key={t}>{t}</span>)}
        </div>

        <hr className="hr" />

        <h3 style={{ marginTop: 0 }}>Problem</h3>
        <p className="p">
          Build a set of realistic SQL solutions to common business questions (segmentation, revenue ranking,
          retention cohorts) using industry-standard patterns.
        </p>

        <h3>Approach</h3>
        <ul>
          <li>Designed questions based on real analyst workflows</li>
          <li>Used joins, CTEs, and window functions</li>
          <li>Documented query intent + interpretation</li>
        </ul>

        <h3>Results</h3>
        <ul>
          <li>Reusable query pack with business-style prompts</li>
          <li>Readable, commented SQL for review</li>
          <li>Ready to expand into a “SQL interview pack”</li>
        </ul>

        <h3>Links</h3>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {project.github ? (
            <a className="btn btnPrimary" href={project.github} target="_blank" rel="noreferrer">GitHub Repo</a>
          ) : (
            <span className="pill">Add GitHub link in projects.js</span>
          )}
        </div>
      </div>
    </section>
  );
}
