import type { Metadata } from "next";
import { VALUES, COMPANY_INFO } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About CDI",
  description:
    "Circa Domini International Inc. is a premier MEP engineering design firm based in Irvine, CA. Learn about our mission, values, and global presence.",
};

export default function AboutPage() {
  return (
    <div className="pt-[60px] bg-white">
      <div className="max-w-[960px] mx-auto px-6 py-12">

        {/* About Us */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About Us</h2>
        <p className="text-gray-700 text-sm leading-relaxed max-w-3xl">
          Welcome to Circa Domini International, Inc. (CDI), your premier destination for cutting-edge MEP design solutions
          across the United States and beyond. With offices strategically located in Irvine, California, Edison, New Jersey,
          and Ho Chi Minh City, Vietnam, we bring unparalleled expertise and innovation to projects worldwide.
        </p>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Value</h2>
          <p className="text-gray-700 text-sm leading-relaxed max-w-3xl">
            At CDI, we embody a commitment to excellence that transcends geographical boundaries. Our core values of{" "}
            <strong>Responsiveness</strong>, <strong>Accurate speed delivery</strong>,{" "}
            <strong>Proactive value-driven</strong> approaches, <strong>Technical</strong> expertise,{" "}
            <strong>Standardization</strong>, and <strong>Continuous improvement</strong> drive every aspect of our
            operations, ensuring exceptional results regardless of location.
          </p>
        </div>

        {/* Values list */}
        <div className="mt-10">
          {VALUES.map((value, i) => (
            <div key={value.title}>
              <hr className="border-gray-200 my-6 w-20 mx-auto" />
              <h3 className="text-sm font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed max-w-3xl">{value.description}</p>
            </div>
          ))}
          <hr className="border-gray-200 my-6 w-20 mx-auto" />
        </div>

        {/* Closing paragraph */}
        <p className="text-gray-700 text-sm leading-relaxed max-w-3xl mt-4">
          Experience the CDI difference for yourself. Partner with us for MEP design solutions that are responsive,
          accurate, proactive, technical, standardized, and continuously improving, no matter where your project is
          located. Let us bring your vision to life, wherever you are in the United States or beyond.
        </p>

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
            Get FREE Quote Now
          </Link>
        </div>

      </div>
    </div>
  );
}
