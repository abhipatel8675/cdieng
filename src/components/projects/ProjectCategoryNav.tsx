"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PROJECT_CATEGORIES } from "@/lib/constants";

export default function ProjectCategoryNav() {
  const pathname = usePathname();

  return (
    <nav
      className="flex flex-wrap gap-2 justify-center md:justify-start"
      aria-label="Project categories"
    >
      <Link
        href="/projects"
        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
          pathname === "/projects"
            ? "bg-primary text-white shadow-md"
            : "bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary"
        }`}
      >
        All Projects
      </Link>
      {PROJECT_CATEGORIES.map((cat) => {
        const isActive = pathname === `/projects/${cat.slug}`;
        return (
          <Link
            key={cat.slug}
            href={`/projects/${cat.slug}`}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
              isActive
                ? "bg-primary text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary"
            }`}
          >
            {cat.label}
          </Link>
        );
      })}
    </nav>
  );
}
