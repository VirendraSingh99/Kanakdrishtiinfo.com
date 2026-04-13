"use client";
import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Users,
  Award,
  Clock,
} from "lucide-react";

const BRAND = "#49BCE3";

const features = [
  {
    title: "Fast & Reliable Service",
    description:
      "We ensure high-speed delivery with 99.9% uptime and robust performance for your business operations at every scale.",
  },
  {
    title: "Customized Business Solutions",
    description:
      "Tailor-made digital strategies and software built specifically to meet your unique business goals and market needs.",
  },
  {
    title: "100% Client Satisfaction",
    description:
      "Our dedicated support team ensures your success with round-the-clock assistance and proactive problem solving.",
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "We leverage the latest frameworks, cloud infrastructure, and AI-driven tools to keep your business ahead of the curve.",
  },
];

const sliderImages = [
  "https://plus.unsplash.com/premium_photo-1661490672797-7a6e4f1ba3d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1758691736979-ff263c04b3d1?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
];

export default function WhyChooseUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(
      () => setCurrentSlide((p) => (p + 1) % sliderImages.length),
      3500,
    );
    return () => clearInterval(t);
  }, [isPaused]);

  const prev = () =>
    setCurrentSlide((p) => (p - 1 + sliderImages.length) % sliderImages.length);
  const next = () => setCurrentSlide((p) => (p + 1) % sliderImages.length);

  return (
    <section className="bg-white py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* ── TOP BADGE ── */}
        <div className="text-center mb-14">
         
          <h2 className="text-xl md:text-4xl font-black text-[#1a1a2e] leading-tight max-w-3xl mx-auto">
            Why Choose{" "}
            <span className="text-[#49BCE3]">Kanak Drishti Info Tech?</span>
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-[#49BCE3]" />
        </div>

        {/* ── TWO COLUMN ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* ════ LEFT — rich content ════ */}
          <div className="space-y-8">
            {/* Intro paragraphs */}
            <div className="space-y-4">
              <p className="text-gray-600  leading-relaxed">
                <span className="text-[#49BCE3] font-black">
                  Kanak Drishti Infotech
                </span>{" "}
                is a full-service digital agency headquartered in Delhi NCR,
                serving businesses across India and beyond. Since our founding,
                we have been committed to one mission — helping brands grow
                through technology, creativity, and strategy.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are not just a service provider — we are your long-term
                digital partner. Our team of developers, designers, marketers,
                and strategists work together under one roof to deliver
                solutions that are cohesive, scalable, and built to last. From
                your first conversation with us to the final delivery and
                beyond, we stay with you every step of the way.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you are a startup looking to establish your online
                presence, an SME wanting to automate business processes, or an
                enterprise seeking advanced digital transformation — we have the
                expertise, the tools, and the passion to make it happen. Our
                360° approach ensures that every aspect of your digital
                ecosystem works in harmony to generate real, measurable results.
              </p>
            </div>
          </div>

          {/* ════ RIGHT — image slider ════ */}
          <div
            className="relative sticky top-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Main slider */}
            <div className="relative h-[480px] w-full overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
              {sliderImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    idx === currentSlide
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-110"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              ))}

              {/* Dots + arrows */}
              <div className="absolute inset-x-0 bottom-6 flex items-center justify-between px-6">
                <div className="flex gap-2">
                  {sliderImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
                      style={{
                        width: idx === currentSlide ? "28px" : "8px",
                        backgroundColor:
                          idx === currentSlide
                            ? BRAND
                            : "rgba(255,255,255,0.4)",
                      }}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all cursor-pointer"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all cursor-pointer"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative accent box behind */}
            <div className="absolute -z-10 -bottom-5 -right-5 w-full h-full rounded-[2rem] bg-[#F0F9FF]" />
          </div>
        </div>
      </div>
    </section>
  );
}
