import ProjectLayout from "../../components/ProjectLayout";

export default function FixFlow({ project }) {
  return (
    <ProjectLayout
      title={project.title}
      subtitle={project.oneLiner}
      tools={project.tools}
      meta={[
        { label: "Type", value: "Business" },
        { label: "Role", value: "Founder & Operator" },
        { label: "Status", value: "Operating" },
      ]}
      links={[]}
    >
      <section>
        <h3 className="h3">Overview</h3>
        <p className="p">Fix Flow is the appliance repair company I founded and operate. I manage a team of technicians including Peter (lead), Maxim, and Ruvim across field operations.</p>
      </section>
      <section>
        <h3 className="h3">Why it matters to my work</h3>
        <p className="p">Fix Flow is the primary testbed for FieldAlpha. Every feature I build gets validated against real operational constraints — scheduling conflicts, technician communication, invoice edge cases, and customer expectations. Real-world pain drives every product decision.</p>
      </section>
    </ProjectLayout>
  );
}
