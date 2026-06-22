import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/metadata";
import { pageSummaries, site } from "@/data/site";

const summary = pageSummaries["/privacy"];

export const metadata = createMetadata({
  title: summary.title,
  description: summary.description,
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy information."
        description="This page sets out placeholder privacy content for the Pathfinder Therapy website and should be reviewed before launch."
      />
      <section className="bg-linen py-16 sm:py-24">
        <Container className="max-w-3xl space-y-10 text-pretty text-base leading-8 text-ink/70">
          <section>
            <h2 className="serif text-3xl text-ink">Information you provide</h2>
            <p className="mt-4">
              If you contact Pathfinder Therapy, you may provide your name, email address, location,
              session preference and a brief description of what you are seeking support with.
            </p>
          </section>
          <section>
            <h2 className="serif text-3xl text-ink">How information is used</h2>
            <p className="mt-4">
              Information is used to respond to enquiries, arrange consultations and provide therapy
              services where agreed. Website analytics, if added later, should be configured with
              privacy and consent requirements in mind.
            </p>
          </section>
          <section>
            <h2 className="serif text-3xl text-ink">Confidentiality</h2>
            <p className="mt-4">
              Therapy enquiries and client information are treated with care. Limits to confidentiality
              and detailed data handling procedures should be explained in the therapy agreement before
              work begins.
            </p>
          </section>
          <section>
            <h2 className="serif text-3xl text-ink">Contact</h2>
            <p className="mt-4">
              For privacy questions, contact <a className="font-semibold underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </section>
        </Container>
      </section>
    </>
  );
}
