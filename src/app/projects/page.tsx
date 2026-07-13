import type { Metadata } from "next";
import { PROJECT_CATEGORIES } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse CDI Engineering's portfolio of MEP projects including commercial, residential, cannabis, industrial, and photovoltaic installations.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-[60px] bg-white">
      <div className="max-w-[960px] mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-10">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECT_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/projects/${cat.slug}`}
              className="block border border-gray-200 p-6 hover:border-gray-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
            >
              <h2 className="font-bold text-gray-900 mb-2">{cat.label}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{cat.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
