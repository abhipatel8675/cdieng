"use client";

import { useInView } from "react-intersection-observer";
import { Clock, Users, Shield, MapPin } from "lucide-react";

const pillars = [
  {
    icon: Clock,
    title: "20-Hour Operations",
    description:
      "With offices in California, New Jersey, and Vietnam, CDI operates across three time zones — delivering faster turnaround than any 8-hour competitor.",
  },
  {
    icon: Users,
    title: "Dedicated Project Managers",
    description:
      "Every client has a single dedicated MEP project manager from kickoff to delivery — clear communication, no information gaps.",
  },
  {
    icon: Shield,
    title: "Double-Review Accuracy",
    description:
      "Our rigorous double-review process, involving both PM and senior engineers, ensures error-free plans on every single deliverable.",
  },
  {
    icon: MapPin,
    title: "Coast-to-Coast Coverage",
    description:
      "With 250+ cities covered and 3000+ completed projects, CDI has the reach and experience to serve any location across the United States.",
  },
];

function PillarCard({
  pillar,
  index,
  inView,
}: {
  pillar: (typeof pillars)[0];
  index: number;
  inView: boolean;
}) {
  const IconComponent = pillar.icon;
  return (
    <div
      className={`flex gap-5 p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
        <IconComponent
          size={22}
          className="text-primary group-hover:text-white transition-colors"
          aria-hidden="true"
        />
      </div>
      <div>
        <h3 className="font-bold text-gray-900 mb-1.5">{pillar.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
      </div>
    </div>
  );
}

export default function WhyCDISection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 md:py-28 bg-white" aria-labelledby="why-cdi-heading">
      <div className="max-w-[1200px] mx-auto px-[30px]">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Why Choose CDI
          </span>
          <h2
            id="why-cdi-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            The CDI <span className="text-primary">Advantage</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Four pillars that make Circa Domini International the trusted MEP engineering
            partner for organizations nationwide.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
