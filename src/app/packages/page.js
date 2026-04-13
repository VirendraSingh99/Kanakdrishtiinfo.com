// import Link from "next/link";
// import React from "react";

// // ─── SVG Icons ────────────────────────────────────────────────────────────────
// const Icons = {
//   brochure: (
//     <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
//       <rect
//         x="7"
//         y="4"
//         width="28"
//         height="38"
//         rx="3"
//         fill="#e8f7fc"
//         stroke="#49BCE3"
//         strokeWidth="2"
//       />
//       <rect x="12" y="12" width="14" height="2.5" rx="1.2" fill="#0f2a5f" />
//       <rect
//         x="12"
//         y="18"
//         width="18"
//         height="1.5"
//         rx="1"
//         fill="#49BCE3"
//         opacity="0.6"
//       />
//       <rect
//         x="12"
//         y="22"
//         width="18"
//         height="1.5"
//         rx="1"
//         fill="#49BCE3"
//         opacity="0.6"
//       />
//       <rect
//         x="12"
//         y="26"
//         width="13"
//         height="1.5"
//         rx="1"
//         fill="#49BCE3"
//         opacity="0.4"
//       />
//       <rect x="23" y="28" width="14" height="11" rx="2" fill="#0f2a5f" />
//       <text x="25.5" y="37" fontSize="7" fontWeight="bold" fill="#49BCE3">
//         AD
//       </text>
//     </svg>
//   ),
//   creative: (
//     <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
//       <circle
//         cx="24"
//         cy="24"
//         r="20"
//         fill="#e8f7fc"
//         stroke="#49BCE3"
//         strokeWidth="2"
//       />
//       <path
//         d="M16 32 C16 26 20 20 24 18 C28 20 32 26 32 32"
//         stroke="#0f2a5f"
//         strokeWidth="2"
//         strokeLinecap="round"
//       />
//       <circle cx="24" cy="15" r="3" fill="#49BCE3" />
//       <path
//         d="M18 32 h12"
//         stroke="#49BCE3"
//         strokeWidth="2"
//         strokeLinecap="round"
//       />
//     </svg>
//   ),
//   infographic: (
//     <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
//       <rect
//         x="4"
//         y="4"
//         width="40"
//         height="40"
//         rx="4"
//         fill="#e8f7fc"
//         stroke="#49BCE3"
//         strokeWidth="2"
//       />
//       <rect x="10" y="30" width="7" height="10" rx="1.5" fill="#0f2a5f" />
//       <rect x="20" y="22" width="7" height="18" rx="1.5" fill="#49BCE3" />
//       <rect
//         x="30"
//         y="14"
//         width="7"
//         height="26"
//         rx="1.5"
//         fill="#0f2a5f"
//         opacity="0.7"
//       />
//       <path
//         d="M10 26 L20 18 L30 22 L40 10"
//         stroke="#49BCE3"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeDasharray="2.5 2"
//       />
//     </svg>
//   ),
//   website: (
//     <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
//       <rect
//         x="4"
//         y="8"
//         width="40"
//         height="30"
//         rx="3"
//         fill="#e8f7fc"
//         stroke="#49BCE3"
//         strokeWidth="2"
//       />
//       <rect x="4" y="8" width="40" height="9" rx="3" fill="#0f2a5f" />
//       <circle cx="12" cy="12.5" r="2" fill="#49BCE3" />
//       <circle cx="19" cy="12.5" r="2" fill="#49BCE3" opacity="0.5" />
//       <circle cx="26" cy="12.5" r="2" fill="#49BCE3" opacity="0.3" />
//       <rect x="10" y="22" width="14" height="2.5" rx="1.2" fill="#0f2a5f" />
//       <rect
//         x="10"
//         y="27"
//         width="22"
//         height="1.5"
//         rx="1"
//         fill="#49BCE3"
//         opacity="0.5"
//       />
//       <rect
//         x="10"
//         y="31"
//         width="17"
//         height="1.5"
//         rx="1"
//         fill="#49BCE3"
//         opacity="0.4"
//       />
//       <rect
//         x="15"
//         y="38"
//         width="18"
//         height="5"
//         rx="2"
//         fill="#0f2a5f"
//         opacity="0.15"
//         stroke="#49BCE3"
//         strokeWidth="1.5"
//       />
//     </svg>
//   ),
//   ecommerce: (
//     <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
//       <rect
//         x="4"
//         y="8"
//         width="40"
//         height="32"
//         rx="3"
//         fill="#e8f7fc"
//         stroke="#49BCE3"
//         strokeWidth="2"
//       />
//       <path
//         d="M12 20 h7 l3 10 h11"
//         stroke="#0f2a5f"
//         strokeWidth="2"
//         strokeLinecap="round"
//       />
//       <circle cx="23" cy="33" r="2.5" fill="#49BCE3" />
//       <circle cx="31" cy="33" r="2.5" fill="#49BCE3" />
//       <path
//         d="M19 20 l2 7 h11 l2.5-7z"
//         fill="#0f2a5f"
//         opacity="0.15"
//         stroke="#0f2a5f"
//         strokeWidth="1.5"
//       />
//       <rect
//         x="30"
//         y="9"
//         width="10"
//         height="8"
//         rx="1.5"
//         fill="#49BCE3"
//         opacity="0.2"
//         stroke="#49BCE3"
//         strokeWidth="1.5"
//       />
//       <path
//         d="M33 13 h4 M35 11 v4"
//         stroke="#0f2a5f"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   ),
//   seo: (
//     <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
//       <circle
//         cx="21"
//         cy="21"
//         r="14"
//         fill="#e8f7fc"
//         stroke="#49BCE3"
//         strokeWidth="2"
//       />
//       <circle
//         cx="21"
//         cy="21"
//         r="8"
//         fill="none"
//         stroke="#0f2a5f"
//         strokeWidth="1.8"
//         strokeDasharray="3 2.5"
//       />
//       <path
//         d="M31 31 L42 42"
//         stroke="#0f2a5f"
//         strokeWidth="2.5"
//         strokeLinecap="round"
//       />
//       <text x="15" y="25" fontSize="7.5" fontWeight="800" fill="#0f2a5f">
//         SEO
//       </text>
//     </svg>
//   ),
//   smo: (
//     <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
//       <circle
//         cx="24"
//         cy="24"
//         r="20"
//         fill="#e8f7fc"
//         stroke="#49BCE3"
//         strokeWidth="2"
//       />
//       <circle cx="14" cy="22" r="4" fill="#0f2a5f" />
//       <circle cx="34" cy="14" r="4" fill="#49BCE3" />
//       <circle cx="34" cy="32" r="4" fill="#0f2a5f" />
//       <path
//         d="M18 22 L30 15.5 M18 24 L30 30.5"
//         stroke="#49BCE3"
//         strokeWidth="2"
//         strokeLinecap="round"
//       />
//     </svg>
//   ),
//   ads: (
//     <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
//       <rect
//         x="4"
//         y="12"
//         width="40"
//         height="24"
//         rx="3"
//         fill="#e8f7fc"
//         stroke="#49BCE3"
//         strokeWidth="2"
//       />
//       <path
//         d="M10 30 L19 18 L27 25 L35 14"
//         stroke="#0f2a5f"
//         strokeWidth="2.2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <circle cx="35" cy="14" r="2.5" fill="#49BCE3" />
//       <rect
//         x="28"
//         y="5"
//         width="12"
//         height="8"
//         rx="2"
//         fill="#0f2a5f"
//         opacity="0.15"
//         stroke="#49BCE3"
//         strokeWidth="1.5"
//       />
//       <text x="30" y="12" fontSize="6" fontWeight="bold" fill="#0f2a5f">
//         ADS
//       </text>
//     </svg>
//   ),
//   graphic: (
//     <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
//       <rect
//         x="4"
//         y="4"
//         width="40"
//         height="40"
//         rx="4"
//         fill="#e8f7fc"
//         stroke="#49BCE3"
//         strokeWidth="2"
//       />
//       <circle
//         cx="18"
//         cy="20"
//         r="7"
//         fill="#0f2a5f"
//         opacity="0.15"
//         stroke="#0f2a5f"
//         strokeWidth="2"
//       />
//       <circle cx="18" cy="20" r="2.5" fill="#49BCE3" />
//       <path
//         d="M23 28 L40 42"
//         stroke="#0f2a5f"
//         strokeWidth="2.8"
//         strokeLinecap="round"
//       />
//       <rect
//         x="27"
//         y="8"
//         width="13"
//         height="10"
//         rx="2"
//         fill="#49BCE3"
//         opacity="0.2"
//         stroke="#49BCE3"
//         strokeWidth="1.5"
//       />
//       <path
//         d="M30 13 h7 M33.5 10 v6"
//         stroke="#0f2a5f"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   ),
// };

// // ─── Why Choose Us Icons ──────────────────────────────────────────────────────
// const WhyIcons = {
//   result: (
//     <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
//       <circle cx="22" cy="22" r="22" fill="#0f2a5f" />
//       <path
//         d="M10 32 L17 22 L23 27 L32 14"
//         stroke="#49BCE3"
//         strokeWidth="2.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <circle cx="32" cy="14" r="3" fill="#49BCE3" />
//     </svg>
//   ),
//   support: (
//     <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
//       <circle cx="22" cy="22" r="22" fill="#0f2a5f" />
//       <circle cx="16" cy="19" r="4" stroke="#49BCE3" strokeWidth="2" />
//       <circle cx="28" cy="19" r="4" stroke="#49BCE3" strokeWidth="2" />
//       <path
//         d="M9 34c0-4.5 3-7 7-7h12c4 0 7 2.5 7 7"
//         stroke="#49BCE3"
//         strokeWidth="2"
//         strokeLinecap="round"
//       />
//     </svg>
//   ),
//   custom: (
//     <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
//       <circle cx="22" cy="22" r="22" fill="#0f2a5f" />
//       <circle cx="22" cy="22" r="6" stroke="#49BCE3" strokeWidth="2" />
//       <path
//         d="M22 10v4M22 30v4M10 22h4M30 22h4"
//         stroke="#49BCE3"
//         strokeWidth="2"
//         strokeLinecap="round"
//       />
//       <path
//         d="M14.5 14.5l2.8 2.8M26.7 26.7l2.8 2.8M14.5 29.5l2.8-2.8M26.7 17.3l2.8-2.8"
//         stroke="#49BCE3"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   ),
//   report: (
//     <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
//       <circle cx="22" cy="22" r="22" fill="#0f2a5f" />
//       <rect
//         x="11"
//         y="28"
//         width="5"
//         height="7"
//         rx="1"
//         fill="#49BCE3"
//         opacity="0.6"
//       />
//       <rect
//         x="19"
//         y="22"
//         width="5"
//         height="13"
//         rx="1"
//         fill="#49BCE3"
//         opacity="0.8"
//       />
//       <rect x="27" y="15" width="5" height="20" rx="1" fill="#49BCE3" />
//     </svg>
//   ),
//   pricing: (
//     <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
//       <circle cx="22" cy="22" r="22" fill="#0f2a5f" />
//       <circle cx="22" cy="22" r="9" stroke="#49BCE3" strokeWidth="2" />
//       <path
//         d="M22 14v2M22 28v2M17 18.5h6a2 2 0 010 4h-2a2 2 0 000 4h6"
//         stroke="#49BCE3"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//       />
//     </svg>
//   ),
//   track: (
//     <svg viewBox="0 0 44 44" fill="none" className="w-10 h-10">
//       <circle cx="22" cy="22" r="22" fill="#0f2a5f" />
//       <path
//         d="M22 11l3.1 6.3 7 .6-5 4.9 1.4 6.9L22 26.5l-6.5 3.2 1.4-6.9-5-4.9 7-.6z"
//         fill="#49BCE3"
//         opacity="0.3"
//         stroke="#49BCE3"
//         strokeWidth="1.8"
//         strokeLinejoin="round"
//       />
//     </svg>
//   ),
// };

// // ─── All 9 packages ───────────────────────────────────────────────────────────
// const packages = [
//   {
//     id: 1,
//     slug: "pdf-brochure-design",
//     title: "PDF Brochure Design Packages",
//     description:
//       "Our PDF Brochure Design Package offers a comprehensive solution for creating professional and visually appealing brochures that effectively communicate your brand's message. The package includes custom design for multi-page brochures, high-quality print-ready files, and unlimited revisions.",
//     image:
//       "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80",
//     icon: Icons.brochure,
//     tag: "Design",
//   },
//   {
//     id: 2,
//     slug: "creative-design",
//     title: "Creative Design Packages",
//     description:
//       "Our Creative Design Packages offer a range of design services to help you build a strong and unique brand identity. This package includes custom logo design, brand style guides, and business stationery such as business cards, letterheads, and envelopes.",
//     image:
//       "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
//     icon: Icons.creative,
//     tag: "Branding",
//   },
//   {
//     id: 3,
//     slug: "infographic-design",
//     title: "Infographic Design Packages",
//     description:
//       "Our Infographic Design Package provides a visually compelling way to convey complex information in an easy-to-understand format. The package includes custom-designed infographics that combine engaging graphics with data-driven insights for social media, reports, and presentations.",
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
//     icon: Icons.infographic,
//     tag: "Infographic",
//   },
//   {
//     id: 4,
//     slug: "website-development",
//     title: "Website Development Packages",
//     description:
//       "Our Website Development Service package provides everything you need to establish a strong online presence. From custom, responsive design tailored to your brand to secure hosting and a user-friendly content management system — we build websites that look great and perform even better.",
//     image:
//       "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
//     icon: Icons.website,
//     tag: "Development",
//   },
//   {
//     id: 5,
//     slug: "ecommerce-website-development",
//     title: "Ecommerce Website Development Packages",
//     description:
//       "Our E-commerce Website Development Service package is tailored to help businesses launch a seamless and professional online store. Featuring custom, responsive designs that reflect your brand, the package includes secure payment integration, product management, and order tracking.",
//     image:
//       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
//     icon: Icons.ecommerce,
//     tag: "Ecommerce",
//   },
//   {
//     id: 6,
//     slug: "seo",
//     title: "SEO Packages",
//     description:
//       "Our SEO Packages are designed to boost your website's visibility and drive organic traffic through proven optimization strategies. The package includes comprehensive keyword research, on-page optimization, meta tags, link building, and monthly performance reports.",
//     image:
//       "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&q=80",
//     icon: Icons.seo,
//     tag: "SEO",
//   },
//   {
//     id: 7,
//     slug: "smo",
//     title: "SMO Packages",
//     description:
//       "Our Social Media Optimization (SMO) Package is designed to strengthen your brand's presence across social media platforms and drive meaningful engagement. The package includes creating and optimizing profiles on major platforms, content strategy, and regular posting.",
//     image:
//       "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
//     icon: Icons.smo,
//     tag: "Social Media",
//   },
//   {
//     id: 8,
//     slug: "paid-campaign-advertising",
//     title: "Paid Campaign Advertising Packages",
//     description:
//       "Our Paid Campaign Advertising Package is designed to maximize your online reach and deliver measurable results through targeted advertising strategies. The package includes creating and managing ad campaigns across Google Ads, Meta Ads, and other platforms.",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
//     icon: Icons.ads,
//     tag: "Advertising",
//   },
//   {
//     id: 9,
//     slug: "graphic-designing",
//     title: "Graphic Designing Packages",
//     description:
//       "Our Graphic Designing Service Package offers creative and professional design solutions tailored to your brand's needs. The package includes creation of eye-catching logos, business cards, brochures, flyers, banners, and social media creatives.",
//     image:
//       "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
//     icon: Icons.graphic,
//     tag: "Graphic",
//   },
// ];

// // ─── Why Choose Us ────────────────────────────────────────────────────────────
// const whyUs = [
//   {
//     title: "Result-Driven Approach",
//     desc: "Every strategy we build is focused on delivering measurable results — more traffic, more leads, more revenue for your business.",
//     icon: WhyIcons.result,
//   },
//   {
//     title: "Dedicated Support",
//     desc: "Our team is always available to assist you at every stage, from planning to execution and beyond.",
//     icon: WhyIcons.support,
//   },
//   {
//     title: "Custom Solutions",
//     desc: "We don't believe in one-size-fits-all. Every solution is crafted specifically to meet your unique business goals.",
//     icon: WhyIcons.custom,
//   },
//   {
//     title: "Transparent Reporting",
//     desc: "Stay informed with detailed monthly reports so you always know exactly how your campaigns are performing.",
//     icon: WhyIcons.report,
//   },
//   {
//     title: "Affordable Pricing",
//     desc: "Premium quality services at competitive prices — we ensure maximum value for every rupee you invest.",
//     icon: WhyIcons.pricing,
//   },
//   {
//     title: "Proven Track Record",
//     desc: "With 500+ successful projects across industries, our portfolio speaks for itself.",
//     icon: WhyIcons.track,
//   },
// ];

// // ─── Package Card (full card clickable via slug) ───────────────────────────────
// const PackageCard = ({ pkg }) => (
//   <Link
//     href={`/packages/${pkg.slug}`}
//     className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden flex flex-col cursor-pointer"
//   >
//     {/* Image */}
//     <div className="relative overflow-hidden h-48 bg-[#e8f7fc]">
//       <img
//         src={pkg.image}
//         alt={pkg.title}
//         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//       />
//       {/* Overlay on hover */}
//       <div className="absolute inset-0 bg-[#0f2a5f] opacity-0 group-hover:opacity-25 transition-opacity duration-300" />
//       {/* Tag badge */}
//       <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white bg-[#0f2a5f] shadow">
//         {pkg.tag}
//       </span>
//     </div>

//     {/* Brand accent line */}
//     <div className="h-[3px] w-full bg-gradient-to-r from-[#0f2a5f] to-[#49BCE3]" />

//     {/* Card body */}
//     <div className="p-5 flex flex-col flex-1">
//       {/* Icon + Title row */}
//       <div className="flex items-center gap-3 mb-3">
//         <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#f0f8fd] border border-[#49BCE3]/20 flex items-center justify-center group-hover:bg-[#e8f7fc] transition-colors duration-200">
//           {pkg.icon}
//         </div>
//         <h3 className="text-[14px] font-bold text-[#0f2a5f] leading-snug group-hover:text-[#49BCE3] transition-colors duration-200">
//           {pkg.title}
//         </h3>
//       </div>

//       {/* Description */}
//       <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">
//         {pkg.description}
//       </p>

//       {/* CTA row */}
//       <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
//         <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#49BCE3] group-hover:text-[#0f2a5f] transition-colors duration-200">
//           View More
//           <svg
//             className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2.5"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M13 7l5 5m0 0l-5 5m5-5H6"
//             />
//           </svg>
//         </span>
//         <span className="w-8 h-8 rounded-full bg-[#e8f7fc] border border-[#49BCE3]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//           <svg
//             className="w-4 h-4 text-[#0f2a5f]"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2.5"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M7 17L17 7M7 7h10v10"
//             />
//           </svg>
//         </span>
//       </div>
//     </div>
//   </Link>
// );

// // ─── Main Page ────────────────────────────────────────────────────────────────
// const PackagesPage = () => {
//   return (
//     <div className="font-sans">
//       {/* ══════════ HERO ══════════ */}
//       <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
//         {/* BG gradient */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a5f] via-[#13387a] to-[#0f2a5f]" />
//         {/* Dot pattern */}

//         {/* Glow blobs */}
//         <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#49BCE3] opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
//         <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#49BCE3] opacity-10 blur-3xl translate-x-1/3 translate-y-1/3" />

//         <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-16">
//           <h1 className="text-3xl sm:text-4xl md:text-4xl font-extrabold leading-tight mb-5">
//             Flexible Pricing Plans for Every Business Stage
//           </h1>

//           <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
//             Choose from our carefully designed packages tailored to startups,
//             growing businesses, and enterprises. Get powerful digital solutions,
//             transparent pricing, and scalable services that align perfectly with
//             your business goals.
//           </p>

//           <Link
//             href="/contact"
//             className="inline-block bg-[#49BCE3] hover:bg-[#3aa6cc] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-[#49BCE3]/20 hover:shadow-[#49BCE3]/40 hover:scale-105 active:scale-95"
//           >
//             Get Custom Quote
//           </Link>
//         </div>
//       </section>

//       {/* ══════════ PACKAGES SECTION ══════════ */}
//       <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           {/* Section header */}
//           <div className="text-center mb-12">
//             <span className="inline-block text-xs font-bold text-[#49BCE3] uppercase tracking-[0.2em] mb-3">
//               What We Offer
//             </span>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0f2a5f] mb-3">
//               Our Service Packages
//             </h2>
//             <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
//               Explore our curated packages designed to fuel your business growth
//               with creativity, technology, and strategy.
//             </p>
//             {/* Double underline */}
//             <div className="mt-4 mx-auto flex items-center justify-center gap-1">
//               <div className="w-10 h-1 rounded-full bg-[#0f2a5f]" />
//               <div className="w-10 h-1 rounded-full bg-[#49BCE3]" />
//               <div className="w-5 h-1 rounded-full bg-[#49BCE3]/30" />
//             </div>
//           </div>

//           {/* 3-col grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {packages.map((pkg) => (
//               <PackageCard key={pkg.id} pkg={pkg} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══════════ WHY CHOOSE US ══════════ */}
//       <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-12">
//             <span className="inline-block text-xs font-bold text-[#49BCE3] uppercase tracking-[0.2em] mb-3">
//               Our Advantage
//             </span>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0f2a5f] mb-3">
//               Why Choose Kanak Drishti Infotech?
//             </h2>
//             <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
//               We combine expertise, dedication, and innovation to deliver
//               solutions that truly make a difference.
//             </p>
//             <div className="mt-4 mx-auto flex items-center justify-center gap-1">
//               <div className="w-10 h-1 rounded-full bg-[#0f2a5f]" />
//               <div className="w-10 h-1 rounded-full bg-[#49BCE3]" />
//               <div className="w-5 h-1 rounded-full bg-[#49BCE3]/30" />
//             </div>
//           </div>

//           {/* Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {whyUs.map((item, i) => (
//               <div
//                 key={i}
//                 className="group relative bg-[#f0f7fb] hover:bg-[#0f2a5f] rounded-2xl p-6 transition-all duration-300 border border-[#49BCE3]/20 hover:border-[#49BCE3]/50 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
//               >
//                 {/* BG glow */}
//                 <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-[#49BCE3] opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl" />
//                 {/* Icon */}
//                 <div className="mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-base font-bold text-[#0f2a5f] group-hover:text-white mb-2 transition-colors duration-300">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-gray-500 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PackagesPage;



import PackagesClient from "./PackagesClient";

export const metadata = {
  title:
    "Packages – Website Development, SEO, SMO & More | Kanak Drishti Infotech",
  description:
    "Explore our flexible service packages: website development, e-commerce, SEO, SMO, graphic design, brochure design, and more. Tailored for startups to enterprises.",
  keywords:
    "service packages, website development packages, SEO packages, SMO packages, graphic design packages, e-commerce packages, brochure design, infographic design, India, Noida",
  alternates: {
    canonical: "https://yourdomain.com/packages",
  },
  openGraph: {
    title: "Packages – Website Development, SEO, SMO & More | Kanak Drishti Infotech",
    description:
      "Choose from our carefully designed packages – custom solutions for every business stage. Get a free quote today.",
    url: "https://yourdomain.com/packages",
    type: "website",
    siteName: "Kanak Drishti Infotech",
    images: [
      {
        url: "https://yourdomain.com/og-packages.jpg",
        width: 1200,
        height: 630,
        alt: "Kanak Drishti Infotech Service Packages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Packages – Website Development, SEO, SMO & More | Kanak Drishti Infotech",
    description:
      "Transparent pricing, scalable services – from startups to enterprises. Contact us for a custom quote.",
    images: ["https://yourdomain.com/og-packages.jpg"],
    site: "@YourTwitterHandle",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── JSON-LD Schema (CollectionPage + ItemList of all packages) ──────────
const packagesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Our Service Packages",
  description:
    "Flexible digital service packages including web development, e-commerce, SEO, SMO, graphic design, brochure design, infographic design, and paid advertising.",
  url: "https://yourdomain.com/packages",
  mainEntity: {
    "@type": "ItemList",
    name: "Service Packages",
    numberOfItems: 9,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "PDF Brochure Design Packages",
        url: "https://yourdomain.com/packages/pdf-brochure-design",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Creative Design Packages",
        url: "https://yourdomain.com/packages/creative-design",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Infographic Design Packages",
        url: "https://yourdomain.com/packages/infographic-design",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Website Development Packages",
        url: "https://yourdomain.com/packages/website-development",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Ecommerce Website Development Packages",
        url: "https://yourdomain.com/packages/ecommerce-website-development",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "SEO Packages",
        url: "https://yourdomain.com/packages/seo",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "SMO Packages",
        url: "https://yourdomain.com/packages/smo",
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "Paid Campaign Advertising Packages",
        url: "https://yourdomain.com/packages/paid-campaign-advertising",
      },
      {
        "@type": "ListItem",
        position: 9,
        name: "Graphic Designing Packages",
        url: "https://yourdomain.com/packages/graphic-designing",
      },
    ],
  },
};

function PackagesSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(packagesSchema) }}
    />
  );
}

export default function PackagesPage() {
  return (
    <>
      <PackagesSchema />
      <PackagesClient />
    </>
  );
}