import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";

type ServiceGridProps = {
  limit?: number;
};

export function ServiceGrid({ limit }: ServiceGridProps) {
  const visibleServices = limit ? services.slice(0, limit) : services;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {visibleServices.map((service) => {
        const Icon = service.icon;
        return (
          <Link
            key={service.href}
            href={service.href}
            className="group min-h-64 rounded-lg border border-ink/10 bg-white/55 p-6 shadow-sm transition hover:-translate-y-1 hover:border-clay/45 hover:bg-white hover:shadow-soft"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-sand text-slateleaf">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <ArrowUpRight aria-hidden="true" className="h-5 w-5 text-ink/35 transition group-hover:text-clay" />
            </div>
            <h3 className="mt-8 text-xl font-semibold text-ink">{service.title}</h3>
            <p className="mt-4 text-pretty text-sm leading-7 text-ink/65">{service.description}</p>
          </Link>
        );
      })}
    </div>
  );
}
