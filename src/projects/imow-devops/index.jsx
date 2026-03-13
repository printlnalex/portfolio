import ProjectLayout from "../../components/ProjectLayout";

export default function ImowDevops({ project }) {
  return (
    <ProjectLayout
      title={project.title}
      subtitle={project.oneLiner}
      tools={project.tools}
      meta={[
        { label: "Type", value: "Internal Tool" },
        { label: "Role", value: "Sole Developer" },
        { label: "Status", value: "In active use" },
      ]}
      links={[]}
    >
      <section>
        <h3 className="h3">Problem</h3>
        <p className="p">Running two companies meant context-switching between Slack, Notion, spreadsheets, and email constantly. I needed one place that understood both businesses with role-based access and real-time updates.</p>
      </section>
      <section>
        <h3 className="h3">What I built</h3>
        <p className="p">Full internal ops platform: projects, tasks, goals, ideas, Discord-style messaging (channels + DMs), documents, wiki, reminders, calendar, deliverable uploads with approval workflows, and a built-in Claude AI assistant. Dual-workspace with indigo (Field Alpha) and orange (Fix Flow) themes.</p>
      </section>
      <section>
        <h3 className="h3">Stack</h3>
        <p className="p">Next.js 16 + Supabase Realtime (13 tables) + Anthropic Claude API + Tailwind + next-pwa. Deployed on Vercel.</p>
      </section>
    </ProjectLayout>
  );
}
