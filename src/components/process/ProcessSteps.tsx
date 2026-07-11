"use client";

import { useInView } from "react-intersection-observer";
import type { ProcessStep } from "@/lib/types";

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div ref={ref} className="relative" aria-label="Process steps">
      {/* Connector line (desktop) */}
      <div
        className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {steps.map((step, i) => (
          <div
            key={step.number}
            className={`flex flex-col items-center text-center transition-all duration-500 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Step number circle */}
            <div className="relative mb-5">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-primary/30 z-10 relative">
                {step.number}
              </div>
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
