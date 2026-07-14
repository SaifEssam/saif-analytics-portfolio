"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import { Icon } from "./icon";

export function ContactPanel() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <section className="contact-panel" id="contact">
      <div className="contact-orbit" aria-hidden="true"><span/><span/><span/></div>
      <div className="contact-content">
        <p className="eyebrow">A reliable analyst is a decision partner</p>
        <h2>Let&apos;s make the next decision clearer.</h2>
        <p>I&apos;m interested in data analyst, business intelligence and analytics roles where rigorous analysis, reliable reporting and stakeholder communication matter.</p>
        <div className="contact-actions">
          <a className="button button-primary" href={`mailto:${profile.email}`}><Icon name="mail" size={18}/> Email me</a>
          <button className="button button-ghost" type="button" onClick={copyEmail}><Icon name={copied ? "check" : "copy"} size={18}/>{copied ? "Copied" : "Copy email"}</button>
        </div>
      </div>
      <div className="contact-links">
        <a href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" size={19}/><span>LinkedIn</span><Icon name="arrow-up-right" size={16}/></a>
        <a href={profile.github} target="_blank" rel="noreferrer"><Icon name="github" size={19}/><span>GitHub</span><Icon name="arrow-up-right" size={16}/></a>
        <a href="/documents/Saif-Essam-Resume.pdf" download><Icon name="download" size={19}/><span>Resume PDF</span><Icon name="arrow-up-right" size={16}/></a>
      </div>
    </section>
  );
}
