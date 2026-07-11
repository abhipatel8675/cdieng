import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import OfficeCard from "@/components/contact/OfficeCard";
import { OFFICES, COMPANY_INFO } from "@/lib/constants";
import { Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with CDI Engineering. Request a free MEP engineering quote or reach our offices in Irvine CA, Edison NJ, or Ho Chi Minh City Vietnam.",
  openGraph: {
    title: "Contact CDI Engineering — Free MEP Quote",
    description:
      "Reach out for a free MEP engineering consultation. Offices in Irvine CA, Edison NJ, and Ho Chi Minh City.",
    url: "https://cdieng.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Reach out to our team for a free consultation or project quote."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="py-16 md:py-24 bg-page-bg">
        <div className="max-w-[1200px] mx-auto px-[30px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info column */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fill out the form and our team will respond within 1–2 business days.
                  For urgent projects, call us directly.
                </p>
              </div>

              {/* Quick contact */}
              <div className="space-y-3">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <Phone size={16} className="text-primary group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Phone</p>
                    <p className="text-sm font-semibold text-gray-800">{COMPANY_INFO.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <Mail size={16} className="text-primary group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Email</p>
                    <p className="text-sm font-semibold text-gray-800">{COMPANY_INFO.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Operating Hours</p>
                    <p className="text-sm font-semibold text-gray-800">20 hrs / day — 3 time zones</p>
                  </div>
                </div>
              </div>

              {/* Office cards */}
              <div className="space-y-4">
                {OFFICES.map((office, i) => (
                  <OfficeCard key={office.city} office={office} featured={i === 0} />
                ))}
              </div>
            </div>

            {/* Form column — spans 2 cols */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
                <h2 className="text-xl font-bold text-gray-900 mb-1">Send Us a Message</h2>
                <p className="text-gray-500 text-sm mb-7">
                  All fields marked with * are required.
                </p>
                <ContactForm />
              </div>

              {/* Map placeholder */}
              <div className="mt-6 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <div
                  className="h-64 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #e8f5f4 0%, #d1eeec 100%)",
                  }}
                  aria-label="Office location map — Irvine, CA 92618"
                  role="img"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold text-lg">📍</span>
                    </div>
                    <p className="text-primary font-semibold text-sm">CDI Engineering HQ</p>
                    <p className="text-gray-500 text-xs mt-1">
                      9890 Research Dr. Suite 100, Irvine, CA 92618
                    </p>
                    <a
                      href="https://maps.google.com/?q=9890+Research+Dr+Suite+100+Irvine+CA+92618"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-xs text-primary font-semibold border border-primary rounded-full px-4 py-1.5 hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
