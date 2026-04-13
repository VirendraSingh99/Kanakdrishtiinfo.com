"use client";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-[#F4F7F9] min-h-screen overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative w-full py-12 lg:py-20 overflow-hidden bg-gradient-to-r from-[#1E293B] via-[#13387a] to-[#1E293B]">
        {/* Glow Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#49BCE3] rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-500 rounded-full blur-[100px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            Terms and Conditions
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-lg leading-relaxed">
            Please read these terms and conditions of use carefully before accessing, 
            using or obtaining any materials, information, products or services. By 
            accessing the Thrive Agency website, you agree to be bound by these 
            terms and conditions.
          </p>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-[#2D2D2D] text-sm md:text-base leading-relaxed space-y-10">
          
          {/* 1. Terms */}
          <div>
            <h2 className="text-xl font-bold text-[#2D2D2D] mb-3">1. Terms</h2>
            <p>
              By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, 
              all applicable laws and regulations, and agree that you are responsible for compliance with any 
              applicable local laws. If you do not agree with any of these terms, you are prohibited from using or 
              accessing this site. The materials contained in this web site are protected by applicable copyright 
              and trade mark law.
            </p>
          </div>

          {/* 2. Use License */}
          <div>
            <h2 className="text-xl font-bold text-[#2D2D2D] mb-3">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on 
              Thrive Agency's web site for personal, non-commercial transitory viewing only. This is the grant of 
              a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-[#8E8E8E]">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>Attempt to decompile or reverse engineer any software contained on Thrive Agency's web site;</li>
              <li>Remove any copyright or other proprietary notations from the materials;</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p className="mt-4">
              This license shall automatically terminate if you violate any of these restrictions and may be 
              terminated by Thrive Agency at any time. Upon terminating your viewing of these materials or upon 
              the termination of this license, you must destroy any downloaded materials in your possession 
              whether in electronic or printed format.
            </p>
          </div>

          {/* 3. Disclaimer */}
          <div>
            <h2 className="text-xl font-bold text-[#2D2D2D] mb-3">3. Disclaimer</h2>
            <p>
              The materials on Thrive Agency's web site are provided "as is". Thrive Agency makes no warranties, 
              expressed or implied, and hereby disclaims and negates all other warranties, including without 
              limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
              or non-infringement of intellectual property or other violation of rights. Further, Thrive Agency 
              does not warrant or make any representations concerning the accuracy, likely results, or reliability 
              of the use of the materials on its Internet web site or otherwise relating to such materials or on 
              any sites linked to this site.
            </p>
          </div>

          {/* 4. Limitations */}
          <div>
            <h2 className="text-xl font-bold text-[#2D2D2D] mb-3">4. Limitations</h2>
            <p>
              In no event shall Thrive Agency or its suppliers be liable for any damages (including, without 
              limitation, damages for loss of data or profit, or due to business interruption,) arising out of 
              the use or inability to use the materials on Thrive Agency's Internet site, even if Thrive Agency 
              or a Thrive Agency authorized representative has been notified orally or in writing of the 
              possibility of such damage. Because some jurisdictions do not allow limitations on implied 
              warranties, or limitations of liability for consequential or incidental damages, these limitations 
              may not apply to you.
            </p>
          </div>

          {/* 5. Revisions and Errata */}
          <div>
            <h2 className="text-xl font-bold text-[#2D2D2D] mb-3">5. Revisions and Errata</h2>
            <p>
              The materials appearing on Thrive Agency's web site could include technical, typographical, or 
              photographic errors. Thrive Agency does not warrant that any of the materials on its web site are 
              accurate, complete, or current. Thrive Agency may make changes to the materials contained on its 
              web site at any time without notice. Thrive Agency does not, however, make any commitment to update 
              the materials.
            </p>
          </div>

          {/* 6. Links */}
          <div>
            <h2 className="text-xl font-bold text-[#2D2D2D] mb-3">6. Links</h2>
            <p>
              Thrive Agency has not reviewed all of the sites linked to its Internet web site and is not responsible 
              for the contents of any such linked site. The inclusion of any link does not imply endorsement by 
              Thrive Agency of the site. Use of any such linked web site is at the user's own risk.
            </p>
          </div>

          {/* 7. Site Terms of Use Modifications */}
          <div>
            <h2 className="text-xl font-bold text-[#2D2D2D] mb-3">7. Site Terms of Use Modifications</h2>
            <p>
              Thrive Agency may revise these terms of use for its web site at any time without notice. By using 
              this web site you are agreeing to be bound by the then current version of these Terms and 
              Conditions of Use.
            </p>
          </div>

          {/* 8. Governing Law */}
          <div>
            <h2 className="text-xl font-bold text-[#2D2D2D] mb-3">8. Governing Law</h2>
            <p>
              Any claim relating to Thrive Agency's website shall be governed by the laws of the State of Texas 
              without regard to its conflict of law provisions.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;