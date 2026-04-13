"use client";

import Link from "next/link";

const clients = [
  { id: 1, src: "/clients/indianoil.png", alt: "INDIAN OIL" },
  { id: 2, src: "/clients/volkswagen.png", alt: "Volkswagen" },
  { id: 3, src: "/clients/ficci.png", alt: "FICCI" },
  { id: 4, src: "/clients/delhicorporation.png", alt: "Delhi Corporation" },
  { id: 5, src: "/clients/LLoyd.png", alt: "LLOYD" },
  { id: 6, src: "/clients/chachabus.png", alt: "CHACHA BUS" },
  { id: 7, src: "/clients/jims.png", alt: "JIMS" },
  { id: 8, src: "/clients/allhabadbank.png", alt: "ALLHABAD BANK" },
  { id: 9, src: "/clients/ghumakkermasti.png", alt: "GHUMAKKER MASTI" },
  { id: 10, src: "/clients/lalapaisa.png", alt: "LALA PAISA" },
  { id: 11, src: "/clients/harmed.png", alt: "harmed" },
  { id: 12, src: "/clients/ayurtree.png", alt: "Ayurtree" },
];

export default function Clients() {
  return (
    <section className="py-8 px-4 bg-white text-center">
      {/* Heading */}
      <p className="text-[#49BCE3] font-bold uppercase tracking-widest text-xs mb-3">
        Our Clients
      </p>
      <h2 className="text-xl md:text-4xl font-bold text-slate-800 mb-3">
        Trusted by Brands
      </h2>
      <p className="text-gray-600 text-sm max-w-3xl mx-auto leading-relaxed mb-2">
        We collaborate with forward-thinking businesses and organizations
        worldwide, delivering reliable and scalable digital solutions that drive
        real results.
      </p>
      <div className="w-12 h-[3px] bg-[#49BCE3] rounded-full mx-auto mb-10" />

      {/* Logo Grid */}
      <div className="max-w-8xl mx-auto border border-gray-200 rounded-xl overflow-hidden grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {clients.map((client, index) => {
          const cols = 6;
          const totalRows = Math.ceil(clients.length / cols);
          const currentRow = Math.floor(index / cols);
          const isLastRow = currentRow === totalRows - 1;
          const isLastColLg = (index + 1) % cols === 0;
          const isLastColSm = (index + 1) % 3 === 0;
          const isLastColMobile = (index + 1) % 2 === 0;

          return (
            <div
              key={client.id}
              className={`
                relative flex items-center justify-center p-4 min-h-[130px] sm:min-h-[150px]
                group transition-colors duration-200 hover:bg-gray-50
                border-r border-b border-gray-200
                [&:nth-child(2n)]:border-r-0
                sm:[&:nth-child(2n)]:border-r
                sm:[&:nth-child(3n)]:border-r-0
                lg:[&:nth-child(3n)]:border-r
                lg:[&:nth-child(6n)]:border-r-0
              `}
            >
              <img
                src={client.src}
                alt={client.alt}
                className="w-full h-[80px] sm:h-[90px] object-contain transition-all duration-300"
              />
            </div>
          );
        })}
      </div>

      {/* View More Button */}
      <Link href="/portfolio" className="mt-10 px-4 py-2 rounded-full border border-gray-400 text-sm font-semibold text-white  cursor-pointer bg-[#49BCE3] transition-colors duration-200 inline-flex items-center gap-2">
        View More
        <svg className="w-3 h-3 fill-current" viewBox="0 0 10 10">
          <polygon points="5,8 1,3 9,3" />
        </svg>
      </Link>
    </section>
  );
}
