import type { Metadata } from "next";
import ServiceSection from "@/components/services/ServiceSection";
import { SERVICES } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "CDI Engineering provides expert mechanical, electrical, and plumbing engineering services for commercial, residential, industrial, and specialty projects.",
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
