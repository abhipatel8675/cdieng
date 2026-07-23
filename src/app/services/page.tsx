import type { Metadata } from "next";
import ServiceSection from "@/components/services/ServiceSection";
import { SERVICES } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Tian Chen Development Group carries projects through feasibility, design, entitlements, construction, and delivery — one accountable team, start to finish.",
};

export default function ServicesPage() {
  return (
    <div className="pt-[60px] bg-white">
      <div className="max-w-[960px] mx-auto px-6 py-12">
        {SERVICES.map((service, i) => (
          <ServiceSection key={service.id} service={service} index={i} />
        ))}

        {/* Bottom buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/company"
            className="inline-block bg-gray-900 text-white text-sm font-semibold px-6 py-3 hover:bg-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
          >
            Learn About Us
          </Link>
          <Link
            href="/contact"
            className="inline-block border border-gray-900 text-gray-900 text-sm font-semibold px-6 py-3 hover:bg-gray-900 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
          >
            Talk to Us
          </Link>
        </div>
      </div>
    </div>
  );
}
