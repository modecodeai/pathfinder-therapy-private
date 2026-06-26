import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/metadata";
import { pageSummaries } from "@/data/site";

const summary = pageSummaries["/fees"];

export const metadata = createMetadata({
  title: summary.title,
  description: summary.description,
  path: "/fees"
});

const feeItems = [
  {
    title: "Individual therapy",
    detail: "Weekly or agreed regular sessions for adults in Lisbon or online.",
    price: "Fee confirmed at consultation"
  },
  {
    title: "Couples therapy",
    detail: "Longer sessions may be recommended depending on the work.",
    price: "Fee confirmed at consultation"
  },
  {
    title: "Initial consultation",
    detail: "A first conversation to understand what you need and whether the fit feels right.",
    price: "Available by request"
  }
];

export default function FeesPage() {
  return (
    <>
      <PageHero
        eyebrow="Fees"
        title="Clear private-practice arrangements, discussed before you begin."
        description={summary.description}
        secondaryCta={{ href: "/faq", label: "Read FAQ" }}
      />
      <section className="bg-linen py-16 sm:py-24">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            {feeItems.map((item) => (
              <article key={item.title} className="rounded-lg border border-ink/10 bg-white/65 p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-ink">{item.title}</h2>
                <p className="mt-4 min-h-24 text-sm leading-7 text-ink/65">{item.detail}</p>
                <p className="mt-6 border-t border-ink/10 pt-5 text-sm font-semibold text-slateleaf">
                  {item.price}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12 max-w-3xl space-y-5 text-pretty text-base leading-8 text-ink/70">
            <p>
              Fees, session length, frequency, payment arrangements and cancellation terms are agreed
              before therapy begins. The consultation is also a chance to talk through whether in-person
              or online work is the best fit.
            </p>
            <p>
              Pathfinder Therapy is a private-paying service. Receipts can be provided where needed,
              but clients are responsible for checking any insurer or reimbursement requirements before
              booking.
            </p>
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
