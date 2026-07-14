import type { Metadata } from "next";
import Link from "next/link";
import { ContactPanel } from "@/components/contact-panel";
import { Icon } from "@/components/icon";
import { skillGroups } from "@/data/portfolio";

export const metadata: Metadata = { title: "About", description: "About Saif Essam, a Statistics graduate and Analytics Specialist in Cairo." };

export default function AboutPage() {
  return (
    <>
      <section className="page-hero shell about-hero">
        <p className="eyebrow">About / Saif Essam</p>
        <h1>Statistics taught me to question the number. Operations taught me to make it useful.</h1>
        <p>I work at the intersection of data reliability, statistical reasoning and business communication.</p>
      </section>
      <section className="section shell about-grid">
        <div className="about-monogram" aria-hidden="true"><span>SE</span><i>Data → Decision</i></div>
        <div className="about-copy">
          <p className="large-copy">I earned my Bachelor&apos;s Degree in Statistics from Cairo University, with a minor in Socio-Computing and a 3.5/4.0 GPA. My academic work gave me depth across regression, classification, multivariate analysis, forecasting and spatial statistics.</p>
          <p>At Deraya Insurance Brokerage, I apply that foundation to CRM, sales and insurance operations: cleaning inconsistent records, maintaining recurring reporting, building dashboards and translating management questions into analytical outputs.</p>
          <p>My experience at Egypt&apos;s Information and Decision Support Center and CAPMAS also exposed me to the discipline of official data: verified sources, consistency checks, survey design and national-scale quality processes.</p>
          <blockquote>My standard is simple: the analysis should be reliable enough to defend, clear enough to act on and honest enough to show its limits.</blockquote>
          <div className="about-actions"><Link className="button button-primary" href="/work">See my work <Icon name="arrow-right" size={17}/></Link><Link className="button button-ghost" href="/resume">View resume</Link></div>
        </div>
      </section>
      <section className="section section-contrast"><div className="shell"><p className="eyebrow">What I bring</p><div className="about-capabilities">{skillGroups.map((group) => <article key={group.title}><h2>{group.title}</h2><p>{group.description}</p><div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div></div></section>
      <div className="shell section"><ContactPanel /></div>
    </>
  );
}
