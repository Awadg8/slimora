"use client";
import Image from "next/image";
import CtaButton from "@/component/ctaButton";
import ReadyToTake from "@/component/readyToTake";
import Interaction from "@/component/microInteraction";
import { motion } from "framer-motion";
import Interaction2 from "@/component/microInteraction2";

const ResultThatCapture = () => {
  const results = [
    {
      title: "Weight Loss",
      description: "15% avg. weight loss in 4 months.",
      citation:
        "Raftopoulos Y, et al. Poster at the 37th ASMBS Annual Meeting, 2021.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <rect width="80" height="80" fill="url(#pattern0_1220_906)" />
          <defs>
            <pattern
              id="pattern0_1220_906"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_1220_906" transform="scale(0.0125)" />
            </pattern>
            <image
              id="image0_1220_906"
              width="80"
              height="80"
              preserveAspectRatio="none"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      ),
    },
    {
      title: "Weight Loss Maintenance",
      description:
        "Avg. of 95% of weight loss maintenance 1 year after balloon passage.",
      citation: "Caballero A, et al. Obes. Surg. 2025, 35(6), 3591–3598.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <rect width="80" height="80" fill="url(#pattern0_1220_892)" />
          <defs>
            <pattern
              id="pattern0_1220_892"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_1220_892" transform="scale(0.0125)" />
            </pattern>
            <image
              id="image0_1220_892"
              width="80"
              height="80"
              preserveAspectRatio="none"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      ),
    },
    {
      title: "Muscle Maintenance",
      description:
        "Unlike other weight-loss treatments, patients lose fat – and build muscle.",
      citation: "Dejeu et al. Clin. Pract. 2024, 14(3), 765–778.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <rect width="80" height="80" fill="url(#pattern0_1220_917)" />
          <defs>
            <pattern
              id="pattern0_1220_917"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_1220_917" transform="scale(0.0125)" />
            </pattern>
            <image
              id="image0_1220_917"
              width="80"
              height="80"
              preserveAspectRatio="none"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      ),
    },
  ];

  const supportItems = [
    {
      title: "Support from your Doctor",
      description:
        "Your doctor will support you from the very first step of your SlimOra weight loss journey. During your initial consultation and at the time of balloon placement, your doctor will explain the benefits and risks, help you prepare for the procedure and monitor your progress throughout your SlimOra Program.",
      image: "/images/how_it_works/more_than1.jpg",
      imageLeft: false,
      link: null,
      linkLabel: null,
    },
    {
      title: "Support from your Nutritionist",
      description:
        "Your nutritionist will guide you throughout your Allurion weight loss journey. They will help you develop balanced habits, preserve muscle while losing fat, and create a routine that works for you.",
      image: "/images/how_it_works/more_than2.jpg",
      imageLeft: true,
      link: null,
      linkLabel: null,
    },
    {
      title: "Support from your Digital Tools",
      description:
        "On the day of your balloon placement, you will receive the SlimOra Connected Scale and the SlimOra App. Use them to track your progress, share updates with your care team, and get support when you need it. They help you stay on track throughout your SlimOra Program.",
      image: "/images/how_it_works/more_than3.jpg",
      imageLeft: false,
      link: "/the-technology",
      linkLabel: "Learn More about Tools",
    },
  ];

  return (
    <>
      {/* Section 1: Results */}
      <section className="bg-[#0A1D20] py-20">
        <div className="max-width">
          <Interaction>
            <h2 className="text-center text-white text-[24px] md:text-[40px] font-bold font-urbanist mb-14">
              Results that capture the value of the SlimOra Program
            </h2>
          </Interaction>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {results.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8"
                style={{
                  borderRadius: "16px",
                  opacity: 0.9,
                  background:
                    "linear-gradient(178deg, #0A1D20 1.4%, rgba(142, 169, 77, 0.32) 50.42%, #0A1D20 98.53%)",
                }}
              >
                <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center mb-5 bg-white">
                  {item.icon}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                >
                  <h3 className="text-white font-Urbanist text-[16px] md:text-[18px] mb-3 font-semibold">
                    {item.title}
                  </h3>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.7,
                    delay: index * 0.3,
                  }}
                >
                  <p className="text-white text-[14px] md:text-[16px] mb-4">
                    {item.description}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.7,
                    delay: index * 0.4,
                  }}
                >
                  <p className="text-[#B5B5B5] text-[11px] md:text-[16px]">
                    {item.citation}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Support */}
      <section className="bg-[#0A1D20] py-20">
        <div className="max-width">
          <Interaction>
            <h2 className="text-center text-white text-[24px] md:text-[40px] font-bold font-urbanist mb-20">
              Designed to ensure you don't feel alone on your journey.
            </h2>
          </Interaction>

          <div className="flex flex-col gap-[10px] md:gap-20">
            {supportItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col ${item.imageLeft ? "md:flex-row-reverse" : "md:flex-row"} gap-[20px] md:gap-[40px] lg:gap-[80px] items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-[35%] shrink-0">
                  <div className="rounded-xl relative h-[200px] lg:h-[251px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-[65%]">
                  <h3 className="text-white  font-bold text-[20px] md:text-[26px] mb-4 leading-[30px] text-justify">
                    {item.title}
                  </h3>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.5,
                      delay: index * 0.2,
                    }}
                  >
                    <p className="text-[#B5B5B5] text-[13px] md:text-[15px] mb-[60px] md:mb-6 leading-[20px]">
                      {item.description}{" "}
                    </p>
                  </motion.div>
                  {item.link && item.linkLabel && (
                    <Interaction2>
                      <CtaButton
                        href="/the-technology"
                        className=" text-center hover:bg-button-bg/90 px-10 py-4 font-semibold transition-all  shadow-lg w-full md:w-fit"
                        text="Learn More about Tools"
                        type="link"
                      />
                    </Interaction2>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="md:pt-30 md:pb-50">
        {/* Section 1: Ready to take the 1st step? */}
        <ReadyToTake />
      </div>
    </>
  );
};

export default ResultThatCapture;
