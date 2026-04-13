"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  DollarSign,
  Tag,
  LayoutDashboard,
  UserCheck,
  Megaphone,
  Zap,
  Search,
  Smartphone,
  Monitor,
  ShoppingCart,
  AppWindow,
  Palette,
  Mail,
  MousePointerClick,
  Users,
  FileText,
  Building2,
  Briefcase,
  Laptop,
  Package,
  ClipboardList,
  PhoneCall,
  FileSignature,
  TrendingUp,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const partnerBenefits = [
  {
    Icon: DollarSign,
    title: "Revenue Sharing",
    desc: "Earn attractive commissions on every successful referral or white-label project you bring to us. Transparent payout structure — no hidden cuts.",
  },
  {
    Icon: Tag,
    title: "White-Label Services",
    desc: "Offer our full suite of digital services under your own brand. We do the work, you take the credit — your clients won't know the difference.",
  },
  {
    Icon: LayoutDashboard,
    title: "Dedicated Partner Dashboard",
    desc: "Track your leads, project status, earnings, and reports from a single dashboard built exclusively for our B2B partners.",
  },
  {
    Icon: UserCheck,
    title: "Dedicated Account Manager",
    desc: "Every partner gets a dedicated point of contact who ensures smooth communication, quick turnarounds, and zero chaos.",
  },
  {
    Icon: Megaphone,
    title: "Co-Marketing Support",
    desc: "We help you grow too — joint campaigns, co-branded materials, and shared lead-gen activities to grow both businesses together.",
  },
  {
    Icon: Zap,
    title: "Priority Delivery",
    desc: "Partner projects jump the queue. Faster turnaround, priority support, and escalation paths that clients love.",
  },
];

const services = [
  { Icon: Search, label: "SEO & SEM" },
  { Icon: Smartphone, label: "Social Media Marketing" },
  { Icon: Monitor, label: "Website Development" },
  { Icon: ShoppingCart, label: "Ecommerce Solutions" },
  { Icon: AppWindow, label: "Mobile App Development" },
  { Icon: Palette, label: "Graphic & UI/UX Design" },
  { Icon: Mail, label: "Email Marketing" },
  { Icon: MousePointerClick, label: "Paid Ads (Google & Meta)" },
  { Icon: Users, label: "Influencer Marketing" },
  { Icon: FileText, label: "Content Marketing" },
];

const partnerTypes = [
  {
    Icon: Building2,
    title: "Agencies",
    desc: "Digital, PR, branding, or creative agencies looking to expand their service offering without hiring in-house.",
  },
  {
    Icon: Briefcase,
    title: "Freelancers & Consultants",
    desc: "Independent professionals who want to offer complete digital solutions to their clients and earn more per project.",
  },
  {
    Icon: Laptop,
    title: "IT & Software Companies",
    desc: "Tech companies who need reliable digital marketing execution for their clients or internal projects.",
  },
  {
    Icon: Package,
    title: "Resellers",
    desc: "Businesses that want to resell our services as their own product under a white-label agreement.",
  },
];

const steps = [
  {
    num: "01",
    Icon: ClipboardList,
    title: "Fill the Form",
    desc: "Submit your basic details and business info using the enquiry form below.",
  },
  {
    num: "02",
    Icon: PhoneCall,
    title: "Discovery Call",
    desc: "Our partnership team will schedule a quick call to understand your needs and goals.",
  },
  {
    num: "03",
    Icon: FileSignature,
    title: "Agreement & Onboarding",
    desc: "We sign a partnership agreement, set up your account, and onboard you within 48 hours.",
  },
  {
    num: "04",
    Icon: TrendingUp,
    title: "Start Earning",
    desc: "Refer clients or send white-label projects — we deliver, you earn.",
  },
];

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function B2BPartnershipPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative w-full py-16 sm:py-20 lg:py-28 overflow-hidden bg-gradient-to-r from-[#0f2a5f] via-[#13387a] to-[#0f2a5f]">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-[0.22em] text-white uppercase mb-3 sm:mb-4"
          >
            — B2B Partnership Program
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 sm:mb-5 tracking-tight"
          >
            Grow Together With{" "}
            <span className="text-[#49BCE3]">Kanak Drishti</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8"
          >
            Partner with one of Noida's most trusted digital marketing & IT
            companies. Resell our services, refer clients, or white-label our
            work — and earn attractive commissions with zero operational hassle.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href="#partner-form"
              className="px-6 py-3 rounded-xl bg-[#49BCE3] text-white text-sm font-bold hover:bg-[#3aacda] transition text-center"
            >
              Become a Partner →
            </a>
            <a
              href="tel:+919911210174"
              className="px-6 py-3 rounded-xl border border-white/30 text-white text-sm font-bold hover:bg-white/10 transition text-center"
            >
              Call Us: +91 9911210174
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── WHO CAN PARTNER ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-10 sm:mb-12">
            <p className="text-xs font-bold tracking-[0.18em] text-[#49BCE3] uppercase mb-2">
              — Who Is This For
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-black leading-tight">
              Who Can Become a Partner?
            </h2>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Whether you're an agency, freelancer, or IT company — if you have
              a client base, we have a model that works for you.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {partnerTypes.map((pt, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group p-5 sm:p-6 rounded-2xl border border-gray-100 bg-white hover:border-[#49BCE3]/30 transition-all duration-300 text-center"
                style={{ boxShadow: "0 2px 12px -4px rgba(0,0,0,0.06)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 10px 36px -8px rgba(73,188,227,0.18), 0 0 0 1px rgba(73,188,227,0.15)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 2px 12px -4px rgba(0,0,0,0.06)")
                }
              >
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0f2a5f]/8 to-[#49BCE3]/12 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <pt.Icon size={20} className="text-[#13387a]" />
                </div>
                <h3 className="text-sm font-black text-black mb-1.5">
                  {pt.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed hidden sm:block">
                  {pt.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PARTNER BENEFITS ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-10 sm:mb-12">
            <p className="text-xs font-bold tracking-[0.18em] text-[#49BCE3] uppercase mb-2">
              — What You Get
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-black leading-tight">
              Partner Benefits
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {partnerBenefits.map((b, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative flex gap-4 items-start p-5 sm:p-6 rounded-2xl border border-gray-100 bg-white overflow-hidden hover:border-[#49BCE3]/30 transition-all duration-300"
                style={{ boxShadow: "0 2px 12px -4px rgba(0,0,0,0.06)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 12px 40px -8px rgba(73,188,227,0.18), 0 0 0 1px rgba(73,188,227,0.15)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 2px 12px -4px rgba(0,0,0,0.06)")
                }
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(90deg, #0f2a5f, #49BCE3)",
                  }}
                />
                <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#0f2a5f]/8 to-[#49BCE3]/12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <b.Icon size={20} className="text-[#13387a]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-black mb-1.5">
                    {b.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES WE OFFER ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-10 sm:mb-12">
            <p className="text-xs font-bold tracking-[0.18em] text-[#49BCE3] uppercase mb-2">
              — What We Deliver
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-black leading-tight">
              Services You Can Resell
            </h2>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Our full-stack digital services are available for white-labeling
              or referral — covering everything your clients need.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.07 } },
            }}
            className="flex flex-wrap gap-2 sm:gap-3"
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-gray-100 bg-white hover:border-[#49BCE3]/40 hover:bg-[#f0faff] transition-all duration-200 cursor-default"
                style={{ boxShadow: "0 1px 8px -3px rgba(0,0,0,0.06)" }}
              >
                <s.Icon size={14} className="text-[#13387a] flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-700">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-10 sm:mb-14">
            <p className="text-xs font-bold tracking-[0.18em] text-[#49BCE3] uppercase mb-2">
              — Simple Process
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-black leading-tight">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
            <div className="hidden lg:block absolute top-8 left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-px bg-gradient-to-r from-transparent via-[#49BCE3]/30 to-transparent z-0" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.45 }}
                className="relative z-10 text-center"
              >
                <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-gradient-to-br from-[#0f2a5f] to-[#13387a] flex flex-col items-center justify-center mx-auto mb-4 sm:mb-5 shadow-lg gap-1">
                  <step.Icon size={18} className="text-[#49BCE3]" />
                  <span className="text-white text-[10px] font-black">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-sm font-black text-black mb-1.5">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed hidden sm:block">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNER FORM ── */}
      <section
        id="partner-form"
        className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left info */}
            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-[#49BCE3] uppercase mb-3">
                — Let's Connect
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-black leading-tight mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-7 sm:mb-8">
                Fill in the form and our partnership team will get back to you
                within 24 hours. No commitments, no pressure — just a
                conversation to explore how we can grow together.
              </p>

              <div className="flex flex-col gap-3 sm:gap-4">
                {[
                  {
                    Icon: Phone,
                    label: "Call Us",
                    val: "+91 9911210174 / +91 8076832529",
                    href: "tel:+919911210174",
                  },
                  {
                    Icon: Mail,
                    label: "Email Us",
                    val: "sales@kanakdrishtiinfo.com",
                    href: "mailto:sales@kanakdrishtiinfo.com",
                  },
                  {
                    Icon: MapPin,
                    label: "Visit Us",
                    val: "A-88, Sector 4, Noida (Near Sector 16 Metro)",
                    href: "#",
                  },
                ].map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl border border-gray-100 hover:border-[#49BCE3]/30 transition-all duration-200 group"
                    style={{ boxShadow: "0 1px 8px -3px rgba(0,0,0,0.05)" }}
                  >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0f2a5f]/8 to-[#49BCE3]/12 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <c.Icon size={16} className="text-[#13387a]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                        {c.label}
                      </p>
                      <p className="text-sm font-semibold text-black group-hover:text-[#13387a] transition-colors">
                        {c.val}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right form */}
            <div
              className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-7 lg:p-8"
              style={{ boxShadow: "0 8px 40px -8px rgba(0,0,0,0.1)" }}
            >
              <div className="h-1 w-full bg-[#49BCE3] rounded-full mb-6 sm:mb-7" />

              {!submitted ? (
                <>
                  <h3 className="text-lg font-black text-black mb-1">
                    Partnership Enquiry
                  </h3>
                  <p className="text-gray-400 text-xs mb-5 sm:mb-6">
                    We'll respond within 24 business hours.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Full name"
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#49BCE3]/40 focus:border-[#49BCE3] transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                          Company Name *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Your company"
                          value={form.company}
                          onChange={(e) =>
                            setForm({ ...form, company: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#49BCE3]/40 focus:border-[#49BCE3] transition"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                          Email *
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#49BCE3]/40 focus:border-[#49BCE3] transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                          Phone *
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#49BCE3]/40 focus:border-[#49BCE3] transition"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Partner Type *
                      </label>
                      <select
                        required
                        value={form.type}
                        onChange={(e) =>
                          setForm({ ...form, type: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#49BCE3]/40 focus:border-[#49BCE3] transition bg-white"
                      >
                        <option value="">Select partner type</option>
                        <option>Agency</option>
                        <option>Freelancer / Consultant</option>
                        <option>IT / Software Company</option>
                        <option>Reseller</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Tell Us About Your Business
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Brief about your business and what you're looking for..."
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#49BCE3]/40 focus:border-[#49BCE3] transition resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#49BCE3] text-white text-sm font-bold hover:opacity-90 transition mt-1"
                    >
                      Submit Partnership Enquiry →
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  className="py-10 sm:py-12 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp size={28} className="text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-black text-black mb-2">
                    Enquiry Received!
                  </h3>
                  <p className="text-gray-500 text-sm mb-2 max-w-xs mx-auto">
                    Thank you for your interest in partnering with Kanak
                    Drishti. Our team will reach out within 24 hours.
                  </p>
                  <p className="text-xs text-gray-400">
                    Questions? Call us at{" "}
                    <a
                      href="tel:+919911210174"
                      className="text-[#49BCE3] font-semibold"
                    >
                      +91 9911210174
                    </a>
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

  
    </div>
  );
}
