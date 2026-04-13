import Image from "next/image";

export default function BusinessIntro() {
  return (
    <section className="bg-white">
      <div className="max-w-8xl mx-auto py-0.5 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px]">
          <Image
            src="/images/business-illustration.png" // apni image yaha daal
            alt="Digital Marketing"
            fill
            className="object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-xl md:text-4xl font-bold text-slate-800 leading-tight mb-6">
            Best <span className="text-[#49BCE3]">Digital Marketing</span>{" "}
            Company in India
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            As the best Digital Marketing Company in India, we at Kanak Drishti
            Infotech take pride in having the top Digital Marketing experts. We
            provide AI-powered digital marketing solutions for businesses
            worldwide. Our services include SEO, SMM, SEM, ORM, PPC, AEO, GEO,
            Content Marketing, and Web Design & Development to help brands grow
            and succeed online.
          </p>

   
        </div>
      </div>
    </section>
  );
}
