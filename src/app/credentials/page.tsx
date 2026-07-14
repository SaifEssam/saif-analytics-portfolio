import type { Metadata } from "next";
import { Icon } from "@/components/icon";
import { credentials } from "@/data/portfolio";

export const metadata: Metadata = { title: "Credentials", description: "Education and analytics certifications earned by Saif Essam." };

export default function CredentialsPage() {
  return (
    <>
      <section className="page-hero shell"><p className="eyebrow">Credentials</p><h1>Learning verified. Application demonstrated.</h1><p>Degrees and certificates support the portfolio, while the case studies show what I can do with the knowledge.</p></section>
      <section className="section shell credentials-page-grid">
        {credentials.map((credential, index) => (
          <article className="credential-detail" key={credential.title}>
            <div className="credential-detail-top"><span>0{index + 1}</span><Icon name={index === 0 ? "graduation" : "shield"} size={28}/></div>
            <p>{credential.issuer}</p><h2>{credential.title}</h2><strong>{credential.date}</strong><div className="credential-rule"/><p className="credential-description">{credential.detail}</p>
            <a className="text-link" href={credential.href} target={credential.href.startsWith("/documents") ? "_blank" : undefined} rel="noreferrer">View evidence <Icon name="arrow-up-right" size={17}/></a>
          </article>
        ))}
      </section>
      <section className="shell credential-context"><Icon name="shield" size={22}/><p>Some certificates may display a legal-name variant used by the issuing platform. Public portfolio branding consistently uses <strong>Saif Essam</strong>.</p></section>
    </>
  );
}
