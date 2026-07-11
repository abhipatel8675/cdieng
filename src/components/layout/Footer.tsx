import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { NAV_ITEMS, COMPANY_INFO, OFFICES } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white" aria-label="Site footer">
      <div className="max-w-[1200px] mx-auto px-[30px] pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded bg-primary flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold">CDI</span>
              </div>
              <span className="font-bold text-white text-xl">
                CDI<span className="text-primary">Eng</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {COMPANY_INFO.tagline}. MEP engineering design and consulting since{" "}
              {COMPANY_INFO.founded}.
            </p>
            <div className="space-y-2.5">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"
              >
                <Phone size={14} className="text-primary shrink-0" aria-hidden="true" />
                {COMPANY_INFO.phone}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"
              >
                <Mail size={14} className="text-primary shrink-0" aria-hidden="true" />
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {["Mechanical", "Electrical", "Plumbing"].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {s} Engineering
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/projects/photovoltaic"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  Photovoltaic Design
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  Get Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-5">
              Our Offices
            </h3>
            <div className="space-y-5">
              {OFFICES.map((office) => (
                <div key={office.city} className="flex gap-2.5">
                  <MapPin
                    size={14}
                    className="text-primary mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-300">{office.city}</p>
                    <p className="text-xs text-gray-500 leading-relaxed mt-0.5">
                      {office.address}
                    </p>
                    <p className="text-xs text-gray-500">{office.country}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            &copy; {currentYear}{" "}
            <span className="text-gray-400">{COMPANY_INFO.shortName}</span>. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact Us
            </Link>
            <Link href="/cdi" className="hover:text-primary transition-colors">
              About CDI
            </Link>
            <Link href="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
