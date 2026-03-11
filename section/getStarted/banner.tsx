import Image from "next/image";
import CtaButton from "@/component/ctaButton";
export default function Banner() {
  return (
    <div className="relative w-full flex flex-col min-[1025px]:flex-row justify-center items-center gap-6">
      <div className="hidden sm:block relative w-full min-[1025px]:w-[60%] sm:h-[110vh]">
        <Image
          src={"/images/get_started/banner.png"}
          fill
          objectFit="cover"
          alt="Am i eligible banner image"
        />
        <div className="hidden min-[1025px]:block absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0A1D20] via-[#0a1d2065] to-transparent" />
      </div>
      <div className="block sm:hidden relative w-full h-[80vh]">
        <Image
          src={"/images/get_started/banner.png"}
          fill
          objectFit="cover"
          alt="Am i eligible mobile banner image"
        />
      </div>
      <div className="absolute bottom-10 min-[1025px]:relative flex flex-col items-start min-[1025px]:items-start min-[1025px]:mt-0 w-full min-[1025px]:w-[40%] px-6">
        <p className="text-[#8EA94D] font-urbanist text-[32px] sm:text-[40px] font-light">
          Start your <span className="font-semibold">weight-loss</span> journey
        </p>
        <CtaButton
          text="Book a Consultation"
          type="link"
          href="#"
          className="text-xs md:text-lg font-medium w-[180px] md:w-[240px] mt-6"
        />
      </div>
    </div>
  );
}
