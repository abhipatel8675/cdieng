import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import AboutSnippet from "@/components/home/AboutSnippet";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyCDISection from "@/components/home/WhyCDISection";
import { COMPANY_INFO } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: `${COMPANY_INFO.shortName} — ${COMPANY_INFO.tagline}`,
  description:
    "Circa Domini International Inc. is an Irvine, CA-based MEP engineering design and consulting firm. Fast, affordable, and reliable MEP engineering services coast to coast.",
  openGraph: {
    title: `${COMPANY_INFO.shortName} — ${COMPANY_INFO.tagline}`,
    description:
      "Fast, affordable, and reliable MEP engineering design and consulting. 3000+ projects completed. Offices in CA, NJ, and Vietnam.",
    url: "https://cdieng.com",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSnippet />
      <ServicesPreview />
      <WhyCDISection />

      {/* CTA Banner */}
      <section className="bg-primary py-16" aria-labelledby="cta-heading">
        <div className="max-w-[1200px] mx-auto px-[30px] text-center">
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to Start Your Next Project?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a free quote from our team of licensed MEP engineers. We deliver fast,
            accurate, and cost-effective solutions for any project size.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded hover:bg-gray-100 transition-colors text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Get FREE Quote Now
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-2 bg-transparent text-white font-semibold px-8 py-4 rounded border-2 border-white/50 hover:border-white hover:bg-white/10 transition-colors text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone size={17} aria-hidden="true" />
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
