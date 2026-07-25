import type { Point } from "~/data/static-data";
import SlideInUp from "./animations/SlideInUp";

type SummaryProps = {
  summary?: (string | Point[])[];
}

export default function Summary({ summary }: SummaryProps) {
  if (!summary) return null;

  return (
    <>
      {summary.map((item, idx) => {
        if (typeof item === "string") {
          // if the summary is string and a parent object
          return (
            <SlideInUp key={idx} delay={0.1 * (idx + 1)}>
              <p className="text-xbase lg:text-xl">{item}</p>
            </SlideInUp>
          );
        }

        // if the summary is nested object within the parent summary object as a Point[]
        return (
          <SlideInUp key={idx} delay={0.1 * (idx + 1)}>
            <ul className="flex flex-col gap-y-2">
              {item.map((point) => (
                <li key={point.id} className="flex items-start gap-x-2">
                  {point.icon && (
                    <div className="mt-0.5 lg:mt-0">
                     <point.icon className="text-rf-primary 2xs:size-5 lg:size-6" />
                    </div>
                  )}
                  <div>
                    {point.title && (
                      <strong className="block text-rf-primary">{point.title}</strong>
                    )}
                    <span className="text-xbase lg:text-xl">{point.summary}</span>
                  </div>
                </li>
              ))}
            </ul>
          </SlideInUp>
        );
      })}
    </>
  );
}