import { COMPANY_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white" aria-label="Site footer">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <p className="text-gray-300 text-sm mb-1 font-semibold">{COMPANY_INFO.name}</p>
        <p className="text-gray-300 text-sm mb-1">{COMPANY_INFO.address}</p>
        <p className="text-gray-300 text-sm">
          Phone: {COMPANY_INFO.phone || "TBD"} | Email: {COMPANY_INFO.email || "TBD"}
        </p>
      </div>
    </footer>
  );
}
