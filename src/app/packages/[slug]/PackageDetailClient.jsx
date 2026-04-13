"use client";

import Link from "next/link";
import { useState } from "react";
import { packages } from "../packageData"; // adjust path
import PricingPlans from "../PricingPlans"; // adjust path

// ─── Check Icon ───────────────────────────────────────────────
const CheckIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#49BCE3" opacity="0.15" />
    <path
      d="M6 10.5l3 3 5-5.5"
      stroke="#49BCE3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── Related Card ─────────────────────────────────────────────
const RelatedCard = ({ pkg }) => (
  <Link
    href={`/packages/${pkg.slug}`}
    className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden flex flex-col"
  >
    <div className="relative overflow-hidden h-40">
      <img
        src={pkg.image}
        alt={pkg.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white bg-[#0f2a5f] shadow">
        {pkg.tag}
      </span>
    </div>
    <div className="h-[3px] bg-gradient-to-r from-[#0f2a5f] to-[#49BCE3]" />
    <div className="p-4 flex-1 flex flex-col">
      <h4 className="text-[13px] font-bold text-[#0f2a5f] group-hover:text-[#49BCE3] transition-colors mb-2 leading-snug">
        {pkg.title}
      </h4>
      <p className="text-gray-500 text-xs leading-relaxed flex-1 line-clamp-2">
        {pkg.shortDesc}
      </p>
      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#49BCE3]">
        View Package
        <svg
          className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </span>
    </div>
  </Link>
);

// ─── Divider ──────────────────────────────────────────────────
const Divider = () => (
  <div className="flex items-center gap-1 mb-6">
    <div className="w-10 h-1 rounded-full bg-[#0f2a5f]" />
    <div className="w-10 h-1 rounded-full bg-[#49BCE3]" />
    <div className="w-5 h-1 rounded-full bg-[#49BCE3]/30" />
  </div>
);

// ─── Main Client Component ────────────────────────────────────
export default function PackageDetailClient({ pkg }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const related = packages.filter((p) => p.slug !== pkg.slug).slice(0, 3);

  return (
    <div className="font-sans">
      {/* ══════════ HERO — Pure gradient, no image ══════════ */}
      <section className="relative w-full min-h-[55vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a5f] via-[#13387a] to-[#0f2a5f]" />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-10 blur-3xl"
          // style={{ background: pkg.color }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-16">
          <span
            className="inline-block text-xs font-bold px-4 py-1.5 rounded-full text-white mb-5"
            // style={{ background: pkg.color }}
          >
            {/* optional tag */}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            {pkg.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
            {pkg.shortDesc}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#49BCE3] hover:bg-[#3aa6cc] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-[#49BCE3]/20 hover:shadow-[#49BCE3]/40 hover:scale-105 active:scale-95"
          >
            Get Custom Quote
          </Link>
        </div>
      </section>

      {/* ══════════ WHAT'S INCLUDED ══════════ */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div>
            <span className="inline-block text-xs font-bold text-[#49BCE3] uppercase tracking-[0.2em] mb-3">
              Deliverables
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2a5f] mb-4">
              {"What's Included in This Package"}
            </h2>
            <Divider />
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              {pkg.description}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pkg.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-[#f0f7fb] rounded-xl p-4 border border-[#49BCE3]/10"
                >
                  <CheckIcon />
                  <span className="text-sm text-gray-700 leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <PricingPlans />

      {/* ══════════ DYNAMIC SEO SECTION (pkg.seoSection) ══════════ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src={pkg.seoSection.image}
              alt={pkg.seoSection.title}
              className="w-full rounded-xl shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {pkg.seoSection.title}
            </h2>
            {pkg.seoSection.description.map((item, i) => (
              <p key={i} className="text-gray-600 mb-3">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SEO RICH CONTENT ══════════ */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto space-y-14">
          {pkg.seoContent.map((section, i) => (
            <article key={i}>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f2a5f] mb-4">
                {section.heading}
              </h2>
              <Divider />
              {section.body.split("\n\n").map((para, j) => (
                <p
                  key={j}
                  className="text-gray-600 text-base leading-[1.9] mb-4"
                >
                  {para}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      {/* ══════════ PRICING PLANS ══════════ */}

      {/* ══════════ RELATED PACKAGES ══════════ */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold text-[#49BCE3] uppercase tracking-[0.2em] mb-3">
              Explore More
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2a5f]">
              Related Packages
            </h2>
            <div className="mt-4 mx-auto flex items-center justify-center gap-1">
              <div className="w-10 h-1 rounded-full bg-[#0f2a5f]" />
              <div className="w-10 h-1 rounded-full bg-[#49BCE3]" />
              <div className="w-5 h-1 rounded-full bg-[#49BCE3]/30" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <RelatedCard key={p.id} pkg={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ BOTTOM CTA ══════════ */}
      <section className="bg-gradient-to-r from-[#0f2a5f] via-[#13387a] to-[#0f2a5f] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Not Sure Which Package Is Right for You?
          </h2>
          <p className="text-gray-300 text-base mb-8 max-w-xl mx-auto">
            Our team will analyse your business and recommend the perfect
            solution — completely free.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#49BCE3] hover:bg-[#3aa6cc] text-white px-10 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-[#49BCE3]/30 hover:scale-105 active:scale-95"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>

      {/* ══════════ FAQs ══════════ */}
      <section className="bg-white py-16 px-4 border-t">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">FAQs</h2>

          <div className="space-y-4">
            {pkg.faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded overflow-hidden"
              >
                {/* QUESTION */}
                <div
                  onClick={() => toggleFAQ(i)}
                  className="cursor-pointer px-6 py-4 flex justify-between bg-gray-50"
                >
                  <p className="font-semibold">{faq.q}</p>
                  <span>{openIndex === i ? "-" : "+"}</span>
                </div>

                {/* ANSWER */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === i
                      ? "max-h-40 opacity-100 py-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6  bg-white">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
