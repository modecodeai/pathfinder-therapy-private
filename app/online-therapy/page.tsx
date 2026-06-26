import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SplitSection } from "@/components/ContentSections";
import { createMetadata } from "@/lib/metadata";
import { pageSummaries } from "@/data/site";

const summary = pageSummaries["/online-therapy"];

export const metadata = createMetadata({
  title: summary.title,
  description: summary.description,
  path: "/online-therapy"
});

export default function OnlineTherapyPage() {
  return (
    <>
      <PageHero
        eyebrow="Online"
        title="Online therapy in English, wherever life currently has you."
        description={summary.description}
        secondaryCta={{ href: "/therapy-in-lisbon", label: "Therapy in Lisbon" }}
      />
      <section className="bg-linen py-16 sm:py-24">
        <Container>
          <SplitSection
            title="A consistent therapeutic space for mobile lives."
            points={[
              "Useful for remote workers, frequent travellers and international clients.",
              "Sessions from a private, quiet space with a reliable connection.",
              "Clear boundaries and thoughtful setup for confidential online work."
            ]}
          >
            <p>
              Online therapy can make sustained work possible when your life does not fit neatly into
              one place. For many clients, the continuity matters: a regular hour where your inner life
              is not squeezed between time zones, relocations or professional demands.
            </p>
            <p>
              Online work is discussed carefully at the start so the format, privacy and practical
              arrangements are suitable for what you need.
            </p>
          </SplitSection>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
