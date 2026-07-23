import type { Metadata } from "next";
import { PROJECT_CATEGORIES } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Tian Chen Development Group develops across sectors — commercial, residential & ADU, mixed-use & adaptive reuse, industrial, hospitality & retail, and land development.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-[60px] bg-white">
      <div className="max-w-[960px] mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
        <p className="text-gray-600 text-sm mb-10 max-w-2xl">
          We develop across sectors, applying the same end-to-end process whether the project is ground-up, a
          conversion, or a repositioning.
        </p>

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
