import React from "react";
import Link from "next/link";

import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const primaryBlue = "#49BCE3";
  const bgMain = "#0E1D2F";
  const bgSub = "#08131F";

  return (
    <footer
      style={{ backgroundColor: bgMain }}
      className="text-white pt-12 md:pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Column 1: Get In Touch */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold mb-2 text-white relative inline-block">
              Get In Touch
              <span
                className="absolute bottom-[-6px] left-0 h-[2px] w-12"
                style={{ backgroundColor: primaryBlue }}
              ></span>
            </h3>
            <div className="flex items-start space-x-3 group pt-2">
              <EmailIcon
                style={{ color: primaryBlue }}
                className="w-5 h-5 mt-1 transition-transform group-hover:scale-110"
              />
              <Link
                href="mailto:sales@kanakdrishtiinfo.com"
                className="hover:text-[#49BCE3] transition-colors break-all"
              >
                sales@kanakdrishtiinfo.com
              </Link>
            </div>
            <div className="flex items-start space-x-3 group">
              <LocalPhoneIcon
                style={{ color: primaryBlue }}
                className="w-5 h-5 mt-1 transition-transform group-hover:scale-110"
              />
              <Link
                href="tel:+919911210174"
                className="hover:text-[#49BCE3] transition-colors"
              >
                +91 9911210174
              </Link>
            </div>
            <div className="flex items-start space-x-3 group">
              <LocationOnIcon
                style={{ color: primaryBlue }}
                className="w-5 h-5 mt-1 transition-transform group-hover:scale-110 flex-shrink-0"
              />
              <p className="leading-relaxed text-sm sm:text-base">
                Kanak Drishti Infotech Pvt Ltd
                <br />
                A-88, Sector 4 Noida, Nearest Metro - sector 16
              </p>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold mb-2 text-white relative inline-block">
              Our Services
              <span
                className="absolute bottom-[-6px] left-0 h-[2px] w-12"
                style={{ backgroundColor: primaryBlue }}
              ></span>
            </h3>
            <div className="pt-2 flex flex-col space-y-3">
              {[
                { label: "Paid Ads Campaigns", href: "/services/paid-ads" },
                {
                  label: "Social Media Optimization",
                  href: "/services/social-media-optimization",
                },
                {
                  label: "Search Engine Optimization",
                  href: "/services/search-engine-optimization",
                },
                {
                  label: "Influencer Marketing",
                  href: "/services/influencer-marketing",
                },
                { label: "Email Marketing", href: "/services/email-marketing" },
              ].map((item) => (
                <div
                  key={item.href}
                  className="flex items-center space-x-2 group"
                >
                  <ArrowRightIcon
                    style={{ color: primaryBlue }}
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  />
                  <Link
                    href={item.href}
                    className="hover:text-[#49BCE3] transition-colors text-sm sm:text-base"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold mb-2 text-white relative inline-block">
              Quick Links
              <span
                className="absolute bottom-[-6px] left-0 h-[2px] w-12"
                style={{ backgroundColor: primaryBlue }}
              ></span>
            </h3>
            <div className="pt-2 flex flex-col space-y-3">
              {[
              
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms-&-conditions" },
                { label: "Career", href: "/career" },
                { label: "B2B Partnership", href: "/b2b-partnership" },
                { label: "Our Team", href: "/our-team" },
              ].map((item) => (
                <div
                  key={item.href}
                  className="flex items-center space-x-2 group"
                >
                  <ArrowRightIcon
                    style={{ color: primaryBlue }}
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  />
                  <Link
                    href={item.href}
                    className="hover:text-[#49BCE3] transition-colors text-sm sm:text-base"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Our Packages */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold mb-2 text-white relative inline-block">
              Our Packages
              <span
                className="absolute bottom-[-6px] left-0 h-[2px] w-12"
                style={{ backgroundColor: primaryBlue }}
              ></span>
            </h3>
            <div className="pt-2 flex flex-col space-y-3">
              {[
                {
                  label: "Website Development Packages",
                  href: "/packages/website-development",
                },
                {
                  label: "Ecommerce Development Packages",
                  href: "/packages/ecommerce-development",
                },
                { label: "SEO Packages", href: "/packages/seo" },
                { label: "SMO Packages", href: "/packages/smo" },
                {
                  label: "Paid Campaign Advertising",
                  href: "/packages/paid-campaign",
                },
                {
                  label: "Graphic Designing Packages",
                  href: "/packages/graphic-designing",
                },
                {
                  label: "PDF Brochure Design",
                  href: "/packages/pdf-brochure-design",
                },
                {
                  label: "Creative Design Packages",
                  href: "/packages/creative-design",
                },
              ].map((item) => (
                <div
                  key={item.href}
                  className="flex items-start space-x-2 group"
                >
                  <ArrowRightIcon
                    style={{ color: primaryBlue }}
                    className="w-4 h-4 mt-1 transition-transform group-hover:translate-x-1 flex-shrink-0"
                  />
                  <Link
                    href={item.href}
                    className="hover:text-[#49BCE3] transition-colors text-sm sm:text-base"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Strip */}
      <div
        style={{ backgroundColor: bgSub }}
        className="border-t border-gray-800 mt-8 pt-8 pb-8"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center md:text-left">
          <p className="text-xs sm:text-sm text-gray-400">
            All Rights Reserved &copy; {currentYear}{" "}
            <a
              href="https://kanakdrishtiinfo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white font-medium hover:text-[#49BCE3] transition-colors"
            >
              Kanak Drishti Infotech Pvt. Ltd.
            </a>
          </p>

          <div className="flex items-center justify-center space-x-5">
            {[
              {
                icon: <FacebookIcon />,
                href: "https://www.facebook.com/kanakdrishti1/",
              },
              {
                icon: <InstagramIcon />,
                href: "https://www.instagram.com/kanakdrishti2008/",
              },
              {
                icon: <LinkedInIcon />,
                href: "https://www.linkedin.com/company/kanakdrishtiinfotech/?viewAsMember=true",
              },
              { icon: <XIcon />, href: "https://x.com/kanakdrishti_" },
              {
                icon: <YouTubeIcon />,
                href: "https://www.youtube.com/@KanakDrishtiOfficial",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all transform hover:-translate-y-1"
              >
                {React.cloneElement(social.icon, {
                  className: "w-5 h-5 sm:w-6 sm:h-6",
                })}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
