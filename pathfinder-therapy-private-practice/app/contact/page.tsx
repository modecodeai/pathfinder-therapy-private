import { Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/metadata";
import { pageSummaries, site } from "@/data/site";

const summary = pageSummaries["/contact"];

export const metadata = createMetadata({
  title: summary.title,
  description: summary.description,
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a consultation."
        description="Tell Pathfinder Therapy a little about what you are looking for. This form is prepared for secure integration with your preferred enquiry workflow."
      />
      <section className="bg-linen py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">Enquiries</p>
              <h2 className="serif mt-4 text-balance text-3xl leading-tight text-ink sm:text-4xl">
                Start with a private consultation request.
              </h2>
            </div>
            <p className="text-pretty text-base leading-8 text-ink/68">
              Please avoid sending highly sensitive clinical detail through the website form. A short
              outline is enough to begin.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-white px-5 py-3 text-sm font-semibold text-ink"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              {site.email}
            </a>
            <p className="rounded-lg bg-sand p-5 text-sm leading-7 text-ink/70">
              Pathfinder Therapy is not an emergency service. If you are at immediate risk, contact
              local emergency services or go to the nearest emergency department.
            </p>
          </aside>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
