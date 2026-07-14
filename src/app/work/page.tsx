import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = { title: "Work", description: "Data analytics, dashboard and statistical modeling case studies by Saif Essam." };

export default function WorkPage() {
  return (
    <>
      <section className="page-hero shell">
        <p className="eyebrow">Portfolio / Work</p>
        <h1>Evidence of how I think.</h1>
        <p>Business analytics products, decision stories and statistical research — documented through the problem, method, evidence and action.</p>
      </section>
      <section className="section shell">
        <SectionHeading eyebrow="All case studies" title={`${projects.length} projects across business and statistical analytics.`} copy="Featured business projects appear first, followed by supporting research that shows method breadth." />
        <div className="all-projects-grid">
          {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}
        </div>
      </section>
    </>
  );
}
