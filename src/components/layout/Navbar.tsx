"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { NAV_ITEMS, COMPANY_INFO } from "@/lib/constants";
import type { NavItem } from "@/lib/types";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  // Shadow on scroll — setState called inside event callback (compliant)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change — setState inside microtask callback (compliant)
  useEffect(() => {
    queueMicrotask(() => {
      setMobileOpen(false);
      setMobileExpanded(null);
    });
  }, [pathname]);

  // Close dropdowns on outside click — setState inside event callback (compliant)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu open — updates external DOM (compliant)
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname.startsWith(href);
    },
    [pathname]
  );

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
      role="banner"
    >
      {/* Top bar */}
      <div className="bg-dark text-white text-sm py-2 hidden md:block">
        <div className="max-w-[1200px] mx-auto px-[30px] flex items-center justify-end gap-6">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Phone size={13} aria-hidden="true" />
            {COMPANY_INFO.phone}
          </a>
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="hover:text-primary transition-colors"
          >
            {COMPANY_INFO.email}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className="max-w-[1200px] mx-auto px-[30px] flex items-center justify-between h-[70px]"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          aria-label="CDI Engineering — Home"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold leading-none">CDI</span>
            </div>
            <span className="font-bold text-gray-900 text-lg leading-tight hidden sm:block">
              CDI<span className="text-primary">Eng</span>
            </span>
          </div>
        </Link>

        {/* Desktop nav items */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_ITEMS.map((item: NavItem) => (
            <li key={item.label} className="relative">
              {item.children ? (
                <div
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      isActive(item.href)
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    }`}
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                    onClick={() => handleDropdownToggle(item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {openDropdown === item.label && (
                    <ul
                      className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                      role="menu"
                    >
                      {item.children.map((child) => (
                        <li key={child.href} role="none">
                          <Link
                            href={child.href}
                            className={`block px-4 py-2.5 text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary ${
                              isActive(child.href)
                                ? "text-primary bg-primary/5 font-semibold"
                                : "text-gray-700 hover:text-primary hover:bg-gray-50"
                            }`}
                            role="menuitem"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`block px-4 py-2 rounded text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-primary-hover transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Get Free Quote
          </Link>

          <button
            className="md:hidden p-2 rounded text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-modal="true"
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "70px" }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer panel */}
        <div
          className={`relative bg-white w-full max-w-sm h-full overflow-y-auto shadow-xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 border-b border-gray-100">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
            >
              <Phone size={14} aria-hidden="true" />
              {COMPANY_INFO.phone}
            </a>
          </div>

          <ul className="py-4" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className={`w-full flex items-center justify-between px-5 py-3.5 text-base font-medium transition-colors ${
                        isActive(item.href) ? "text-primary" : "text-gray-800"
                      } hover:text-primary hover:bg-gray-50`}
                      onClick={() =>
                        setMobileExpanded((prev) =>
                          prev === item.label ? null : item.label
                        )
                      }
                      aria-expanded={mobileExpanded === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <ul className="bg-gray-50 border-t border-b border-gray-100">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={`block px-8 py-3 text-sm transition-colors ${
                                isActive(child.href)
                                  ? "text-primary font-semibold"
                                  : "text-gray-600 hover:text-primary"
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-5 py-3.5 text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-primary"
                        : "text-gray-800 hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="p-5 border-t border-gray-100">
            <Link
              href="/contact"
              className="block w-full text-center bg-primary text-white font-semibold py-3 rounded hover:bg-primary-hover transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
