"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#overview", label: "Overview" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "bg-white/90 backdrop-blur border-b border-neutral-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between text-neutral-900">
        <Link href="#" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={200} height={60} className="h-12 md:h-14 w-auto" />
        </Link>
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-neutral-100"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <ul className="hidden md:flex gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[var(--brand)] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex rounded-md bg-[var(--brand)] px-4 py-2 text-white text-sm font-medium shadow hover:opacity-90"
        >
          Get Started
        </a>
      </nav>
      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white text-neutral-900">
          <ul className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-2 px-2 rounded hover:bg-neutral-100"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
