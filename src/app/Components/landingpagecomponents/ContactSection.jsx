"use client";

import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
// --- Dynamic Counter Component ---
const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    let totalMiliseconds = duration;
    let incrementTime =
      totalMiliseconds / end > 10 ? totalMiliseconds / end : 10;

    let timer = setInterval(() => {
      start += Math.ceil(end / (duration / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>
      {count}
      {target.includes("+") ? "+" : target.includes("%") ? "%" : ""}
    </span>
  );
};

export default function ContactSection() {
  const [verified, setVerified] = useState(false);
  const [service, setService] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const services = [
    "Digital Marketing",
    "Web Development",
    "App Development",
    "UI/UX Design",
    "SEO Optimization",
    "Content Writing",
    "Social Media Management",
    "Cloud Services",
    "IT Consulting",
    "E-commerce Solutions",
  ];

  const softwares = [
    "Drishti Travel CRM",
    "HRMS Software",
    "MLM Software",
    "Drishti Task Manager",
    "Swiftopay Payment Orchestration",
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-10 px-5 font-sans">
      {/* ── TOP HEADING ── */}
      <div className="text-center mb-10">
        <p className="text-[#49BCE3] text-xs font-bold uppercase tracking-widest mb-2">
          We'd Love to Hear From You
        </p>
        <h2 className="text-xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight">
          Get In Touch With Us
        </h2>
        <p className="mt-3 text-slate-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
          Have a project in mind? Our team at{" "}
          <span className="text-[#49BCE3] font-bold">
            Kanak Drishti Infotech
          </span>{" "}
          is ready to help you grow digitally. Let's connect!
        </p>
      </div>

      {/* ── MAIN CONTAINER ── */}
      <div className="grid lg:grid-cols-2 max-w-6xl w-full gap-8">
        {/* ── LEFT PANEL (Tailwind CSS) ── */}
        <div className="border-[1.5px] border-[#e2c97e] rounded-xl p-6 md:p-10 bg-white flex flex-col gap-10 shadow-lg shadow-black/5">
          <div className="space-y-4">
            <p className="text-[#49BCE3] text-xs font-bold uppercase tracking-widest">
              Request a Call Back!
            </p>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Book an Appointment with Our Top-Rated Marketing & Software
              Experts.
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Hope you have seen a lot of good things about{" "}
              <strong className="text-slate-900">Kanak Drishti Infotech</strong>
              . Now, it's time to talk with a real person about your project.
              So, don't delay!
            </p>
          </div>

          <div className="space-y-8">
            {/* Logos Section */}
            <div className="flex flex-wrap items-center gap-6 md:gap-24 justify-start">
              <div className="text-center">
                <div className="text-xl font-black text-slate-900">Clutch</div>
                <div className="text-orange-400 text-sm">★★★★★</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                  Rated 5/5 Stars
                </div>
              </div>

              <div className="text-center">
                <div className="text-xl font-black">
                  <span className="text-slate-900">Up</span>
                  <span className="text-green-600">work</span>
                </div>
                <div className="text-[11px] font-black text-slate-900 uppercase">
                  Top Rated Plus
                </div>
              </div>

              <div className="text-center">
                <div className="text-xl font-black flex justify-center">
                  {["G", "o", "o", "g", "l", "e"].map((l, i) => (
                    <span
                      key={i}
                      style={{
                        color: [
                          "#4285F4",
                          "#EA4335",
                          "#FBBC05",
                          "#4285F4",
                          "#34A853",
                          "#EA4335",
                        ][i],
                      }}
                    >
                      {l}
                    </span>
                  ))}
                </div>
                <div className="text-orange-400 text-sm">★★★★★</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                  Rated 4.9/5 Stars
                </div>
              </div>
            </div>

            {/* --- RESPONSIVE COUNTER BOXES --- */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  value: "1000",
                  suffix: "+",
                  label: "Projects",
                  bg: "bg-yellow-50",
                  color: "text-yellow-800",
                },
                {
                  value: "99",
                  suffix: "%",
                  label: "Job Success",
                  bg: "bg-green-50",
                  color: "text-green-800",
                },
                {
                  value: "500",
                  suffix: "+",
                  label: "Clients",
                  bg: "bg-red-50",
                  color: "text-red-800",
                },
              ].map(({ value, suffix, label, bg, color }, i) => (
                <div
                  key={i}
                  className={`${bg} py-6 px-2 rounded-xl text-center flex flex-col justify-center min-w-[120px] shadow-sm border border-black/5`}
                >
                  <div className={`text-2xl font-black ${color}`}>
                    <Counter target={value} />
                    {suffix}
                  </div>
                  <div
                    className={`text-[10px] font-extrabold uppercase tracking-widest ${color} opacity-70 mt-1`}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL (FORM - Regular Style) ── */}
        <div
          style={{
            border: "1.5px solid #ddd",
            borderRadius: 10,
            padding: "40px 36px",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
          }}
        >
          <div style={{ marginBottom: 4 }}>
            <h3
              style={{
                margin: 0,
                fontSize: 20,
                fontWeight: 800,
                color: "#0f172a",
              }}
            >
              Send Us a Message
            </h3>
            <p style={{ margin: "4px 0 0", fontSize: 13, color: "#94a3b8" }}>
              Fill in the details and we'll get back to you shortly.
            </p>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={inputStyle}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              style={inputStyle}
            />
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            <input
              type="tel"
              placeholder="Whatsapp Mobile Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="City"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              style={inputStyle}
            />
          </div>

          <div style={{ position: "relative" }}>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              style={{
                ...inputStyle,
                width: "100%",
                appearance: "none",
                cursor: "pointer",
                color: service ? "#111" : "#aaa",
              }}
            >
              <option value="" disabled hidden>
                - Select Service -
              </option>
              {services.map((s, i) => (
                <option key={i} value={s} style={{ color: "#111" }}>
                  {s}
                </option>
              ))}
            </select>
            <span
              style={{
                position: "absolute",
                right: 14,
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                color: "#888",
                fontSize: 11,
              }}
            >
              ▼
            </span>
          </div>

          <div style={{ position: "relative" }}>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              style={{
                ...inputStyle,
                width: "100%",
                appearance: "none",
                cursor: "pointer",
                color: service ? "#111" : "#aaa",
              }}
            >
              <option value="" disabled hidden>
                - Select Software -
              </option>
              {softwares.map((s, i) => (
                <option key={i} value={s} style={{ color: "#111" }}>
                  {s}
                </option>
              ))}
            </select>
            <span
              style={{
                position: "absolute",
                right: 14,
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                color: "#888",
                fontSize: 11,
              }}
            >
              ▼
            </span>
          </div>

          <textarea
            rows={4}
            placeholder="Please type atleast 20 characters about your Inquiry"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={{
              ...inputStyle,
              resize: "vertical",
              minHeight: 100,
              lineHeight: 1.6,
              paddingTop: 12,
            }}
          />
          <ReCAPTCHA
            sitekey="6LdD26osAAAAAPo9N-YD6Zgi3STQWSDslDRcBp-u"
            onChange={(token) => setCaptchaToken(token)}
          />

          <button
            style={{
              padding: "13px 36px",
              background: "#49BCE3",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: "0.02em",
              width: "fit-content",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#3a9fc5")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#49BCE3")}
          >
            Submit Now →
          </button>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "11px 14px",
  border: "1px solid #cbd5e1",
  borderRadius: 6,
  fontSize: 13.5,
  color: "#111",
  outline: "none",
  background: "#fff",
  boxSizing: "border-box",
  fontFamily: "inherit",
};
