import { MapPin, Phone, Mail } from "lucide-react";
import type { Office } from "@/lib/types";

interface OfficeCardProps {
  office: Office;
  featured?: boolean;
}

export default function OfficeCard({ office, featured = false }: OfficeCardProps) {
  return (
    <div
      className={`rounded-xl p-6 ${
        featured
          ? "bg-primary text-white"
          : "bg-white border border-gray-100 shadow-sm"
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
            featured ? "bg-white/20" : "bg-primary/10"
          }`}
        >
          <MapPin
            size={18}
            className={featured ? "text-white" : "text-primary"}
            aria-hidden="true"
          />
        </div>
        <div>
          <h3
            className={`font-bold ${featured ? "text-white" : "text-gray-900"}`}
          >
            {office.city}
          </h3>
          <span
            className={`text-xs font-medium ${
              featured ? "text-white/70" : "text-primary"
            }`}
          >
            {office.country}
          </span>
        </div>
      </div>

      <p
        className={`text-sm leading-relaxed mb-4 ${
          featured ? "text-white/80" : "text-gray-600"
        }`}
      >
        {office.address}
      </p>

      {office.phone && (
        <a
          href={`tel:${office.phone}`}
          className={`flex items-center gap-2 text-sm mb-2.5 transition-colors ${
            featured
              ? "text-white/80 hover:text-white"
              : "text-gray-600 hover:text-primary"
          }`}
        >
          <Phone size={14} aria-hidden="true" />
          {office.phone}
        </a>
      )}

      {office.email && (
        <a
          href={`mailto:${office.email}`}
          className={`flex items-center gap-2 text-sm transition-colors ${
            featured
              ? "text-white/80 hover:text-white"
              : "text-gray-600 hover:text-primary"
          }`}
        >
          <Mail size={14} aria-hidden="true" />
          {office.email}
        </a>
      )}
    </div>
  );
}
