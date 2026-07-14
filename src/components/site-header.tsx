"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "./icon";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/credentials", label: "Credentials" },
  { href: "/resume", label: "Resume" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Saif Essam home">
          <span className="brand-mark">SE</span>
          <span className="brand-copy">
            <strong>Saif Essam</strong>
            <small>Analytics Specialist</small>
          </span>
        </Link>

        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          {links.map((link) => (
            <Link className={pathname === link.href ? "active" : ""} href={link.href} key={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link className="nav-contact" href="/#contact" onClick={() => setOpen(false)}>Let&apos;s talk</Link>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <button
            className="icon-button mobile-menu-button"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            <Icon name={open ? "x" : "menu"} size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
