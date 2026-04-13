"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Code,
  BarChart2,
  Smartphone,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const BRAND = "#49BCE3";

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

export default function Packages() {
  const [showAll, setShowAll] = useState(false);
  const visiblePackages = showAll ? packages : packages.slice(0, 4);

  return (
    <section className="bg-white py-1 font-[Poppins]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Powerful <span style={{ color: BRAND }}>Software Solutions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built for businesses that want to grow faster and work smarter.
          </p>
        </div>

        {/* Cards Grid */}
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
                      <p className="text-gray-600  leading-relaxed ">
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
        {!showAll && packages.length > 4 && (
          <div className="flex justify-center mt-12">
            <motion.button
              onClick={() => setShowAll(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 cursor-pointer bg-[#49BCE3] text-white px-4 py-2 rounded-full font-semibold text-sm tracking-widest hover:bg-[#3aa8d1] transition-all shadow-lg"
            >
              VIEW MORE SOFTWARE
              <ArrowRight size={18} />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
