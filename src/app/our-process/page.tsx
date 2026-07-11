import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ProcessSteps from "@/components/process/ProcessSteps";
import DifferentiatorSection from "@/components/process/DifferentiatorSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROCESS_STEPS, DIFFERENTIATORS } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Learn how CDI Engineering delivers fast, accurate, and responsive MEP engineering through our proven 5-step process and 20-hour operational model.",
};

export default function OurProcessPage() {
  return (
    <>
      <PageHeader
        title="Our Process"
        subtitle="Efficient project execution in five steps — faster, more accurate, and always responsive."
        breadcrumbs={[{ label: "About", href: "/cdi" }, { label: "Our Process" }]}
      />

      {/* Process steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-[30px]">
          <SectionHeading
            label="How We Work"
            title={
              <>
                Efficient Project Execution{" "}
                <span className="text-primary">in Five Steps</span>
              </>
            }
            subtitle="Every project follows our proven methodology — from initial consultation to final delivery."
            className="mb-16"
          />
          <ProcessSteps steps={PROCESS_STEPS} />
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 md:py-24 bg-page-bg">
        <div className="max-w-[1200px] mx-auto px-[30px]">
          <SectionHeading
            label="What Sets Us Apart"
            title={
              <>
                The CDI <span className="text-primary">Advantage</span>
              </>
            }
            subtitle="Three pillars that make CDI Engineering the trusted choice for MEP projects."
            className="mb-16"
          />
          <DifferentiatorSection differentiators={DIFFERENTIATORS} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-[1200px] mx-auto px-[30px] text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Experience the CDI Difference
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Put our process to work on your next project. Get a free quote from our
            licensed MEP engineers today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3.5 rounded hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Get FREE Quote Now
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link
              href="/cdi"
              className="inline-flex items-center gap-2 bg-transparent text-white font-semibold px-8 py-3.5 rounded border-2 border-white/50 hover:border-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Learn About CDI
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
