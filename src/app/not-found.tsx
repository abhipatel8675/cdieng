import type { Metadata } from "next";
import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
};

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About CDI", href: "/cdi" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-20">
      <div className="max-w-[1200px] mx-auto px-[30px] text-center">
        {/* 404 display */}
        <div className="relative inline-block mb-8">
          <span
            className="text-[160px] md:text-[200px] font-bold leading-none select-none"
            style={{
              background: "linear-gradient(135deg, #0bb4aa 0%, #08857d 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: 0.15,
            }}
            aria-hidden="true"
          >
            404
          </span>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
              <Search size={28} className="text-primary" aria-hidden="true" />
            </div>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 text-lg max-w-md mx-auto mb-10">
          The page you are looking for does not exist or has been moved. Let us
          help you find what you need.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded hover:bg-primary-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Home size={17} aria-hidden="true" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-transparent text-primary font-semibold px-8 py-4 rounded border-2 border-primary hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Contact Us
          </Link>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-sm text-gray-500 font-medium mb-4">
            Or jump to a section:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:border-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
