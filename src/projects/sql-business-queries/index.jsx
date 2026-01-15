import ProjectLayout from "../../components/ProjectLayout";

export default function SqlBusinessQueries({ project }) {
  return (
    <ProjectLayout
      title={project.title}
      subtitle={project.oneLiner}
      tools={project.tools}
      links={[
        { label: "GitHub", url: project.github, primary: true },
      ]}
    >
      <section>
        <h3>Problem</h3>
        <p className="p">
          Businesses need fast answers about revenue, customers, and retention,
          but raw databases don’t provide insight without proper queries.
        </p>
      </section>

      <section>
        <h3>Approach</h3>
        <ul>
          <li>Designed business-style questions (top customers, churn, revenue)</li>
          <li>Wrote SQL using joins, CTEs, and window functions</li>
          <li>Documented what each query reveals</li>
        </ul>
      </section>

      <section>
        <h3>Results</h3>
        <ul>
          <li>Reusable SQL query pack</li>
          <li>Readable, interview-ready examples</li>
          <li>Business-focused interpretations</li>
        </ul>
      </section>

      <section>
        <h3>Why it matters</h3>
        <p className="p">
          This mirrors how analysts answer leadership questions in real companies —
          quickly turning raw tables into decisions.
        </p>
      </section>
    </ProjectLayout>
  );
}
