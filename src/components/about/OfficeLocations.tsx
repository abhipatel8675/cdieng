import { MapPin, Phone, Mail } from "lucide-react";
import type { Office } from "@/lib/types";

interface OfficeLocationsProps {
  offices: Office[];
}

export default function OfficeLocations({ offices }: OfficeLocationsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {offices.map((office) => (
        <div
          key={office.city}
          className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin size={18} className="text-primary" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">{office.city}</h3>
              <span className="text-xs text-primary font-medium">{office.country}</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{office.address}</p>
          {office.phone && (
            <a
              href={`tel:${office.phone}`}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors mb-2"
            >
              <Phone size={14} className="text-primary" aria-hidden="true" />
              {office.phone}
            </a>
          )}
          {office.email && (
            <a
              href={`mailto:${office.email}`}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
            >
              <Mail size={14} className="text-primary" aria-hidden="true" />
              {office.email}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
