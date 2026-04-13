// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowRight,
//   Monitor,
//   ShoppingCart,
//   Smartphone,
//   Layers,
//   Code,
//   Globe,
//   Search,
// } from "lucide-react";

// const BRAND = "#49BCE3";
// const BRAND_LIGHT = "#E8F7FC";

// const services = [
//   {
//     icon: Monitor,
//     title: "Website Development",
//     desc: "Your website is your most powerful business asset — and we treat it that way. We design and develop stunning, lightning-fast websites tailored precisely to your brand identity. Whether you need a sleek landing page, a multi-page corporate portal, or a feature-rich business website, our team delivers clean code, blazing performance, and a conversion-focused user experience that turns visitors into customers.",
//     tag: "Development",
//     color: "from-[#49BCE3] to-[#1a9ac4]",
//   },
//   {
//     icon: ShoppingCart,
//     title: "E-Commerce Website",
//     desc: "We build e-commerce platforms that don't just look great — they sell. From seamless checkout flows and smart inventory management to multi-currency support and advanced analytics, every element is engineered to maximize your revenue. We integrate the payment gateways your customers trust and craft product pages that inspire confidence and drive purchases.",
//     tag: "E-Commerce",
//     color: "from-[#f97316] to-[#ea580c]",
//   },
//   {
//     icon: Smartphone,
//     title: "Mobile Application",
//     desc: "From the first wireframe to your App Store listing, we craft mobile apps that users genuinely love. Our iOS and Android apps are built with silky-smooth animations, offline functionality, and real-time push notifications that keep your audience engaged. We focus on intuitive navigation and pixel-perfect design so every interaction feels effortless and natural.",
//     tag: "Mobile",
//     color: "from-[#8b5cf6] to-[#7c3aed]",
//   },
//   {
//     icon: Layers,
//     title: "Web Application",
//     desc: "We engineer powerful, scalable web applications that become the operational backbone of your business. From SaaS platforms and customer portals to internal tools and dashboards, our apps are built on modern frameworks with real-time data capabilities, role-based access control, and enterprise-grade security baked in from the start.",
//     tag: "Development",
//     color: "from-[#10b981] to-[#059669]",
//   },
//   {
//     icon: Code,
//     title: "Customized Software",
//     desc: "No two businesses are the same — so why settle for off-the-shelf software that was built for someone else? We build bespoke software solutions designed around your exact workflows, automating repetitive tasks, eliminating bottlenecks, and giving your team tools that actually fit how they work. From ERP systems to custom CRMs, we modernize your operations from the inside out.",
//     tag: "Software",
//     color: "from-[#f59e0b] to-[#d97706]",
//   },
//   {
//     icon: Globe,
//     title: "360° Digital Marketing",
//     desc: "Great products deserve great visibility. We run full-spectrum digital marketing campaigns that cover every touchpoint of your customer journey — from compelling social media ads and targeted email sequences to influencer collaborations and data-driven content strategies. Our approach is rooted in analytics, so every decision is backed by real performance data.",
//     tag: "Marketing",
//     color: "from-[#ec4899] to-[#db2777]",
//   },
//   {
//     icon: Search,
//     title: "Search Engine Optimization",
//     desc: "Ranking on page one isn't luck — it's the result of a meticulous, data-driven SEO strategy executed consistently over time. We combine deep technical audits, on-page optimization, and high-authority link building to improve your visibility where it matters most. Our transparent monthly reports show exactly where you stand and where you're headed.",
//     tag: "SEO",
//     color: "from-[#0ea5e9] to-[#0369a1]",
//   },
// ];

// export default function ServicesSection() {
//   const [showAll, setShowAll] = useState(false);
//   const visible = showAll ? services : services.slice(0, 4);

//   return (
//     <section className="bg-white overflow-hidden py-1 font-[Poppins]">
//       <div className="max-w-[1400px] mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-14">
//           <div
//             className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-5"
//             style={{ backgroundColor: BRAND_LIGHT, borderColor: `${BRAND}40` }}
//           >
//             <span
//               className="w-1.5 h-1.5 rounded-full animate-pulse"
//               style={{ backgroundColor: BRAND }}
//             />
//             <span
//               className="text-xs font-bold tracking-[0.18em] uppercase"
//               style={{ color: BRAND }}
//             >
//               Our Services
//             </span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
//             Excellence in{" "}
//             <span style={{ color: BRAND }}>Digital Solutions</span>
//           </h2>
//           <p className="text-gray-500 text-base max-w-4xl mx-auto leading-relaxed">
//             We collaborate with forward-thinking businesses and organizations
//             worldwide to deliver impactful digital experiences.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           <AnimatePresence mode="popLayout">
//             {visible.map((svc, i) => {
//               const Icon = svc.icon;
//               return (
//                 <motion.div
//                   layout
//                   key={svc.title}
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
//                   <div className="bg-white rounded-3xl p-6 h-full flex flex-col shadow-[0_8px_32px_-10px_rgba(0,0,0,0.07)] border border-gray-100 hover:border-[#49BCE3]/30 hover:shadow-[0_16px_48px_-10px_rgba(73,188,227,0.18)] transition-all duration-300">
//                     {/* Tag + Icon row */}
//                     <div className="flex items-center justify-between mb-4">
//                       <span
//                         className="text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest"
//                         style={{ backgroundColor: BRAND_LIGHT, color: BRAND }}
//                       >
//                         {svc.tag}
//                       </span>
//                       <div
//                         className={`relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br ${svc.color} text-white shadow-md`}
//                       >
//                         <Icon size={20} strokeWidth={1.5} />
//                         <div
//                           className={`absolute inset-0 rounded-xl bg-gradient-to-br ${svc.color} blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
//                         />
//                       </div>
//                     </div>

//                     {/* Title */}
//                     <h3 className="text-[15px] font-extrabold text-gray-900 group-hover:text-[#49BCE3] transition-colors leading-snug mb-1.5">
//                       {svc.title}
//                     </h3>

//                     {/* Description — tight to title */}
//                     <p className="text-gray-500 text-[12px] leading-relaxed flex-1">
//                       {svc.desc}
//                     </p>

//                     <div className=" bg-gray-100 " />

//                     {/* View More */}
//                     <button className="flex items-center gap-2 text-[#9ca3af] hover:text-[#49BCE3] font-bold group/btn text-[10px] cursor-pointer uppercase tracking-[0.13em] transition-colors w-fit">
//                       <span>View More</span>
//                       <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center group-hover/btn:bg-[#49BCE3] group-hover/btn:text-white transition-all">
//                         <ArrowRight size={10} />
//                       </span>
//                     </button>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </div>

//         {/* View All Button */}
//         <div className="flex justify-center mt-10">
//           <motion.button
//             onClick={() => setShowAll(!showAll)}
//             whileTap={{ scale: 0.95 }}
//             className="group flex items-center gap-3 bg-[#49BCE3] text-white px-10 py-4 rounded-full font-bold text-xs tracking-[0.2em] uppercase shadow-lg hover:shadow-[0_0_24px_rgba(73,188,227,0.45)] transition-all cursor-pointer"
//           >
//             <span>{showAll ? "Show Less" : "View All Services"}</span>
//             <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
//               <ArrowRight size={14} />
//             </div>
//           </motion.button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Monitor,
  ShoppingCart,
  Smartphone,
  Layers,
  Code,
  Globe,
  Search,
  TrendingUp,
  Mail,
  Share2,
} from "lucide-react";

const BRAND = "#49BCE3";
const BRAND_LIGHT = "#E8F7FC";

const services = [
  {
    icon: Monitor,
    title: "Website Development",
    slug: "website-development",
    desc: "Your website is your most powerful business asset — and we treat it that way. We design and develop stunning, lightning-fast websites tailored precisely to your brand identity. Whether you need a sleek landing page, a multi-page corporate portal, or a feature-rich business website, our team delivers clean code, blazing performance, and a conversion-focused user experience that turns visitors into customers.",
    tag: "Development",
    color: "from-[#49BCE3] to-[#1a9ac4]",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Website",
    slug: "e-commerce-website",
    desc: "We build e-commerce platforms that don't just look great — they sell. From seamless checkout flows and smart inventory management to multi-currency support and advanced analytics, every element is engineered to maximize your revenue. We integrate the payment gateways your customers trust and craft product pages that inspire confidence and drive purchases.",
    tag: "E-Commerce",
    color: "from-[#f97316] to-[#ea580c]",
  },
  {
    icon: Smartphone,
    title: "Mobile Application",
    slug: "mobile-application",
    desc: "From the first wireframe to your App Store listing, we craft mobile apps that users genuinely love. Our iOS and Android apps are built with silky-smooth animations, offline functionality, and real-time push notifications that keep your audience engaged. We focus on intuitive navigation and pixel-perfect design so every interaction feels effortless and natural.",
    tag: "Mobile",
    color: "from-[#8b5cf6] to-[#7c3aed]",
  },
  {
    icon: Layers,
    title: "Web Application",
    slug: "web-application",
    desc: "We engineer powerful, scalable web applications that become the operational backbone of your business. From SaaS platforms and customer portals to internal tools and dashboards, our apps are built on modern frameworks with real-time data capabilities, role-based access control, and enterprise-grade security baked in from the start.",
    tag: "Development",
    color: "from-[#10b981] to-[#059669]",
  },
  {
    icon: Code,
    title: "Customized Software",
    slug: "customized-software",
    desc: "No two businesses are the same — so why settle for off-the-shelf software that was built for someone else? We build bespoke software solutions designed around your exact workflows, automating repetitive tasks, eliminating bottlenecks, and giving your team tools that actually fit how they work. From ERP systems to custom CRMs, we modernize your operations from the inside out.",
    tag: "Software",
    color: "from-[#f59e0b] to-[#d97706]",
  },
  {
    icon: Globe,
    title: "360° Digital Marketing",
    slug: "360-digital-marketing",
    desc: "Great products deserve great visibility. We run full-spectrum digital marketing campaigns that cover every touchpoint of your customer journey — from compelling social media ads and targeted email sequences to influencer collaborations and data-driven content strategies. Our approach is rooted in analytics, so every decision is backed by real performance data.",
    tag: "Marketing",
    color: "from-[#ec4899] to-[#db2777]",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    slug: "performance-marketing",
    desc: "Every rupee you spend should generate measurable returns. Our performance marketing team runs laser-targeted paid campaigns across Google, Meta, and beyond — optimizing for conversions, not just clicks. We continuously A/B test creatives, audiences, and landing pages to drive down your cost per acquisition and scale what works.",
    tag: "Marketing",
    color: "from-[#f43f5e] to-[#e11d48]",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    slug: "email-marketing",
    desc: "Email remains the highest ROI channel in digital marketing — and we know how to use it. We craft automated drip sequences, newsletters, and promotional campaigns that land in inboxes and drive action. From list segmentation and personalization to deliverability optimization and analytics, we turn your email list into a revenue engine.",
    tag: "Marketing",
    color: "from-[#6366f1] to-[#4f46e5]",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    slug: "search-engine-optimization",
    desc: "Ranking on page one isn't luck — it's the result of a meticulous, data-driven SEO strategy executed consistently over time. We combine deep technical audits, on-page optimization, and high-authority link building to improve your visibility where it matters most. Our transparent monthly reports show exactly where you stand and where you're headed.",
    tag: "SEO",
    color: "from-[#0ea5e9] to-[#0369a1]",
  },
  {
    icon: Globe,
    title: "Content Marketing",
    slug: "content-marketing",
    desc: "Content is the foundation of every successful digital strategy. We research, write, and distribute high-quality content that educates your audience, builds trust, and drives organic traffic. From blog posts and whitepapers to video scripts and infographics, we create content that ranks, resonates, and converts.",
    tag: "Content",
    color: "from-[#14b8a6] to-[#0f766e]",
  },
  {
    icon: Share2,
    title: "Social Media Optimization",
    slug: "social-media-optimization",
    desc: "Your social media presence is your brand's voice — and we make it impossible to ignore. We optimize your profiles, craft platform-native content strategies, and grow engaged communities across Instagram, LinkedIn, Facebook, and more. From content calendars to community management, we build the social presence your brand deserves.",
    tag: "Social",
    color: "from-[#a855f7] to-[#9333ea]",
  },
];

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? services : services.slice(0, 4);

  return (
    <section className="bg-white overflow-hidden py-8 font-[Poppins]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          {/* <div
            className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-5"
            style={{ backgroundColor: BRAND_LIGHT, borderColor: `${BRAND}40` }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: BRAND }}
            />
            <span
              className="text-xs font-bold tracking-[0.18em] uppercase"
              style={{ color: BRAND }}
            >
              Our Services
            </span>
          </div> */}
          <h2 className="text-xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
            Excellence in{" "}
            <span style={{ color: BRAND }}>Digital Solutions</span>
          </h2>
          <p className="text-gray-500 text-base max-w-4xl mx-auto leading-relaxed">
            We collaborate with forward-thinking businesses and organizations
            worldwide to deliver impactful digital experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  layout
                  key={svc.title}
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    transition: { duration: 0.2 },
                  }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="group"
                >
                  {/* ✅ Pura card Link — slug se route */}
                  <Link
                    href={`/services/${svc.slug}`}
                    className="block bg-white rounded-3xl p-6 h-full flex flex-col shadow-[0_8px_32px_-10px_rgba(0,0,0,0.07)] border border-gray-100 hover:border-[#49BCE3]/30 hover:shadow-[0_16px_48px_-10px_rgba(73,188,227,0.18)] transition-all duration-300 no-underline cursor-pointer"
                  >
                    {/* Tag + Icon row */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest"
                        style={{ backgroundColor: BRAND_LIGHT, color: BRAND }}
                      >
                        {svc.tag}
                      </span>
                      <div
                        className={`relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br ${svc.color} text-white shadow-md`}
                      >
                        <Icon size={20} strokeWidth={1.5} />
                        <div
                          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${svc.color} blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-[15px] font-extrabold text-gray-900 group-hover:text-[#49BCE3] transition-colors leading-snug mb-1.5">
                      {svc.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-[12px] leading-relaxed flex-1">
                      {svc.desc}
                    </p>

                    <div className="h-px bg-gray-100 mt-4 mb-3" />

                    {/* View More */}
                    <div className="flex items-center gap-2 text-[#9ca3af] group-hover:text-[#49BCE3] font-bold text-[10px] uppercase tracking-[0.13em] transition-colors w-fit">
                      <span>View More</span>
                      <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#49BCE3] group-hover:text-white transition-all">
                        <ArrowRight size={10} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 bg-[#49BCE3] text-white px-4 py-2 rounded-full font-bold text-xs tracking-[0.2em] uppercase shadow-lg hover:shadow-[0_0_24px_rgba(73,188,227,0.45)] transition-all cursor-pointer"
          >
            <span>{showAll ? "Show Less" : "View All Services"}</span>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight size={14} />
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
