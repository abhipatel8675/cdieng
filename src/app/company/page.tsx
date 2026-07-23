import type { Metadata } from "next";
import { VALUES } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Tian Chen Development Group is an integrated real estate development firm based in Southern California. Learn about our mission, values, and approach.",
};

export default function CompanyPage() {
  return (
    <div className="pt-[60px] bg-white">
      <div className="max-w-[960px] mx-auto px-6 py-12">

        {/* About Us */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About — Tian Chen Development Group</h2>
        <p className="text-gray-700 text-sm leading-relaxed max-w-3xl">
          We are an integrated real estate development firm built on a simple idea: the people who design a
          project and the people who build it should answer to the same team.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed max-w-3xl mt-4">
          Too many developments are assembled from a chain of separate vendors — one firm to plan, another to
          draw, another to permit, another to build — each handing off to the next and each protecting its own
          scope. Intent gets lost in the gaps, costs drift, and the owner is left holding the risk.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed max-w-3xl mt-4">
          Tian Chen Development Group was formed to close those gaps. We carry projects from raw opportunity
          through completed asset, keeping design, entitlement, and construction under one roof and one line of
          accountability. That integration lets us set budgets on reality instead of hope, make decisions faster,
          and deliver buildings that match what was promised.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed max-w-3xl mt-4">
          Based in Southern California, we work with property owners, investors, and partners who want a
          development team that owns the outcome — not just its slice of it.
        </p>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Guides Our Work</h2>
        </div>

        {/* Values list */}
        <div className="mt-2">
          {VALUES.map((value) => (
            <div key={value.title}>
              <hr className="border-gray-200 my-6 w-20 mx-auto" />
              <h3 className="text-sm font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed max-w-3xl">{value.description}</p>
            </div>
          ))}
          <hr className="border-gray-200 my-6 w-20 mx-auto" />
        </div>

        {/* Buttons */}
        <div className="mt-16 mb-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/our-process"
            className="inline-block bg-gray-900 text-white text-sm font-semibold px-6 py-3 hover:bg-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
          >
            Learn about Our Process
          </Link>
          <Link
            href="/contact"
            className="inline-block border border-gray-900 text-gray-900 text-sm font-semibold px-6 py-3 hover:bg-gray-900 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
          >
            Talk to Us
          </Link>
        </div>

      </div>
    </div>
  );
}
