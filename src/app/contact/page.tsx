import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with CDI Engineering. Request a free MEP engineering quote or reach our offices in Irvine CA, Edison NJ, or Ho Chi Minh City Vietnam.",
};

export default function ContactPage() {
  return (
    <div className="pt-[60px] bg-white">
      <div className="max-w-[960px] mx-auto px-6 py-12">

        <h1 className="text-3xl font-bold text-gray-900 mb-10">Contact</h1>

        {/* Find us */}
        <h2 className="text-xl font-bold text-gray-900 mb-6">Find us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Address */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-700 text-sm mb-1">
              9890 Research Dr. Suite 100, Irvine, CA 92618
            </p>
            <p className="text-gray-700 text-sm">
              {COMPANY_INFO.phone} | {COMPANY_INFO.email}
            </p>
          </div>
          {/* Map placeholder */}
          <div
            className="h-64 bg-gray-100 border border-gray-200 flex items-center justify-center"
            aria-label="Office location map"
            role="img"
          >
            <p className="text-gray-400 text-sm">Map — 9890 Research Dr, Irvine CA</p>
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
