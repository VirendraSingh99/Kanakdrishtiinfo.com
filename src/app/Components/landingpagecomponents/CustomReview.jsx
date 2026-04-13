"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ── REAL CLIENT DATA ──────────────────────────────────────────────────────────
const reviews = [
  {
    id: 1,
    name: "Harpreet Singh",
    company: "Hotel Singh Empire",
    role: "Director",
    rating: 5,
    review:
      "Hi, I am Harpreet Singh, Director at Hotel Singh Empire. I have been taking services from Kanak Drishti Infotech for the last 2 years, and I am very satisfied with their work. Whatever I have achieved today is because of the consistent support and efforts of Kanak Drishti Infotech.",
    accent: "border-pink-500",
    accentText: "text-pink-600",
    accentBg: "bg-pink-600",
    accentRing: "ring-pink-200",
    logoSrc: "./customreviewimages/hotelsingh.webp",
  },
  {
    id: 2,
    name: "Rakesh Sharma",
    company: "Aspark Holidays Pvt. Ltd.",
    role: "Director",
    rating: 5,
    review:
      "I am Rakesh Sharma from Aspark Holidays Pvt. Ltd. I have had a great experience working with Kanak Drishti Infotech. Their consistent support and quality services have played a key role in my business growth. Highly satisfied and recommended.",
    accent: "border-blue-600",
    accentText: "text-blue-700",
    accentBg: "bg-blue-700",
    accentRing: "ring-blue-200",
    logoSrc: "./customreviewimages/aspark.webp",
  },
  {
    id: 3,
    name: "Mr. Ashutosh Panwar",
    company: "FICCI, New-Delhi",
    role: "Dy. Director",
    rating: 5,
    review:
      "Hi, I am Mr. Ashutosh Panwar (Dy. Director) FICCI. I have been working with Kanak Drishti Infotech Pvt. Ltd. since a very long time and our team is very much satisfied with Kanak Drishti Infotech Pvt. Ltd. team. Our all development work is handled by this company.",
    accent: "border-green-700",
    accentText: "text-green-700",
    accentBg: "bg-green-700",
    accentRing: "ring-green-200",
    logoSrc: "./customreviewimages/ficci.webp",
  },
  {
    id: 4,
    name: "Mr. Amit Kumar",
    company: "Tafcon Projects India Pvt. Ltd.",
    role: "Manager",
    rating: 5,
    review:
      "Kanak Drishti Infotech Pvt. Ltd. has a very experienced Designing & Development Team. All persons are very co-operative in nature and always give us a better response as well as services. We are working with this company since last 3 years. This team has developed many websites for us, and all is out-standing.",
    accent: "border-orange-600",
    accentText: "text-orange-600",
    accentBg: "bg-orange-600",
    accentRing: "ring-orange-200",
    logoSrc: "./customreviewimages/tafcon.webp",
  },
  {
    id: 5,
    name: "Deepak Chopra",
    company: "Birth Astro",
    role: "Director",
    rating: 5,
    review:
      "I am Deepak Chopra, Director at Birth Astro. KANAK DRISHTI Infotech Pvt. Ltd. has provided excellent digital and technical support with a high level of professionalism. Their team is knowledgeable, responsive, and committed to delivering quality results. We truly appreciate their approach and dedication to work.",
    accent: "border-amber-500",
    accentText: "text-amber-600",
    accentBg: "bg-amber-500",
    accentRing: "ring-amber-200",
    logoSrc: "./customreviewimages/birthastro.png",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className={`w-4 h-4 ${s <= rating ? "text-amber-400" : "text-gray-200"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function LogoCircle({ logoSrc, name, accentBorder, accentText }) {
  const [err, setErr] = useState(false);
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div
      className={`w-[72px] h-[72px] rounded-full border-2 ${accentBorder} bg-white flex items-center justify-center overflow-hidden shrink-0`}
    >
      {!err ? (
        <img
          src={logoSrc}
          alt={name}
          onError={() => setErr(true)}
          className="w-[88%] h-[88%] object-contain"
        />
      ) : (
        <span className={`text-xl font-bold ${accentText}`}>{initials}</span>
      )}
    </div>
  );
}

function StripLogo({ logoSrc, name, accentText }) {
  const [err, setErr] = useState(false);
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return err ? (
    <span className={`text-sm font-bold ${accentText}`}>{initials}</span>
  ) : (
    <img
      src={logoSrc}
      alt={name}
      onError={() => setErr(true)}
      className="w-full h-full object-contain rounded-full"
    />
  );
}

export default function StackedReview() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % reviews.length);
      setExpanded(false);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const go = (i) => {
    setIndex(((i % reviews.length) + reviews.length) % reviews.length);
    setExpanded(false);
  };

  const current = reviews[index];

  return (
    <section className="py-10 px-6 bg-white min-h-screen flex items-center font-sans">
      <div className="max-width-[1100px] w-full mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-16">
          {/* <span className="inline-block text-[11px] font-semibold tracking-widest uppercase text-sky-400 bg-sky-50 px-5 py-1.5 rounded-full mb-4">
            Client Stories
          </span> */}
          <h2 className="text-xl md:text-5xl font-bold text-gray-900 leading-tight">
            What Our Clients Say About Our Digital Services
          </h2>
        </div>

        <div className="flex flex-wrap gap-14 items-center justify-center">
          {/* LEFT: controls */}
          <div className="flex-1 min-w-[260px] max-w-[300px]">
            {/* Counter */}
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-5xl font-bold text-gray-900 leading-none font-serif">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xl text-gray-300 font-light">/</span>
              <span className="text-xl text-gray-300 font-light">
                {String(reviews.length).padStart(2, "0")}
              </span>
            </div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-gray-400 mb-7">
              Verified Testimonials
            </p>

            {/* Progress dots */}
            <div className="flex gap-1.5 mb-9">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`h-1 rounded-full border-none cursor-pointer transition-all duration-300 ${
                    i === index ? "w-8 bg-sky-400" : "w-3.5 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Client logo strip */}
            <div className="mb-9">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-gray-400 mb-3">
                Our Clients
              </p>
              <div className="flex flex-wrap gap-2.5">
                {reviews.map((r, i) => (
                  <button
                    key={r.id}
                    onClick={() => go(i)}
                    title={r.company}
                    className={`w-12 h-12 rounded-full border-2 bg-white cursor-pointer p-1 flex items-center justify-center overflow-hidden transition-all duration-300
                      ${i === index ? `${r.accent} scale-110 ring-2 ${r.accentRing}` : "border-gray-200 scale-100"}`}
                  >
                    <StripLogo
                      logoSrc={r.logoSrc}
                      name={r.name}
                      accentText={r.accentText}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <div className="flex gap-2.5">
              {[() => go(index - 1), () => go(index + 1)].map((fn, i) => (
                <button
                  key={i}
                  onClick={fn}
                  className={`w-11 h-11 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-500 transition-all duration-200 cursor-pointer hover:${current.accentBg} hover:text-white hover:border-transparent`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    {i === 0 ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    )}
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: stacked cards */}
          <div className="flex-1 min-w-[320px] max-w-[400px] relative h-[380px]">
            <AnimatePresence mode="popLayout">
              {reviews.map((review, i) => {
                const pos = (i - index + reviews.length) % reviews.length;
                if (pos > 2) return null;
                return (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, scale: 0.85, x: 80 }}
                    animate={{
                      opacity: 1 - pos * 0.2,
                      scale: 1 - pos * 0.05,
                      x: pos * 24,
                      y: pos * -16,
                      zIndex: 10 - pos,
                    }}
                    exit={{ opacity: 0, x: -120, rotate: -5, scale: 0.88 }}
                    transition={{ type: "spring", stiffness: 280, damping: 24 }}
                    className="absolute inset-0 bg-white rounded-2xl border border-gray-100 shadow-lg flex flex-col overflow-hidden"
                    style={{ pointerEvents: pos === 0 ? "auto" : "none" }}
                  >
                    <div className="p-6 flex flex-col h-full">
                      {/* TOP: Logo + Name / Role / Company */}
                      <div className="flex items-center gap-4 mb-4">
                        <LogoCircle
                          logoSrc={review.logoSrc}
                          name={review.name}
                          accentBorder={review.accent}
                          accentText={review.accentText}
                        />
                        <div>
                          <p
                            className={`font-bold text-base ${review.accentText} leading-snug m-0`}
                          >
                            {review.name}
                          </p>
                          <p className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase mt-1">
                            {review.role}
                          </p>
                          <p className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase mt-0.5">
                            {review.company}
                          </p>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gray-100 mb-3" />

                      {/* Review text */}
                      <p
                        className={`text-[13px] leading-7 text-gray-500 flex-1 overflow-hidden ${!expanded ? "line-clamp-4" : ""}`}
                      >
                        {review.review}
                      </p>

                      {/* View more */}
                      <div className="mt-4 flex justify-end">
                        <Link
                          href="/portfolio"
                          onClick={() => setExpanded((e) => !e)}
                          className={`${review.accentBg} text-white text-[13px] font-semibold px-5 py-2 rounded-full cursor-pointer border-none transition-opacity hover:opacity-90`}
                        >
                          {expanded ? "View less" : "View more"}
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
