"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Monitor,
  BarChart2,
  Smartphone,
  TrendingUp,
  Code,
  ArrowRight,
} from "lucide-react";
import SoftwareContentMainPage from "./SoftwareContentMainPage";
import { useState } from "react";

const BRAND = "#49BCE3";
const BRAND_LIGHT = "#E8F7FC";

const packages = [
  {
    icon: Monitor,
    title: "Travel CRM Software",
    slug: "travel-crm-software",
    desc: "A complete travel management CRM designed for tour operators and agencies.",
    tag: "CRM",
    image: "/images/software/travelCrm.jpg",
  },
  {
    icon: Code,
    title: "HRMS Software",
    slug: "hrms-software",
    desc: "Streamline your human resource operations with a powerful HRMS system.",
    tag: "HR Tech",
    image: "/images/software/hrms.jpg",
  },
  {
    icon: BarChart2,
    title: "MLM Software",
    slug: "mlm-software",
    desc: "Advanced multi-level marketing software with smart commission distribution.",
    tag: "MLM",
    image: "/images/software/mlm.jpg",
  },
  {
    icon: Smartphone,
    title: "Task Management Software",
    slug: "task-management-software",
    desc: "Organize, track, and manage your team's workflow efficiently.",
    tag: "Productivity",
    image: "/images/software/taskmanagement.jpg",
  },
  {
    icon: TrendingUp,
    title: "Swiftopay Payment Integration",
    slug: "swiftopay-payment-integration",
    desc: "Seamless payment orchestration system for secure transactions.",
    tag: "FinTech",
    image: "/images/software/siftopay.jpg",
  },
];

export default function SoftwareClient() {
  const [showAll, setShowAll] = useState(true);
  const visiblePackages = showAll ? packages : packages.slice(0, 4);
  return (
    <main className="w-full bg-white text-slate-900 overflow-x-hidden">
      {/* HERO */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a5f] via-[#13387a] to-[#0f2a5f]"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white py-12">
          <p className="text-xs sm:text-sm mb-3 tracking-wide text-gray-200">
            Innovative Software Solutions for Modern Enterprises
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            Build, Automate & Scale with Next-Gen Software Systems
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-5xl mx-auto">
            We design and develop robust, scalable software solutions tailored
            to your business needs — from CRM and HRMS to advanced payment
            orchestration systems. Our goal is to simplify complexity and
            empower your growth with technology.
          </p>
        </div>
      </section>

      {/* SOFTWARE GRID */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10 bg-white">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
            Our Software Products
          </h2>
          <div className="h-1.5 w-24 bg-[#49BCE3] mx-auto rounded-full mb-6" />
          <p className="text-[#8E8E8E] text-lg max-w-2xl mx-auto">
            Tailored solutions built for real-world business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {visiblePackages.map((pkg, i) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={pkg.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="group"
                >
                  <Link
                    href={`/software/${pkg.slug}`}
                    className="block bg-white rounded-3xl overflow-hidden h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#49BCE3]/30"
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/95 text-xs font-bold px-3 py-1 rounded-full text-gray-800">
                          {pkg.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#49BCE3] transition-colors">
                        {pkg.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {pkg.desc}
                      </p>

                      <div className="flex items-center gap-2 text-[#49BCE3] font-medium text-sm mt-5">
                        Explore Now
                        <ArrowRight className="group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View More Button */}
        {!showAll && packages.length > 5 && (
          <div className="flex justify-center mt-12">
            <motion.button
              onClick={() => setShowAll(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-[#49BCE3] text-white px-10 py-4 rounded-full font-semibold text-sm tracking-widest hover:bg-[#3aa8d1] transition-all shadow-lg"
            >
              VIEW MORE SOFTWARE
              <ArrowRight size={18} />
            </motion.button>
          </div>
        )}
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <span className="text-[#49BCE3] font-semibold uppercase tracking-wider text-sm">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-6 leading-tight">
              Why Businesses Trust{" "}
              <span className="text-[#49BCE3]">Kanakdrishti Infotech</span>
            </h2>
            <p className="text-gray-600  leading-relaxed mb-6">
              At Kanakdrishti Infotech, we don't just build software — we create
              scalable digital ecosystems that solve real business problems. Our
              approach is deeply rooted in understanding your workflow,
              challenges, and long-term goals before crafting any solution.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              This ensures every product we deliver is not only technically
              strong but also aligned with your business growth strategy.
            </p>
            <div className="space-y-4 mb-6">
              {[
                "Tailored solutions designed specifically for your business needs",
                "High-performance systems that improve efficiency & productivity",
                "Data-driven insights for smarter business decisions",
                "Dedicated support & transparent communication at every step",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#49BCE3]/10 flex items-center justify-center text-[#49BCE3] font-bold text-sm">
                    ✓
                  </div>
                  <p className="text-slate-700">{point}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-base leading-relaxed">
              With us, you don't just get a service provider — you get a
              long-term technology partner focused on delivering measurable
              growth and sustainable success.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px]">
              <img
                src="/images/software/SoftwereChoose.jpg"
                alt="Why Choose Kanakdrishti Infotech"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#49BCE3]/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>
      <SoftwareContentMainPage />
    </main>
  );
}
