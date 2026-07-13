export default function LeadershipProfile() {
  return (
    <div>
      {/* Name/photo row */}
      <div className="flex items-start gap-6 mb-8">
        {/* Round photo placeholder */}
        <div
          className="w-28 h-28 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center shrink-0 overflow-hidden"
          role="img"
          aria-label="David Kang profile photo"
        >
          <span className="text-2xl font-bold text-gray-500">DK</span>
        </div>
        <div className="pt-2">
          <h2 className="text-2xl font-bold text-gray-900">David Kang, PE</h2>
          <p className="italic text-gray-600 text-sm mt-1">President &amp; Chief Executive Officer</p>
        </div>
      </div>

      {/* Bio */}
      <div className="space-y-4 text-gray-700 text-sm leading-relaxed max-w-3xl">
        <p>
          At Circa Domini International Inc., we are privileged to be led by David Kang, an esteemed professional
          whose career embodies excellence in engineering, management, and executive leadership. Armed with a
          Bachelor&apos;s and Master&apos;s in Mechanical Engineering from MIT, and an MBA from UCLA, David Kang, our
          Principal and Professional Engineer (CA PE#M 37036), possesses a robust academic foundation complemented
          by extensive hands-on experience across diverse industries.
        </p>
        <p>
          As an accomplished leader and engineer, David Kang has consistently delivered outstanding results throughout
          his career. His expertise in strategic planning, design-to-cost initiatives, and new business development
          has been pivotal in driving growth and success.
        </p>
        <p>
          Before assuming leadership at Circa Domini International Inc., David Kang&apos;s journey included
          transformative roles at renowned organizations. He served as Vice President and General Manager at B/E
          Aerospace, orchestrating a remarkable turnaround from an $80 million sales operation to a process-oriented
          and metrics-driven organization.
        </p>
        <p>
          Before his tenure at B/E Aerospace, David held key positions at Honeywell International, where he played
          pivotal roles in shaping the company&apos;s aerospace division. As Director of Strategy for Honeywell Engines
          Integrated Supply Chain, he spearheaded strategic planning initiatives and led the implementation of key
          initiatives across a global network of sites, contributing to the division&apos;s $5 billion annual revenue.
        </p>
        <p>
          David Kang&apos;s academic journey is marked by excellence, with both a Bachelor and Master of Science in
          Mechanical Engineering from MIT and a Master of Business Administration (MBA) with a focus on Marketing &amp;
          Finance from UCLA. These academic achievements underscore his commitment to continuous learning and
          professional development, serving as a strong foundation for his leadership in the field of engineering
          and management.
        </p>
      </div>
    </div>
  );
}
