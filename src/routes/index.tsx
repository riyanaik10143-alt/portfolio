import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Riya Naik — Graphic Design & Content Creator";
const DESC =
  "Monochrome, luxury-streetwear inspired portfolio of Riya Naik: branding, fashion campaigns, mockups and social media design.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// The portfolio is a standalone single-file Bootstrap 5 site served from
// /portfolio.html — the home route renders it full-screen.
function Index() {
  return (
    <main className="min-h-screen bg-black">
      <h1 className="sr-only">{TITLE}</h1>
      <iframe
        src="/portfolio.html"
        title={TITLE}
        className="h-screen w-screen border-0"
      />
    </main>
  );
}
