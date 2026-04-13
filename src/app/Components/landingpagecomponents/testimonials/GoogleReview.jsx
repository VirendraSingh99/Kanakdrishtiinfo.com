"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// --- API Ready Data Structure ---

const allReviews = [
  // Google Reviews
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    rating: 5,
    text: "Kanak Drishti Infotech built an outstanding website for our business. The team is very professional.",
    platform: "google",
    avatar: "RK",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Vikram Singh",
    role: "Hospital Administrator",
    rating: 5,
    text: "They provided a complete digital solution for our hospital. They handle our website, app, and social media perfectly.",
    platform: "google",
    avatar: "VS",
    color: "bg-teal-100 text-teal-700",
  },

  // Clutch Reviews
  {
    name: "Amit Verma",
    role: "CEO, TechStart",
    rating: 5,
    text: "The software development team delivered exactly what we wanted. The communication was excellent.",
    platform: "clutch",
    avatar: "AV",
    color: "bg-purple-100 text-purple-700",
  },
  {
    name: "Suresh Mehta",
    role: "Finance Director",
    rating: 5,
    text: "Their team developed a complete ERP system for our company. They have a very systematic approach.",
    platform: "clutch",
    avatar: "SM",
    color: "bg-red-100 text-red-700",
  },

  // Facebook Reviews
  {
    name: "Priya Sharma",
    role: "Marketing Head",
    rating: 5,
    text: "The digital marketing services have been very effective. Our leads doubled in just 3 months.",
    platform: "facebook",
    avatar: "PS",
    color: "bg-green-100 text-green-700",
  },
  {
    name: "Neha Gupta",
    role: "E-commerce Entrepreneur",
    rating: 5,
    text: "Hiring them was the best decision. They professionally designed my online store and sales have increased.",
    platform: "facebook",
    avatar: "NG",
    color: "bg-pink-100 text-pink-700",
  },

  // Justdial Reviews
  {
    name: "Sunita Agarwal",
    role: "Retail Store Owner",
    rating: 5,
    text: "A very good company. I was surprised to see their SEO work; we now have top rankings on Google.",
    platform: "justdial",
    avatar: "SA",
    color: "bg-amber-100 text-amber-700",
  },
  {
    name: "Kavita Joshi",
    role: "School Principal",
    rating: 5,
    text: "Contacted them for school management software. Everything was delivered perfectly.",
    platform: "justdial",
    avatar: "KJ",
    color: "bg-indigo-100 text-indigo-700",
  },
];

const PlatformIcon = ({ platform }) => {
  switch (platform) {
    case "google":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
      );
    case "clutch":
      return (
        <span className="text-[10px] font-black text-[#ff4100] uppercase italic">
          Clutch
        </span>
      );
    case "facebook":
      return (
        <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "justdial":
      return (
        <span className="text-[10px] font-bold text-[#ff6a00] px-1 border border-[#ff6a00] rounded">
          JD
        </span>
      );
    default:
      return null;
  }
};

function ReviewCard({ review }) {
  return (
    <div className="min-w-[320px] max-w-[320px] border border-gray-100 rounded-2xl p-5 text-left hover:border-[#49BCE3]/40 hover:shadow-2xl transition-all duration-300 bg-white mx-3 flex flex-col justify-between h-[200px]">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-3 h-3 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 1l2.39 6.26H18l-4.7 3.57 1.8 6.17L10 13.27l-5.1 3.73 1.8-6.17L2 7.26h5.61z" />
              </svg>
            ))}
          </div>
          <PlatformIcon platform={review.platform} />
        </div>
        <p className="text-gray-600  leading-relaxed ">
          "{review.text}"
        </p>
      </div>
      <div className="border-t border-gray-50 pt-4 flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${review.color}`}
        >
          {review.avatar}
        </div>
        <div className="overflow-hidden">
          <p className="text-xs font-bold text-[#2D2D2D] truncate">
            {review.name}
          </p>
          <p className="text-[9px] text-gray-400 uppercase tracking-tighter">
            {review.role}
          </p>
        </div>
      </div>
    </div>
  );
}

function ScrollingRow({ reviews, speed = 0.5, reverse = false }) {
  const rowRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const infiniteData = [...reviews, ...reviews, ...reviews, ...reviews];

  useEffect(() => {
    const slider = rowRef.current;
    if (!slider) return;
    let frame;
    let pos = slider.scrollWidth / 4;
    slider.scrollLeft = pos;

    const animate = () => {
      if (!paused) {
        pos = reverse ? pos - speed : pos + speed;
        if (pos >= (slider.scrollWidth / 4) * 3) pos = slider.scrollWidth / 4;
        if (pos <= 0) pos = slider.scrollWidth / 4;
        slider.scrollLeft = pos;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [paused, speed, reverse]);

  return (
    <div
      ref={rowRef}
      className="flex overflow-x-hidden py-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {infiniteData.map((review, i) => (
        <ReviewCard key={i} review={review} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const reviewPlatforms = [
    {
      name: "Google Review",
      platform: "google",
      color: "hover:bg-blue-50",
      link: "https://g.page/r/CRWve_C6XZU0EBM/review",
    },
    { name: "Clutch", platform: "clutch", color: "hover:bg-red-50", link: "#" },
    {
      name: "Facebook",
      platform: "facebook",
      color: "hover:bg-blue-100",
      link: "#",
    },
    {
      name: "Justdial",
      platform: "justdial",
      color: "hover:bg-orange-50",
      link: "#",
    },
  ];
  const googleData = allReviews.filter((r) => r.platform === "google");
  const clutchData = allReviews.filter((r) => r.platform === "clutch");
  const facebookData = allReviews.filter((r) => r.platform === "facebook");
  const jdData = allReviews.filter((r) => r.platform === "justdial");

  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.p className="text-[#49BCE3] font-black uppercase tracking-[0.3em] text-[10px] mb-4">
          Reviews Hub
        </motion.p>
        <h2 className="text-4xl font-black text-[#2D2D2D] mb-4">
          Multi-Platform <span className="text-[#49BCE3]">Feedback.</span>
        </h2>
        <p className="text-[#8E8E8E] text-sm max-w-xl mx-auto italic font-medium">
          Verified reviews from Google, Clutch, Facebook, and Justdial.
        </p>
      </div>

      <div className="relative space-y-6 cursor-pointer">
        {/* Row 1: Google */}
        <div className="flex flex-col">
          <span className="ml-10 text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">
            Google Reviews
          </span>
          <ScrollingRow reviews={googleData} speed={0.5} />
        </div>

        {/* Row 2: Clutch */}
        <div className="flex flex-col">
          <span className="ml-10 text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">
            Clutch Verified
          </span>
          <ScrollingRow reviews={clutchData} speed={0.7} reverse={true} />
        </div>

        {/* Row 3: Facebook */}
        <div className="flex flex-col">
          <span className="ml-10 text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">
            Facebook Community
          </span>
          <ScrollingRow reviews={facebookData} speed={0.9} />
        </div>

        {/* Row 4: Justdial */}
        <div className="flex flex-col">
          <span className="ml-10 text-[9px] font-bold text-gray-400  uppercase tracking-widest mb-1">
            Justdial Ratings
          </span>
          <ScrollingRow reviews={jdData} speed={0.9} reverse={true} />
        </div>
      </div>

      {/* --- New "Write a Review" Section --- */}
      <div className="mt-20 flex flex-col items-center px-6">
        <div className="bg-white p-8 rounded   border border-gray-100 max-w-8xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left">
            <h3 className="text-xl font-bold text-[#2D2D2D] mb-1">
              Happy with our service?
            </h3>
            <p className="text-[#8E8E8E] text-xs font-medium italic">
              Your feedback helps us grow. Share your experience!
            </p>
          </div>
          <>
            <div className="flex flex-wrap items-center gap-4">
              {/* Main Action Button - Now Triggers Modal */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#49BCE3] hover:bg-[#3a9fc5] text-white cursor-pointer px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#49BCE3]/20 flex items-center gap-2 group"
              >
                <svg
                  className="w-4 h-4 fill-white group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
                Write a Review
              </button>

              {/* Quick Platform Icons (Keep as they are or remove if modal is enough) */}
              <div className="flex items-center gap-3 border-l border-gray-100 pl-4">
                {/* ... (Your existing small icons) */}
              </div>
            </div>

            {/* REVIEW MODAL */}
            {isModalOpen && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all">
                <div className="bg-white w-full max-w-md rounded overflow-hidden shadow-2xl transform transition-all">
                  {/* Modal Header */}
                  <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#49BCE3]">
                    <h3 className="text-xl font-bold text-[#2D2D2D]">
                      Select a Platform
                    </h3>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="p-2 hover:bg-gray-200  cursor-pointer rounded-full transition-colors"
                    >
                      <svg
                        className="w-6 h-6 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Modal Body - Platform List */}
                  <div className="p-6 grid grid-cols-1 gap-3">
                    {reviewPlatforms.map((item) => (
                      <a
                        key={item.name}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-between p-4 rounded-2xl border border-gray-100 transition-all duration-300 ${item.color} hover:border-[#49BCE3] hover:shadow-md group`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-xl group-hover:bg-white">
                            <PlatformIcon platform={item.platform} />
                          </div>
                          <span className="font-bold text-[#2D2D2D]">
                            {item.name}
                          </span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#49BCE3] group-hover:translate-x-1 transition-all" />
                      </a>
                    ))}
                  </div>

                  <div className="p-6 bg-gray-50 text-center">
                    <p className="text-xs text-[#8E8E8E] font-medium uppercase tracking-widest">
                      Your feedback helps us grow!
                    </p>
                  </div>
                </div>

                {/* Click outside to close */}
                <div
                  className="absolute inset-0 -z-10 "
                  onClick={() => setIsModalOpen(false)}
                ></div>
              </div>
            )}
          </>
        </div>
      </div>
    </section>
  );
}
