"use client";

import React from "react";
import Link from "next/link";
import {
  Target,
  Eye,
  Rocket,
  ShieldCheck,
  Users,
  BarChart3,
  Cpu,
  Globe,
  Zap,
  Award,
  Clock,
  Code2,
  Smartphone,
  Megaphone,
  Search,
  Briefcase,
  Stethoscope,
  GraduationCap,
  Building2,
  ShoppingCart,
  Factory,
  Truck,
  Coins,
  CheckCircle2,
} from "lucide-react";

export default function AboutClient() {
  return (
    
    <main className="bg-white text-slate-900 font-sans antialiased">
      {/* 1) HERO SECTION */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a5f] via-[#13387a] to-[#0f2a5f]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-12 sm:py-12 md:py-12">
          {/* Small Tagline */}
          <p className="text-white text-xs sm:text-sm md:text-base mb-3 sm:mb-4 tracking-wide">
            About Kanakdrishti Infotech
          </p>

          {/* Heading */}
          <h1 className="text-xl  md:text-4xl  font-extrabold leading-tight mb-4 sm:mb-6 tracking-tight">
            Driving Innovation Through Digital Excellence
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Kanakdrishti Infotech is a leading software development and digital
            marketing company focused on transforming businesses into
            high-performance digital ecosystems. We combine innovation,
            strategy, and technology to deliver impactful solutions that drive
            measurable growth and long-term success.
          </p>
        </div>
      </section>

      {/* 2) COMPANY INTRODUCTION SECTION */}
      <section className="py-16 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-10 uppercase text-black">
            Who We Are
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-center">
            {/* LEFT IMAGE */}
            <div className="lg:col-span-5">
              <div className="w-full overflow-hidden rounded-2xl shadow-md border border-slate-200 bg-white">
                <img
                  src="/images/vector.png"
                  alt="About Kanakdrishti Infotech"
                  className="w-full h-[240px] sm:h-[300px] md:h-[360px] lg:h-[400px] object-cover"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-7">
              <p className="text-[15px] sm:text-base md:text-lg leading-relaxed text-gray-600 text-justify">
                Founded on the principles of precision, innovation, and
                integrity, <strong>Kanakdrishti Infotech</strong> is more than
                just an IT company in India; we are your strategic growth
                partners. Our collective expertise spans across custom software
                development, sophisticated web architectures, and
                result-oriented digital marketing strategies designed to give
                businesses a competitive edge in an increasingly saturated
                global market. We believe that technology should be an enabler,
                not a hurdle. By focusing on a client-first strategy, we
                dismantle complex business challenges and rebuild them as
                scalable, efficient technical solutions. Whether you are looking
                for an ERP CRM development partner or a top-tier app development
                company, our team brings a wealth of cross-industry knowledge to
                ensure every line of code serves a business purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3) OUR STORY / JOURNEY SECTION */}
      <section className="py-2 md:py-2 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl  md:text-4xl  font-bold text-gray-900 leading-tight tracking-tight">
              Our Journey
            </h2>
            <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              A decade of innovation, strategic execution, and scalable digital
              transformation.
            </p>
          </div>

          {/* Content Block */}
          <div className="max-w-6xl space-y-12">
            {/* Subheading 1 */}
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-5">
                The Beginning
              </h3>
              <p className="text-[15px] sm:text-base md:text-lg leading-relaxed text-slate-700 text-justify">
                <span className="font-medium text-slate-900">
                  From a visionary startup in 2014 to a powerhouse of digital
                  solutions, Kanakdrishti Infotech’s evolution is a testament to
                  the power of persistence, innovation, and technical
                  excellence.
                </span>{" "}
                Our story began when a small group of passionate technologists
                identified a critical gap in the market: the lack of
                high-quality, transparent, and business-focused IT services for
                growing enterprises. Since our inception, we have remained
                committed to building long-term client trust by delivering
                scalable, reliable, and purpose-driven digital solutions.
              </p>
            </div>

            {/* Subheading 2 */}
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-5">
                Growth & Transformation
              </h3>
              <p className="text-[15px] sm:text-base md:text-lg leading-relaxed text-slate-700 text-justify">
                What started as a boutique web development company gradually
                expanded into a full-scale IT consultancy, fueled by a deep
                commitment to mastering emerging technologies and solving
                complex business challenges. Over the years, we have
                successfully adapted to the ever-changing digital landscape—from
                the rise of mobile-first experiences and modern web ecosystems
                to the increasing importance of automation, analytics, branding,
                and performance marketing.
              </p>
            </div>

            {/* Subheading 3 */}
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-5">
                Where We Stand Today
              </h3>
              <p className="text-[15px] sm:text-base md:text-lg leading-relaxed text-slate-700 text-justify">
                Every phase of our growth has been shaped by the success stories
                of the businesses we have partnered with, and each milestone has
                strengthened our ability to deliver impactful digital
                transformation. Today, Kanakdrishti Infotech stands as a trusted
                name for businesses seeking custom software development,
                high-performance websites, digital marketing strategies,
                branding support, and lead generation systems that are designed
                not just for visibility, but for measurable long-term growth and
                sustainable success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4) MISSION & VISION SECTION */}
      <section className="py-16 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses through disruptive technology and creative
                digital solutions that drive meaningful growth. We strive to be
                the catalyst for our clients' success by providing high-quality
                custom software, data-driven marketing, and scalable IT
                infrastructure that simplifies complex processes and enhances
                operational efficiency globally.
              </p>
            </div>
            <div className="p-8 md:p-12 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become the world's most trusted partner for digital
                innovation. We envision a future where every business,
                regardless of size, has access to the technical tools and
                strategic guidance required to thrive in the digital economy. We
                aim to lead the industry in ethical SEO practices, cutting-edge
                web development, and transformative software engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5) WHAT MAKES US DIFFERENT SECTION */}
      <section className="py-12 md:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-4xl font-bold mb-4 uppercase tracking-tighter">
              What Sets Us Apart
            </h2>
            <p className="text-slate-500 leading-relaxed max-w-2xl mx-auto">
              The pillars of our professional excellence and delivery model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-6 h-6" />,
                title: "Custom Development",
                desc: "We don't believe in one-size-fits-all. Our developers craft bespoke software solutions tailored to your unique workflows and business objectives.",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Result-Driven Marketing",
                desc: "Our digital marketing agency focuses on ROI. We use advanced analytics to ensure your PPC and SEO campaigns translate into actual revenue.",
              },
              {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Business-First Approach",
                desc: "We prioritize your bottom line. Every technical decision we make is backed by a strategy to improve your market share and brand value.",
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Transparent Communication",
                desc: "Integrity is our hallmark. We maintain clear, honest, and frequent communication throughout the project lifecycle to ensure total alignment.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Scalable Technology",
                desc: "Our architectures are built for the future. We design systems that grow with your business, ensuring longevity and cost-effectiveness.",
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Performance & Support",
                desc: "Our relationship doesn't end at deployment. We provide dedicated post-launch support and optimization to keep your systems running at peak performance.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 cursor-pointer rounded-xl border border-slate-200 shadow-sm transition-all hover:-translate-y-1"
              >
                <div className="mb-4 text-black">{item.icon}</div>
                <h4 className="text-xl text-[#49BCE3] font-bold mb-3">{item.title}</h4>
                <p className="text-slate-600  leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-10 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl">
            {/* Main Heading */}
            <div className="mb-12 text-center">
              <h2 className="text-xl md:text-4xl font-bold mb-10 leading-tight text-black">
                Dominating the Digital Frontier: <br />
                <span className="text-[#49BCE3]">
                  Expertise That Drives Rank & Revenue
                </span>
              </h2>
            </div>

            {/* Paragraph Block 1 */}
            <div className="space-y-6 text-[15px] sm:text-base md:text-lg leading-relaxed text-gray-600 text-justify">
              <p>
                In the modern marketplace, visibility is currency. As a leading{" "}
                <strong>SEO company</strong> and{" "}
                <strong>digital marketing agency</strong>, Kanakdrishti Infotech
                understands the intricate algorithms that govern search engines.
                Our Search Engine Optimization (SEO) strategies are not just
                about keywords; they are about understanding user intent and
                creating a technical infrastructure that Google rewards. We
                focus on on-page optimization, backlink authority, and
                high-performance content marketing to ensure your brand appears
                where it matters most.
              </p>

              <p>
                Beyond organic reach, our <strong>PPC company</strong> experts
                manage high-conversion advertising campaigns. By leveraging
                data-driven insights for Google Ads and Social Media Marketing,
                we ensure that every dollar of your budget is optimized for lead
                generation. We combine this with a robust{" "}
                <strong>branding and lead generation agency</strong> mindset,
                ensuring that the traffic we drive is converted into loyal
                customers through optimized landing pages and seamless user
                journeys.
              </p>
            </div>

            {/* Sub Heading */}
            <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mt-14 mb-6">
              Technical Excellence & Growth Strategy
            </h3>

            {/* Paragraph Block 2 */}
            <div className="space-y-6 text-[15px] sm:text-base md:text-lg leading-relaxed text-gray-600 text-justify">
              <p>
                Our <strong>website design company</strong> team works
                hand-in-hand with our SEO specialists to create sites that are
                as fast as they are beautiful. From mobile-responsive layouts to
                high-speed loading times, we ensure your web presence is
                technically flawless. This holistic approach to digital
                growth—combining technical SEO, content strategy, and website
                optimization—is what allows us to deliver sustained growth for
                our clients.
              </p>

              <p>
                The digital ecosystem is evolving, and so are our services. We
                specialize in <strong>custom software company</strong> solutions
                and <strong>ERP CRM development</strong> to streamline your
                internal operations while you scale your outward presence. By
                integrating your business processes into a unified digital
                ecosystem, we allow for better data tracking, which in turn
                fuels more effective marketing decisions.
              </p>
            </div>

            {/* Sub Heading */}
            <h3 className="text-xl md:text-4xl font-bold text-slate-900 mt-14 mb-6">
              Long-Term Digital Success
            </h3>

            {/* Paragraph Block 3 */}
            <div className="space-y-6 text-[15px] sm:text-base md:text-lg leading-relaxed text-gray-600 text-justify">
              <p>
                Whether you are looking for a{" "}
                <strong>web development company</strong> to build a complex
                portal or an <strong>app development company</strong> to launch
                a disruptive mobile product, we bring the same level of
                SEO-focused detail to every project. We understand that a
                website is your digital storefront, and it must be optimized for
                both human users and search engine crawlers. Our social media
                and online visibility strategies are designed to build brand
                authority that lasts.
              </p>

              <p>
                At Kanakdrishti Infotech, we are committed to the long-term
                success of our partners. We monitor market trends, analyze
                competitor movements, and constantly refine our tactics. From
                technical audits to comprehensive digital roadmaps, our mission
                is to ensure that your business stays ahead of the curve in the
                competitive landscape of India and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7) INDUSTRIES WE SERVE SECTION */}
      <section className="py-12 md:py-4 bg-white text-[#49BCE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-4xl font-bold mb-4">
              Industries We Empower
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized technological solutions for diverse market sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Stethoscope />,
                title: "Healthcare",
                desc: "HIPAA compliant patient portals and telemedicine platforms.",
              },
              {
                icon: <GraduationCap />,
                title: "Education",
                desc: "LMS systems and interactive virtual classroom environments.",
              },
              {
                icon: <Building2 />,
                title: "Real Estate",
                desc: "Property management software and high-conversion listing sites.",
              },
              {
                icon: <ShoppingCart />,
                title: "E-commerce",
                desc: "Scalable online stores with integrated payment gateways.",
              },
              {
                icon: <Factory />,
                title: "Manufacturing",
                desc: "Inventory management and supply chain automation tools.",
              },
              {
                icon: <Truck />,
                title: "Logistics",
                desc: "Real-time tracking and fleet management software solutions.",
              },
              {
                icon: <Coins />,
                title: "Finance",
                desc: "Secure fintech apps and robust accounting platforms.",
              },
              {
                icon: <Rocket />,
                title: "Startups",
                desc: "MVP development and rapid scaling for innovative ventures.",
              },
            ].map((industry, index) => (
              <div
                key={index}
                className="p-6 border border-gray-300 rounded-lg bg-white cursor-pointer hover:bg-white transition-colors group"
              >
                <div className="mb-4 text-gray-500 ">
                  {industry.icon}
                </div>
                <h5 className="text-lg font-bold mb-2">{industry.title}</h5>
                <p className="text-sm text-gray-600 group-hover:text-slate-600">
                  {industry.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8) WHY BUSINESSES TRUST US SECTION */}
      <section className="py-12 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/3 sticky top-24">
              <h2 className="text-xl md:text-4xl font-bold mb-6">
                Why Businesses Trust Us
              </h2>
              <div className="flex items-center gap-4 text-slate-500">
                <div className="w-12 h-[2px] bg-black"></div>
                <span className="uppercase tracking-widest text-sm font-semibold">
                  Reliability & Results
                </span>
              </div>
            </div>

            <div className="w-full md:w-2/3 space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-black" />
                  <h4 className="text-xl font-bold italic underline decoration-slate-300 decoration-4 underline-offset-8">
                    A Track Record of Execution
                  </h4>
                </div>
                <p className=" text-gray-600 leading-relaxed pl-10">
                  Trust isn't given; it's earned through consistent delivery. At
                  Kanakdrishti Infotech, we have successfully delivered over
                  500+ projects across various technical domains. Our clients
                  trust us because we don't just provide a service—we provide
                  results. Whether it's achieving top search rankings or
                  building a mission-critical enterprise application, we deliver
                  with precision and speed.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-black" />
                  <h4 className="text-xl font-bold italic underline decoration-slate-300 decoration-4 underline-offset-8">
                    Long-Term Strategic Partnership
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed pl-10">
                  We are not a "set it and forget it" agency. We believe in the
                  power of long-term support and continuous optimization.
                  Businesses trust us to be their outsourced CTOs and marketing
                  directors, guiding them through every phase of their digital
                  journey. Our data-driven reports and monthly strategy calls
                  keep our clients informed and ahead of their competition.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-black" />
                  <h4 className="text-xl font-bold italic underline decoration-slate-300 decoration-4 underline-offset-8">
                    Technical & Ethical Excellence
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed pl-10">
                  In an industry often marred by "black-hat" tactics, we stand
                  firm on our ethical ground. Our SEO practices are sustainable,
                  our code is clean and secure, and our business models are
                  transparent. This commitment to technical integrity ensures
                  that our clients' digital assets are future-proofed against
                  algorithm updates and security threats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9) CTA SECTION */}
      <section className="py-6 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0f2a5f] via-[#13387a] to-[#0f2a5f] rounded-xl p-6 md:p-10 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Ready to Accelerate Your Growth?
              </h2>
              <p className="text-base md:text-lg text-white mb-6 max-w-2xl mx-auto opacity-95">
                Partner with Kanakdrishti Infotech and experience the fusion of
                high-end technology and strategic marketing.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-4 py-2 bg-white text-black font-bold rounded-full hover:bg-slate-100 transition-colors text-base"
                >
                  Contact Us Now
                </Link>
                <Link
                  href="/services"
                  className="w-full sm:w-auto px-4 py-2 border border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all text-base"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
