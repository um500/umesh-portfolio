"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { Button } from "@/components/ui";
import { NAV_LINKS, cn } from "@/lib/utils";
import { DURATION, EASE_OUT, staggerContainer, staggerItem } from "@/lib/motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: DURATION.section, ease: EASE_OUT }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-border bg-bg/85 shadow-card backdrop-blur-md"
            : "border-transparent bg-transparent"
        )}
      >
        <Container className="flex h-20 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-text-primary">
            U<span className="text-accent">.</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-1 text-sm transition-colors duration-200",
                    active ? "text-accent" : "text-text-secondary hover:text-text-primary hover:-translate-y-px"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                  {active ? (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/#contact">Hire Me</Button>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-text-primary lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: DURATION.micro }}
                className="grid place-items-center"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </Container>
      </motion.header>

      {/* Rendered as a sibling of the header, not a child — a `fixed`
          element nested inside an element with an active `transform`
          (which framer-motion applies for the header's own entrance
          animation) is positioned relative to THAT ancestor instead of
          the viewport. That was leaving this menu mis-sized/mis-positioned
          and letting page content show through around it. */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: DURATION.card, ease: EASE_OUT }}
            className="fixed inset-0 top-20 z-40 overflow-y-auto bg-bg backdrop-blur-md lg:hidden"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col gap-1 px-6 py-8"
              aria-label="Mobile"
            >
              {NAV_LINKS.map((link) => (
                <motion.div key={link.href} variants={staggerItem}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "block border-b border-border py-4 text-lg",
                      isActive(link.href) ? "text-accent" : "text-text-primary"
                    )}
                  >
                    <span className="mr-3 font-mono text-sm text-accent">{link.number}</span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={staggerItem}>
                <Button href="/#contact" onClick={() => setMenuOpen(false)} className="mt-6 justify-center">
                  Hire Me
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}