import type { Metadata } from "next";
import { Icon } from "@/components/icon";
import { experience, profile, projects, skillGroups } from "@/data/portfolio";

export const metadata: Metadata = { title: "Resume", description: "Resume of Saif Essam, Analytics Specialist and Data Analyst." };

export default function ResumePage() {
  return (
    <section className="resume-page shell">
      <div className="resume-toolbar"><p>Web resume · Print-friendly</p><a className="button button-primary" href="/documents/Saif-Essam-Resume.pdf" download><Icon name="download" size={17}/> Download PDF</a></div>
      <article className="resume-sheet">
        <header className="resume-header"><div><h1>{profile.name}</h1><p>{profile.role}</p></div><div className="resume-contact"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.linkedin}>LinkedIn</a><a href={profile.github}>GitHub</a><span>{profile.location}</span></div></header>
        <section className="resume-section"><h2>Profile</h2><p>{profile.subheadline} Experienced in CRM, sales and insurance reporting, data validation, KPI monitoring and stakeholder-ready analytical communication.</p></section>
        <section className="resume-section"><h2>Education</h2><div className="resume-row"><span>2020 — 2024</span><div><h3>Bachelor&apos;s Degree in Statistics</h3><h4>Cairo University · Faculty of Economics and Political Science</h4><p>Minor in Socio-Computing · GPA 3.5/4.0 · Very Good with Honors</p></div></div></section>
        <section className="resume-section"><h2>Professional Experience</h2>{experience.map((item) => <div className="resume-row" key={item.role}><span>{item.period}</span><div><h3>{item.role}</h3><h4>{item.organization} · {item.location}</h4><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></div>)}</section>
        <section className="resume-section"><h2>Selected Projects</h2>{projects.filter((project) => project.featured).map((project) => <div className="resume-project" key={project.slug}><h3>{project.title}</h3><p>{project.summary}</p></div>)}</section>
        <section className="resume-section"><h2>Skills</h2><div className="resume-skills">{skillGroups.map((group) => <div key={group.title}><h3>{group.title}</h3><p>{group.skills.join(" · ")}</p></div>)}</div></section>
        <section className="resume-section"><h2>Credentials</h2><p>DataCamp Certified Data Analyst · Google Advanced Data Analytics Professional Certificate</p></section>
      </article>
    </section>
  );
}
