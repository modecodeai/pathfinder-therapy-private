import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/metadata";
import { faqs, pageSummaries } from "@/data/site";

const summary = pageSummaries["/faq"];

export const metadata = createMetadata({
  title: summary.title,
  description: summary.description,
  path: "/faq"
});

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions before beginning therapy."
        description={summary.description}
        secondaryCta={{ href: "/contact", label: "Ask a question" }}
      />
      <section className="bg-linen py-16 sm:py-24">
        <Container className="max-w-4xl">
          <div className="divide-y divide-ink/10 rounded-lg border border-ink/10 bg-white/65">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-6 open:bg-white/70">
                <summary className="cursor-pointer list-none text-lg font-semibold text-ink marker:hidden">
                  <span className="flex items-center justify-between gap-5">
                    {faq.question}
                    <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-sand text-ink transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 text-pretty text-base leading-8 text-ink/68">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
