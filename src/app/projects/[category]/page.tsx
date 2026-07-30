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
    description: `Tian Chen Development Group ${cat.label} project sector. ${cat.description}`,
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

        {cat.projects.length > 0 ? (
          <div className="space-y-12">
            {cat.projects.map((project) => (
              <article key={project.id} className="border-b border-gray-100 pb-12">
                {/* Image */}
                {project.image ? (
                  <div className="w-full h-[360px] relative overflow-hidden mb-6 bg-gray-100 rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-64 bg-gray-200 mb-6 rounded-lg" role="img" aria-label={project.title} />
                )}
                <h2 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h2>
                <p className="text-gray-500 text-xs mb-2">{project.location}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{project.description}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-gray-200 rounded p-12 text-center">
            <p className="text-gray-500 text-sm">
              Projects coming soon. Once completed or in-progress {cat.label.toLowerCase()} projects are ready,
              they&apos;ll appear here with name, location, size/units, and a one-line result.
            </p>
          </div>
        )}

        <div className="mt-8">
          <Link href="/projects" className="text-sm text-gray-600 hover:text-gray-900 underline">
            ← All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
