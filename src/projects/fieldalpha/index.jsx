import ProjectLayout from "../../components/ProjectLayout";

export default function FieldAlpha({ project }) {
  return (
    <ProjectLayout
      title={project.title}
      subtitle={project.oneLiner}
      tools={project.tools}
      meta={[
        { label: "Type", value: "SaaS Product" },
        { label: "Role", value: "Founder & Developer" },
        { label: "Status", value: "Live in production" },
      ]}
      links={[
        { label: "Visit FieldAlpha ↗", url: "https://fieldalpha.dev", primary: true },
      ]}
    >
      <section>
        <h3 className="h3">Problem</h3>
        <p className="p">Appliance repair companies run on phone calls, paper, and tribal knowledge. No software existed that combined smart job intake, real-time dispatch, and invoicing in a single tool built specifically for this industry.</p>
      </section>
      <section>
        <h3 className="h3">What I built</h3>
        <p className="p">Full-stack SaaS with AI-powered job intake (Gemini), real-time technician dispatch, scheduling calendar, invoicing, customer management, and SMS notifications via Twilio. Multi-tenant with row-level security.</p>
      </section>
      <section>
        <h3 className="h3">Stack</h3>
        <p className="p">Next.js + Supabase (Postgres, Auth, Realtime, RLS) + TypeScript + Tailwind. Deployed on Vercel. Integrations: SendGrid, Twilio, Google Maps, Gemini AI, Sentry.</p>
      </section>
      <section>
        <h3 className="h3">Status</h3>
        <p className="p">Live with active technician users. Waitlist + access-code-gated signup. Ongoing development.</p>
      </section>
    </ProjectLayout>
  );
}
