"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services", // Clickable main link
    dropdown: [
      { name: "Website Development", href: "/services/website-development" },
      { name: "E-Commerce Website", href: "/services/e-commerce-website" },
      { name: "Mobile Application", href: "/services/mobile-application" },
      { name: "Web Application", href: "/services/web-application" },
      { name: "Customized Software", href: "/services/customized-software" },
      {
        name: "360° Digital Marketing",
        href: "/services/360-digital-marketing",
      },
      {
        name: "Performance Marketing",
        href: "/services/performance-marketing",
      },
      { name: "Content Marketing", href: "/services/content-marketing" },
      { name: "Email Marketing", href: "/services/email-marketing" },
      {
        name: "Search Engine Optimization",
        href: "/services/search-engine-optimization",
      },
      {
        name: "Social Media Optimization",
        href: "/services/social-media-optimization",
      },
    ],
  },
  {
    name: "Software",
    href: "/software", // Clickable main link
    dropdown: [
      { name: " Drishti Travel CRM", href: "/software/travel-crm-software" },
      { name: "HRMS Software", href: "/software/hrms-software" },
      { name: "MLM Software", href: "/software/mlm-software" },
      {
        name: "Drishti Task Management",
        href: "/software/task-management-software",
      },
      {
        name: "Shiftopay Payment Orchestration",
        href: "/software/shiftopay-payment-integration",
      },
    ],
  },
  {
    name: "Packages",
    href: "/packages", // Clickable main link
    dropdown: [
      {
        name: "Website Development Packages",
        href: "/packages/website-development",
      },
      {
        name: "Ecommerce Development Packages",
        href: "/packages/ecommerce-website-development",
      },
      { name: "Infographic Design", href: "/packages/infographic-design" },
      { name: "SMO Packages", href: "/packages/smo" },
      { name: "SEO Packages", href: "/packages/seo" },
      {
        name: "Paid Campaign Advertising",
        href: "/packages/paid-campaign-advertising",
      },
      {
        name: "Graphic Designing Packages",
        href: "/packages/graphic-designing",
      },
      { name: "PDF Brochure Design", href: "/packages/pdf-brochure-design" },
      { name: "Creative Design Packages", href: "/packages/creative-design" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  const primaryBlue = "#49BCE3";

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/bluelogo.png"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 h-full">
          {navLinks.map((link) => {
            const hasDropdown = !!link.dropdown;
            return (
              <div
                key={link.name}
                className="relative h-full flex items-center group"
                onMouseEnter={() => hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 font-medium transition py-5 text-gray-600 hover:text-[#49BCE3]"
                >
                  {link.name}
                  {hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                {/* Dropdown Desktop */}
                {hasDropdown && (
                  <div
                    className={`absolute left-0 top-full w-64 bg-white shadow-xl border border-gray-100 py-3 z-50 transition-all duration-200 origin-top
                    ${activeDropdown === link.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                  >
                    <div
                      className="h-1 w-full absolute top-0 left-0"
                      style={{ backgroundColor: primaryBlue }}
                    ></div>
                    {link.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-[#F4F7F9] hover:text-[#49BCE3] transition-colors border-l-2 border-transparent hover:border-[#49BCE3]"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <Link
            href="/contact"
            className="ml-4 bg-[#49BCE3] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#38a6cc] shadow-md transition-all active:scale-95"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggler */}
        <div className="md:hidden">
          <button onClick={() => setOpen(true)} className="text-gray-700 p-2">
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* --- MOBILE SIDEBAR --- */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-[55] md:hidden ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-screen w-[300px] bg-white shadow-2xl z-[60] transition-transform duration-300 ease-in-out md:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
            <span className="font-bold text-xl text-gray-800">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 p-1 hover:bg-gray-100 rounded-full"
            >
              <X size={26} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="border-b border-gray-50 last:border-none"
                >
                  <div className="flex justify-between items-center py-4 px-2">
                    {/* Yahan text par click karne se page khulega */}
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-gray-800 font-bold text-base flex-1"
                    >
                      {link.name}
                    </Link>

                    {link.dropdown && (
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === link.name ? null : link.name,
                          )
                        }
                        className="bg-gray-50 p-2 rounded-lg ml-2"
                      >
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown Links */}
                  {link.dropdown && (
                    <div
                      className={`grid transition-all duration-300 ease-in-out bg-gray-50 rounded-xl overflow-hidden ${activeDropdown === link.name ? "grid-rows-[1fr] opacity-100 my-2 shadow-inner" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="min-h-0">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setOpen(false)}
                            className="block px-6 py-3.5 text-[14px] font-medium text-gray-600 active:text-[#49BCE3] border-b border-white last:border-none"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-8 block bg-[#49BCE3] text-white text-center py-4 rounded-2xl font-bold shadow-lg active:scale-95 transition-transform"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
