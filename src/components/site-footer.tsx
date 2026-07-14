import Link from "next/link";
import { Icon } from "./icon";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">SE</span>
            <span className="brand-copy"><strong>Saif Essam</strong><small>Evidence over adjectives.</small></span>
          </div>
          <p className="footer-note">Designed as a decision portfolio: business context, analytical method, verified evidence and recommended action.</p>
        </div>
        <div className="footer-links">
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/resume">Resume</Link>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" size={16}/> LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer"><Icon name="github" size={16}/> GitHub</a>
          <a href={`mailto:${profile.email}`}><Icon name="mail" size={16}/> Email</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Saif Essam</span>
        <span>Built with Next.js · Static, fast and privacy-conscious</span>
      </div>
    </footer>
  );
}
