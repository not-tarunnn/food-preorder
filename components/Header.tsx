"use client";

import { useState } from "react";

const links = [
  ["How it works", "#how"],
  ["Order", "#order"],
  ["Halls", "#halls"],
  ["FAQ", "#faq"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container bar">
        <a className="logo" href="#top">
          <span className="mark">M</span>
          MessPreorder
        </a>
        <nav className={open ? "nav open" : "nav"}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="btn primary-btn nav-cta" href="#order" onClick={() => setOpen(false)}>
            Preorder now
          </a>
        </nav>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
