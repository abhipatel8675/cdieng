import { COMPANY_INFO } from "@/lib/constants";

export default function AboutSnippet() {
  return (
    <section className="bg-white py-16" aria-labelledby="about-snippet-heading">
      <div className="max-w-[960px] mx-auto px-6">
        <hr className="border-gray-200 mb-12" />
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-700 text-sm leading-relaxed">
            {COMPANY_INFO.mission}
          </p>
        </div>
        <hr className="border-gray-200 mt-12" />
      </div>
    </section>
  );
}
