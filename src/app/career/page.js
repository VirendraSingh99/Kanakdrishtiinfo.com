"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ─── DATA ────────────────────────────────────────────────────────────────────

const openings = [
  {
    id: 1,
    title: "SEO Executive",
    department: "Marketing",
    type: "Full Time",
    location: "Noida, Sector 4",
    experience: "1–3 Years",
    skills: [
      "On-Page SEO",
      "Off-Page SEO",
      "Google Analytics",
      "Keyword Research",
    ],
    desc: "We're looking for a passionate SEO Executive to help our clients rank higher and grow organic traffic through data-driven strategies.",
  },
  {
    id: 2,
    title: "React.js Developer",
    department: "Development",
    type: "Full Time",
    location: "Noida, Sector 4",
    experience: "1–3 Years",
    skills: ["React.js", "Next.js", "Tailwind CSS", "REST APIs"],
    desc: "Join our dev team to build fast, scalable, and beautiful web applications for clients across industries.",
  },
  {
    id: 3,
    title: "Social Media Manager",
    department: "Marketing",
    type: "Full Time",
    location: "Noida, Sector 4",
    experience: "1–2 Years",
    skills: ["Instagram", "Meta Ads", "Content Planning", "Analytics"],
    desc: "Lead social media strategy, create engaging content, and grow brand presence for our diverse client portfolio.",
  },
  {
    id: 4,
    title: "Graphic Designer",
    department: "Design",
    type: "Full Time",
    location: "Noida, Sector 4",
    experience: "1–3 Years",
    skills: ["Photoshop", "Illustrator", "Figma", "Brand Identity"],
    desc: "Create stunning visuals, social creatives, brochures, and brand identities that leave a lasting impression.",
  },
  {
    id: 5,
    title: "PPC / Paid Ads Specialist",
    department: "Marketing",
    type: "Full Time",
    location: "Noida, Sector 4",
    experience: "1–3 Years",
    skills: ["Google Ads", "Meta Ads", "Campaign Optimization", "ROI Analysis"],
    desc: "Run high-performance paid campaigns across Google and Meta platforms, driving measurable results for clients.",
  },
  {
    id: 6,
    title: "Business Development Executive",
    department: "Sales",
    type: "Full Time",
    location: "Noida, Sector 4",
    experience: "0–2 Years",
    skills: [
      "Lead Generation",
      "Client Communication",
      "Proposal Writing",
      "CRM",
    ],
    desc: "Drive new business opportunities by identifying leads, pitching our services, and building long-term client relationships.",
  },
];

const perks = [
  {
    icon: "💼",
    title: "6-Day Work Week",
    desc: "Work-life balance matters.Sundays is yours.",
  },
  {
    icon: "📈",
    title: "Fast Growth",
    desc: "Performance-driven culture with quick promotions.",
  },
  {
    icon: "🎓",
    title: "Learning & Development",
    desc: "Regular workshops, certifications, and skill-building sessions.",
  },
  {
    icon: "🤝",
    title: "Friendly Culture",
    desc: "A young, energetic team that celebrates wins together.",
  },
  {
    icon: "📍",
    title: "Prime Location",
    desc: "Office near Sector 16 Metro, easy to commute from anywhere.",
  },
  {
    icon: "🏆",
    title: "Recognition & Rewards",
    desc: "Monthly appreciation for top performers.",
  },
];

const deptColors = {
  Marketing: { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500" },
  Development: {
    bg: "bg-violet-50",
    text: "text-violet-700",
    dot: "bg-violet-500",
  },
  Design: { bg: "bg-pink-50", text: "text-pink-700", dot: "bg-pink-500" },
  Sales: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
  },
};

// ─── APPLY MODAL ─────────────────────────────────────────────────────────────

function ApplyModal({ job, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg z-10 overflow-hidden"
          initial={{ scale: 0.92, y: 24, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.92, y: 24, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        >
          {/* Top gradient bar */}
          <div className="h-1 w-full bg-gradient-to-r from-[#0f2a5f] to-[#49BCE3]" />

          <div className="p-7">
            {!submitted ? (
              <>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-xs font-bold tracking-widest text-[#49BCE3] uppercase mb-1">
                      Apply Now
                    </p>
                    <h3 className="text-xl font-black text-black">
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {job.department} · {job.location}
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition text-lg leading-none"
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
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
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#49BCE3]/40 focus:border-[#49BCE3] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Cover Note
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us why you're a great fit..."
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#49BCE3]/40 focus:border-[#49BCE3] transition resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Resume (PDF/DOC)
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#0f2a5f] file:text-white hover:file:bg-[#13387a] file:transition cursor-pointer"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0f2a5f] to-[#49BCE3] text-white text-sm font-bold hover:opacity-90 transition mt-1"
                  >
                    Submit Application →
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                className="py-10 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-3xl mx-auto mb-4">
                  ✅
                </div>
                <h3 className="text-xl font-black text-black mb-2">
                  Application Sent!
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Thank you for applying for <strong>{job.title}</strong>. Our
                  team will reach out to you shortly.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
                >
                  Close
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function CareerPage() {
  const [activeJob, setActiveJob] = useState(null);
  const [filter, setFilter] = useState("All");
  const [hovered, setHovered] = useState(null);

  const departments = ["All", "Marketing", "Development", "Design", "Sales"];

  const filtered =
    filter === "All"
      ? openings
      : openings.filter((j) => j.department === filter);

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative w-full py-20 lg:py-28 overflow-hidden bg-gradient-to-r from-[#0f2a5f] via-[#13387a] to-[#0f2a5f]">
        {/* Dot grid overlay */}

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-5xl font-black leading-tight mb-5 tracking-tight"
          >
            Build Your Career at{" "}
            <span className="text-[#49BCE3]">Kanak Drishti</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto mb-8"
          >
            We are a fast-growing digital marketing & tech company based in
            Noida. Join a passionate team where your skills are valued, growth
            is real, and impact is visible.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <a
              href="#openings"
              className="px-6 py-3 rounded-xl bg-[#49BCE3] text-white text-sm font-bold hover:bg-[#3aacda] transition"
            >
              View Open Positions ↓
            </a>
            <a
              href="mailto:hr@kanakdrishtiinfo.com"
              className="px-6 py-3 rounded-xl border border-white/30 text-white text-sm font-bold hover:bg-white/10 transition"
            >
              Send Your Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── PERKS ── */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-bold tracking-[0.18em] text-[#49BCE3] uppercase mb-2">
              — Life at Kanak Drishti
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-black leading-tight">
              Why Work With Us?
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group flex gap-4 items-start p-6 rounded-2xl border border-gray-100 bg-white hover:border-[#49BCE3]/30 transition-all duration-300"
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
                <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                  {perk.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-black mb-1">
                    {perk.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ── */}
      <section
        id="openings"
        className="py-20 px-4 sm:px-6 bg-white border-t border-gray-100"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header + Filter */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-[#49BCE3] uppercase mb-2">
                — Open Positions
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-black leading-tight">
                Current Job Openings
              </h2>
            </div>

            {/* Department filter */}
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setFilter(dept)}
                  className={`px-4 py-2 rounded-full text-xs font-bold border transition-all duration-200 ${
                    filter === dept
                      ? "bg-[#0f2a5f] text-white border-[#0f2a5f]"
                      : "bg-white text-gray-600 border-gray-200 hover:border-[#49BCE3] hover:text-[#49BCE3]"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Cards */}
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AnimatePresence>
              {filtered.map((job) => {
                const tc = deptColors[job.department] || deptColors.Marketing;
                const isHov = hovered === job.id;
                return (
                  <motion.div
                    key={job.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35 }}
                    onHoverStart={() => setHovered(job.id)}
                    onHoverEnd={() => setHovered(null)}
                    className="relative bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-4 transition-all duration-300"
                    style={{
                      boxShadow: isHov
                        ? "0 16px 48px -8px rgba(0,0,0,0.12), 0 0 0 1px rgba(73,188,227,0.2)"
                        : "0 2px 16px -4px rgba(0,0,0,0.07)",
                      transform: isHov ? "translateY(-3px)" : "translateY(0)",
                    }}
                  >
                    {/* Top accent */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                      style={{
                        background: isHov
                          ? "linear-gradient(90deg, #0f2a5f, #49BCE3)"
                          : "transparent",
                        transition: "background 0.3s ease",
                      }}
                    />

                    {/* Header row */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-base font-black text-black leading-snug mb-1.5">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 items-center">
                          <span
                            className={`inline-flex items-center gap-1 text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full ${tc.bg} ${tc.text}`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${tc.dot}`}
                            />
                            {job.department}
                          </span>
                          <span className="text-[11px] text-gray-400 font-medium">
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <p className="text-[11px] text-gray-400">
                          📍 {job.location}
                        </p>
                        <p className="text-[11px] text-gray-400 mt-0.5">
                          🕐 {job.experience}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {job.desc}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-lg bg-gray-50 border border-gray-100 text-[11px] font-semibold text-gray-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                      <span className="text-[11px] text-gray-400 font-medium">
                        Kanak Drishti Infotech Pvt. Ltd.
                      </span>
                      <button
                        onClick={() => setActiveJob(job)}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#0f2a5f] to-[#13387a] text-white text-xs font-bold hover:opacity-90 transition"
                      >
                        Apply Now →
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400 text-sm">
              No openings in this department right now. Check back soon!
            </div>
          )}
        </div>
      </section>

    

      {/* ── APPLY MODAL ── */}
      {activeJob && (
        <ApplyModal job={activeJob} onClose={() => setActiveJob(null)} />
      )}
    </div>
  );
}
