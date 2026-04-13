// import Image from "next/image";

// import Hero from "./Components/landingpagecomponents/Hero";
// import About from "./Components/landingpagecomponents/About";
// import Services from "./Components/landingpagecomponents/Services";
// import WhyChooseUs from "./Components/landingpagecomponents/WhyChooseUs";
// import Software from "./Components/landingpagecomponents/Software";
// import BusinessIntro from "./Components/landingpagecomponents/BusinessIntro";
// import Packages from "./Components/landingpagecomponents/Packages";
// import Clients from "./Components/landingpagecomponents/Clients";
// import Testimonials from "./Components/landingpagecomponents/testimonials/GoogleReview";
// import ContactSection from "./Components/landingpagecomponents/ContactSection";
// import Faqsection from "./Components/landingpagecomponents/Faqsection";
// import ProfileDownload from "./Components/landingpagecomponents/ProfileDownload";
// import CustomReview from "./Components/landingpagecomponents/CustomReview";

// export default function Home() {
//   return (
//     <main suppressHydrationWarning>
//       <Hero />
//       <About />
//       <Software />
//       <WhyChooseUs />
//       <Services />
//       <BusinessIntro />
//       <Packages />
//       <Clients />
//       <ProfileDownload />
//       <Testimonials />
//       <CustomReview />
//       <ContactSection />
//       <Faqsection />
//     </main>
//   );
// }


import Image from "next/image";
import { Metadata } from "next";

import Hero from "./Components/landingpagecomponents/Hero";
import About from "./Components/landingpagecomponents/About";
import Services from "./Components/landingpagecomponents/Services";
import WhyChooseUs from "./Components/landingpagecomponents/WhyChooseUs";
import Software from "./Components/landingpagecomponents/Software";
import BusinessIntro from "./Components/landingpagecomponents/BusinessIntro";
import Packages from "./Components/landingpagecomponents/Packages";
import Clients from "./Components/landingpagecomponents/Clients";
import Testimonials from "./Components/landingpagecomponents/testimonials/GoogleReview";
import ContactSection from "./Components/landingpagecomponents/ContactSection";
import Faqsection from "./Components/landingpagecomponents/Faqsection";
import ProfileDownload from "./Components/landingpagecomponents/ProfileDownload";
import CustomReview from "./Components/landingpagecomponents/CustomReview";

// ─── SEO Metadata ─────────────────────────────────────────────
export const metadata = {
  title: "Kanak Drishti Infotech – Software Development & Digital Marketing",
  description:
    "Kanak Drishti Infotech is a leading software development and digital marketing company. We deliver custom web, app, SEO, SMO, and branding solutions that drive measurable growth.",
  keywords:
    "software development company, digital marketing agency, web development, SEO services, app development, ERP CRM, branding agency, Noida, India",
  alternates: {
    canonical: "https://yourdomain.com",
  },
  openGraph: {
    title: "Kanak Drishti Infotech – Digital Innovation & IT Solutions",
    description:
      "Transform your business with our custom software, result-driven marketing, and scalable IT solutions. Trusted by 500+ clients.",
    url: "https://yourdomain.com",
    type: "website",
    siteName: "Kanak Drishti Infotech",
    images: [
      {
        url: "https://yourdomain.com/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Kanak Drishti Infotech Homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanak Drishti Infotech – Software & Marketing Experts",
    description:
      "Custom development, SEO, SMO, PPC, and branding – all under one roof. Get your free consultation today.",
    images: ["https://yourdomain.com/og-home.jpg"],
    site: "@YourTwitterHandle",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── JSON-LD Schema (Organization + WebSite) ──────────────────
const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://yourdomain.com/#organization",
      name: "Kanak Drishti Infotech",
      url: "https://yourdomain.com",
      logo: "https://yourdomain.com/logo.png",
      foundingDate: "2014",
      description:
        "Leading software development and digital marketing company in India.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Noida",
        addressRegion: "UP",
        addressCountry: "India",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-XXXXXXXXXX",
        contactType: "customer service",
        email: "info@kanakdrishti.com",
      },
      sameAs: [
        "https://www.facebook.com/kanakdrishti",
        "https://www.linkedin.com/company/kanakdrishti",
        "https://twitter.com/kanakdrishti",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://yourdomain.com/#website",
      url: "https://yourdomain.com",
      name: "Kanak Drishti Infotech",
      description:
        "Custom software development and digital marketing services.",
      publisher: { "@id": "https://yourdomain.com/#organization" },
    },
  ],
};

function HomeSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
    />
  );
}

// ─── Main Page Component ──────────────────────────────────────
export default function Home() {
  return (
    <>
      <HomeSchema />
      <main suppressHydrationWarning>
        <Hero />
        <About />
        <Software />
        <WhyChooseUs />
        <Services />
        <BusinessIntro />
        <Packages />
        <Clients />
        <ProfileDownload />
        <Testimonials />
        <CustomReview />
        <ContactSection />
        <Faqsection />
      </main>
    </>
  );
}