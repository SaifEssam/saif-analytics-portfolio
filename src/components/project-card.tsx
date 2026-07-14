import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/portfolio";
import { Icon } from "./icon";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <Link className="project-image-link" href={`/work/${project.slug}`} aria-label={`Read case study: ${project.title}`}>
        <Image src={project.image} alt="" width={1600} height={1000} className="project-image" priority={index < 2} />
        <span className="project-index">0{index + 1}</span>
      </Link>
      <div className="project-card-body">
        <p className="project-eyebrow">{project.eyebrow}</p>
        <h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3>
        <p>{project.summary}</p>
        <div className="project-card-footer">
          <div className="tool-list" aria-label="Tools used">
            {project.tools.slice(0, 4).map((tool) => <span key={tool}>{tool}</span>)}
          </div>
          <Link className="text-link" href={`/work/${project.slug}`}>Case study <Icon name="arrow-right" size={16}/></Link>
        </div>
      </div>
    </article>
  );
}
