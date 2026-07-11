import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ProjectCategoryNav from "@/components/projects/ProjectCategoryNav";
import ProjectGrid from "@/components/projects/ProjectGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROJECT_CATEGORIES } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse CDI Engineering's portfolio of MEP projects including commercial, residential, cannabis, industrial, and photovoltaic installations.",
};

export default function ProjectsPage() {
  const allProjects = PROJECT_CATEGORIES.flatMap((c) => c.projects);

  return (
    <>
      <PageHeader
        title="Our Projects"
        subtitle="A selection of completed MEP engineering projects across every sector we serve."
        breadcrumbs={[{ label: "Projects" }]}
      />

      <section className="py-16 md:py-24 bg-page-bg">
        <div className="max-w-[1200px] mx-auto px-[30px]">
          <div className="mb-10">
            <SectionHeading
              label="Portfolio"
              title={
                <>
                  3000+ Projects <span className="text-primary">Completed</span>
                </>
              }
              align="left"
              className="mb-6"
            />
            <ProjectCategoryNav />
          </div>

          <ProjectGrid projects={allProjects} />

          {/* Category cards */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECT_CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/projects/${cat.slug}`}
                  className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {cat.label}
                    </h3>
                    <ArrowRight
                      size={16}
                      className="text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {cat.description}
                  </p>
                  <span className="text-primary text-xs font-semibold">
                    {cat.projects.length} projects
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
