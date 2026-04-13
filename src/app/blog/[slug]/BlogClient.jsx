"use client";

import Link from "next/link";
import { Clock, User, ArrowRight } from "lucide-react";
import { useState } from "react";

const BlogDetailClient = ({ blog, relatedBlogs, recentBlogs }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatContent = (content) => {
    if (!content) return null;

    const lines = content.split("\n");
    const elements = [];
    let paragraphBuffer = [];

    const flushParagraph = (key) => {
      if (paragraphBuffer.length > 0) {
        const text = paragraphBuffer.join(" ").trim();
        if (text) {
          const formattedText = text.replace(
            /\*\*(.*?)\*\*/g,
            "<strong>$1</strong>",
          );
          elements.push(
            <p
              key={`p-${key}`}
              className="text-[17px] leading-relaxed text-gray-700 mb-6"
              dangerouslySetInnerHTML={{ __html: formattedText }}
            />,
          );
        }
        paragraphBuffer = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // "1. Heading" → numbered heading with cyan circle
      const numberedMatch = trimmed.match(/^(\d+)\.\s+(.+)$/);

      if (numberedMatch) {
        flushParagraph(index);
        const number = numberedMatch[1];
        const title = numberedMatch[2];
        elements.push(
          <h2
            key={`h-${index}`}
            className="flex items-center gap-3 text-xl font-bold text-[#0f2a5f] mt-10 mb-3"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full  text-[#0f2a5f] text-lg font-bold flex-shrink-0">
              {number}
            </span>
            {title}
          </h2>,
        );
      } else if (trimmed === "") {
        flushParagraph(index);
      } else {
        paragraphBuffer.push(trimmed);
      }
    });

    flushParagraph("end");
    return elements;
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative w-full py-16 lg:py-24 overflow-hidden bg-gradient-to-r from-[#0f2a5f] via-[#13387a] to-[#0f2a5f]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#49BCE3] rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-500 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 border border-white/20">
            {blog.category}
          </div>
          <h1 className="text-4xl md:text-4xl font-black leading-tight mb-6">
            {blog.title}
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <article className="lg:w-2/3">
            {blog.introImage && (
              <div className="mb-10 rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={blog.introImage}
                  alt={blog.title}
                  className="w-full h-[420px] object-cover"
                />
              </div>
            )}

            <div className="mb-12">
              <p className="text-xl  text-gray-600 border-l-4 border-[#49BCE3] pl-6 leading-relaxed">
                {blog.introContent}
              </p>
            </div>

            {/* Content Area */}
            <div className="prose max-w-none">
              {formatContent(blog.content)}
            </div>

            {/* Tags */}
            <div className="mt-16 flex flex-wrap gap-3">
              {blog.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#f0f7fb] text-[#0f2a5f] px-4 py-2 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </article>

          {/* Sticky Right Sidebar */}
          <aside className="lg:w-1/3 lg:sticky lg:top-8 lg:self-start space-y-10">
            {/* ✅ Recent Articles — Dynamic */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#0f2a5f] mb-6">
                Recent Articles
              </h3>
              <div className="space-y-5">
                {recentBlogs && recentBlogs.length > 0 ? (
                  recentBlogs.map((recent) => (
                    <Link
                      key={recent.id}
                      href={`/blog/${recent.slug}`}
                      className="group flex gap-4 hover:bg-gray-50 p-2 rounded-xl transition-all"
                    >
                      <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                        <img
                          src={recent.image}
                          alt={recent.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm leading-snug line-clamp-2 text-gray-800 group-hover:text-[#49BCE3] transition-colors">
                          {recent.title}
                        </h4>
                        <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          <span>{recent.readTime}</span>
                        </div>
                        <span className="inline-block mt-1 text-[10px] font-bold text-[#49BCE3] uppercase tracking-wider">
                          {recent.category}
                        </span>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-400 text-sm">
                    No recent articles available.
                  </p>
                )}
              </div>
            </div>

            {/* Lead Form */}
            <div className="bg-gradient-to-br from-[#0f2a5f] to-[#13387a] text-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Get Free Consultation</h3>
              <p className="text-[#49BCE3] text-sm mb-6">
                Let's grow your business together
              </p>

              <form className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-[#49BCE3] placeholder-gray-300 text-white"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Business Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-[#49BCE3] placeholder-gray-300 text-white"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-[#49BCE3] placeholder-gray-300 text-white"
                />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your business goals..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-[#49BCE3] placeholder-gray-300 text-white resize-y"
                />
                <button
                  type="submit"
                  className="w-full bg-[#49BCE3] hover:bg-[#3aa6cc] text-[#0f2a5f] font-semibold py-4 rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  Send Message <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Posts */}
      {relatedBlogs?.length > 0 && (
        <section className="bg-gray-50 py-16 px-6 mt-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black text-[#0f2a5f] text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all overflow-hidden"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-7">
                    <div className="text-xs text-[#49BCE3] font-semibold mb-3">
                      {related.category}
                    </div>
                    <h3 className="text-xl font-bold text-[#0f2a5f] mb-3 line-clamp-2 group-hover:text-[#49BCE3]">
                      {related.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {related.description}
                    </p>
                    <div className="mt-6 text-xs text-gray-400">
                      {related.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-[#0f2a5f] to-[#13387a] py-20 px-6 text-center text-white mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Take Your Business to the Next Level?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
          Our expert team is ready to help you achieve explosive growth through
          strategic digital marketing.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#49BCE3] hover:bg-white hover:text-[#0f2a5f] px-10 py-4 rounded-2xl font-semibold text-lg transition-all shadow-xl hover:scale-105"
        >
          Get Your Free Strategy Session
        </Link>
      </section>
    </div>
  );
};

export default BlogDetailClient;
