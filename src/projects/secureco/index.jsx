import ProjectLayout from "../../components/ProjectLayout";

export default function SecureCO({ project }) {
  return (
    <ProjectLayout
      title={project.title}
      subtitle={project.oneLiner}
      tools={project.tools}
      meta={[
        { label: "Course", value: "INFO 351" },
        { label: "Type", value: "Interactive Visual Novel" },
        { label: "Status", value: "Submitted" },
      ]}
      links={[]}
    >
      <section>
        <h3 className="h3">Problem</h3>
        <p className="p">How do you make data privacy ethics feel personal and consequential, not abstract? A visual novel format forces players to make decisions and live with their consequences.</p>
      </section>
      <section>
        <h3 className="h3">What I built</h3>
        <p className="p">A branching narrative game in RenPy where player choices about data sharing, surveillance, and consent lead to different outcomes — designed to reflect real-world privacy tradeoffs in a way lectures can't.</p>
      </section>
    </ProjectLayout>
  );
}
