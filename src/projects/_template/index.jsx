import ProjectLayout from "../../components/ProjectLayout";

export default function ProjectTemplate({ project }) {
  return (
    <ProjectLayout
      title={project.title}
      subtitle={project.oneLiner}
      tools={project.tools}
      meta={[
        { label: "Type", value: "Case Study" },
        { label: "Role", value: "Owner/Contributor" },
        { label: "Status", value: "Draft" },
      ]}
      links={[
        { label: "GitHub", url: project.github, primary: true },
        { label: "Live Demo", url: project.demo },
        { label: "Dashboard", url: project.dashboard },
        { label: "Slides", url: project.slides },
        { label: "Report", url: project.report },
      ]}
    >
      <section>
        <h3>Problem</h3>
        <p className="p">
          (What real-world question or pain existed? Who cared? What was the goal?)
        </p>
      </section>

      <section>
        <h3>Context</h3>
        <ul>
          <li>(Stakeholder / user)</li>
          <li>(Constraints: time, data, privacy, tools)</li>
          <li>(Success criteria)</li>
        </ul>
      </section>

      <section>
        <h3>Data / Inputs</h3>
        <ul>
          <li>(Dataset, tables, research sources, user interviews, etc.)</li>
          <li>(What fields mattered?)</li>
          <li>(Any cleaning / assumptions)</li>
        </ul>
      </section>

      <section>
        <h3>Approach</h3>
        <ul>
          <li>(What you built / analyzed)</li>
          <li>(Methods: SQL, modeling, dashboards, UX steps, etc.)</li>
          <li>(Why those choices)</li>
        </ul>
      </section>

      <section>
        <h3>Results</h3>
        <ul>
          <li>(Key findings / KPI changes / model performance / insights)</li>
          <li>(Screenshots or visuals you’ll add)</li>
          <li>(What decision it supports)</li>
        </ul>
      </section>

      <section>
        <h3>What I’d do next</h3>
        <ul>
          <li>(Improvements)</li>
          <li>(Next experiments / features)</li>
          <li>(How to productionize)</li>
        </ul>
      </section>

      <section>
        <h3>Why it matters</h3>
        <p className="p">
          (Explain impact in business terms: time saved, risk reduced, revenue improved,
          clearer decisions, better UX, etc.)
        </p>
      </section>
    </ProjectLayout>
  );
}
