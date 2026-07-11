import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ServiceSection from "@/components/services/ServiceSection";
import { SERVICES } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "CDI Engineering provides expert mechanical, electrical, and plumbing engineering services for commercial, residential, industrial, and specialty projects.",
  openGraph: {
    title: "MEP Engineering Services | CDI Engineering",
    description:
      "Expert mechanical, electrical, and plumbing engineering — HVAC design, power systems, photovoltaic, and more.",
    url: "https://cdieng.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive MEP engineering solutions delivered with precision and speed."
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="py-16 md:py-24 bg-page-bg">
        <div className="max-w-[1200px] mx-auto px-[30px]">
          <div className="flex flex-col gap-8 mb-16">
            {SERVICES.map((service, i) => (
              <ServiceSection key={service.id} service={service} index={i} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="bg-dark rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Contact our team to discuss your MEP engineering needs. We provide free quotes
              and fast turnaround on all project types.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-3.5 rounded hover:bg-primary-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Get FREE Quote Now
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link
                href="/cdi"
                className="inline-flex items-center gap-2 bg-transparent text-white font-semibold px-8 py-3.5 rounded border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Learn About CDI
              </Link>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors text-sm"
              >
                <Phone size={14} aria-hidden="true" />
                Call us: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
