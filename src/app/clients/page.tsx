import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ClientsShowcase from "@/components/clients/ClientsShowcase";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Every client is a long-term partner in our journey. Learn about the organizations CDI Engineering proudly serves across the United States and internationally.",
};

export default function ClientsPage() {
  return (
    <>
      <PageHeader
        title="Our Clients"
        subtitle="Every Client Is a Long-term Partner In Our Journey"
        breadcrumbs={[{ label: "Clients" }]}
      />

      {/* Clients grid */}
      <section className="py-16 md:py-24 bg-page-bg">
        <div className="max-w-[1200px] mx-auto px-[30px]">
          <SectionHeading
            label="Our Partners"
            title={
              <>
                Trusted by <span className="text-primary">Industry Leaders</span>
              </>
            }
            subtitle="CDI Engineering has earned the trust of leading organizations across the commercial, industrial, hospitality, and retail sectors."
            className="mb-12"
          />
          <ClientsShowcase />
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-[30px]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Become a Partner
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              For partnership opportunities, please contact us. We are looking forward to
              our collaboration and the opportunity to deliver exceptional MEP engineering
              solutions for your organization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded hover:bg-primary-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Contact Us
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center gap-2 bg-transparent text-gray-700 font-semibold px-8 py-4 rounded border-2 border-gray-200 hover:border-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Mail size={17} aria-hidden="true" />
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
