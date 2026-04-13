"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const packages = [
  {
    id: 1,
    title: "Website Development Packages",
    desc: "Our Website Development package provides everything you need to establish a strong online presence. From custom, responsive design to secure hosting and a user-friendly CMS.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
  },
  {
    id: 2,
    title: "Ecommerce Website Development Packages",
    desc: "Launch a seamless and professional online store with custom responsive designs, secure payment gateways and inventory management.",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
  },
  {
    id: 3,
    title: "SEO Packages",
    desc: "Boost your website's visibility and drive organic traffic through proven optimization strategies, keyword research, on-page SEO, and quality backlinks.",
    image:
      "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=600&q=80",
  },
  {
    id: 4,
    title: "SMO Packages",
    desc: "Strengthen your brand's presence across social platforms. We create and share meaningful content to drive engagement and grow your followers.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
  },
  {
    id: 5,
    title: "Paid Campaign Advertising Packages",
    desc: "Deliver measurable results through targeted advertising strategies. We create and manage high-converting ad campaigns across all major platforms.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    id: 6,
    title: "Graphic Designing Packages",
    desc: "Creative and professional design solutions for logos, business cards, brochures, flyers, and banners tailored to your brand identity.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
  },
  {
    id: 7,
    title: "PDF Brochure Design Packages",
    desc: "Professional and visually appealing brochures that effectively communicate your brand's message with custom multi-page layouts.",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
  },
  {
    id: 8,
    title: "Creative Design Packages",
    desc: "Build a strong and unique brand identity with custom logo design, brand style guides, and business stationery.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
  },
  {
    id: 9,
    title: "Infographic Design Packages",
    desc: "Visually compelling infographics that convey complex information in an easy-to-understand, engaging format for your audience.",
    image:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&q=80",
  },
];

const VISIBLE = 3;
const AUTOPLAY_MS = 3000;

export default function Packages() {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
  const timerRef = useRef(null);
  const total = packages.length;

  const slide = useCallback(
    (dir) => {
      if (sliding) return;
      setDirection(dir);
      setSliding(true);
      setTimeout(() => {
        setCurrent((c) => (((c + dir) % total) + total) % total);
        setSliding(false);
      }, 350);
    },
    [sliding, total],
  );

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => slide(1), AUTOPLAY_MS);
  }, [slide]);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  const handlePrev = () => {
    slide(-1);
    resetTimer();
  };
  const handleNext = () => {
    slide(1);
    resetTimer();
  };
  const handleDot = (i) => {
    if (i === current || sliding) return;
    setDirection(i > current ? 1 : -1);
    setSliding(true);
    setTimeout(() => {
      setCurrent(i);
      setSliding(false);
    }, 350);
    resetTimer();
  };

  // Get 3 visible cards
  const visibleCards = Array.from(
    { length: VISIBLE },
    (_, i) => packages[(current + i) % total],
  );

  return (
    <section className="bg-white py-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* ── HEADING ── */}
        <div className="text-center mb-14">
          {/* <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#49BCE3]/10 border border-[#49BCE3]/25 rounded-full px-5 py-2 mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-[#49BCE3] animate-pulse" />
            <span className="text-[#49BCE3] text-[11px] font-black uppercase tracking-[0.25em]">
              Our Packages
            </span>
          </motion.div> */}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-4xl md:text-4xl font-black text-[#1a1a2e] leading-tight mb-4 max-w-4xl mx-auto"
          >
            Complete Digital Solutions{" "}
            <span className="text-[#49BCE3]">Built For Your Success.</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto mb-5 h-[3px] w-14 rounded-full bg-[#49BCE3] origin-center"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 max-w-xl mx-auto leading-relaxed"
          >
            Thoughtfully designed packages for every business stage — from
            startup to enterprise.
          </motion.p>
        </div>

        {/* ── SLIDER ── */}
        <div className="relative">
          {/* Prev Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border-2 border-gray-200 shadow-lg flex items-center justify-center hover:bg-[#49BCE3] hover:border-[#49BCE3] group transition-all duration-200"
          >
            <ChevronLeft
              size={20}
              className="text-gray-400 group-hover:text-white transition-colors"
            />
          </button>

          {/* Cards */}
          <div className="overflow-hidden px-1 py-3">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-350 ease-out"
              style={{
                opacity: sliding ? 0 : 1,
                transform: sliding
                  ? `translateX(${direction > 0 ? "40px" : "-40px"})`
                  : "translateX(0)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
              }}
            >
              {visibleCards.map((pkg, i) => (
                <div
                  key={`${pkg.id}-${current}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-gray-200/70 hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
                  onClick={() => {
                    /* navigate to package detail */
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-[14.5px] font-bold text-[#1a1a2e] mb-2 leading-snug group-hover:text-[#49BCE3] transition-colors duration-200">
                      {pkg.title}
                    </h3>
                    <p className="text-gray-600 text-[12px] leading-relaxed mb-4 flex-1 line-clamp-3">
                      {pkg.desc}
                    </p>
                    <button className="flex items-center gap-1.5 text-[#49BCE3] font-bold text-[12px] group/btn w-fit mt-auto">
                      View More
                      <ArrowRight
                        size={13}
                        className="group-hover/btn:translate-x-1.5 transition-transform duration-200"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border-2 border-gray-200 shadow-lg flex items-center justify-center hover:bg-[#49BCE3] hover:border-[#49BCE3] group transition-all duration-200"
          >
            <ChevronRight
              size={20}
              className="text-gray-400 group-hover:text-white transition-colors"
            />
          </button>
        </div>

        {/* ── DOTS + COUNTER ── */}
        <div className="flex flex-col items-center gap-5 mt-10">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {packages.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDot(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  backgroundColor: i === current ? "#49BCE3" : "#d1d5db",
                  width: i === current ? "28px" : "10px",
                  height: "10px",
                }}
              />
            ))}
          </div>

          {/* Counter */}
          <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">
            {current + 1} / {total} Packages
          </p>
        </div>
      </div>
    </section>
  );
}
