import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section>
        <p>Project not found.</p>
        <Link to="/projects" style={{ textDecoration: "none" }}>
          ← Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section>
      <Link to="/projects" style={{ textDecoration: "none" }}>
        ← Back
      </Link>

      <h1 style={{ fontSize: 34, marginTop: 10 }}>{project.title}</h1>
      <p style={{ fontSize: 18, lineHeight: 1.6 }}>{project.oneLiner}</p>
      <p style={{ opacity: 0.75 }}>{project.tools.join(" • ")}</p>

      <h2 style={{ marginTop: 24 }}>What I did</h2>
      <ul>
        {project.bullets.map((b, i) => (
          <li key={i} style={{ marginBottom: 6 }}>
            {b}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
        {project.dashboard && (
          <a href={project.dashboard} target="_blank" rel="noreferrer">
            Dashboard
          </a>
        )}
      </div>
    </section>
  );
}