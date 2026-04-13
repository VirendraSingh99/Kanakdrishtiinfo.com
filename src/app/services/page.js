

import ServicesClient from "./ServicesClient";

export const metadata = {
  title:
    "Digital Services – Website Development, SEO, Marketing | Kanak Drishti Infotech",
  description:
    "Kanak Drishti Infotech offers website development, e-commerce, mobile apps, custom software, SEO, SMO, performance marketing, and 360° digital marketing. Drive real growth with our expert team.",
  keywords:
    "website development, e-commerce website, mobile application, custom software, digital marketing, SEO, SMO, performance marketing, content marketing, email marketing, India, Noida",
  alternates: {
    canonical: "https://yourdomain.com/services",
  },
  openGraph: {
    title: "Digital Services – Website, Apps, Marketing | Kanak Drishti Infotech",
    description:
      "Explore our full range of digital solutions: custom development, scalable software, and data-driven marketing to grow your business.",
    url: "https://yourdomain.com/services",
    type: "website",
    siteName: "Kanak Drishti Infotech",
    images: [
      {
        url: "https://yourdomain.com/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Kanak Drishti Infotech Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Services – Website, Apps, Marketing | Kanak Drishti Infotech",
    description:
      "From custom software to performance marketing – we deliver results. Get your free consultation today.",
    images: ["https://yourdomain.com/og-services.jpg"],
    site: "@YourTwitterHandle",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── JSON-LD Schema (WebPage + ItemList of Services) ──────────
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Our Digital Services",
  description:
    "Complete digital solutions including web development, mobile apps, custom software, and performance marketing.",
  url: "https://yourdomain.com/services",
  mainEntity: {
    "@type": "ItemList",
    name: "Services Offered",
    numberOfItems: 11,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Website Development",
        url: "https://yourdomain.com/services/website-development",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "E-Commerce Website",
        url: "https://yourdomain.com/services/e-commerce-website",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Mobile Application",
        url: "https://yourdomain.com/services/mobile-application",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Web Application",
        url: "https://yourdomain.com/services/web-application",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Customized Software",
        url: "https://yourdomain.com/services/customized-software",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "360° Digital Marketing",
        url: "https://yourdomain.com/services/360-digital-marketing",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Performance Marketing",
        url: "https://yourdomain.com/services/performance-marketing",
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "Content Marketing",
        url: "https://yourdomain.com/services/content-marketing",
      },
      {
        "@type": "ListItem",
        position: 9,
        name: "Email Marketing",
        url: "https://yourdomain.com/services/email-marketing",
      },
      {
        "@type": "ListItem",
        position: 10,
        name: "Search Engine Optimization",
        url: "https://yourdomain.com/services/search-engine-optimization",
      },
      {
        "@type": "ListItem",
        position: 11,
        name: "Social Media Optimization",
        url: "https://yourdomain.com/services/social-media-optimization",
      },
    ],
  },
};

function ServicesSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
    />
  );
}

export default function ServicesPage() {
  return (
    <>
      <ServicesSchema />
      <ServicesClient />
    </>
  );
}