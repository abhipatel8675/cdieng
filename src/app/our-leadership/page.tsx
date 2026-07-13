import type { Metadata } from "next";
import LeadershipProfile from "@/components/leadership/LeadershipProfile";

export const metadata: Metadata = {
  title: "Our Leadership",
  description:
    "Meet David Kang, PE — President & CEO of CDI Engineering.",
};

export default function LeadershipPage() {
  return (
    <div className="pt-[60px] bg-white">
      <div className="max-w-[960px] mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-10">Our Leadership</h1>
        <LeadershipProfile />
      </div>
    </div>
  );
}
