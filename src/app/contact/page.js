"use client";
import React from "react";
import { Mail, Phone, MapPin, MessageCircle, Globe } from "lucide-react";
import ContactForm from "../Components/landingpagecomponents/ContactSection";
import ContactSection from "../Components/landingpagecomponents/ContactSection";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative w-full py-14 lg:py-32 py-32 overflow-hidden bg-gradient-to-r from-[#0f2a5f] via-[#13387a] to-[#0f2a5f]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#49BCE3] rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-500 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            Let’s Connect with Kanak Drishti Infotech
          </h1>

          <p className="text-gray-300 max-w-4xl mx-auto text-sm md:text-lg">
            Partner with us for result-driven digital marketing and IT solutions
            — from SEO and paid campaigns to web and app development. Share your
            goals, and we’ll help you grow with powerful strategies.
          </p>
        </div>
      </section>

      <ContactSection />

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* TOP CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* CONTACT */}
            <div className="bg-white p-5 rounded-xl border  border-gray-300  shadow-sm hover:shadow-md transition">
              <p className="text-sm text-gray-500 font-semibold mb-2">
                CONTACT NUMBERS
              </p>
              <div className="text-sm space-y-1">
                <a
                  href="tel:+919911210174"
                  className="block text-red-500 hover:underline"
                >
                  +91 9911210174
                </a>
                <a
                  href="tel:+918076832529"
                  className="block text-red-500 hover:underline"
                >
                  +91 8076832529
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="bg-white p-5 rounded-xl border  border-gray-300  shadow-sm hover:shadow-md transition">
              <p className="text-sm text-gray-500 font-semibold mb-2">
                EMAIL ADDRESS
              </p>
              <div className="text-sm space-y-1">
                <a
                  href="mailto:sales@kanakdrishtiinfo.com"
                  className="block text-red-500 hover:underline"
                >
                  sales@kanakdrishtiinfo.com
                </a>
                <a
                  href="mailto:hr@kanakdrishtiinfo.com"
                  className="block text-red-500 hover:underline"
                >
                  hr@kanakdrishtiinfo.com
                </a>
              </div>
            </div>

            {/* OFFICE TIMING */}
            <div className="bg-white p-5 rounded-xl border  border-gray-300  shadow-sm hover:shadow-md transition">
              <p className="text-sm text-gray-500 font-semibold mb-2">
                OFFICE TIMING
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span className="font-medium">10 AM – 7 PM</span>
                </div>

                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-red-500 font-medium">Closed</span>
                </div>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="bg-white p-5 rounded-xl border  border-gray-300  shadow-sm hover:shadow-md transition">
              <p className="text-sm text-gray-500 font-semibold mb-2">
                OFFICE ADDRESS
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Kanak Drishti Infotech Pvt Ltd <br />
                A-88, Sector 4 Noida <br />
                Near Metro Sector 16
              </p>
            </div>
          </div>

          {/* FULL WIDTH MAP */}
          <div className="w-full h-[450px] rounded-2xl overflow-hidden border  border-gray-300  shadow-sm">
            <iframe
              src="https://www.google.com/maps?q=Kanak+Drishti+Infotech+Pvt+Ltd+Delhi&output=embed"
              className="w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
