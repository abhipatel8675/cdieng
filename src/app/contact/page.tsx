import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have a site, a building, or an idea? Get in touch with Tian Chen Development Group in City of Industry, CA.",
};

export default function ContactPage() {
  return (
    <div className="pt-[60px] bg-white">
      <div className="max-w-[960px] mx-auto px-6 py-12">

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact</h1>
        <p className="text-gray-600 text-sm mb-10 max-w-2xl">
          Have a site, a building, or an idea? Tell us what you&apos;re working with, and we&apos;ll tell you
          honestly whether it pencils — and what it would take to build it.
        </p>

        {/* Find us */}
        <h2 className="text-xl font-bold text-gray-900 mb-6">Find us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Address */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-700 text-sm mb-1">Tian Chen Development Group</p>
            <p className="text-gray-700 text-sm mb-1">{COMPANY_INFO.address}</p>
            <p className="text-gray-500 text-sm mt-2">
              Phone: {COMPANY_INFO.phone || "TBD"} | Email: {COMPANY_INFO.email || "TBD"}
            </p>
          </div>
          {/* Map placeholder */}
          <div
            className="h-64 bg-gray-100 border border-gray-200 flex items-center justify-center"
            aria-label="Office location map"
            role="img"
          >
            <p className="text-gray-400 text-sm">Map — {COMPANY_INFO.address}</p>
          </div>
        </div>

        {/* Contact form */}
        <h2 className="text-xl font-bold text-gray-900 mb-2">Contact us</h2>
        <p className="text-gray-600 text-sm mb-6">
          Fields marked with an <span className="text-red-500">*</span> are required
        </p>
        <ContactForm />

      </div>
    </div>
  );
}
