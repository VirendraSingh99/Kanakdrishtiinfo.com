// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

// const team = [
//   {
//     name: "Rahul Sharma",
//     role: "CEO & Founder",
//     img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
//     bio: "Rahul leads our vision with 15+ years of digital strategy experience across global markets.",
//   },
//   {
//     name: "Priya Verma",
//     role: "Digital Marketing Head",
//     img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
//     bio: "Priya crafts multi-channel campaigns that drive exceptional growth and brand awareness.",
//   },
//   {
//     name: "Amit Singh",
//     role: "SEO Specialist",
//     img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
//     bio: "Amit ensures our clients dominate search results and achieve remarkable organic traffic.",
//   },
//   {
//     name: "Neha Gupta",
//     role: "UI/UX Designer",
//     img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
//     bio: "Neha transforms complex ideas into intuitive, beautiful user experiences that convert.",
//   },
//   {
//     name: "Rohit Kumar",
//     role: "Web Developer",
//     img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
//     bio: "Rohit builds robust, scalable web applications using the most cutting-edge technologies.",
//   },
//   {
//     name: "Sneha Kapoor",
//     role: "Social Media Manager",
//     img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
//     bio: "Sneha amplifies brand voices and fosters deeply engaged online communities.",
//   },
// ];

// const MemberCard = ({ member, index }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 24 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ delay: index * 0.1, duration: 0.5 }}
//     className="group flex flex-col items-center text-center"
//   >
//     {/* Circular photo with ring on hover */}
//     <div className="relative mb-6">
//       <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-[0_8px_30px_rgba(15,42,95,0.12)] group-hover:shadow-[0_12px_40px_rgba(73,188,227,0.25)] transition-shadow duration-500">
//         <img
//           src={member.img}
//           alt={member.name}
//           className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
//         />
//       </div>
//       {/* Teal ring that appears on hover */}
//       <div className="absolute inset-0 rounded-full border-2 border-[#49BCE3] scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
//     </div>

//     {/* Name */}
    
//     <h3 className="text-[#0f2a5f] font-extrabold text-base uppercase tracking-widest mb-1">
//       {member.name}
//     </h3>

//     {/* Role */}
//     <p className="text-[#49BCE3] font-semibold text-sm lowercase tracking-wide mb-4">
//       {member.role}
//     </p>

//     {/* Bio */}
//     <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-[240px] italic">
//       {member.bio}
//     </p>

//     {/* Divider */}
//     <div className="w-10 h-px bg-gray-200 mb-4 group-hover:w-16 group-hover:bg-[#49BCE3] transition-all duration-500" />

//     {/* Social icons */}
//     <div className="flex items-center gap-3 text-gray-400">
//       <a href="#" className="hover:text-[#49BCE3] transition-colors duration-200"><FiFacebook size={15} /></a>
//       <a href="#" className="hover:text-[#49BCE3] transition-colors duration-200"><FiTwitter size={15} /></a>
//       <a href="#" className="hover:text-[#49BCE3] transition-colors duration-200"><FiInstagram size={15} /></a>
//       <a href="#" className="hover:text-[#49BCE3] transition-colors duration-200"><FiLinkedin size={15} /></a>
//     </div>
//   </motion.div>
// );

// const Page = () => {
//   return (
//     <div className="bg-[#f8fafc] min-h-screen overflow-x-hidden">

//       {/* ================= HERO (unchanged) ================= */}
//       <section className="relative w-full py-20 lg:py-22 bg-gradient-to-br from-[#0f2a5f] via-[#13387a] to-[#1E293B] text-white overflow-hidden">
//         <div className="absolute inset-0 opacity-25">
//           <motion.div
//             animate={{ x: [-20, 20, -20], y: [10, -10, 10] }}
//             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//             className="absolute top-[-10%] left-[15%] w-[40rem] h-[40rem] bg-[#49BCE3] blur-[150px] rounded-full"
//           />
//           <motion.div
//             animate={{ x: [20, -20, 20], y: [-10, 10, -10] }}
//             transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
//             className="absolute bottom-[-10%] right-[15%] w-[40rem] h-[40rem] bg-indigo-600 blur-[150px] rounded-full"
//           />
//         </div>

//         <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
//           >
//             Meet Our Team
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="text-gray-200 text-base md:text-xl max-w-3xl mx-auto leading-relaxed"
//           >
//             We are a group of passionate experts dedicated to delivering
//             innovative solutions and driving substantial success for your
//             business. Our diverse skills converge to create unparalleled digital
//             impact.
//           </motion.p>
//         </div>
//       </section>

//       {/* ================= TEAM SECTION ================= */}
//       <section className="py-20 lg:py-28 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">

//           {/* Section heading — matches reference style */}
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f2a5f] mb-3">
//               Our Team
//             </h2>
//             <p className="text-gray-400 text-sm italic max-w-md mx-auto">
//               Glavrida for habitant morbi tristique senectus et netus et malesuada fames
//             </p>
//           </div>

//           {/* Cards grid — 3 cols default, 4 on xl */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-16">
//             {team.map((member, index) => (
//               <MemberCard key={index} member={member} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Page;


"use client";
import React from "react";
import { motion } from "framer-motion";
const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const team = [
  {
    name: "Rahul Sharma",
    role: "CEO & Founder",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    bio: "Rahul leads our vision with 15+ years of digital strategy experience across global markets.",
  },
  {
    name: "Priya Verma",
    role: "Digital Marketing Head",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Priya crafts multi-channel campaigns that drive exceptional growth and brand awareness.",
  },
  {
    name: "Amit Singh",
    role: "SEO Specialist",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    bio: "Amit ensures our clients dominate search results and achieve remarkable organic traffic.",
  },
  {
    name: "Neha Gupta",
    role: "UI/UX Designer",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    bio: "Neha transforms complex ideas into intuitive, beautiful user experiences that convert.",
  },
  {
    name: "Rohit Kumar",
    role: "Web Developer",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    bio: "Rohit builds robust, scalable web applications using the most cutting-edge technologies.",
  },
  {
    name: "Sneha Kapoor",
    role: "Social Media Manager",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    bio: "Sneha amplifies brand voices and fosters deeply engaged online communities.",
  },
];

const MemberCard = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group flex flex-col items-center text-center"
  >
    {/* Circular photo with ring on hover */}
    <div className="relative mb-6">
      <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-[0_8px_30px_rgba(15,42,95,0.12)] group-hover:shadow-[0_12px_40px_rgba(73,188,227,0.25)] transition-shadow duration-500">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      {/* Teal ring that appears on hover */}
      <div className="absolute inset-0 rounded-full border-2 border-[#49BCE3] scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
    </div>

    {/* Name */}
    <h3 className="text-[#0f2a5f] font-extrabold text-base uppercase tracking-widest mb-1">
      {member.name}
    </h3>

    {/* Role */}
    <p className="text-[#49BCE3] font-semibold text-sm lowercase tracking-wide mb-4">
      {member.role}
    </p>

    {/* Bio */}
    <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-[240px] italic">
      {member.bio}
    </p>

    {/* Divider */}
    <div className="w-10 h-px bg-gray-200 mb-4 group-hover:w-16 group-hover:bg-[#49BCE3] transition-all duration-500" />

    {/* Social icons */}
    <div className="flex items-center gap-3 text-gray-400">
      <a href="#" className="hover:text-[#49BCE3] transition-colors duration-200">
        <FacebookIcon />
      </a>
      <a href="#" className="hover:text-[#49BCE3] transition-colors duration-200">
        <TwitterIcon />
      </a>
      <a href="#" className="hover:text-[#49BCE3] transition-colors duration-200">
        <InstagramIcon />
      </a>
      <a href="#" className="hover:text-[#49BCE3] transition-colors duration-200">
        <LinkedinIcon />
      </a>
    </div>
  </motion.div>
);

const Page = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative w-full py-20 lg:py-22 bg-gradient-to-br from-[#0f2a5f] via-[#13387a] to-[#1E293B] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <motion.div
            animate={{ x: [-20, 20, -20], y: [10, -10, 10] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[15%] w-[40rem] h-[40rem] bg-[#49BCE3] blur-[150px] rounded-full"
          />
          <motion.div
            animate={{ x: [20, -20, 20], y: [-10, 10, -10] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] right-[15%] w-[40rem] h-[40rem] bg-indigo-600 blur-[150px] rounded-full"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
          >
            Meet Our Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-200 text-base md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            We are a group of passionate experts dedicated to delivering
            innovative solutions and driving substantial success for your
            business. Our diverse skills converge to create unparalleled digital
            impact.
          </motion.p>
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="py-20 lg:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f2a5f] mb-3">
              Our Team
            </h2>
            <p className="text-gray-400 text-sm italic max-w-md mx-auto">
              Glavrida for habitant morbi tristique senectus et netus et malesuada fames
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-16">
            {team.map((member, index) => (
              <MemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;