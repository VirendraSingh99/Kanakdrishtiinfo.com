"use client";
import React from "react";

const page = () => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative w-full py-12 lg:py-20 overflow-hidden bg-gradient-to-r from-[#0f2a5f] via-[#13387a] to-[#0f2a5f]">
        {/* Glow Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#49BCE3] rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-500 rounded-full blur-[100px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            Privacy Policy
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-lg leading-relaxed">
            Your privacy is important to us. This Privacy Policy outlines how we
            collect, use, and protect your information when you interact with
            our website and services. We are committed to ensuring transparency,
            security, and trust in every interaction.
          </p>
        </div>
      </section>

      {/* OPTIONAL: Content Section (below hero) */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed space-y-8">
          {/* Intro */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              We are committed to protecting your privacy
            </h2>
            <p>
              We collect the minimum amount of information about you that is
              commensurate with providing you with a satisfactory service. This
              policy indicates the type of processes that may result in data
              being collected about you. Your use of this website gives us the
              right to collect that information.
            </p>
          </div>

          {/* Information Collected */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Information Collected
            </h3>
            <p>
              We may collect any or all of the information that you give us
              depending on the type of transaction you enter into, including
              your name, address, telephone number, and email address, together
              with data about your use of the website. Other information that
              may be needed from time to time to process a request may also be
              collected as indicated on the website.
            </p>
          </div>

          {/* Information Use */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Information Use
            </h3>
            <p>
              We use the information collected primarily to process the task for
              which you visited the website. Data collected is held in
              accordance with the Data Protection Act. All reasonable
              precautions are taken to prevent unauthorized access to this
              information. This safeguard may require you to provide additional
              forms of identity should you wish to obtain information about your
              account details.
            </p>
          </div>

          {/* Disclosing Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Disclosing Information
            </h3>
            <p>
              We do not disclose any personal information obtained about you
              from this website to third parties unless you permit us to do so
              by ticking the relevant boxes in registration or competition
              forms. We may also use the information to keep in contact with you
              and inform you of developments associated with us. You will be
              given the opportunity to remove yourself from any mailing list or
              similar device. If at any time in the future we should wish to
              disclose information collected on this website to any third party,
              it would only be with your knowledge and consent. We may from time
              to time provide information of a general nature to third parties –
              for example, the number of individuals visiting our website or
              completing a registration form, but we will not use any
              information that could identify those individuals.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Changes to this Policy
            </h3>
            <p>
              Any changes to our Privacy Policy will be placed here and will
              supersede this version of our policy. We will take reasonable
              steps to draw your attention to any changes in our policy.
              However, to be on the safe side, we suggest that you read this
              document each time you use the website to ensure that it still
              meets with your approval.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Contacting Us
            </h3>
            <p>
              If you have any questions about our Privacy Policy, or if you want
              to know what information we have collected about you, please email
              us at{" "}
              <a
                href="mailto:info@kanakdrishtiinfo.com"
                className="text-blue-600 hover:underline"
              >
                info@kanakdrishtiinfo.com
              </a>
              . You can also correct any factual errors in that information or
              require us to remove your details from any list under our control.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
