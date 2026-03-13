"use client";
import Image from "next/image";
import Link from "next/link";
import Interaction from "@/component/microInteraction";
import Interaction2 from "@/component/microInteraction2";

export default function SlimOraVirtualCareSuite() {
  const results = [
    {
      title: "Get support from day 1",
      points: [
        "Place your first 10 balloons with the support of the SlimOra team.",
        "Leverage in-clinic marketing tools.",
        "Get support to help create your multidisciplinary SlimOra Program.",
      ],
      image: "/images/become-partner/image1.png",
    },
    {
      title: "Benefit from our expertise",
      points: [
        "Get access to our clinical expertise and market research.",
        "Participate in the SlimOra Academy, a workshop series accredited by SCOPE, the only internationally recognized certification in obesity management.",
        "Benefit from marketing and professional support.",
      ],
      image: "/images/become-partner/image2.png",
      buttonText: "View 4C Hub & 4C Learning Lab",
      link: "#",
    },
    {
      title: "Increase patient engagement and satisfaction",
      points: [
        "Get access to the SlimOra Virtual Care Suite to manage your patients.",
        "SlimOra Assurance Plus Warranty included.",
      ],
      image: "/images/become-partner/image3.png",
      buttonText: "View Virtual Care Suite",
      link: "#",
    },
  ];

  const supportItems = [
    {
      title: "SlimOra Virtual Care Suite",
      description:
        "A key component of the SlimOra Program, the SlimOra Virtual Care Suite is a dynamic weight-loss management suite powered by artificial intelligence and designed to maximize your patient outcomes and satisfaction. ",
      subDescription:
        "Remote patient monitoring, telehealth and care team collaboration - all under the one digital umbrella.",
      image: "/images/become-partner/smart_patient_monitoring.jpg",
      imageLeft: false,
      link: "#",
      linkLabel: "Smart patient monitoring",
    },
    {
      title: "The future of weight loss, delivered through your clinic",
      description:
        "The SlimOra Program combines the world's first and only swallowable gastric balloon that requires no surgery, endoscopy or anaesthesia, with a comprehensive behaviour change and digital care platform. It empowers healthcare providers to deliver clinically proven weight loss of up to 10 - 15% in just four months - while supporting long-term behaviour change, muscle preservation and patient satisfaction.",
      image: "/images/become-partner/smart_hand.jpg",
      imageLeft: true,
    },
  ];

  return (
    <div>
      {/* Section: Being an SlimOra Partner */}
      <section className="bg-[#0A1D20] pt-[172px] md:pt-[194px]">
        <div className="max-width">
          <h2 className="text-center text-white text-[24px] md:text-[40px] font-bold font-urbanist mb-14">
            Being an SlimOra Partner
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-between"
              >
                <div
                  className="lg:p-8 md:6 p-5 flex flex-col items-center h-[360px] sm:h-[400px] md:h-[450px] lg:h-[520px]"
                  style={{
                    borderRadius: "16px",
                    opacity: 0.9,
                    background:
                      "linear-gradient(178deg, #0A1D20 1.4%, rgba(142, 169, 77, 0.32) 50.42%, #0A1D20 98.53%)",
                  }}
                >
                  <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center mb-5 bg-white overflow-hidden relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <Interaction2>
                    <h3 className="text-white font-Urbanist text-[16px] md:text-[22px] mb-3 font-semibold">
                      {item.title}
                    </h3>
                    <ul className="text-[#B5B5B5] text-[14px] md:text-[16px] mb-4 space-y-2 text-justify list-disc pl-1">
                      {item.points.map((point: string, pointIndex: number) => (
                        <li key={pointIndex} className="text-[#B5B5B5]">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Interaction2>
                </div>
                {item.buttonText && (
                  <div className="flex gap-2.5 md:gap-[31px] pt-[23px] md:pt-[49px] justify-center">
                    <Link
                      href={item.link}
                      className="bg-[#8EA94D] text-[#FFFFFF] text-[12px] md:text-[18px] py-2 rounded-[39px] px-5 text-center"
                    >
                      {item.buttonText}
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-[160px]">
        <div className="flex flex-col gap-[10px] md:gap-20">
          {supportItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${item.imageLeft ? "md:flex-row-reverse" : "md:flex-row"} gap-[20px] md:gap-[40px] lg:gap-[80px] items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-[35%] shrink-0">
                <div className="relative h-[200px] lg:h-[500px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    className="object-cover"
                  />
                  {item.linkLabel && (
                    <div className="flex gap-2.5 md:gap-[31px] pt-[23px] md:pt-[49px] justify-center absolute -bottom-5 right-1 md:-right-10">
                      <Link
                        href={item.link}
                        className="border-[#8EA94D] border bg-[#0A1D20] text-[#FFFFFF] text-[12px] md:text-[14px] lg:text-[24px] py-2 rounded-[39px] px-5 lg:px-10 md:px-3 text-center"
                      >
                        {item.linkLabel}
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* Text Content */}
              <div className="">
                <div className="max-w-[1280px] mx-auto py-8 px-6 sm:px-8 md:px-10 md:py-12 lg:py-12">
                  <div className="w-full flex flex-col items-start">
                    <div className="flex flex-col font-urbanist lg:max-w-[709px]">
                      <Interaction2>
                        <h3 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold lg:mb-[28px] md:mb-[22px] text-[#FFFFFF] text-center md:text-justify">
                          {item.title}
                        </h3>
                      </Interaction2>
                      <Interaction>
                        <p className="text-[14px] md:text-[18px] lg:text-[22px] text-[#B5B5B5] lg:mb-[23px] mb-[18px] text-justify lg:leading-[28px] leading-[20px]">
                          {item.description}
                        </p>
                      </Interaction>

                      <Interaction2>
                        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#FFFFFF] text-justify font-bold italic md:not-italic">
                          {item.subDescription}
                        </p>
                      </Interaction2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
