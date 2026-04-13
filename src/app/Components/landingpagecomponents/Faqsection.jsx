"use client";

import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    id: 1,
    question: "How much do digital marketing services cost in India?",
    answer:
      "Digital marketing services typically range from ₹10,000 to ₹1,00,000+ per month depending on your business needs, goals, and competition level in your industry.",
  },
  {
    id: 2,
    question: "How long does digital marketing take to show results?",
    answer:
      "SEO takes around 3–6 months to show significant results, while paid ads like Google Ads can generate leads almost instantly from day one.",
  },
  {
    id: 3,
    question: "Is digital marketing effective for small businesses?",
    answer:
      "Yes, it helps small businesses reach targeted customers, increase online visibility, and generate affordable leads — often at a fraction of traditional advertising costs.",
  },
  {
    id: 4,
    question: "What is the best digital marketing strategy for my business?",
    answer:
      "A combination of SEO, Google Ads, and social media marketing works best for most businesses. The right mix depends on your goals, budget, and target audience.",
  },
  {
    id: 5,
    question: "What is the cost of website development in India?",
    answer:
      "A basic website costs ₹5,000–₹25,000, while eCommerce websites can go up to ₹1,00,000+ depending on features, design complexity, and functionality required.",
  },
  {
    id: 6,
    question: "How long does it take to build a website?",
    answer:
      "Basic websites take 3–7 days, while advanced or eCommerce websites typically take 10–30 days depending on the scope and number of revisions involved.",
  },
  {
    id: 7,
    question: "Will my website be SEO-friendly and mobile responsive?",
    answer:
      "Yes, all websites we build are designed with SEO best practices from the ground up and are fully mobile responsive across all screen sizes and devices.",
  },
  {
    id: 8,
    question: "What is SEO and why is it important?",
    answer:
      "SEO (Search Engine Optimization) helps your website rank higher on Google, bringing consistent organic traffic, improving brand credibility, and increasing quality leads.",
  },
  {
    id: 9,
    question: "How long does it take to rank on Google?",
    answer:
      "Ranking usually takes 3–6 months depending on competition, keyword difficulty, content quality, and the overall authority of your website.",
  },
  {
    id: 10,
    question: "Do you guarantee first-page rankings on Google?",
    answer:
      "No one can ethically guarantee rankings, but our proven strategies ensure consistent growth, improved visibility, and long-term sustainable results for your business.",
  },
  {
    id: 11,
    question: "What is local SEO and how does it help?",
    answer:
      "Local SEO helps your business appear in location-based searches like 'digital marketing company near me' or 'SEO services in Noida,' driving highly relevant local traffic.",
  },
  {
    id: 12,
    question: "What budget is required to start Google Ads?",
    answer:
      "You can start with ₹5,000–₹10,000 per month depending on your goals, target keywords, and the level of competition in your industry.",
  },
  {
    id: 13,
    question: "Can Google Ads generate instant leads?",
    answer:
      "Yes, PPC campaigns can drive immediate traffic and leads from day one, making Google Ads one of the fastest ways to get results for your business.",
  },
  {
    id: 14,
    question: "How can I reduce my cost per click (CPC)?",
    answer:
      "By improving ad quality scores, targeting the right audience segments, refining match types, and optimizing landing pages for better relevance and conversion rates.",
  },
  {
    id: 15,
    question: "Do you provide digital marketing services in Delhi NCR?",
    answer:
      "Yes, we offer full digital marketing services across Noida, Delhi, Ghaziabad, and Gurgaon — covering the entire Delhi NCR region with local expertise.",
  },
  {
    id: 16,
    question: "How do I choose the right digital marketing company?",
    answer:
      "Check their experience, client reviews, case studies, and proven ROI results. A trustworthy agency will always be transparent about strategies, timelines, and expected outcomes.",
  },
  {
    id: 17,
    question: "Do you offer free consultations?",
    answer:
      "Yes, we provide a free consultation to understand your business, analyze your current digital presence, and suggest the most effective strategy tailored to your goals.",
  },
  {
    id: 18,
    question: "How can I get started with your services?",
    answer:
      "You can contact us via call, WhatsApp, or by filling out the inquiry form on our website. Our team will get back to you within 24 hours to discuss next steps.",
  },
];

const leftFaqs  = faqs.slice(0, 9);
const rightFaqs = faqs.slice(9, 18);

// ── Single FAQ item — receives openId & setOpenId from parent ──
function FAQItem({ faq, openId, setOpenId }) {
  const isOpen    = openId === faq.id;
  const bodyRef   = useRef(null);
  const [height, setHeight] = useState(0);

  // Measure real content height so we can animate to it
  useEffect(() => {
    if (bodyRef.current) setHeight(bodyRef.current.scrollHeight);
  }, [faq.answer]);

  const toggle = () => setOpenId(isOpen ? null : faq.id);

  return (
    <div
      onClick={toggle}
      className={`rounded border bg-white cursor-pointer transition-all duration-300
        ${isOpen
          ? "border-[#49BCE3] shadow-[0_0_0_2px_rgba(73,188,227,0.14)]"
          : "border-gray-200 shadow-sm hover:border-[#49BCE3] hover:shadow-[0_0_0_2px_rgba(73,188,227,0.10)]"
        }`}
    >
      {/* Question row */}
      <div className="flex items-center justify-between gap-3 px-5 py-4">
        <h3
          className={`text-sm font-semibold leading-snug transition-colors duration-200
            ${isOpen ? "text-[#49BCE3]" : "text-gray-800"}`}
        >
          {faq.question}
        </h3>

        {/* +/× icon */}
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300
            ${isOpen ? "bg-[#49BCE3] border-[#49BCE3]" : "bg-gray-100 border-gray-200"}`}
        >
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-3 h-3 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-45" : "rotate-0"}`}
            strokeWidth="1.5"
            strokeLinecap="round"
            stroke={isOpen ? "#fff" : "#9ca3af"}
          >
            <line x1="6" y1="1" x2="6" y2="11" />
            <line x1="1" y1="6" x2="11" y2="6" />
          </svg>
        </span>
      </div>

      {/* Answer — smooth height animation via max-height */}
      <div
        style={{
          maxHeight: isOpen ? `${height + 32}px` : "0px",
          opacity:   isOpen ? 1 : 0,
          overflow:  "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease",
        }}
      >
        <div ref={bodyRef} className="px-5 pb-4 pt-3 border-t border-gray-100">
          <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

// ── Column — shares the same openId state ──
function FAQColumn({ items, openId, setOpenId }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((faq) => (
        <FAQItem
          key={faq.id}
          faq={faq}
          openId={openId}
          setOpenId={setOpenId}
        />
      ))}
    </div>
  );
}

// ── Main section ──
export default function FAQSection() {
  // Single shared state — only one FAQ open at a time across both columns
  const [openId, setOpenId] = useState(null);

  return (
    <section className="min-h-screen bg-white py-2 px-4 sm:px-8">

      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-14">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#1a8fb0] bg-[#e0f6fc] px-4 py-1.5 rounded-full mb-5">
          Got Questions?
        </span>
        <h1 className="text-xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
          Frequently Asked <span className="text-[#49BCE3]">Questions</span>
        </h1>
        <p className="text-base text-gray-500 leading-relaxed">
          Everything you need to know about our services and process — answered clearly and honestly.
        </p>
        <div className="flex items-center justify-center gap-2 mt-7">
          <span className="block w-10 h-px bg-gray-200" />
          <span className="block w-3 h-3 rounded-full bg-[#49BCE3]" />
          <span className="block w-10 h-px bg-gray-200" />
        </div>
      </div>

      {/* Two-column FAQ grid — single openId shared across both */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <FAQColumn items={leftFaqs}  openId={openId} setOpenId={setOpenId} />
        <FAQColumn items={rightFaqs} openId={openId} setOpenId={setOpenId} />
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-14">
        <p className="text-sm text-gray-500">
          Still have questions?{" "}
          <a href="/contact" className="text-[#49BCE3] font-semibold hover:underline">
            Contact our team →
          </a>
        </p>
      </div>
    </section>
  );
}