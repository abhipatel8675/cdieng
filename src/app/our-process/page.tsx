import type { Metadata } from "next";
import ProcessSteps from "@/components/process/ProcessSteps";
import DifferentiatorSection from "@/components/process/DifferentiatorSection";
import { PROCESS_STEPS, DIFFERENTIATORS } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Learn how CDI Engineering delivers fast, accurate, and responsive MEP engineering through our proven 5-step process.",
};

export default function OurProcessPage() {
  return (
    <div className="pt-[60px] bg-white">
      <div className="max-w-[960px] mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h1>

        <p className="text-gray-700 text-sm leading-relaxed mb-10 max-w-3xl">
          At Circa Domini International, Inc. (CDI), excellence isn&apos;t just a goal—it&apos;s our standard. Our
          streamlined project process sets us apart from the competitors, ensuring unparalleled efficiency, accuracy,
          and client satisfaction.
        </p>

        <ProcessSteps steps={PROCESS_STEPS} />

        <div className="mt-16">
          <DifferentiatorSection differentiators={DIFFERENTIATORS} />
        </div>

        {/* Buttons */}
        <div className="mt-16 mb-8 flex flex-wrap gap-3">
          <Link
            href="/cdi"
            className="inline-block bg-gray-900 text-white text-sm font-semibold px-6 py-3 hover:bg-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
          >
            Learn About CDI
          </Link>
          <Link
            href="/contact"
            className="inline-block border border-gray-900 text-gray-900 text-sm font-semibold px-6 py-3 hover:bg-gray-900 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
          >
            Get FREE Quote Now
          </Link>
        </div>
      </div>
    </div>
  );
}
