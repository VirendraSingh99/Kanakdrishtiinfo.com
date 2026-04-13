"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── Slide Data ────────────────────────────────────────────────────────────────
const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
    tagline: "Leading IT Solutions",
    title: "Innovate Your Business With Smart Technology",
    description:
      "Kanak Dristi Infotech delivers cutting-edge software development and digital strategies to accelerate your business growth.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1560264280-88b68371db39?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D",
    tagline: "Custom Software Development",
    title: "Scalable Software Built For Your Vision",
    description:
      "From enterprise apps to mobile solutions — we craft robust software that solves real business challenges.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
    tagline: "Digital Marketing & Growth",
    title: "Grow Your Brand In The Digital World",
    description:
      "Data-driven marketing strategies that reach the right audience and build a powerful online presence.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlfGVufDB8fDB8fHww",
    tagline: "Web & App Development",
    title: "Beautiful Experiences That Convert",
    description:
      "High-performance websites and apps — fast, secure, and built to deliver real results for your business.",
  },
];

const SLIDE_DURATION = 4000;

// ─── Animated Counter ─────────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 25);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

// ─── Hero Component ───────────────────────────────────────────────────────────
export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [fading, setFading] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback(
    (index) => {
      if (fading || index === current) return;
      setPrev(current);
      setFading(true);
      setTimeout(() => {
        setCurrent(index);
        setPrev(null);
        setFading(false);
      }, 700);
    },
    [current, fading],
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  // Auto-play logic fixed for all screens
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timerRef.current);
  }, [paused, next]);

  return (
    <section
      className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden flex items-center pt-8 sm:pt-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background Images ── */}
      <div className="absolute inset-0 z-0 bg-black">
        {prev !== null && (
          <div
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: fading ? 0 : 1 }}
          >
            <Image
              src={slides[prev].image}
              alt={slides[prev].title}
              fill
              className="object-cover object-center scale-105"
              sizes="100vw"
            />
          </div>
        )}

        <div
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: fading ? 0 : 1 }}
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority
            className="object-cover object-center animate-slowZoom"
            sizes="100vw"
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* ── Content (Shifted Upwards) ── */}
      <div className="relative z-10 w-full px-6 sm:px-12 md:px-20 lg:px-24 mt-[-6vh] sm:mt-[-12vh]">
        <div className="max-w-3xl mx-auto sm:mx-0 text-center sm:text-left">
          {/* Tagline */}
          <div
            key={`tag-${current}`}
            className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#49BCE3] uppercase border-l-4 border-[#49BCE3] bg-white/5 backdrop-blur-md rounded-r-md animate-fadeUp"
          >
            {slides[current].tagline}
          </div>

          {/* Heading */}
          <h1
            key={`h-${current}`}
            className="text-[clamp(1.75rem,4.5vw,3.2rem)] font-extrabold text-white leading-[1.1] mb-4 animate-fadeUp"
            style={{ animationDelay: "100ms" }}
          >
            {slides[current].title}
          </h1>

          {/* Description */}
          <p
            key={`d-${current}`}
            className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto sm:mx-0 leading-relaxed mb-8 animate-fadeUp opacity-90"
            style={{ animationDelay: "200ms" }}
          >
            {slides[current].description}
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 mb-12 animate-fadeUp"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3 bg-[#49BCE3] text-white text-sm font-bold rounded-xl hover:bg-[#38a6cc] active:scale-95 transition-all shadow-xl shadow-[#49BCE3]/20 flex items-center justify-center gap-2"
            >
              Get Started Now
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
            <Link
              href="/software"
              className="w-full sm:w-auto px-8 py-3 bg-white/10 backdrop-blur-md text-white text-sm font-bold rounded-xl border border-white/20 hover:bg-white/20 active:scale-95 transition-all flex items-center justify-center"
            >
              Our Software
            </Link>
          </div>

          {/* Stats */}
          <div
            className="flex flex-row justify-center sm:justify-start gap-8 sm:gap-12 pt-8 border-t border-white/10 animate-fadeUp"
            style={{ animationDelay: "400ms" }}
          >
            {[
              { value: 2521, suffix: "+", label: "Projects" },
              { value: 2032, suffix: "+", label: "Clients" },
              { value: 16, suffix: "+", label: "Years" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center sm:items-start"
              >
                <span className="text-xl sm:text-3xl font-black text-white tabular-nums leading-none">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </span>
                <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-[0.15em] mt-1.5 font-medium">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Navigation Dots ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all cursor-pointer duration-500 ${
              i === current
                ? "w-10 bg-[#49BCE3]"
                : "w-3 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* ── Progress Bar ── */}
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-white/5 z-30 overflow-hidden">
        <div
          key={current}
          className="h-full bg-[#49BCE3]"
          style={{
            animation: paused
              ? "none"
              : `progress ${SLIDE_DURATION}ms linear forwards`,
          }}
        />
      </div>
    </section>
  );
}
