"use client";

import { useState, useEffect } from "react";
import { navLinks, siteConfig } from "@/data/config";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo / Name */}
          <a
            href="#"
            onClick={handleLinkClick}
            className="text-lg font-bold tracking-tight text-foreground hover:opacity-70 transition-opacity"
          >
            {siteConfig.name.split(" ")[0]}
            <span className="text-muted font-normal">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="p-2 rounded-md text-muted hover:text-foreground hover:bg-foreground/5 transition-colors"
              >
                {theme === "dark" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                )}
              </button>
            )}
            <a
              href={siteConfig.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-4 py-2 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="text-sm font-medium px-4 py-2 bg-foreground text-background hover:opacity-80 transition-opacity"
            >
              Contact
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="p-2 text-muted hover:text-foreground transition-colors"
              >
                {theme === "dark" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                )}
              </button>
            )}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="p-2 text-foreground"
            >
              {mobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu — rendered outside <header> as a separate fixed overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-[45] bg-background flex flex-col items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav className="flex flex-col items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-xl font-medium text-foreground hover:text-muted transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 mt-6">
              <a
                href={siteConfig.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="text-sm font-medium px-5 py-2.5 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Resume
              </a>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="text-sm font-medium px-5 py-2.5 bg-foreground text-background hover:opacity-80 transition-opacity"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
