"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  MessageSquare,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

// ── Lucide icon string → component map ───────────────────────
import {
  Monitor,
  BarChart2,
  Smartphone,
  TrendingUp,
  Users,
  Shield,
  Zap,
  RefreshCw,
  Target,
  Globe,
  Database,
  Lock,
  Layers,
  Settings,
} from "lucide-react";

const ICON_MAP = {
  Monitor,
  BarChart2,
  Smartphone,
  TrendingUp,
  Users,
  Shield,
  Zap,
  RefreshCw,
  Target,
  Globe,
  Database,
  Lock,
  Layers,
  Settings,
  CheckCircle,
};

// String se Lucide component lo, default Monitor
function getIcon(name) {
  return ICON_MAP[name] ?? Monitor;
}

// ── Brand colors ──────────────────────────────────────────────
const BRAND = "#49BCE3";
const BRAND_LIGHT = "#E8F7FC";

export default function SoftwareDetailClient({ software }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="w-full bg-white text-slate-900 overflow-x-hidden">
      {/* ════════════════════════════════════════════════════
          SECTION 1: HERO
      ════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a5f] via-[#13387a] to-[#0f2a5f]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-16">
          {/* Tag badge */}
          <span
            className="inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4"
            style={{ backgroundColor: "rgba(73,188,227,0.2)", color: BRAND }}
          >
            {software.tag}
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-5">
            {software.title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-5xl mx-auto mb-8">
            {software.heroDescription || software.desc}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#49BCE3] hover:bg-[#3aa6cc] text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Get a Free Consultation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 2: KEY FEATURES
      ════════════════════════════════════════════════════ */}
      {software.features && software.features.length > 0 && (
        <section className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="text-center mb-14">
            <span className="text-[#49BCE3] font-semibold uppercase tracking-wider text-sm">
              Key Features
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
              What You Get with {software.title}
            </h2>
            <div className="h-1.5 w-20 bg-[#49BCE3] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {software.features.map((feature, i) => {
              // icon ab string hai — ICON_MAP se component lo
              const FeatureIcon = getIcon(feature.icon);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="text-[#49BCE3] mb-4">
                    <FeatureIcon size={32} />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════
          SECTION 3: IMAGE + CONTENT BLOCK
      ════════════════════════════════════════════════════ */}
      {software.imageContentSection && (
        <section className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
          <div
            className={`grid md:grid-cols-2 gap-12 items-center ${
              !software.imageContentSection.imageLeft
                ? "md:grid-flow-dense"
                : ""
            }`}
          >
            <motion.div
              initial={{
                opacity: 0,
                x: software.imageContentSection.imageLeft ? -30 : 30,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative ${
                !software.imageContentSection.imageLeft ? "md:col-start-2" : ""
              }`}
            >
              <div className="rounded-3xl overflow-hidden h-[300px] sm:h-[400px] md:h-[500px]">
                <img
                  src={software.imageContentSection.imageSrc}
                  alt={software.imageContentSection.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#49BCE3]/20 rounded-full blur-2xl" />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: software.imageContentSection.imageLeft ? 30 : -30,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={
                !software.imageContentSection.imageLeft
                  ? "md:col-start-1 md:row-start-1"
                  : ""
              }
            >
              <span className="text-[#49BCE3] font-semibold uppercase tracking-wider text-sm">
                Why It Matters
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 mb-6 leading-tight">
                {software.imageContentSection.heading}
              </h2>
              {software.imageContentSection.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-slate-600 text-base leading-relaxed mb-4"
                >
                  {para}
                </p>
              ))}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#49BCE3] hover:bg-[#3aa6cc] text-white px-6 py-3 rounded-lg font-semibold transition-all mt-2"
              >
                Discuss Your Requirements <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════
          SECTION 4: WHY CHOOSE
      ════════════════════════════════════════════════════ */}
      {software.whyChoosePoints && software.whyChoosePoints.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-12">
              <span className="text-[#49BCE3] font-semibold uppercase tracking-wider text-sm">
                Our Advantage
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
                Why Choose Our {software.title}?
              </h2>
              <div className="h-1.5 w-20 bg-[#49BCE3] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {software.whyChoosePoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: BRAND_LIGHT }}
                  >
                    <CheckCircle size={14} color={BRAND} />
                  </div>
                  <p className="text-slate-700 font-medium text-sm leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════
          SECTION 5: DEVELOPMENT PROCESS
      ════════════════════════════════════════════════════ */}
      {software.process && software.process.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="text-center mb-14">
            <span className="text-[#49BCE3] font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
              How We Build Your {software.title}
            </h2>
            <div className="h-1.5 w-20 bg-[#49BCE3] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {software.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div
                  className="text-5xl font-extrabold mb-4 leading-none"
                  style={{ color: BRAND_LIGHT }}
                >
                  {step.step}
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
                {i < software.process.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight size={20} color={BRAND} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════
          SECTION 6: SEO TEXT SECTIONS
      ════════════════════════════════════════════════════ */}
      {software.seoSections && software.seoSections.length > 0 && (
        <section className="bg-white py-16 md:py-10">
       {/* <div className="text-center text-[#49BCE3] mb-12 font-bold text-3xl">
         Know More About {software.title}

        

       </div> */}
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            {software.seoSections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={i > 0 ? "mt-14  " : ""}
              >
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
                  {section.heading}
                </h2>
                {section.paragraphs.map((para, j) => (
                  <p
                    key={j}
                    className="text-slate-600 text-base leading-relaxed mb-4"
                  >
                    {para}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════
          SECTION 7: FAQs
      ════════════════════════════════════════════════════ */}
      {software.faqs && software.faqs.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-2">
          <div className="text-center mb-12">
            <span className="text-[#49BCE3] font-semibold uppercase tracking-wider text-sm">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="h-1.5 w-20 bg-[#49BCE3] mx-auto rounded-full" />
          </div>

          <div className="space-y-4">
            {software.faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-slate-800 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-[#49BCE3] transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === i ? "auto" : 0,
                    opacity: openFaq === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-5 bg-[#F8FBFD] border-t border-gray-100">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════
          SECTION 8: CTA BOTTOM BANNER
      ════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-[#0f2a5f] via-[#13387a] to-[#0f2a5f] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Transform Your Business with {software.title}?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss your requirements and build a custom solution that
            fits your business perfectly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#49BCE3] hover:bg-[#3aa6cc] px-8 py-3.5 rounded-lg font-semibold text-white transition-all"
            >
              Get Started Now <MessageSquare size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/50 hover:bg-white/10 px-8 py-3.5 rounded-lg font-semibold text-white transition-all"
            >
              Request a Demo <Calendar size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
