import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import LeadershipProfile from "@/components/leadership/LeadershipProfile";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Leadership",
  description:
    "Meet David Kang, PE — President & CEO of CDI Engineering. Licensed professional engineer with degrees from MIT and UCLA.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        title="Our Leadership"
        subtitle="Experienced professionals leading the next generation of MEP engineering."
        breadcrumbs={[{ label: "About", href: "/cdi" }, { label: "Our Leadership" }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-[30px]">
          <LeadershipProfile />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-page-bg border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-[30px] text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Work With Our Team
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Ready to bring David and the CDI team onto your next project? Contact us for
            a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-3.5 rounded hover:bg-primary-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Get in Touch
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link
              href="/our-process"
              className="inline-flex items-center gap-2 bg-transparent text-primary font-semibold px-8 py-3.5 rounded border-2 border-primary hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Our Process
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
