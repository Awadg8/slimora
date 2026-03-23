import ImageTextCard from "@/component/imageTextCard";
import Interaction from "@/component/microInteraction";

const programmeFeatures = [
  {
    image: "/images/how_it_works/more_than1.jpg",
    title: "Medical Support",
    description:
      "Receive expert care and support from your clinic team throughout your journey.",
    imagePosition: "left" as const,
  },
  {
    image: "/images/how_it_works/more_than2.jpg",
    title: "Nutrition coaching",
    description:
      "Work 1 on 1 with a coach to build healthier habits and make sustainable food and lifestyle choices.",
    imagePosition: "right" as const,
  },
  {
    image: "/images/how_it_works/devices.jpg",
    title: "Digital tools powered by AI",
    description:
      "Track your progress and stay connected to your care team with tools like the SlimOra Connected Scale and SlimOra App.",
    imagePosition: "left" as const,
  },
];

export default function MoreThanBalloon() {
  return (
    <div className="bg-[#0A1D20] pt-0 sm:py-[60px] md:py-[100px]">
      <div className="max-width">
        <Interaction>
          <h2 className="text-[#FFFFFF] text-[24px] md:text-[50px] font-bold text-center mb-[60px] md:mb-[100px]">
            SlimOra Gastric Balloon is more than just a balloon
          </h2>
        </Interaction>
        <div className="space-y-[60px] md:space-y-[100px]">
          {programmeFeatures.map((feature, index) => (
            <ImageTextCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              imagePosition={feature.imagePosition}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
