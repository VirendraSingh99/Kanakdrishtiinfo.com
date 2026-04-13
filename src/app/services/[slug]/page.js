// "use client";

// import { notFound } from "next/navigation";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowRight, ChevronDown, MessageSquare, Calendar } from "lucide-react";
// import { useState } from "react";
// import { useParams } from "next/navigation"; // ← Yeh line add ki hai
// import Head from "next/head";

// // Correct Import
// import { getServiceBySlug } from "../servicesData/page";

// const BRAND = "#49BCE3";
// const BRAND_LIGHT = "#E8F7FC";

// export default function ServiceDetailPage() {
//   const params = useParams();
//   const slug = params?.slug;

//   const service = getServiceBySlug(slug);

//   if (!service) {
//     notFound();
//   }

//   const Icon = service.icon;
//   const [openFaq, setOpenFaq] = useState(null);

//   return (
//     <main className="w-full bg-white text-slate-900 overflow-x-hidden">
//       <Head>
//         <title>{service.seoTitle}</title>
//         <meta name="description" content={service.seoDescription} />
//         <meta name="keywords" content={service.seoKeywords} />
//         <link rel="canonical" href={service.canonical} />

//         {/* Open Graph */}
//         <meta property="og:title" content={service.openGraph.title} />
//         <meta
//           property="og:description"
//           content={service.openGraph.description}
//         />
//         <meta property="og:url" content={service.openGraph.url} />
//         <meta property="og:image" content={service.openGraph.image} />
//         <meta property="og:type" content={service.openGraph.type} />
//         <meta property="og:site_name" content={service.openGraph.siteName} />

//         {/* Twitter Card */}
//         <meta name="twitter:card" content={service.twitterCard.card} />
//         <meta name="twitter:title" content={service.twitterCard.title} />
//         <meta
//           name="twitter:description"
//           content={service.twitterCard.description}
//         />
//         <meta name="twitter:image" content={service.twitterCard.image} />
//         <meta name="twitter:site" content={service.twitterCard.site} />

//         {/* JSON-LD Schema */}
//         <script type="application/ld+json">
//           {JSON.stringify(service.schema)}
//         </script>
//       </Head>

//       {/* ── HERO ── */}
//       <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a5f] via-[#13387a] to-[#0f2a5f]" />
//         <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-16">
//           {/* Title */}
//           <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-5">
//             {service.title}
//           </h1>

//           {/* Description */}
//           <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-5xl mx-auto mb-8">
//             {service.heroDescription}
//           </p>

//           {/* CTA */}
//           <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
//             <Link
//               href="/contact"
//               className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#49BCE3] hover:bg-[#3aa6cc] text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-xl hover:scale-105 active:scale-95"
//             >
//               Get a Free Consultation
//               <ArrowRight size={16} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── FEATURES ── */}
//       <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
//         <div className="text-center mb-14">
//           <span className="text-[#49BCE3] font-semibold uppercase tracking-wider text-sm">
//             Key Benefits
//           </span>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
//             What You Get with Our {service.title}
//           </h2>
//           <div className="h-1.5 w-20 bg-[#49BCE3] mx-auto rounded-full" />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {service.features.map((feature, i) => {
//             const FIcon = feature.icon;
//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.35, delay: i * 0.07 }}
//                 className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_8px_32px_-10px_rgba(0,0,0,0.07)] hover:border-[#49BCE3]/30 hover:shadow-[0_16px_48px_-10px_rgba(73,188,227,0.18)] transition-all duration-300 hover:-translate-y-1"
//               >
//                 <div
//                   className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#49BCE3]"
//                   style={{ backgroundColor: BRAND_LIGHT }}
//                 >
//                   <FIcon
//                     size={20}
//                     strokeWidth={1.5}
//                     className="transition-colors duration-300 group-hover:text-white"
//                     style={{ color: BRAND }}
//                   />
//                 </div>
//                 <h3 className="text-[15px] font-extrabold text-gray-900 group-hover:text-[#49BCE3] transition-colors mb-2 leading-snug">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-500 text-[12px] leading-relaxed">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </section>

//       {/* ── HOW IT WORKS ── */}
//       <section className="bg-white py-10">
//         <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//           <div className="text-center mb-14">
//             <span className="text-[#49BCE3] font-semibold uppercase tracking-wider text-sm">
//               Our Process
//             </span>
//             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
//               How We Deliver Results
//             </h2>
//             <div className="h-1.5 w-20 bg-[#49BCE3] mx-auto rounded-full" />
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {service.process.map((step, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.35, delay: i * 0.1 }}
//                 className="relative bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
//               >
//                 <div className="absolute -top-4 left-6 bg-[#49BCE3] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
//                   Step {step.step}
//                 </div>
//                 <p className="text-5xl font-black text-[#49BCE3]/10 leading-none mb-3 mt-2">
//                   {step.step}
//                 </p>
//                 <h3 className="text-[15px] font-extrabold text-gray-900 mb-2">
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-500 text-[12px] leading-relaxed">
//                   {step.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── FAQ ── */}
//       <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
//         <div className="text-center mb-14">
//           <span className="text-[#49BCE3] font-semibold uppercase tracking-wider text-sm">
//             FAQs
//           </span>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
//             Frequently Asked Questions
//           </h2>
//           <div className="h-1.5 w-20 bg-[#49BCE3] mx-auto rounded-full" />
//         </div>

//         <div className="space-y-4">
//           {service.faqs.map((faq, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.3, delay: i * 0.07 }}
//               className="border border-gray-200 rounded-2xl overflow-hidden"
//             >
//               <button
//                 onClick={() => setOpenFaq(openFaq === i ? null : i)}
//                 className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
//               >
//                 <span className="text-[14px] font-bold text-slate-900 pr-4">
//                   {faq.question}
//                 </span>
//                 <ChevronDown
//                   size={18}
//                   className={`flex-shrink-0 text-[#49BCE3] transition-transform duration-300 ${
//                     openFaq === i ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               <div
//                 className={`overflow-hidden transition-all duration-300 ${
//                   openFaq === i ? "max-h-60 pb-5" : "max-h-0"
//                 }`}
//               >
//                 <p className="px-6 text-gray-500 text-[13px] leading-relaxed">
//                   {faq.answer}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ── CTA ── */}
//       <section className="bg-gradient-to-r from-[#0f2a5f] via-[#13387a] to-[#0f2a5f] py-14 md:py-16 relative overflow-hidden">
//         <div className="absolute inset-0 bg-[#49BCE3]/10 blur-3xl opacity-30" />
//         <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
//             Ready to Get Started with{" "}
//             <span className="text-[#49BCE3]">{service.title}?</span>
//           </h2>
//           <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
//             Let's talk about your goals and build a strategy that delivers real,
//             measurable results for your business.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
//             <Link
//               href="/contact"
//               className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#49BCE3] hover:bg-[#3aa8cf] text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-xl hover:scale-105 active:scale-95"
//             >
//               Talk to Our Team
//               <MessageSquare size={18} />
//             </Link>
//             <Link
//               href="/quote"
//               className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all backdrop-blur-md"
//             >
//               Request a Quote
//               <Calendar size={18} />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// ─────────────────────────────────────────────────────────────
// page.js  →  Server Component (App Router)
// FIX: icon (React component) ko Server → Client pass nahi kar
//      sakte. Isliye service object se icon hata ke sirf
//      iconName (string) pass karo. Client mein map karenge.
// ─────────────────────────────────────────────────────────────

import { notFound } from "next/navigation";
import { getServiceBySlug } from "../serviceData";
import ServiceDetailClient from "./ServiceDetailClient";

// ── Dynamic SEO Meta Tags ─────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service page could not be found.",
    };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.seoKeywords,
    alternates: {
      canonical: service.canonical,
    },
    openGraph: {
      title: service.openGraph.title,
      description: service.openGraph.description,
      url: service.openGraph.url,
      type: service.openGraph.type,
      siteName: service.openGraph.siteName,
      images: [
        {
          url: service.openGraph.image,
          width: 1200,
          height: 630,
          alt: service.openGraph.title,
        },
      ],
    },
    twitter: {
      card: service.twitterCard.card,
      title: service.twitterCard.title,
      description: service.twitterCard.description,
      images: [service.twitterCard.image],
      site: service.twitterCard.site,
    },
  };
}

// ── JSON-LD Schema ────────────────────────────────────────────
function ServiceSchema({ schema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── Sanitize: React components ko Client mein pass nahi kar sakte
// icon aur feature.icon dono React components hain — string mein
// convert karo yahan, Client mein naam se map karenge
function sanitizeService(service) {
  return {
    ...service,

    // Service-level icon — agar string hai to waise hi, agar
    // component hai to uska displayName / name nikalo
    icon:
      typeof service.icon === "string"
        ? service.icon
        : service.icon?.displayName ?? service.icon?.name ?? "Globe",

    // Feature icons bhi same problem — string mein convert karo
    features: service.features.map((f) => ({
      ...f,
      icon:
        typeof f.icon === "string"
          ? f.icon
          : f.icon?.displayName ?? f.icon?.name ?? "Zap",
    })),
  };
}

// ── Main Page Component ───────────────────────────────────────
export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // React components hata ke plain object banao
  const plainService = sanitizeService(service);

  return (
    <>
      <ServiceSchema schema={plainService.schema} />
      <ServiceDetailClient service={plainService} />
    </>
  );
}