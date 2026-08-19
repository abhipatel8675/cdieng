const PRINCIPALS = [
  {
    initials: "CEO",
    name: "David Chen",
    title: "Chief Executive Officer",
    image: "/images/leadership/leader-ceo.jpg",
    bio: "David has over 20 years of experience in Southern California real estate development. He oversees the firm's strategic direction, land acquisitions, and joint-venture partnerships, ensuring that every project aligns with the group's integrated vision.",
  },
  {
    initials: "CFO",
    name: "Sarah Johnston",
    title: "Chief Financial Officer / Secretary",
    image: "/images/leadership/leader-cfo.jpg",
    bio: "Sarah manages the financial operations, project capitalization, and investor relations for TianCheng. With a background in institutional real estate finance, she structures capital for projects from feasibility through post-occupancy delivery.",
  },
  {
    initials: "DIR",
    name: "Marcus Vance",
    title: "Director of Construction & Design",
    image: "/images/leadership/leader-dir.jpg",
    bio: "Marcus leads our design and construction teams. A licensed general contractor and structural specialist, he ensures that design concepts transition seamlessly into quality, buildable structures delivered on-schedule.",
  },
];

export default function LeadershipProfile() {
  return (
    <div>
      <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mb-10">
        TianCheng Development Group is led by a team that has taken projects from land to lease-up across
        design, entitlement, and construction.
      </p>

      <div className="space-y-12">
        {PRINCIPALS.map((principal) => (
          <div key={principal.title}>
            <div className="flex items-start gap-6 mb-4">
              <div
                className="w-28 h-28 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center shrink-0 overflow-hidden relative"
                role="img"
                aria-label={`${principal.title} profile photo`}
              >
                {principal.image ? (
                  <img
                    src={principal.image}
                    alt={principal.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-xl font-bold text-gray-500">{principal.initials}</span>
                )}
              </div>
              <div className="pt-2">
                <h2 className="text-2xl font-bold text-gray-900">{principal.name}</h2>
                <p className="italic text-gray-600 text-sm mt-1">{principal.title}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed max-w-3xl">{principal.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
