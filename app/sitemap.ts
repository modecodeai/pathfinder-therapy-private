import type { MetadataRoute } from "next";
import { pageSummaries, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", ...Object.keys(pageSummaries)];

  return routes.map((route) => ({
    url: new URL(route, site.url).toString()
  }));
}
