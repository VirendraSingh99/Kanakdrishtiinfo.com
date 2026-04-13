"use client";

import { useState, useEffect, useRef } from "react";
import {
  CheckCircle2,
  Award,
  Users,
  Clock,
  Globe,
  Zap,
  ArrowRight,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const highlights = [
  "Hands-on experience in SEO & PPC",
  "Social Media Marketing experts",
  "Strategic Content Creation",
  "Modern Web Design & Development",
  "Result-oriented digital solutions",
  "Transparent client collaboration",
];

function CounterItem({ value, suffix, label, sublabel, inView, index }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime = null;
    const duration = 2000;
    const delay = index * 100;
    const timer = setTimeout(() => {
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timer);
  }, [inView, value, index]);

  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-2 border-white/10 last:border-0">
      <div className="flex items-end gap-0.5 mb-1">
        <span className="font-bold text-white text-[clamp(2rem,4vw,2.8rem)] leading-none">
          {count}
        </span>
        <span className="font-bold text-[#49BCE3] text-xl mb-1">{suffix}</span>
      </div>
      <p className="text-xs font-bold text-white/90 uppercase tracking-tight">
        {label}
      </p>
      <p className="text-[10px] text-white/40">{sublabel}</p>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-8 px-4 bg-white font-[Poppins]"
    >
      {/* Background Decorative Elements */}

      <div className="absolute top-20 right-0 w-96 h-96 bg-[#49BCE3]/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="mb-16">
          <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase px-4 py-1 rounded-full mb-4 bg-[#49BCE3]/10 text-[#49BCE3] border border-[#49BCE3]/20">
            16 Years of Legacy
          </span>
          <h2 className="font-black text-[#2D2D2D] text-xl md:text-4xl leading-[1.1] max-w-8xl">
            Kanak Drishti:{" "}
            <span className="text-[#49BCE3]">Business Growth</span> Through
            Innovative IT Solutions
          </h2>
          <div className="h-1.5 w-20 bg-[#2D2D2D] mt-6 rounded-full" />
        </div>

        {/* ── Main Grid ── */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-20">
          {/* LEFT: Full Content Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <p className="text-lg font-bold text-[#2D2D2D] leading-snug">
                Kanak Drishti is the best digital marketing company in Noida
                that works closely with businesses to improve their online
                visibility and generate real growth.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our journey began with a shared vision among industry
                professionals to help businesses grow through innovative and
                result-driven strategies. What started as a small startup has
                gradually grown into a trusted digital marketing partner for
                clients across multiple industries.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe every brand is different, so we focus on
                understanding business goals before creating the right digital
                strategy. Our growth is built on a strong commitment to quality,
                creativity, and the ability to adapt to changing digital trends.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 py-6 border-y border-gray-100">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-[#49BCE3]/10 p-1 rounded-full">
                    <CheckCircle2 size={14} className="text-[#49BCE3]" />
                  </div>
                  <span className="text-sm font-medium text-[#2D2D2D]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed  border-l-4 border-[#49BCE3] pl-6 py-2">
              "At Kanak Drishti, our focus is on delivering authentic,
              result-oriented digital marketing solutions that support long-term
              business success through close collaboration and transparency."
            </p>
          </div>

          {/* RIGHT: Image & Badges */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Digital Strategy Team"
                width={600}
                height={700}
                className="object-cover h-[500px] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/80 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-6 -right-6 bg-white p-5 rounded-3xl shadow-xl border border-gray-100 hidden md:flex items-center gap-4 z-20">
              <div className="w-12 h-12 rounded-2xl bg-[#49BCE3] flex items-center justify-center text-white">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-sm font-black text-[#2D2D2D]">16+ Years</p>
                <p className="text-[10px] uppercase text-[#8E8E8E] font-bold">
                  Industry Experience
                </p>
              </div>
            </div>

            {/* Floating ISO Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#49BCE3] p-5 rounded-3xl shadow-xl flex items-center gap-4 z-20 border-b-4 border-[#49BCE3]">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#49BCE3]">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">
                  ISO Certified
                </p>
                <p className="text-[10px] text-white">Quality QA Process</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Minimalist Shield Icon for Badge
function ShieldCheck({ size, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
