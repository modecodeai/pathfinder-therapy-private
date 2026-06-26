import type { Metadata } from "next";
import { site } from "@/data/site";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata({ title, description, path }: PageMetadata): Metadata {
  const url = new URL(path, site.url).toString();
  const fullTitle = title === site.name ? title : `${title} | ${site.name}`;

  return {
    title: {
      absolute: fullTitle
    },
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type: "website",
      images: [
        {
          url: "/images/pathfinder-therapy-lisbon-path.png",
          width: 1774,
          height: 887,
          alt: "A quiet natural path in warm morning light"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description
    }
  };
}
