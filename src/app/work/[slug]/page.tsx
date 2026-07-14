import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactPanel } from "@/components/contact-panel";
import { Icon } from "@/components/icon";
import { getProject, projects } from "@/data/portfolio";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary, openGraph: { images: [project.image] } };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <article>
        <header className={`case-hero accent-${project.accent}`}>
          <div className="shell case-hero-grid">
            <div>
              <Link className="back-link" href="/work"><Icon name="arrow-right" size={16} className="reverse-icon"/> All work</Link>
              <p className="eyebrow">{project.eyebrow}</p>
              <h1>{project.title}</h1>
              <p className="case-summary">{project.summary}</p>
              <div className="case-actions">
                {project.liveLinks?.map((link) => <a className="button button-primary" href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} <Icon name="external" size={17}/></a>)}
                {project.documentLinks?.map((link) => <a className="button button-ghost" href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} <Icon name="file" size={17}/></a>)}
              </div>
            </div>
            <div className="case-image-wrap"><Image src={project.image} alt={`${project.title} dashboard preview`} width={1600} height={1000} priority className="case-image" /></div>
          </div>
        </header>

        <section className="case-impact shell">
          <p className="eyebrow">Why this matters</p><h2>{project.impact}</h2>
          {project.confidential ? <p className="confidential-note"><Icon name="shield" size={17}/> Business data shown in portfolio previews is anonymized, aggregated or replaced with synthetic demonstration data.</p> : null}
        </section>

        <section className="case-section shell two-column-case">
          <div><p className="eyebrow">The question</p><h2>Problem</h2></div>
          <div className="case-prose"><p>{project.problem}</p></div>
        </section>

        <section className="case-section section-contrast">
          <div className="shell two-column-case">
            <div><p className="eyebrow">The work</p><h2>Approach</h2></div>
            <ol className="approach-list">{project.approach.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}</ol>
          </div>
        </section>

        <section className="case-section shell">
          <div className="case-heading"><p className="eyebrow">Verified evidence</p><h2>What the analysis surfaced</h2></div>
          <div className="finding-grid">{project.findings.map((finding) => <article key={`${finding.value}-${finding.label}`}><strong>{finding.value}</strong><h3>{finding.label}</h3>{finding.detail ? <p>{finding.detail}</p> : null}</article>)}</div>
        </section>

        <section className="case-section section-contrast">
          <div className="shell two-column-case">
            <div><p className="eyebrow">The decision</p><h2>Recommended action</h2></div>
            <ul className="recommendation-list">{project.recommendations.map((item) => <li key={item}><Icon name="arrow-right" size={18}/><span>{item}</span></li>)}</ul>
          </div>
        </section>

        <section className="case-section shell case-detail-grid">
          <div><p className="eyebrow">Capabilities demonstrated</p><div className="skill-list large">{project.capabilities.map((item) => <span key={item}>{item}</span>)}</div></div>
          <div><p className="eyebrow">Tools</p><div className="skill-list large">{project.tools.map((item) => <span key={item}>{item}</span>)}</div></div>
          <div><p className="eyebrow">Limits & responsible use</p><ul className="plain-list">{project.limitations.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </section>
      </article>
      <div className="shell section"><ContactPanel /></div>
    </>
  );
}
