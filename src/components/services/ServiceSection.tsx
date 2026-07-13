import type { Service } from "@/lib/types";

interface ServiceSectionProps {
  service: Service;
  index: number;
}

export default function ServiceSection({ service, index }: ServiceSectionProps) {
  const imageRight = index % 2 === 0;

  return (
    <article className="mb-12" aria-labelledby={`service-section-${service.id}`}>
      <h2
        id={`service-section-${service.id}`}
        className="text-2xl font-bold text-gray-900 mb-6"
      >
        {service.title}
      </h2>

      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-start`}>
        {/* Image */}
        <div className={imageRight ? "md:order-1" : "md:order-2"}>
          <div
            className="w-full aspect-[4/3] bg-gray-200 overflow-hidden"
            style={
              service.image
                ? { backgroundImage: `url('${service.image}')`, backgroundSize: "cover", backgroundPosition: "center" }
                : { background: "#e5e7eb" }
            }
            role="img"
            aria-label={`${service.title} engineering`}
          />
        </div>

        {/* Text */}
        <div className={imageRight ? "md:order-2" : "md:order-1"}>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">{service.description}</p>
          <ul className="space-y-1.5">
            {service.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2 text-gray-700 text-sm">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
