"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Rocket, Zap } from "lucide-react";
import Link from "next/link";
import { blogs } from "./blogData";

export default function BlogClient() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative w-full py-12 lg:py-20 overflow-hidden bg-gradient-to-r from-[#0f2a5f] via-[#13387a] to-[#0f2a5f]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#49BCE3] rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-500 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
            Read Our Latest Articles & Updates
          </h1>
          <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto">
            Stay updated with the latest articles, helpful tips, and industry
            insights.
          </p>
        </div>
      </section>

      {/* ── BLOG CARDS ── */}
      <section className="py-16 md:py-20 px-4 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto"
        >
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.slug}`}>
              <motion.article
                variants={cardVariant}
                whileHover={{ y: -6 }}
                className="bg-[#f9f9f9] border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full cursor-pointer"
              >
                {/* Image */}
                <div className="w-full h-44 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-bold text-[#49BCE3] uppercase tracking-widest">
                      {blog.category}
                    </span>
                  </div>

                  <h3 className="text-[16px] font-semibold text-gray-800 mb-2 line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-5 line-clamp-3">
                    {blog.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-between">
                    <button className="border border-gray-400 px-4 py-2 text-xs font-medium text-gray-700 hover:bg-black hover:text-white transition">
                      READ MORE
                    </button>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* ── WHY READ ── */}
      <section className="py-6 md:py-6 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xl md:text-4xl font-black mb-6">
            Why Read Our Blogs?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            Discover powerful insights, proven strategies, and expert knowledge
            designed to help you grow faster.
          </p>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Rocket size={22} />,
                title: "Actionable Growth Strategies",
                desc: "Learn practical techniques to grow your business and improve results.",
              },
              {
                icon: <Lightbulb size={22} />,
                title: "Real-World Insights",
                desc: "Get real insights based on trends, data, and industry experience.",
              },
              {
                icon: <Zap size={22} />,
                title: "Latest Trends & Updates",
                desc: "Stay updated with new technologies and digital trends.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#f9f9f9] border border-gray-200 rounded-lg p-5 text-left hover:shadow-md transition"
              >
                <div className="mb-4 text-gray-700">{item.icon}</div>
                <h3 className="text-[16px] font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
