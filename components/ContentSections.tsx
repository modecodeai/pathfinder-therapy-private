import { CheckCircle2 } from "lucide-react";

type SplitSectionProps = {
  title: string;
  children: React.ReactNode;
  points?: string[];
  reverse?: boolean;
};

export function SplitSection({ title, children, points = [], reverse = false }: SplitSectionProps) {
  return (
    <div className={`grid gap-10 lg:grid-cols-2 lg:items-start ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <div>
        <h2 className="serif text-balance text-3xl leading-tight text-ink sm:text-4xl">{title}</h2>
        <div className="mt-5 space-y-5 text-pretty text-base leading-8 text-ink/68">{children}</div>
      </div>
      {points.length > 0 ? (
        <ul className="grid gap-3">
          {points.map((point) => (
            <li key={point} className="flex gap-3 rounded-lg border border-ink/10 bg-white/55 p-4 text-sm leading-7 text-ink/72">
              <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-clay" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
