import type { Metadata } from "next";
import ClientsShowcase from "@/components/clients/ClientsShowcase";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Every client is a long-term partner in our journey. Learn about the organizations CDI Engineering proudly serves.",
};

export default function ClientsPage() {
  return (
    <div className="pt-[60px] bg-white">
      <div className="max-w-[960px] mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Clients</h1>

        <div className="mb-8">
          <p className="text-lg font-bold italic text-gray-900 mb-2">
            Every Client Is a Long-term Partner In Our Journey
          </p>
          <p className="text-gray-600 text-sm">
            For partnership, please contact us. We are looking forward to our collaboration.
          </p>
        </div>

        <ClientsShowcase />
      </div>
    </div>
  );
}
