import Link from "next/link";
import { ContactPanel } from "@/components/contact-panel";
import { HeroVisual } from "@/components/hero-visual";
import { Icon } from "@/components/icon";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { credentials, experience, profile, projects, skillGroups, stats } from "@/data/portfolio";

export default function Home() {
  const featured = projects.filter((project) => project.featured);

  return (
    <>
      <section className="hero-section">
        <div className="hero-noise" aria-hidden="true" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="availability"><span /> Cairo, Egypt · Open to international analytics roles</p>
            <h1>{profile.headline}</h1>
            <p className="hero-lede">{profile.subheadline}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/work">View featured work <Icon name="arrow-right" size={18}/></Link>
              <a className="button button-ghost" href="/documents/Saif-Essam-Resume.pdf" download><Icon name="download" size={18}/> Download resume</a>
            </div>
            <div className="hero-proof">
              <span><Icon name="graduation" size={17}/> B.Sc. Statistics</span>
              <span><Icon name="briefcase" size={17}/> Analytics Specialist</span>
              <span><Icon name="shield" size={17}/> DataCamp Certified</span>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="stats-strip" aria-label="Portfolio highlights">
        <div className="shell stats-grid">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <strong>{stat.value}</strong>
              <div><span>{stat.label}</span><small>{stat.note}</small></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell" id="work">
        <SectionHeading
          eyebrow="Selected evidence"
          title="Built for decisions, not decoration."
          copy="Each case study starts with the business question, shows the analytical choices and ends with a recommended action."
          action={<Link className="text-link large" href="/work">Explore all work <Icon name="arrow-right" size={18}/></Link>}
        />
        <div className="featured-grid">
          {featured.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}
        </div>
      </section>

      <section className="section section-contrast">
        <div className="shell">
          <SectionHeading
            eyebrow="How I work"
            title="From unreliable records to accountable action."
            copy="Strong analytics is a chain. Every link has to hold: the question, the data, the method, the explanation and the decision."
          />
          <div className="process-grid">
            {[
              ["01", "Frame", "Define the decision, stakeholder and cost of being wrong."],
              ["02", "Validate", "Standardize, reconcile and test the data before modeling."],
              ["03", "Analyze", "Choose the simplest method that answers the real question."],
              ["04", "Operationalize", "Turn findings into dashboards, thresholds and repeatable workflows."],
              ["05", "Communicate", "Make the evidence understandable without removing the uncertainty."],
            ].map(([number, title, copy]) => (
              <article className="process-card" key={number}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <SectionHeading eyebrow="Capabilities" title="Statistical depth. Business usefulness." copy="The tools change. The standard stays the same: reliable inputs, defensible analysis and clear ownership of the next action." />
        <div className="capability-grid">
          {skillGroups.map((group, index) => (
            <article className="capability-card" key={group.title}>
              <div className="capability-icon"><Icon name={(["target", "shield", "bar-chart", "layers"] as const)[index]} size={22}/></div>
              <h3>{group.title}</h3><p>{group.description}</p>
              <div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-contrast">
        <div className="shell experience-layout">
          <div className="sticky-heading">
            <p className="eyebrow">Experience</p>
            <h2>Analysis grounded in real operating environments.</h2>
            <p>Commercial CRM and insurance data, national research indicators and official-statistics workflows.</p>
            <Link className="button button-ghost" href="/resume">Full resume <Icon name="arrow-right" size={17}/></Link>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.role}-${item.period}`}>
                <div className="timeline-meta"><span>{item.period}</span><small>{item.location}</small></div>
                <div className="timeline-body"><h3>{item.role}</h3><h4>{item.organization}</h4><p>{item.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <SectionHeading eyebrow="Verified learning" title="Credentials that reinforce the work." copy="Credentials are supporting evidence. The portfolio case studies show how the learning is applied." action={<Link className="text-link large" href="/credentials">View credentials <Icon name="arrow-right" size={18}/></Link>} />
        <div className="credential-grid">
          {credentials.map((credential, index) => (
            <a className="credential-card" href={credential.href} key={credential.title} target={credential.href.startsWith("/documents") ? "_blank" : undefined} rel="noreferrer">
              <span className="credential-number">0{index + 1}</span>
              <div><p>{credential.issuer}</p><h3>{credential.title}</h3><span>{credential.date}</span><small>{credential.detail}</small></div>
              <Icon name="arrow-up-right" size={18}/>
            </a>
          ))}
        </div>
      </section>

      <div className="shell section"><ContactPanel /></div>
    </>
  );
}
