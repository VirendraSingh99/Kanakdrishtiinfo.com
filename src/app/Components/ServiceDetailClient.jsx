"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  MessageSquare,
  Calendar,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import { CITIES } from "../services/citydata/citiesData";
import {
  Globe,
  ShoppingCart,
  Smartphone,
  Monitor,
  Code,
  Megaphone,
  TrendingUp,
  FileText,
  Mail,
  Search,
  Share2,
  Zap,
  Shield,
  BarChart2,
  Users,
  Clock,
  Settings,
  Target,
  Layers,
  RefreshCw,
  Lock,
  PenTool,
  Send,
  Eye,
  Star,
  Bell,
} from "lucide-react";

const ICON_MAP = {
  Globe,
  ShoppingCart,
  Smartphone,
  Monitor,
  Code,
  Megaphone,
  TrendingUp,
  FileText,
  Mail,
  Search,
  Share2,
  Zap,
  Shield,
  BarChart2,
  Users,
  Clock,
  Settings,
  Target,
  Layers,
  RefreshCw,
  Lock,
  PenTool,
  Send,
  Eye,
  Star,
  Bell,
};

function getIcon(name) {
  return ICON_MAP[name] ?? Zap;
}

const BRAND = "#49BCE3";
const BRAND_LIGHT = "#E8F7FC";

export default function CityServiceClient({ service, city }) {
  const [openFaq, setOpenFaq] = useState(null);

  // Other cities for this service (exclude current city)
  const otherCities = CITIES.filter((c) => c.slug !== city.slug);

  return (
    <main className="w-full bg-white text-slate-900 overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a5f] via-[#13387a] to-[#0f2a5f]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-12">
          {/* City Badge */}
          <div className="inline-flex items-center gap-2 bg-[#49BCE3]/20 border border-[#49BCE3]/40 text-[#49BCE3] px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            <MapPin size={14} />
            {city.name}
          </div>

          <h1 className="text-xl md:text-4xl font-extrabold leading-relaxed mb-5 tracking-tight">
            {service.title} in {city.name}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8 px-2">
            Looking for professional {service.title} services in {city.name}?{" "}
            {service.heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#49BCE3] hover:bg-[#3aa6cc] text-white px-8 py-3.5 rounded-xl font-semibold text-base transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Get a Free Consultation in {city.name}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CITY-SPECIFIC INTRO ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-[#E8F7FC] border border-[#49BCE3]/30 rounded-2xl p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Why Choose Us for {service.title} in {city.name}?
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
            Kanak Drishti Infotech is a trusted digital solutions partner for
            businesses across {city.name}. Whether you&apos;re a startup or an
            established company in {city.name}, our {service.title} team
            delivers results that matter — on time and within budget.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Our {city.name}-focused approach means we understand the local
            market, competition, and customer behavior, giving your business a
            real competitive edge with our {service.title} solutions.
          </p>
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      {service.aboutSection && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src={
                  service.aboutSection.bottomSection.image ||
                  "/api/placeholder/600/400"
                }
                alt={`${service.title} in ${city.name}`}
                className="rounded-2xl shadow-xl w-full h-auto min-h-[280px] sm:min-h-[320px] lg:min-h-[400px] object-cover border border-gray-100"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h3 className="text-xl md:text-4xl font-bold text-[#2D2D2D] mb-6 leading-snug">
                {service.aboutSection.bottomSection.heading}
              </h3>
              <div className="space-y-4 text-gray-600 text-[15px] sm:text-base md:text-lg leading-relaxed">
                {(service.aboutSection?.bottomSection?.content || []).map(
                  (para, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
                  ),
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── FEATURES ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-12">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#49BCE3] font-semibold uppercase tracking-wider text-sm">
            Key Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
            {service.title} Services in {city.name}
          </h2>
          <div className="h-1.5 w-20 bg-[#49BCE3] mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {(service.features || []).map((feature, i) => {
            const FIcon = getIcon(feature.icon);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group bg-white rounded-3xl p-7 md:p-8 border border-gray-100 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.08)] hover:border-[#49BCE3]/40 hover:shadow-[0_20px_50px_-12px_rgba(73,188,227,0.22)] transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#49BCE3]"
                  style={{ backgroundColor: BRAND_LIGHT }}
                >
                  <FIcon
                    size={24}
                    strokeWidth={1.6}
                    className="transition-colors duration-300 group-hover:text-white"
                    style={{ color: BRAND }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#49BCE3] transition-colors mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-[14.5px] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#49BCE3] font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
              How We Deliver {service.title} in {city.name}
            </h2>
            <div className="h-1.5 w-20 bg-[#49BCE3] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative bg-white rounded-3xl p-7 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="absolute -top-4 left-6 bg-[#49BCE3] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Step {step.step}
                </div>
                <p className="text-6xl font-black text-[#49BCE3]/10 leading-none mb-4 mt-3">
                  {step.step}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#49BCE3] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-[14.5px] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="bg-gradient-to-r from-[#0f2a5f] via-[#13387a] to-[#0f2a5f] py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#49BCE3]/10 blur-3xl opacity-30" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 tracking-tight">
            Ready to Get Started with{" "}
            <span className="text-[#49BCE3]">
              {service.title} in {city.name}?
            </span>
          </h2>
          <p className="text-gray-200 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed px-4">
            Let&apos;s talk about your goals and build a strategy that delivers
            real, measurable results for your business in {city.name}.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#49BCE3] hover:bg-[#3aa6cc] text-white px-8 py-3.5 rounded-xl font-semibold text-base transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Talk to Our Team in {city.name}
              <MessageSquare size={20} />
            </Link>
            <Link
              href="/quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all backdrop-blur-md"
            >
              Request a Quote
              <Calendar size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TOP SECTION (About sub-sections) ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          {(service.aboutSection?.topSection?.sections || []).map((item, i) => (
            <div key={i} className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-3 leading-snug">
                {item.heading}
              </h2>
              <p className="text-[#3D3D3D] text-[15px] sm:text-base leading-relaxed">
                {item.paragraph}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-6">
        <div className="text-center mb-12">
          <span className="text-[#49BCE3] font-semibold uppercase tracking-wider text-sm">
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-[#49BCE3] mx-auto rounded-full" />
        </div>
        <div className="space-y-2">
          {(service.faqs || []).map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-[15px] sm:text-base font-semibold text-slate-900 pr-6 leading-tight">
                  {faq.question}
                </span>
                <ChevronDown
                  size={22}
                  className={`flex-shrink-0 text-[#49BCE3] transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openFaq === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-gray-600 text-[14.5px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CITY LINKS SECTION (Image mein jo dikha) ── */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
            {service.title} in Other Cities
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            We also provide {service.title} services in these cities:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {/* Current city — highlighted */}
            <span className="inline-flex items-center gap-1.5 bg-[#49BCE3] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm">
              <MapPin size={13} />
              {city.name}
            </span>
            {/* Other cities — links */}
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/services/${service.slug}/${c.slug}`}
                className="inline-flex items-center gap-1.5 border border-gray-300 hover:border-[#49BCE3] hover:text-[#49BCE3] text-gray-700 bg-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-sm"
              >
                {c.name}
              </Link>
            ))}
          </div>

          {/* Back to main service page link */}
          <div className="mt-8">
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-2 text-[#49BCE3] hover:underline text-sm font-medium"
            >
              <ArrowRight size={14} className="rotate-180" />
              View all {service.title} Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
