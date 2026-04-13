"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
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
  Rocket,
  Lightbulb,
  BarChart,
  Headphones,
  Target,
  MessageSquare,
  Calendar,
} from "lucide-react";

const BRAND = "#49BCE3";
const BRAND_LIGHT = "#E8F7FC";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    slug: "website-development",
    desc: "We design and develop custom, fully responsive websites that deliver seamless user experiences across all devices. From landing pages to full-scale corporate portals, every site is built with performance, speed, and SEO best practices in mind — helping your business build credibility, capture leads, and drive long-term growth.",
    tag: "Development",
    color: "from-blue-400 to-[#49BCE3]",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Website",
    slug: "e-commerce-website",
    desc: "Launch powerful online stores with secure payment gateways, smart inventory systems, and conversion-focused design. We build feature-rich e-commerce platforms with smooth checkout flows, product filtering, cart management, and order tracking — everything you need to maximize sales and deliver outstanding customer satisfaction.",
    tag: "Development",
    color: "from-violet-400 to-indigo-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Application",
    slug: "mobile-application",
    desc: "We build high-performance mobile apps for Android and iOS using React Native and Flutter. From MVP to enterprise-grade applications, our apps offer intuitive UX, offline support, push notifications, and seamless API integrations — ensuring better engagement, higher retention, and streamlined business operations on the go.",
    tag: "Development",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: Monitor,
    title: "Web Application",
    slug: "web-application",
    desc: "Develop scalable and secure web applications with modern UI and a robust backend architecture tailored for complex workflows. Whether it's a SaaS dashboard, internal management tool, or customer portal — we deliver high-performance solutions with real-time data, role-based access, and seamless third-party integrations.",
    tag: "Development",
    color: "from-cyan-400 to-sky-500",
  },
  {
    icon: Code,
    title: "Customized Software",
    slug: "customized-software",
    desc: "Get tailor-made software solutions designed specifically around your business processes. We analyze your workflows, identify bottlenecks, and build custom tools that automate repetitive tasks, reduce manual errors, and increase operational efficiency — giving you a competitive edge with technology built exclusively for you.",
    tag: "Development",
    color: "from-indigo-400 to-purple-500",
  },
  {
    icon: Megaphone,
    title: "360° Digital Marketing",
    slug: "360-digital-marketing",
    desc: "A full-circle digital marketing approach covering SEO, social media, paid advertising, content strategy, and email campaigns. We build integrated marketing funnels that attract, engage, and convert your target audience — ensuring maximum online visibility, consistent lead flow, and sustainable business growth across all channels.",
    tag: "Marketing",
    color: "from-orange-400 to-rose-500",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    slug: "performance-marketing",
    desc: "Results-first marketing campaigns powered by data and real-time analytics. We manage Google Ads, Meta Ads, and programmatic campaigns with laser-focused targeting, A/B testing, and continuous optimization — ensuring every rupee you spend delivers measurable ROI, quality leads, and scalable customer acquisition.",
    tag: "Marketing",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    slug: "content-marketing",
    desc: "We create high-value content — blogs, case studies, infographics, videos, and whitepapers — that establishes your brand as an industry authority. Our content strategy is built around search intent and audience psychology, driving consistent organic traffic, improving engagement, and nurturing prospects through every stage of the funnel.",
    tag: "Marketing",
    color: "from-lime-400 to-green-500",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    slug: "email-marketing",
    desc: "Craft personalized, automated email journeys that speak directly to your audience. From welcome sequences and drip campaigns to promotional blasts and re-engagement flows — we design, write, and optimize emails that improve open rates, nurture relationships, drive repeat purchases, and turn one-time buyers into loyal customers.",
    tag: "Marketing",
    color: "from-pink-400 to-rose-400",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    slug: "search-engine-optimization",
    desc: "Dominate search rankings with our comprehensive SEO services — technical audits, keyword research, on-page optimization, content strategy, and high-authority link building. We focus on sustainable, white-hat strategies that improve your domain authority, increase organic traffic, and ensure long-term visibility on Google and Bing.",
    tag: "Marketing",
    color: "from-yellow-400 to-amber-500",
  },
  {
    icon: Share2,
    title: "Social Media Optimization",
    slug: "social-media-optimization",
    desc: "Build a powerful, consistent brand presence across Instagram, Facebook, LinkedIn, and more. Our SMO services include profile optimization, content calendar management, creative post design, hashtag strategy, and community engagement — driving follower growth, boosting brand awareness, and converting social audiences into paying customers.",
    tag: "Marketing",
    color: "from-fuchsia-400 to-purple-500",
  },
];

const features = [
  {
    icon: Target,
    title: "Business-Focused Solutions",
    description:
      "Every solution is aligned with your business goals and growth objectives.",
  },
  {
    icon: Search,
    title: "SEO-Friendly Development",
    description:
      "Built with SEO best practices to ensure maximum visibility from day one.",
  },
  {
    icon: Rocket,
    title: "Scalable Technology",
    description: "Future-proof solutions that grow with your business needs.",
  },
  {
    icon: BarChart,
    title: "Performance-Driven Marketing",
    description:
      "Data-backed strategies focused on measurable results and ROI.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "24/7 expert support to ensure smooth operations and quick resolutions.",
  },
  {
    icon: TrendingUp,
    title: "ROI-Oriented Strategy",
    description:
      "Every initiative is designed to deliver maximum return on investment.",
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We dive deep into your business goals, target audience, and market landscape.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "Strategize",
    description:
      "Creating data-driven strategies tailored to your unique business needs.",
    icon: Target,
  },
  {
    step: "03",
    title: "Build",
    description:
      "Expert execution with agile methodology and quality assurance.",
    icon: Code,
  },
  {
    step: "04",
    title: "Grow",
    description:
      "Continuous optimization and scaling for sustained business growth.",
    icon: TrendingUp,
  },
];

const industries = [
  "Healthcare",
  "Education",
  "Real Estate",
  "E-Commerce",
  "Finance",
  "Startups",
  "Hospitality",
  "Local Businesses",
  "Manufacturing",
  "Technology",
  "Travel",
  "Entertainment",
];

export default function ServicesClient() {
  return (
    <main className="w-full bg-white text-slate-900 overflow-x-hidden">
      {/* HERO */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a5f] via-[#13387a] to-[#0f2a5f]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-16 sm:py-12">
          <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 tracking-wide text-gray-200">
            Leading Digital Solutions Company in India
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-4 sm:mb-6">
            Smart Digital Solutions That Drive Real Business Growth
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10">
            At Kanak Drishti Infotech, we empower businesses with
            high-performance web development, scalable software solutions, and
            result-driven digital marketing strategies to achieve long-term
            success and measurable growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center bg-[#49BCE3] hover:bg-[#3aa6cc] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all shadow-md hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Request Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-12">
        <div className="text-center max-w-7xl mx-auto">
          <span className="text-[#49BCE3] font-semibold uppercase tracking-wider text-sm">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-10">
            What We Offer
          </h2>
          <div className="text-gray-600 text-lg leading-relaxed space-y-8 text-justify">
            <p>
              At{" "}
              <strong className="text-slate-800">Kanakdrishti Infotech</strong>,
              we combine technical excellence with strategic marketing to
              deliver comprehensive digital solutions that drive real business
              growth. With over a decade of experience, we've helped businesses
              across industries transform their digital presence by leveraging
              the latest technologies and data-driven insights for maximum
              market impact.
              
            </p>
            <p>
              From custom software development and mobile applications to
              performance-driven marketing campaigns, our integrated approach
              ensures every solution is perfectly aligned with your business
              goals. We don't just build products — we build success stories
              that resonate with your target audience and create long-term brand
              value.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
            Everything You Need to Scale Your Business
          </h2>
          <div className="h-1.5 w-24 bg-[#49BCE3] mx-auto rounded-full mb-6" />
          <p className="text-[#8E8E8E] text-lg max-w-2xl mx-auto">
            Powerful solutions crafted to help you grow, engage customers, and
            dominate your market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  layout
                  key={service.slug}
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    transition: { duration: 0.2 },
                  }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="group cursor-pointer"
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="block h-full"
                  >
                    <div className="bg-white rounded-3xl p-6 h-[280px] flex flex-col shadow-[0_8px_32px_-10px_rgba(0,0,0,0.07)] border border-gray-100 hover:border-[#49BCE3]/30 hover:shadow-[0_16px_48px_-10px_rgba(73,188,227,0.18)] transition-all duration-300 overflow-hidden">
                      {/* Tag + Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className="text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest"
                          style={{ backgroundColor: BRAND_LIGHT, color: BRAND }}
                        >
                          {service.tag}
                        </span>
                        <div
                          className={`relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white shadow-md`}
                        >
                          <Icon size={20} strokeWidth={1.5} />
                          <div
                            className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color} blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-[15px] font-extrabold text-gray-900 group-hover:text-[#49BCE3] transition-colors leading-snug mb-1.5">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-500 text-[12px] leading-relaxed line-clamp-4">
                        {service.desc}
                      </p>

                      {/* CTA */}
                      <div className="mt-auto pt-4">
                        <span className="flex items-center gap-2 text-[#9ca3af] group-hover:text-[#49BCE3] font-bold text-[10px] uppercase tracking-[0.13em] transition-colors w-fit">
                          <span>View More</span>
                          <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#49BCE3] group-hover:text-white transition-all">
                            <ArrowRight size={10} />
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="text-center mb-16">
          <span className="text-[#49BCE3] font-semibold uppercase tracking-wider text-sm">
            Why Choose Us
          </span>
          <h2 className="text-3xl  md:text-4xl font-extrabold text-slate-900 mt-4 mb-6">
            Why Businesses Choose Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver
            exceptional results
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="flex gap-5 p-6 rounded-2xl border border-slate-200 hover:border-[#49BCE3] hover:shadow-lg transition-all group"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[#49BCE3]/10 flex items-center justify-center group-hover:bg-[#49BCE3] transition-colors">
                    <Icon className="w-6 h-6 text-[#49BCE3] group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-12 md:py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#49BCE3] uppercase tracking-widest text-sm font-semibold">
              Our Process
            </p>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-4">
              From Idea to Execution
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A smooth and result-driven journey to build powerful digital
              products
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="w-[280px] group relative bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="absolute -top-4 left-6 bg-[#49BCE3] text-white text-xs px-3 py-1 rounded-full">
                    Step {step.step}
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-[#49BCE3]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                    <Icon className="w-7 h-7 text-[#49BCE3]" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <div className="text-center mb-12">
          <span className="text-[#49BCE3] font-semibold uppercase tracking-wider text-sm">
            Industries
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-slate-900 mt-4 mb-6">
            Industries We Serve
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Empowering businesses across diverse sectors with tailored digital
            solutions
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-full text-slate-700 font-medium hover:bg-[#49BCE3] hover:text-white hover:border-[#49BCE3] transition-all cursor-pointer"
            >
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0f2a5f] via-[#13387a] to-[#0f2a5f] py-14 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#49BCE3]/10 blur-3xl opacity-30" />
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Ready to Build Your Next
            <span className="text-[#49BCE3]"> Digital Success?</span>
          </h2>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Let's create powerful, scalable solutions that drive real growth and
            measurable results for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#49BCE3] hover:bg-[#3aa8cf] text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Talk to Our Team
              <MessageSquare className="w-5 h-5" />
            </Link>
            <Link
              href="/quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all backdrop-blur-md"
            >
              Request a Quote
              <Calendar className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO TEXT */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20 bg-white">
        <h2 className="text-xl md:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">
          Comprehensive Digital Solutions for Modern Businesses
        </h2>
        <div className="space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
          <p>
            <strong className="text-slate-800">Kanakdrishti Infotech</strong> is
            a premier digital solutions provider offering end-to-end services
            including{" "}
            <Link
              href="/services/website-development"
              className="text-[#49BCE3] font-semibold hover:underline"
            >
              website development
            </Link>
            ,{" "}
            <Link
              href="/services/customized-software"
              className="text-[#49BCE3] font-semibold hover:underline"
            >
              software development
            </Link>
            ,{" "}
            <Link
              href="/services/mobile-application"
              className="text-[#49BCE3] font-semibold hover:underline"
            >
              mobile app development
            </Link>
            , and comprehensive digital marketing strategies.
          </p>
          <p>
            Our{" "}
            <Link
              href="/services/website-development"
              className="text-[#49BCE3] font-semibold hover:underline"
            >
              website development services
            </Link>{" "}
            create responsive, SEO-friendly platforms that drive traffic and
            conversions. We specialize in{" "}
            <Link
              href="/services/e-commerce-website"
              className="text-[#49BCE3] font-semibold hover:underline"
            >
              e-commerce solutions
            </Link>
            ,{" "}
            <Link
              href="/services/customized-software"
              className="text-[#49BCE3] font-semibold hover:underline"
            >
              custom software development
            </Link>
            , and{" "}
            <Link
              href="/services/mobile-application"
              className="text-[#49BCE3] font-semibold hover:underline"
            >
              mobile applications
            </Link>{" "}
            that enhance user experience and streamline operations.
          </p>
          <p>
            In the digital marketing space, we offer{" "}
            <Link
              href="/services/360-digital-marketing"
              className="text-[#49BCE3] font-semibold hover:underline"
            >
              360° digital marketing
            </Link>
            ,{" "}
            <Link
              href="/services/performance-marketing"
              className="text-[#49BCE3] font-semibold hover:underline"
            >
              performance marketing
            </Link>
            ,{" "}
            <Link
              href="/services/search-engine-optimization"
              className="text-[#49BCE3] font-semibold hover:underline"
            >
              SEO optimization
            </Link>
            ,{" "}
            <Link
              href="/services/social-media-optimization"
              className="text-[#49BCE3] font-semibold hover:underline"
            >
              social media management
            </Link>
            , and paid advertising campaigns that maximize ROI.
          </p>
          <p>
            Whether you're a startup or an enterprise, we deliver{" "}
            <span className="text-slate-800 font-semibold">
              scalable technology solutions
            </span>{" "}
            and{" "}
            <span className="text-slate-800 font-semibold">
              lead generation strategies
            </span>{" "}
            that transform business outcomes.
          </p>
        </div>
      </section>
    </main>
  );
}