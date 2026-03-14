import ProjectLayout from "../../components/ProjectLayout";

export default function Jinx({ project }) {
  return (
    <ProjectLayout
      title={project.title}
      subtitle={project.oneLiner}
      tools={project.tools}
      meta={[
        { label: "Type", value: "Personal AI Tool" },
        { label: "Role", value: "Co-builder" },
        { label: "Status", value: "In use" },
      ]}
      links={[]}
    >
      <section>
        <h3 className="h3">Overview</h3>
        <p className="p">
          Jinx is a personal AI assistant built to understand your context — your
          companies, priorities, and communication style. It helps with
          day-to-day decisions and keeps you aligned with what matters.
        </p>
      </section>
      <section>
        <h3 className="h3">What it does</h3>
        <p className="p">
          Co-built with Claude API integration, Jinx knows your workflow and
          adapts to how you work. It's designed for founders and operators who
          need an AI that actually understands their business.
        </p>
      </section>
    </ProjectLayout>
  );
}
