"use client";
import { Phone, Mail } from "lucide-react";

export default function Topbar() {
  return (
    <div className="w-full bg-[#0B1C3D] text-white text-xs md:text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">
          {/* PHONE */}
          <a
            href="tel:+919911210174"
            className="flex items-center gap-1 hover:text-gray-300 transition"
          >
            <Phone size={14} />
            <span className="hidden sm:inline">
              +91 9911210174 , +91 8076832529
            </span>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:sales@kanakdrishtiinfo.com"
            className="flex items-center gap-1 hover:text-gray-300 transition"
          >
            <Mail size={14} />
            <span className="hidden sm:inline">sales@kanakdrishtiinfo.com</span>
          </a>
        </div>

        {/* RIGHT SIDE (Optional) */}
        {/* <div className="hidden md:flex items-center gap-4">
          <span className="text-gray-300">Welcome to Kanak Drishti Infotect Pvt. Ltd.</span>
        </div> */}
      </div>
    </div>
  );
}
