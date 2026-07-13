import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import AboutSnippet from "@/components/home/AboutSnippet";
import ServicesPreview from "@/components/home/ServicesPreview";
import { COMPANY_INFO } from "@/lib/constants";

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
    </>
  );
}
