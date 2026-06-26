import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/metadata";
import { pageSummaries, site } from "@/data/site";

const summary = pageSummaries["/terms"];

export const metadata = createMetadata({
  title: summary.title,
  description: summary.description,
  path: "/terms"
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Website terms."
        description="Practical terms for using the Pathfinder Therapy website. This placeholder content should be reviewed before launch."
      />
      <section className="bg-linen py-16 sm:py-24">
        <Container className="max-w-3xl space-y-10 text-pretty text-base leading-8 text-ink/70">
          <section>
            <h2 className="serif text-3xl text-ink">Website information</h2>
            <p className="mt-4">
              The information on this website is provided for general orientation and does not replace
              an individual consultation or therapy agreement.
            </p>
          </section>
          <section>
            <h2 className="serif text-3xl text-ink">Enquiries</h2>
            <p className="mt-4">
              Sending an enquiry does not create a therapeutic relationship. Therapy begins only after
              mutual agreement, practical arrangements and relevant consent documents are complete.
            </p>
          </section>
          <section>
            <h2 className="serif text-3xl text-ink">Urgent support</h2>
            <p className="mt-4">
              Pathfinder Therapy is not an emergency service. If you are at immediate risk or need
              urgent support, contact local emergency services or go to the nearest emergency
              department.
            </p>
          </section>
          <section>
            <h2 className="serif text-3xl text-ink">Contact</h2>
            <p className="mt-4">
              Questions about these terms can be sent to <a className="font-semibold underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </section>
        </Container>
      </section>
    </>
  );
}
