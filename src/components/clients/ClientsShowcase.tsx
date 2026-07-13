"use client";

import { CLIENT_NAMES } from "@/lib/constants";

export default function ClientsShowcase() {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 gap-6"
      role="list"
      aria-label="Our clients"
    >
      {CLIENT_NAMES.map((name) => (
        <div
          key={name}
          role="listitem"
          className="border border-gray-200 flex items-center justify-center p-8 min-h-[120px]"
          aria-label={name}
        >
          <span className="text-sm font-semibold text-gray-700 text-center leading-tight">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}
