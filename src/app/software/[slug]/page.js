import { notFound } from "next/navigation";
import { getSoftwareBySlug } from "../softwaredata/softwaredata";
import SoftwareDetailClient from "./Softwaredetailclient";

// ── Dynamic SEO Meta Tags (har software ke liye alag) ────────
export async function generateMetadata({ params }) {
  // Next.js 15 — params ko await karo
  const { slug } = await params;
  const software = getSoftwareBySlug(slug);

  if (!software) {
    return {
      title: "Software Not Found",
      description: "The requested software page could not be found.",
    };
  }

  return {
    // ── Basic Meta ───────────────────────────────────────
    title: software.seoTitle,
    description: software.seoDescription,
    keywords: software.seoKeywords,

    // ── Canonical URL ────────────────────────────────────
    alternates: {
      canonical: software.canonical,
    },

    // ── Open Graph (Facebook / LinkedIn) ─────────────────
    openGraph: {
      title: software.openGraph.title,
      description: software.openGraph.description,
      url: software.openGraph.url,
      type: software.openGraph.type,
      siteName: software.openGraph.siteName,
      images: [
        {
          url: software.openGraph.image,
          width: 1200,
          height: 630,
          alt: software.openGraph.title,
        },
      ],
    },

    // ── Twitter Card ─────────────────────────────────────
    twitter: {
      card: software.twitterCard.card,
      title: software.twitterCard.title,
      description: software.twitterCard.description,
      images: [software.twitterCard.image],
      site: software.twitterCard.site,
    },
  };
}

// ── JSON-LD Schema inject karna ───────────────────────────────
function SoftwareSchema({ schema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── React components ko plain object mein convert karna ───────
// icon aur feature.icon React components hain — Server se Client
// mein directly pass nahi ho sakte. String naam bhejo, Client
// mein ICON_MAP se actual component lo.
function sanitizeSoftware(software) {
  return {
    ...software,

    // Top-level icon → string
    icon:
      typeof software.icon === "string"
        ? software.icon
        : (software.icon?.displayName ?? software.icon?.name ?? "Monitor"),

    // Feature icons → string
    features: software.features?.map((f) => ({
      ...f,
      icon:
        typeof f.icon === "string"
          ? f.icon
          : (f.icon?.displayName ?? f.icon?.name ?? "Zap"),
    })),
  };
}

// ── Main Page Component (Server) ─────────────────────────────
export default async function SoftwareDetailPage({ params }) {
  const { slug } = await params;
  const software = getSoftwareBySlug(slug);

  if (!software) {
    notFound();
  }

  // React components hata ke plain serializable object banao
  const plainSoftware = sanitizeSoftware(software);

  return (
    <>
      {/* JSON-LD Structured Data — server side inject hoga */}
      <SoftwareSchema schema={plainSoftware.schema} />

      {/* Baaki sara UI Client Component mein */}
      <SoftwareDetailClient software={plainSoftware} />
    </>
  );
}
