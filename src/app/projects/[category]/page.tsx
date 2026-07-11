import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import ProjectCategoryNav from "@/components/projects/ProjectCategoryNav";
import ProjectGrid from "@/components/projects/ProjectGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROJECT_CATEGORIES } from "@/lib/constants";

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
    <>
      <PageHeader
        title={`${cat.label} Projects`}
        subtitle={cat.description}
        breadcrumbs={[
          { label: "Projects", href: "/projects" },
          { label: cat.label },
        ]}
      />

      <section className="py-16 md:py-24 bg-page-bg">
        <div className="max-w-[1200px] mx-auto px-[30px]">
          <div className="mb-10">
            <SectionHeading
              label="Portfolio"
              title={
                <>
                  {cat.label}{" "}
                  <span className="text-primary">Engineering Projects</span>
                </>
              }
              align="left"
              className="mb-6"
            />
            <ProjectCategoryNav />
          </div>

          <ProjectGrid projects={cat.projects} />
        </div>
      </section>
    </>
  );
}
