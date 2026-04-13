import React from "react";

const SoftwareContentMainPage = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div className="relative order-1 md:order-none">
            <div className="rounded-3xl overflow-hidden h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px]">
              <img
                src="./softwaresection.png"
                alt="Software Development Services"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#49BCE3]/20 rounded-full blur-2xl"></div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <span className="text-[#49BCE3] font-semibold uppercase tracking-wider text-sm">
              Our Expertise
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-6 leading-tight">
              Transforming Ideas into{" "}
              <span className="text-[#49BCE3]">
                Powerful Software Solutions
              </span>
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              At Kanakdrishti Infotech, we specialize in turning complex
              business ideas into scalable and high-performing software
              solutions. Our team combines innovation with technical expertise
              to build applications that are fast, secure, and future-ready.
            </p>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              We work with startups, enterprises, and growing businesses to
              develop custom software, web applications, and digital platforms
              that streamline operations and enhance user experience.
            </p>

            <div className="space-y-4 mb-6">
              {[
                "Custom software development tailored to your business",
                "Scalable architecture for long-term growth",
                "Modern UI/UX with seamless user experience",
                "Secure and performance-optimized solutions",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#49BCE3]/10 flex items-center justify-center text-[#49BCE3] font-bold text-sm">
                    ✓
                  </div>
                  <p className="text-slate-700">{point}</p>
                </div>
              ))}
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              Our goal is simple — to help your business grow with smart
              technology solutions that deliver real results and long-term
              success.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
        {/* HEADING */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
          Build Scalable Software Solutions for Your Business Growth
        </h1>

        {/* PARAGRAPH 1 */}
        <p className="text-slate-700 leading-relaxed mb-5">
          Are you looking for reliable software development services to
          streamline your business operations and boost efficiency? At
          Kanakdrishti Infotech, we specialize in building powerful, scalable,
          and user-friendly software solutions tailored to your business needs.
        </p>

        {/* PARAGRAPH 2 */}
        <p className="text-slate-700 leading-relaxed mb-5">
          With extensive experience in the IT industry, we have successfully
          delivered high-performance applications for startups, enterprises, and
          growing businesses. Our solutions are designed to improve
          productivity, automate workflows, and ensure seamless user
          experiences.
        </p>

        {/* PARAGRAPH 3 */}
        <p className="text-slate-700 leading-relaxed mb-5">
          From custom software development to web applications and enterprise
          systems, we use modern technologies and best practices to build
          secure, fast, and scalable products. Our team focuses on writing clean
          code, optimizing performance, and delivering long-term value.
        </p>

        {/* PARAGRAPH 4 */}
        <p className="text-slate-700 leading-relaxed mb-5">
          We follow a client-first approach — understanding your business goals,
          challenges, and workflows before crafting any solution. This ensures
          that every product we build is not just technically strong but also
          aligned with your growth strategy.
        </p>

        {/* PARAGRAPH 5 */}
        <p className="text-slate-700 leading-relaxed">
          In today’s fast-paced digital world, having the right technology
          partner is crucial. At Kanakdrishti Infotech, we don’t just develop
          software — we create digital solutions that help your business scale,
          innovate, and stay ahead of the competition.
        </p>
      </section>
    </>
  );
};

export default SoftwareContentMainPage;
