import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/component/ctaButton";
import Interaction from "@/component/microInteraction";
import Interaction2 from "@/component/microInteraction2";
import Interaction3 from "@/component/microInteraction3";

export default function Banner() {
  return (
    <div className="relative w-full h-[700px] lg:h-screen flex items-center overflow-hidden bg-[#0A1D20]">
      {/* Background Spotlight Overlay */}
      <div
        className="absolute top-[-350px] md:top-[-100px] md:left-[-100px] left-[-350px] w-[685px] h-[685px] pointer-events-none z-10"
        style={{
          borderRadius: "342.5px",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, rgba(142, 169, 77, 0.8) 0%, rgba(67, 131, 142, 0.8) 100%)",
          filter: "blur(165.5px)",
          transform: "rotate(61.356deg)",
        }}
      />

      {/* Background Image on Right */}
      <div className="absolute top-0 right-0 w-full lg:w-[65%] md:h-full h-[500px] z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/the_programme/banner.png"
            alt="Happy people"
            fill
            className="object-cover object-right"
          />
          {/* Fade to left on desktop */}
          <div className="hidden lg:block absolute inset-0 bg-linear-to-r from-[#0A1D20] via-[#0a1d20]/50 to-transparent" />
          {/* Shadow at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0A1D20] to-transparent" />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-width w-full z-20 px-6 lg:px-0 absolute md:relative md:bottom-none bottom-0 md:left-none left-6">
        <div className="max-w-[750px] flex flex-col justify-end items-start text-left gap-6 lg:gap-8">
          <Interaction>
            <h1 className="text-white text-[32px] md:text-[48px] lg:text-[50px] font-bold font-Urbanist leading-tight">
              What is the SlimOra Program?
            </h1>
          </Interaction>
          <Interaction2>
            <p className="text-white/80 font-Urbanist text-[14px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[600px]">
              The SlimOra Gastric Solutions combines the world's first
              swallowable gastric balloon with personalised coaching and digital
              tools, designed to support long-term weight loss.
            </p>
          </Interaction2>
          <Interaction3>
            <div className="flex flex-row flex-wrap justify-start gap-3 md:gap-4 mt-2">
              <Link
                href="/eligibility-check"
                className="px-6 md:px-8 py-3 rounded-full border border-[#8EA94D]/30 lg:border-[#8EA94D] text-[#8EA94D] font-Urbanist text-[14px] md:text-[16px] font-semibold hover:bg-[#8EA94D] hover:text-white transition-all whitespace-nowrap"
              >
                Check Eligibility
              </Link>

              <CtaButton
                text="Find Clinic"
                className="text-[16px] lg:text-[20px] font-medium w-[142px] md:w-[220px]"
                type="link"
                href="/find-a-clinic"
              />
            </div>
          </Interaction3>
        </div>
      </div>
    </div>
  );
}
