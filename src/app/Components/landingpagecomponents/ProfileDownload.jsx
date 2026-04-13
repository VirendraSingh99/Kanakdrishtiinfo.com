"use client";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";

export default function ProfileDownload() {
  const [open, setOpen] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      toast.error("Please verify captcha ❌");
      return;
    }

    // 👉 PDF Download
    const link = document.createElement("a");
    link.href = "/company-brochure.pdf"; // public folder
    link.download = "CompanyProfile.pdf";
    link.click();

    toast.success("Download started successfully ✅");

    // Reset
    setForm({ name: "", email: "", phone: "" });
    setCaptchaToken(null);
    setOpen(false);
  };

  return (
    <>
      {/* TOASTER */}
      <Toaster position="top-right" />

      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 md:py-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-xl sm:text-4xl font-bold text-slate-900 mb-4">
              Download Our Company Profile
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Discover how Kanakdrishti Infotech delivers powerful software
              solutions for businesses. Our company profile includes our
              services, expertise, and successful projects.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Click on the image to get instant access to our company profile
              and explore how we can help your business grow with technology.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div
              onClick={() => setOpen(true)}
              className="relative w-[280px] sm:w-[350px] md:w-[500px] cursor-pointer group"
            >
              {/* IMAGE */}
              <img
                src="/image.png"
                alt="Download Company Profile"
                className="w-full rounded-2xl shadow-lg transition duration-300 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg sm:text-xl font-semibold text-center px-4">
                  Download Company Profile <br /> Click Here
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MODAL */}
        {open && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
              {/* CLOSE */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 text-gray-500 cursor-pointer"
              >
                ✕
              </button>

              <h3 className="text-xl font-bold mb-4">Enter Your Details</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  className="w-full border p-2 rounded-md"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  className="w-full border p-2 rounded-md"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={form.phone}
                  className="w-full border p-2 rounded-md"
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />

                {/* GOOGLE CAPTCHA */}
                <ReCAPTCHA
                  sitekey="6LdD26osAAAAAPo9N-YD6Zgi3STQWSDslDRcBp-u"
                  onChange={(token) => setCaptchaToken(token)}
                />

                <button
                  type="submit"
                  className="w-full bg-[#49BCE3] text-white py-2 rounded-md hover:bg-[#3a9dc8] transition"
                >
                  Submit & Download
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
