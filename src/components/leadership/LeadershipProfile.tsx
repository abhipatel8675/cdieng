const PRINCIPALS = [
  {
    initials: "CEO",
    name: "[Name]",
    title: "Chief Executive Officer",
    bio: "Background, years in development / construction / real estate, notable project types, and the perspective they bring to the firm.",
  },
  {
    initials: "CFO",
    name: "[Name]",
    title: "Chief Financial Officer / Secretary",
    bio: "Background in development finance, capital, and operations, and their role in structuring and stewarding each project.",
  },
  {
    initials: "DIR",
    name: "[Name]",
    title: "Director of Construction / Design",
    bio: "Field or design leadership, disciplines overseen, and approach to delivery.",
  },
];

export default function LeadershipProfile() {
  return (
    <div>
      <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mb-10">
        Tian Chen Development Group is led by a team that has taken projects from land to lease-up across
        design, entitlement, and construction. Leadership bios below are placeholders — actual names and full
        bios can be dropped in once you decide what each person&apos;s background should say.
      </p>

      <div className="space-y-12">
        {PRINCIPALS.map((principal) => (
          <div key={principal.title}>
            <div className="flex items-start gap-6 mb-4">
              <div
                className="w-28 h-28 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center shrink-0 overflow-hidden"
                role="img"
                aria-label={`${principal.title} profile photo placeholder`}
              >
                <span className="text-xl font-bold text-gray-500">{principal.initials}</span>
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
