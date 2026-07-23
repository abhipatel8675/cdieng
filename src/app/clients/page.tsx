import type { Metadata } from "next";
import ClientsShowcase from "@/components/clients/ClientsShowcase";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Tian Chen Development Group partners with property owners, private investors, real estate funds, business owners, and landholders across Southern California.",
};

export default function ClientsPage() {
  return (
    <div className="pt-[60px] bg-white">
      <div className="max-w-[960px] mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Clients</h1>

        <div className="mb-8 space-y-4 max-w-3xl">
          <p className="text-lg font-bold italic text-gray-900 mb-2">
            We work with the people who carry the risk on a development — and we treat their capital like our own.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Tian Chen Development Group partners with property owners, private investors, real estate funds,
            business owners, and landholders across Southern California. Our clients come to us when they want a
            single team accountable for the entire project rather than a stack of separate consultants and
            contractors.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Whether you&apos;re developing your first property or your fiftieth, we bring the same disciplined
            process, honest numbers, and end-to-end ownership to the work.
          </p>
        </div>

        <ClientsShowcase />
      </div>
    </div>
  );
}
