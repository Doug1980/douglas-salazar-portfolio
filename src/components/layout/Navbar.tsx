"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

const LANGUAGES = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
];

export function Navbar() {
  const [activeLang, setActiveLang] = useState("pt");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/70 border-b border-border/40">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Douglas Salazar - Home"
          className="flex h-14 w-20 items-center justify-center rounded-md border border-primary/40 bg-primary/5 hover:bg-primary/10 hover:border-primary transition-all group"
        >
          <span className="font-bold text-4xl tracking-wider group-hover:scale-110 transition-transform">
            <span className="text-foreground">D</span>
            <span className="text-primary">S</span>
          </span>
        </Link>

        {/* Links centrais */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xl font-bold tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Seletor de idioma */}
        <div className="flex items-center gap-1 text-sm">
          {LANGUAGES.map((lang, idx) => (
            <div key={lang.code} className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setActiveLang(lang.code)}
                className={`px-2 py-1 rounded transition-colors ${
                  activeLang === lang.code
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {lang.label}
              </button>
              {idx < LANGUAGES.length - 1 && (
                <span className="text-border">·</span>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}
