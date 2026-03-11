import React from 'react';
import Image from 'next/image';
export default function Banner(){
  return (
    <div className="relative w-full flex flex-col min-[1025px]:flex-row justify-center items-center gap-6">
      <div className="hidden sm:block relative w-full min-[1025px]:w-[60%] sm:h-[110vh]">
        <Image
          src={"/images/am_i_eligible/banner.png"}
          fill
          objectFit='cover'
          alt="Am i eligible banner image"
        />
        <div className="hidden min-[1025px]:block absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0A1D20] via-[#0a1d2065] to-transparent" />
      </div>
      <div className="block sm:hidden relative w-full h-[50vh]">
        <Image
          src={"/images/am_i_eligible/mobile_banner.png"}
          fill
          objectFit='cover'
          alt="Am i eligible mobile banner image"
        />
      </div>
      <div className="absolute bottom-10 min-[1025px]:relative flex flex-col items-center min-[1025px]:items-start min-[1025px]:mt-0 w-full min-[1025px]:w-[40%]">
        <p className="text-[#b5b5b5] font-urbanist text-[12px] sm:leading-[30px] sm:text-[26px]">Start Your Journey</p>
        <p className="text-[#8EA94D] font-urbanist text-[24px] sm:leading-[68px] sm:text-[64px] font-semibold">BMI Calculator</p>
        <p className="text-[#b5b5b5] font-urbanist text-[12px] sm:leading-[30px] sm:text-[26px]">Swallowable gastric balloon.</p>
      </div>
    </div>
  )
}
