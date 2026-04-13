// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import {
//   Monitor,
//   BarChart2,
//   Smartphone,
//   TrendingUp,
//   Code,
//   ArrowRight,
// } from "lucide-react";

// const BRAND = "#49BCE3";
// const BRAND_LIGHT = "#E8F7FC";

// const softwares = [
//   {
//     icon: Monitor,
//     title: "Travel CRM Software",
//     desc: "A complete travel management CRM designed for tour operators and agencies. Manage leads, bookings, itineraries, and customer communication from a single dashboard — boosting efficiency and delivering seamless travel experiences.",
//     tag: "CRM",
//     color: "from-blue-400 to-[#49BCE3]",
//     slug: "travel-crm-software",
//   },
//   {
//     icon: Code,
//     title: "HRMS Software",
//     desc: "Streamline your human resource operations with a powerful HRMS system. From attendance tracking and payroll automation to employee performance and leave management — everything in one secure platform.",
//     tag: "HR Tech",
//     color: "from-indigo-400 to-purple-400",
//     slug: "hrms-software",
//   },
//   {
//     icon: BarChart2,
//     title: "MLM Software",
//     desc: "Advanced multi-level marketing software with smart commission distribution, genealogy tree tracking, and real-time reporting. Designed for scalability, transparency, and business growth.",
//     tag: "MLM",
//     color: "from-orange-400 to-rose-400",
//     slug: "mlm-software",
//   },
//   {
//     icon: Smartphone,
//     title: "Task Management Software",
//     desc: "Organize, track, and manage your team's workflow efficiently. Assign tasks, monitor progress, set deadlines, and improve productivity with a modern and intuitive task management system.",
//     tag: "Productivity",
//     color: "from-emerald-400 to-teal-400",
//     slug: "task-management-software",
//   },
//   {
//     icon: TrendingUp,
//     title: "ShiftoPay Payment Integration",
//     desc: "Seamless payment orchestration system enabling secure transactions, multi-gateway support, and real-time tracking. Perfect for businesses looking to simplify and scale their payment infrastructure.",
//     tag: "FinTech",
//     color: "from-amber-400 to-yellow-500",
//     slug: "shiftopay-payment-integration",
//   },
// ];

// export default function SoftwarePage() {
//   return (
//     <main className="w-full bg-white text-slate-900 overflow-x-hidden">
//       {/* HERO */}
//       <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a5f] via-[#13387a] to-[#0f2a5f]"></div>
//         <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white py-12">
//           <p className="text-xs sm:text-sm mb-3 tracking-wide text-gray-200">
//             Innovative Software Solutions for Modern Enterprises
//           </p>
//           <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4">
//             Build, Automate & Scale with Next-Gen Software Systems
//           </h1>
//           <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
//             We design and develop robust, scalable software solutions tailored
//             to your business needs — from CRM and HRMS to advanced payment
//             orchestration systems. Our goal is to simplify complexity and
//             empower your growth with technology.
//           </p>
//         </div>
//       </section>

//       {/* SOFTWARE GRID */}
//       <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 bg-white">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-4">
//             Our Software Products
//           </h2>
//           <div className="h-1.5 w-24 bg-[#49BCE3] mx-auto rounded-full mb-6" />
//           <p className="text-[#8E8E8E] text-lg max-w-2xl mx-auto">
//             Tailored solutions built for real-world business challenges.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <AnimatePresence mode="popLayout">
//             {softwares.map((software, i) => {
//               const Icon = software.icon;
//               return (
//                 <motion.div
//                   layout
//                   key={software.slug}
//                   initial={{ opacity: 0, scale: 0.92, y: 20 }}
//                   animate={{ opacity: 1, scale: 1, y: 0 }}
//                   exit={{
//                     opacity: 0,
//                     scale: 0.9,
//                     transition: { duration: 0.2 },
//                   }}
//                   transition={{ duration: 0.35, delay: i * 0.06 }}
//                   whileHover={{ y: -6 }}
//                   className="group cursor-pointer"
//                 >
//                   <Link
//                     href={`/software/${software.slug}`}
//                     className="block h-full"
//                   >
//                     <div className="bg-white rounded-3xl p-6 h-full flex flex-col shadow-[0_8px_32px_-10px_rgba(0,0,0,0.07)] border border-gray-100 hover:border-[#49BCE3]/30 hover:shadow-[0_16px_48px_-10px_rgba(73,188,227,0.18)] transition-all duration-300">
//                       {/* Tag + Icon row */}
//                       <div className="flex items-center justify-between mb-4">
//                         <span
//                           className="text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest"
//                           style={{ backgroundColor: BRAND_LIGHT, color: BRAND }}
//                         >
//                           {software.tag}
//                         </span>
//                         <div
//                           className={`relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br ${software.color} text-white shadow-md`}
//                         >
//                           <Icon size={20} strokeWidth={1.5} />
//                           <div
//                             className={`absolute inset-0 rounded-xl bg-gradient-to-br ${software.color} blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
//                           />
//                         </div>
//                       </div>

//                       {/* Title */}
//                       <h3 className="text-[15px] font-extrabold text-gray-900 group-hover:text-[#49BCE3] transition-colors leading-snug mb-1.5">
//                         {software.title}
//                       </h3>

//                       {/* Description */}
//                       <p className="text-gray-500 text-[12px] leading-relaxed flex-1">
//                         {software.desc}
//                       </p>

//                       {/* CTA — no divider line above */}
//                       <div className="mt-4">
//                         <span className="flex items-center gap-2 text-[#9ca3af] group-hover:text-[#49BCE3] font-bold group/btn text-[10px] uppercase tracking-[0.13em] transition-colors w-fit">
//                           <span>View More</span>
//                           <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#49BCE3] group-hover:text-white transition-all">
//                             <ArrowRight size={10} />
//                           </span>
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </div>
//       </section>

//       {/* WHY CHOOSE US */}
//       <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* LEFT CONTENT */}
//           <div>
//             <span className="text-[#49BCE3] font-semibold uppercase tracking-wider text-sm">
//               Why Choose Us
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-6 leading-tight">
//               Why Businesses Trust{" "}
//               <span className="text-[#49BCE3]">Kanakdrishti Infotech</span>
//             </h2>
//             <p className="text-slate-600 text-base leading-relaxed mb-6">
//               At Kanakdrishti Infotech, we don't just build software — we create
//               scalable digital ecosystems that solve real business problems. Our
//               approach is deeply rooted in understanding your workflow,
//               challenges, and long-term goals before crafting any solution.
//             </p>
//             <p className="text-slate-600 text-base leading-relaxed mb-6">
//               This ensures every product we deliver is not only technically
//               strong but also aligned with your business growth strategy.
//             </p>
//             <div className="space-y-4 mb-6">
//               {[
//                 "Tailored solutions designed specifically for your business needs",
//                 "High-performance systems that improve efficiency & productivity",
//                 "Data-driven insights for smarter business decisions",
//                 "Dedicated support & transparent communication at every step",
//               ].map((point, i) => (
//                 <div key={i} className="flex items-start gap-3">
//                   <div className="w-6 h-6 rounded-full bg-[#49BCE3]/10 flex items-center justify-center text-[#49BCE3] font-bold text-sm">
//                     ✓
//                   </div>
//                   <p className="text-slate-700">{point}</p>
//                 </div>
//               ))}
//             </div>
//             <p className="text-slate-600 text-base leading-relaxed">
//               With us, you don't just get a service provider — you get a
//               long-term technology partner focused on delivering measurable
//               growth and sustainable success.
//             </p>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="relative">
//             <div className="rounded-3xl overflow-hidden h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px]">
//               <img
//                 src="/images/software/SoftwereChoose.jpg"
//                 alt="Why Choose Kanakdrishti Infotech"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#49BCE3]/20 rounded-full blur-2xl"></div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


import SoftwareClient from "./SoftwareClient";

export const metadata = {
  title:
    "Custom Software Solutions – CRM, HRMS, MLM & More | Kanak Drishti Infotech",
  description:
    "Explore our enterprise software products: Travel CRM, HRMS, MLM software, Task Management, and ShiftoPay payment integration. Scalable, secure, and tailored to your business.",
  keywords:
    "custom software, travel CRM, HRMS software, MLM software, task management software, payment integration, ShiftoPay, enterprise software, India, Noida",
  alternates: {
    canonical: "https://yourdomain.com/software",
  },
  openGraph: {
    title: "Custom Software Solutions – CRM, HRMS, MLM & More | Kanak Drishti Infotech",
    description:
      "Build, automate & scale with next-gen software systems – Travel CRM, HRMS, MLM, Task Management, and payment orchestration.",
    url: "https://yourdomain.com/software",
    type: "website",
    siteName: "Kanak Drishti Infotech",
    images: [
      {
        url: "https://yourdomain.com/og-software.jpg",
        width: 1200,
        height: 630,
        alt: "Kanak Drishti Infotech Software Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Solutions – CRM, HRMS, MLM & More | Kanak Drishti Infotech",
    description:
      "Tailored software products for travel, HR, MLM, task management, and payments. Get a free consultation today.",
    images: ["https://yourdomain.com/og-software.jpg"],
    site: "@YourTwitterHandle",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── JSON-LD Schema (CollectionPage + ItemList of software) ──────────
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Our Software Products",
  description:
    "Enterprise software solutions including Travel CRM, HRMS, MLM software, Task Management, and ShiftoPay payment integration.",
  url: "https://yourdomain.com/software",
  mainEntity: {
    "@type": "ItemList",
    name: "Software Products",
    numberOfItems: 5,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Travel CRM Software",
        url: "https://yourdomain.com/software/travel-crm-software",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "HRMS Software",
        url: "https://yourdomain.com/software/hrms-software",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "MLM Software",
        url: "https://yourdomain.com/software/mlm-software",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Task Management Software",
        url: "https://yourdomain.com/software/task-management-software",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "ShiftoPay Payment Integration",
        url: "https://yourdomain.com/software/shiftopay-payment-integration",
      },
    ],
  },
};

function SoftwareSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
    />
  );
}

export default function SoftwarePage() {
  return (
    <>
      <SoftwareSchema />
      <SoftwareClient />
    </>
  );
}