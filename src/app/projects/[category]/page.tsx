import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECT_CATEGORIES } from "@/lib/constants";
import Link from "next/link";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return PROJECT_CATEGORIES.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = PROJECT_CATEGORIES.find((c) => c.slug === category);
  if (!cat) return { title: "Not Found" };

  return {
    title: `${cat.label} Projects`,
    description: `CDI Engineering ${cat.label} MEP project portfolio. ${cat.description}`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = PROJECT_CATEGORIES.find((c) => c.slug === category);
  if (!cat) notFound();

  return (
    <div className="pt-[60px] bg-white">
      <div className="max-w-[960px] mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{cat.label}</h1>
        <p className="text-gray-600 text-sm mb-10">{cat.description}</p>

        <div className="space-y-12">
          {cat.projects.map((project) => (
            <article key={project.id} className="border-b border-gray-100 pb-12">
              {/* Image placeholder */}
              <div className="w-full h-64 bg-gray-200 mb-6" role="img" aria-label={project.title} />
              <h2 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h2>
              <p className="text-gray-500 text-xs mb-2">{project.location}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{project.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/projects" className="text-sm text-gray-600 hover:text-gray-900 underline">
            ← All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
