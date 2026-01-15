import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { projectPages } from "../projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const ProjectPage = projectPages[slug];

  if (!project || !ProjectPage) {
    return (
      <div className="container">
        <p className="p">Project not found.</p>
        <Link className="btn" to="/projects">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <Link className="btn" to="/projects">← Back</Link>
      <div style={{ height: 12 }} />
      <ProjectPage project={project} />
    </div>
  );
}
