"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BRAND = "#49BCE3";

export default function Breadcrumb() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  // 🔥 Custom label mapping (important for SMO etc.)
  const labelMap = {
    smo: "Social Media Optimization",
    seo: "Search Engine Optimization",
    ppc: "Pay Per Click",
    "web-development": "Web Development",
    "digital-marketing": "Digital Marketing",
  };

  return (
    <div className="absolute top-4 left-1 z-20 mt-24 md:mt-32 w-[95%] overflow-x-auto">
      <nav aria-label="breadcrumb">
        <ol className="flex items-center gap-2 whitespace-nowrap">
          {/* Home Icon */}
          <li>
            <Link
              href="/"
              className="flex items-center justify-center w-8 h-8 rounded-full hover:scale-105 transition-transform"
              aria-label="Home"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </Link>
          </li>

          {/* Home */}
          <li className="flex items-center   gap-2">
            <Chevron />
            <Link
              href="/"
              className="text-white font-semibold text-xs transition-colors hover:text-[#49BCE3]"
            >
              Home
            </Link>
          </li>

          {/* Dynamic Segments */}
          {segments.map((seg, i) => {
            const href = "/" + segments.slice(0, i + 1).join("/");
            const isLast = i === segments.length - 1;

            const formatted =
              labelMap[seg.toLowerCase()] ||
              seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

            return (
              <li key={href} className="flex items-center gap-2">
                <Chevron />
                {isLast ? (
                  <span className="text-white font-semibold text-xs">
                    {formatted}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-white font-semibold text-xs transition-colors hover:text-[#49BCE3]"
                  >
                    {formatted}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}

function Chevron() {
  return (
    <svg
      width="10"
      height="16"
      viewBox="0 0 12 24"
      fill="none"
      className="text-white opacity-50"
    >
      <path
        d="M2 4L10 12L2 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
