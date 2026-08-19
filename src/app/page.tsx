import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AboutSnippet from "@/components/home/AboutSnippet";
import ServicesPreview from "@/components/home/ServicesPreview";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${COMPANY_INFO.shortName} — ${COMPANY_INFO.tagline}`,
  description:
    "TianCheng Development Group is a Southern California-based integrated real estate development firm carrying projects from feasibility through construction and delivery.",
  openGraph: {
    title: `${COMPANY_INFO.shortName} — ${COMPANY_INFO.tagline}`,
    description:
      "Integrated real estate development — from first drawing to finished building. One accountable team from acquisition through occupancy.",
    url: "https://tianchengdevelopment.com",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSnippet />
      <ServicesPreview />
    </>
  );
}
