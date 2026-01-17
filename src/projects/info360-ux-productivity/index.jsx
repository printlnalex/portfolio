import ProjectLayout from "../../components/ProjectLayout";

export default function info360UXProductivity({ project }) {
  return (
    <ProjectLayout
      title={project.title}
      subtitle={project.oneLiner}
      tools={project.tools}
      meta={[
        { label: "Course", value: "INFO 370" },
        { label: "Focus", value: "Data Analysis" },
        { label: "Status", value: "Draft" },
      ]}
      links={[
        { label: "GitHub", url: project.github, primary: true },
        { label: "Report", url: project.report },
        { label: "Slides", url: project.slides },
      ]}
    >
      <section>
        <h3>Problem</h3>
        <p className="p">(Fill me)</p>
      </section>

      <section>
        <h3>Approach</h3>
        <ul>
          <li>(Fill me)</li>
        </ul>
      </section>

      <section>
        <h3>Results</h3>
        <ul>
          <li>(Fill me)</li>
        </ul>
      </section>

      <section>
        <h3>Why it matters</h3>
        <p className="p">(Fill me)</p>
      </section>
    </ProjectLayout>
  );
}
