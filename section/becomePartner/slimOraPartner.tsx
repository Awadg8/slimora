"use client";
import Link from "next/link";
import Interaction from "@/component/microInteraction";
import Interaction2 from "@/component/microInteraction2";
import { useState } from "react";
import PartnerModal from "@/component/partnerModal";
import Interaction3 from "@/component/microInteraction3";

const statsData = [
  {
    value: "180,000",
    label: "balloons placed",
  },
  {
    value: "80+",
    label: "Offered in countries",
  },
  {
    value: "20-minute",
    label: "Placed during a outpatient visit",
  },
  {
    value: "0 to 15%",
    label: "Total body weight loss",
  },
];

export default function SlimOraPartner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="max-width">
        <div className="bg-[#0A1D20]">
          <div className="grid grid-cols-1 md:grid-cols-2 pt-[96px] lg:pt-[248px] md:pt-[100px] gap-[44px] justify-center items-center">
            <div className="">
              <Interaction>
                <h1 className="text-[#FFFFFF] text-[20px] lg:text-[45px] md:text-[30px] md:font-extrabold font-bold text-center md:text-left">
                  Become an SlimOra Partner
                </h1>
              </Interaction>
              <Interaction2>
                <p className="text-[#FFFFFF] text-[12px] lg:text-[22px] md:text-[18px] leading-[18px] md:leading-[121.188%] font-light text-center md:text-justify">
                  Support your patients with proven, non-invasive, weight loss
                  programme that combines medical innovation, digital tools and
                  end-to-end clinic support.
                </p>
              </Interaction2>
              <Interaction3>
                <div className="flex gap-2.5 md:gap-7 pt-[44px] md:pt-[54px]">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="cursor-pointer border border-[#8EA94D] text-[#8EA94D] py-2 px-2 rounded-[39px] text-[9.21px] lg:text-[18px] md:text-[11px] w-full text-center hover:bg-[#8EA94D] hover:text-white transition-all"
                  >
                    Become a SlimOra Partner
                  </button>
                  <Link
                    href="/find-a-clinic"
                    className="bg-[#8EA94D] text-[#FFFFFF] text-[9.21px] lg:text-[18px] whitespace-nowrap inline-block w-full text-center py-2 px-2 rounded-[39px]"
                  >
                    Learn more about Program
                  </Link>
                </div>
              </Interaction3>
            </div>
            <div className="flex md:justify-end justify-center items-center">
              <div className="grid grid-cols-2 md:grid-cols-1 gap-[11px] md:gap-[24px]">
                {statsData.map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-[7px] md:rounded-[15.226px] opacity-60 bg-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),linear-gradient(180deg,#143338_0%,#2D4C3D_23.56%,#8EA94D_100%)] text-center md:p-6 p-2.5"
                  >
                    <h2 className="text-[#FFFFFF] text-[15px] lg:text-[32px] md:text-[17px]">
                      {stat.value}
                    </h2>
                    <h3 className="text-[#B5B5B5] text-[10px] lg:text-[20px] md:text-[15px] leading-[8.627px] md:leading-[18px]">
                      {stat.label}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <PartnerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
