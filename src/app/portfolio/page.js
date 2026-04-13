// "use client";
// import Link from "next/link";
// import React, { useState, useEffect, useRef } from "react";
// import { ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";

// // ==========================================
// // 1. DATA SECTION (Logic)
// // ==========================================
// const clients = [
//   { id: 1, src: "/clients/indianoil.png", alt: "INDIAN OIL" },
//   { id: 2, src: "/clients/volkswagen.png", alt: "Volkswagen" },
//   { id: 3, src: "/clients/ficci.png", alt: "FICCI" },
//   { id: 4, src: "/clients/delhicorporation.png", alt: "Delhi Corporation" },
//   { id: 5, src: "/clients/LLoyd.png", alt: "LLOYD" },
//   { id: 6, src: "/clients/chachabus.png", alt: "CHACHA BUS" },
//   { id: 7, src: "/clients/jims.png", alt: "JIMS" },
//   { id: 8, src: "/clients/allhabadbank.png", alt: "ALLHABAD BANK" },
//   { id: 9, src: "/clients/ghumakkermasti.png", alt: "GHUMAKKER MASTI" },
//   { id: 10, src: "/clients/lalapaisa.png", alt: "LALA PAISA" },
//   { id: 11, src: "/clients/harmed.png", alt: "harmed" },
//   { id: 12, src: "/clients/ayurtree.png", alt: "Ayurtree" },
// ];

// const projects = [
//   {
//     id: 1,
//     name: "Décor N Company",
//     image:
//       "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600",
//     desc: "A premium interior design and furniture storefront.",
//   },
//   {
//     id: 2,
//     name: "Aripan India",
//     image:
//       "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600",
//     desc: "National Excellence Award winning design platform.",
//   },
//   {
//     id: 3,
//     name: "The Capital City",
//     image:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600",
//     desc: "Modern portal for affordable luxury plots.",
//   },
// ];

// // ==========================================
// // 2. CHILD COMPONENT: Project Card
// // ==========================================
// const ProjectCard = ({ project, visible }) => (
//   <div
//     className={`group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-700 transform ${
//       visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//     } border border-gray-100 p-5`}
//   >
//     <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-50 mb-6 border border-gray-100">
//       <img
//         src={project.image}
//         alt={project.name}
//         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//       />
//     </div>
//     <div className="text-center">
//       <h3 className="text-2xl font-black text-[#2D2D2D] mb-2">
//         {project.name}
//       </h3>
//       <p className="text-[#8E8E8E] text-sm mb-5 leading-relaxed">
//         {project.desc}
//       </p>
//       <Link
//         href="#"
//         className="inline-flex items-center gap-2 text-[#49BCE3] font-bold text-sm hover:underline"
//       >
//         View Live Project <ArrowUpRight className="w-4 h-4" />
//       </Link>
//     </div>
//   </div>
// );

// // ==========================================
// // 3. MAIN PAGE COMPONENT
// // ==========================================
// export default function PortfolioPage() {
//   const [visibleCards, setVisibleCards] = useState(new Set());
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setVisibleCards(
//               (prev) => new Set([...prev, entry.target.dataset.id]),
//             );
//           }
//         });
//       },
//       { threshold: 0.1 },
//     );
//     cardsRef.current.forEach((el) => el && observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   const LogoRow = ({ direction = "normal" }) => (
//     <div
//       className={`flex gap-8 w-max ${direction === "normal" ? "animate-infinite-scroll" : "animate-infinite-scroll-reverse"}`}
//     >
//       {[...clients, ...clients, ...clients].map((client, i) => (
//         <div
//           key={i}
//           className="flex-none w-40 h-24 flex items-center justify-center p-4"
//         >
//           <img
//             src={client.src}
//             alt={client.alt}
//             className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform hover:scale-110"
//           />
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="bg-white min-h-screen font-sans overflow-x-hidden">
//       {/* --- HERO SECTION --- */}
//       <section className="relative w-full py-12 lg:py-20 overflow-hidden bg-gradient-to-r from-[#0f2a5f] via-[#13387a] to-[#0f2a5f]">
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#49BCE3] rounded-full blur-[100px]" />
//           <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-500 rounded-full blur-[100px]" />
//         </div>

//         <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
//           <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4 tracking-tight">
//             Showcasing Our Work & Trusted Partnerships
//           </h1>

//           <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
//             Explore a collection of our successful projects and collaborations.
//             At Kanak Drishti Infotech, we take pride in delivering impactful
//             digital solutions while building long-term partnerships with
//             businesses across various industries.
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
//             <Link
//               href="/contact"
//               className="w-full sm:w-auto bg-[#49BCE3] hover:bg-[#3aa6cc] text-white px-8 py-3 rounded-xl font-bold shadow-lg transition-all hover:scale-105 active:scale-95"
//             >
//               Become a Partner
//             </Link>

//             <Link
//               href="#projects"
//               className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-xl font-bold border border-white/20 transition-all"
//             >
//               View Portfolio
//             </Link>
//           </div>
//         </div>
//       </section>

//       <section className="bg-white py-16 md:py-24 overflow-hidden font-sans">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* --- Heading Section (Ab upar aur full width hai) --- */}
//           <div className="w-full mb-12 md:mb-16">
//             <h2 className="text-[#2D2D2D] text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight tracking-tight">
//               Kanak Drishti's Valued Portfolio Driving Growth
//             </h2>
//           </div>

//           {/* --- Content Grid --- */}
//           <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
//             {/* Left Content Column (Paragraphs) */}
//             <div className="lg:w-1/2 space-y-8">
//               <div className="space-y-6 text-[#2D2D2D]/80 text-lg md:text-xl leading-relaxed">
//                 <p>
//                   At{" "}
//                   <strong className="text-[#2D2D2D]">
//                     Kanak Drishti Infotech
//                   </strong>
//                   , we specialize in creating powerful digital ecosystems. Our
//                   expert team collaborates with businesses across diverse global
//                   markets, turning complex challenges into scalable,
//                   high-performance technology solutions that deliver.
//                 </p>
//                 <p>
//                   Since our inception, we have empowered brands to dramatically
//                   strengthen their online presence. Through a strategic blend of
//                   thoughtful SEO, targetted SEM, and custom, modern web
//                   development, our focus remains on providing measurable results
//                   and long-term digital excellence for every partner.
//                 </p>
//               </div>

//               <div className="pt-6 flex flex-wrap gap-4">
//                 <button className="bg-[#49BCE3] hover:bg-[#3aa6cc] text-white px-10 py-5 rounded-2xl font-bold shadow-lg shadow-[#49BCE3]/20 cursor-pointer transition-all flex items-center gap-3 group text-lg active:scale-95">
//                   Request Free Consultation
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
//                 </button>
//               </div>
//             </div>

//             {/* Right Visual Column (Image) */}
//             <div className="lg:w-1/2 relative mt-12 lg:mt-0">
//               <div className="relative z-10">
//                 <img
//                   src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800"
//                   alt="Modern Team Collaboration"
//                   className="rounded-[40px] shadow-2xl aspect-[4/3] object-cover hover:scale-[1.02] transition-transform duration-500 ease-in-out grayscale-[20%] hover:grayscale-0 border border-gray-100"
//                 />
//               </div>

//               {/* Optional: Background Glow taaki image heavy dikhe */}
//               <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#49BCE3]/10 rounded-full blur-3xl -z-10" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- CLIENTS SECTION (Infinite Scroll) --- */}
//       <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
//           <h2 className="text-3xl font-black text-[#2D2D2D]">
//             Trusted Partners
//           </h2>
//         </div>
//         <div className="flex flex-col gap-8">
//           <LogoRow direction="normal" />
//           <LogoRow direction="reverse" />
//         </div>
//       </section>

//       {/* --- PROJECTS GRID --- */}
//       <section className="py-24 px-6 max-w-7xl mx-auto" id="projects">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {projects.map((project, i) => (
//             <div
//               key={project.id}
//               ref={(el) => (cardsRef.current[i] = el)}
//               data-id={project.id}
//             >
//               <ProjectCard
//                 project={project}
//                 visible={visibleCards.has(String(project.id))}
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- ANIMATIONS --- */}
//       <style jsx global>{`
//         @keyframes infinite-scroll {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-33.33%);
//           }
//         }
//         @keyframes infinite-scroll-reverse {
//           from {
//             transform: translateX(-33.33%);
//           }
//           to {
//             transform: translateX(0);
//           }
//         }
//         .animate-infinite-scroll {
//           animation: infinite-scroll 40s linear infinite;
//         }
//         .animate-infinite-scroll-reverse {
//           animation: infinite-scroll-reverse 40s linear infinite;
//         }
//       `}</style>
//       <style jsx global>{`
//         @keyframes float-slow {
//           0%,
//           100% {
//             transform: translateY(0) translateX(0);
//           }
//           50% {
//             transform: translateY(-12px) translateX(3px);
//           }
//         }
//         .animate-float-slow {
//           animation: float-slow 5s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

import { notFound } from "next/navigation";
import PortfolioClient from "../portfolio/PortfolioClient"; // adjust path if needed

// ── Static metadata for this page ─────────────────────────────────
export const metadata = {
  title: "Portfolio & Trusted Partners | Kanak Drishti Infotech",
  description:
    "Explore our successful projects and trusted partnerships. We deliver impactful digital solutions – from web development to SEO and branding.",
  keywords:
    "portfolio, digital agency portfolio, web development projects, SEO case studies, branding portfolio, trusted partners, Kanak Drishti Infotech",
  alternates: {
    canonical: "https://yourdomain.com/portfolio",
  },
  openGraph: {
    title: "Portfolio & Trusted Partners | Kanak Drishti Infotech",
    description:
      "See how we've helped businesses grow with custom web development, SEO, SMO, and creative design. Real projects, real results.",
    url: "https://yourdomain.com/portfolio",
    type: "website",
    siteName: "Kanak Drishti Infotech",
    images: [
      {
        url: "https://yourdomain.com/og-portfolio.jpg", // replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: "Kanak Drishti Infotech Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Trusted Partners | Kanak Drishti Infotech",
    description:
      "Explore our successful projects and collaborations – web, SEO, branding, and more.",
    images: ["https://yourdomain.com/og-portfolio.jpg"],
    site: "@YourTwitterHandle",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ── JSON-LD Schema (CollectionPage) ─────────────────────────────
const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Kanak Drishti Infotech Portfolio",
  description:
    "Showcasing our successful digital projects and trusted client partnerships across web development, SEO, branding, and creative design.",
  url: "https://yourdomain.com/portfolio",
  about: {
    "@type": "Organization",
    name: "Kanak Drishti Infotech",
    url: "https://yourdomain.com",
    logo: "https://yourdomain.com/logo.png",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Décor N Company",
        description: "A premium interior design and furniture storefront.",
        url: "#",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Aripan India",
        description: "National Excellence Award winning design platform.",
        url: "#",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "The Capital City",
        description: "Modern portal for affordable luxury plots.",
        url: "#",
      },
    ],
  },
};

function PortfolioSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
    />
  );
}

// ── Main Page Component ─────────────────────────────────────────
export default function PortfolioPage() {
  // If you ever need to handle missing data, you could add a check
  // but portfolio is static, so no notFound() needed.

  return (
    <>
      <PortfolioSchema />
      <PortfolioClient />
    </>
  );
}
