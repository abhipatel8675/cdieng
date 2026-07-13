import Link from "next/link";

export default function ServicesPreview() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="services-preview-heading"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/services-electrical.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 md:py-28">
        <h2
          id="services-preview-heading"
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Discover Our Services
        </h2>
        <p className="text-white/70 text-sm max-w-xl mb-8 leading-relaxed">
          Explore our expertise in MEP design and construction solutions, and learn how we can enhance your project outcomes.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/cdi"
            className="inline-block border border-white text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Learn About Us
          </Link>
          <Link
            href="/contact"
            className="inline-block border border-white text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
