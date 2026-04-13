"use client";
import Link from "next/link";

// ✔ Check Icon
function Check() {
  return <span className="text-green-500 text-sm mt-0.5">✔</span>;
}

// ✔ Plans with Sections
const plans = [
  {
    name: "Starter",
    subtitle: "For Small Businesses",
    price: "25,000",
    sections: [
      {
        title: "Website Analysis",
        items: [
          "Up to 20 Keywords",
          "Website Audit",
          "Competitor Analysis",
          "Initial Ranking Report",
          "Keyword Research",
        ],
      },
      {
        title: "On Page SEO",
        items: [
          "Meta Tags Optimization",
          "Content Optimization",
          "URL Structure",
          "Image Optimization",
          "Mobile Optimization",
        ],
      },
      {
        title: "Content & Links",
        items: [
          "2 Blog Posts",
          "Basic Link Building",
          "Local SEO Setup",
          "Google Business Profile",
        ],
      },
    ],
  },

  {
    name: "Growth",
    subtitle: "Most Popular",
    price: "40,000",
    highlight: true,
    sections: [
      {
        title: "SEO Strategy",
        items: [
          "Up to 30 Keywords",
          "Advanced Competitor Analysis",
          "Keyword Intent Strategy",
          "Ranking Improvements",
          "Technical Fixes",
        ],
      },
      {
        title: "On Page SEO",
        items: [
          "Full Website Optimization",
          "Schema Markup",
          "Speed Optimization",
          "Core Web Vitals",
          "Sitemap & Robots.txt",
        ],
      },
      {
        title: "Content Marketing",
        items: [
          "4 SEO Blogs",
          "3 Articles",
          "Press Release",
          "Guest Posting",
          "Backlink Building",
        ],
      },
    ],
  },

  {
    name: "Enterprise",
    subtitle: "For Large Businesses",
    price: "55,000",
    sections: [
      {
        title: "Advanced SEO",
        items: [
          "Up to 50 Keywords",
          "Competitor Gap Analysis",
          "Conversion Strategy",
          "Full SEO Audit",
          "Technical Optimization",
        ],
      },
      {
        title: "eCommerce SEO",
        items: [
          "Product Page SEO",
          "Category Optimization",
          "Internal Linking",
          "Schema (Product/FAQ)",
          "Speed Optimization",
        ],
      },
      {
        title: "Growth & Authority",
        items: [
          "6 Blogs",
          "High Authority Backlinks",
          "Guest Blogging",
          "Competitor Backlinks",
          "Weekly Reports",
        ],
      },
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-7xl mx-auto">

        {/* 🔥 TOP HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            SEO Plans That Drive Real Growth 
          </h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
            Choose the perfect SEO plan tailored to your business goals. 
            No hidden charges. Only results.
          </p>
        </div>

        {/* 💎 CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl border bg-white flex flex-col p-5 transition hover:shadow-xl ${
                plan.highlight
                  ? "border-[#49BCE3] shadow-lg scale-[1.03]"
                  : "border-gray-200"
              }`}
            >
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900">
                  {plan.name}
                </h3>
                <p className="text-xs text-gray-500">{plan.subtitle}</p>

                <div className="mt-2">
                  <span className="text-2xl font-extrabold text-gray-900">
                    ₹{plan.price}
                  </span>
                  <span className="text-sm text-gray-400"> /mo</span>
                </div>
              </div>

              {/* Sections */}
              <div className="flex-1 space-y-4 overflow-y-auto max-h-[300px] pr-2">
                {plan.sections.map((sec, si) => (
                  <div key={si}>
                    <h4 className="text-[11px] font-bold text-gray-400 uppercase mb-2">
                      {sec.title}
                    </h4>

                    <ul className="space-y-1.5">
                      {sec.items.map((item, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-gray-700">
                          <Check />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Button */}
              <Link
                href="/contact"
                className={`mt-5 text-center py-2.5 rounded-lg font-semibold ${
                  plan.highlight
                    ? "bg-[#49BCE3] text-white"
                    : "bg-gray-900 text-white"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}