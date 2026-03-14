import ProjectLayout from "../../components/ProjectLayout";

export default function FixFlowImow({ project }) {
  return (
    <ProjectLayout
      title={project.title}
      subtitle={project.oneLiner}
      tools={project.tools}
      meta={[
        { label: "Fix Flow", value: "Business · Founder & Operator" },
        { label: "IMOW", value: "Internal Tool · Sole Developer" },
        { label: "Status", value: "Both in active use" },
      ]}
      links={[]}
    >
      <section>
        <h3 className="h3">Fix Flow — The Business</h3>
        <p className="p">
          Appliance repair company I founded and operate. I manage a team of
          technicians including Peter (lead), Maxim, and Ruvim across field
          operations. Fix Flow is the primary testbed for FieldAlpha — every
          feature gets validated against real operational constraints.
        </p>
      </section>
      <section>
        <h3 className="h3">IMOW Devops — The Platform</h3>
        <p className="p">
          Running two companies across Slack, Notion, and spreadsheets was
          chaos. I built IMOW as one unified place — dual-workspace (indigo for
          Field Alpha, orange for Fix Flow), real-time messaging, deliverable
          approvals, and a built-in Claude AI assistant. 13 Supabase tables,
          role-based access, PWA-ready.
        </p>
      </section>
      <section>
        <h3 className="h3">Stack</h3>
        <p className="p">
          Next.js 16 + Supabase Realtime + Anthropic Claude API + Tailwind +
          next-pwa. Deployed on Vercel.
        </p>
      </section>
    </ProjectLayout>
  );
}
