import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ValuesGrid from "@/components/about/ValuesGrid";
import OfficeLocations from "@/components/about/OfficeLocations";
import SectionHeading from "@/components/ui/SectionHeading";
import { VALUES, OFFICES, COMPANY_INFO } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About CDI",
  description:
    "Circa Domini International Inc. is a premier MEP engineering design firm based in Irvine, CA. Learn about our mission, values, and global presence.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About CDI"
        subtitle="Premier MEP engineering design and consulting, coast to coast."
        breadcrumbs={[{ label: "About" }, { label: "CDI" }]}
      />

      {/* Mission section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-[30px]">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-4">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A Premier Destination for{" "}
              <span className="text-primary">MEP Engineering</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {COMPANY_INFO.mission}
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether your project is a downtown commercial tower, a residential
              development, a cannabis cultivation facility, or a utility-scale
              photovoltaic installation, CDI Engineering delivers precision engineering
              solutions on time and within budget — regardless of project location.
            </p>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-16 md:py-24 bg-page-bg">
        <div className="max-w-[1200px] mx-auto px-[30px]">
          <SectionHeading
            label="Our Foundation"
            title={
              <>
                Six Core <span className="text-primary">Values</span>
              </>
            }
            subtitle="Every engagement is guided by principles that ensure exceptional outcomes for our clients."
            className="mb-12"
          />
          <ValuesGrid values={VALUES} />
        </div>
      </section>

      {/* Offices section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-[30px]">
          <SectionHeading
            label="Our Presence"
            title={
              <>
                Three Offices, <span className="text-primary">One Standard</span>
              </>
            }
            subtitle="Strategically located to serve clients coast to coast and internationally."
            className="mb-12"
          />
          <OfficeLocations offices={OFFICES} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark">
        <div className="max-w-[1200px] mx-auto px-[30px] text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Start Working With CDI Today
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Reach out to discuss your project requirements. Our licensed engineers are
            ready to deliver.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-3.5 rounded hover:bg-primary-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Contact Us
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link
              href="/our-process"
              className="inline-flex items-center gap-2 bg-transparent text-white font-semibold px-8 py-3.5 rounded border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Our Process
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
