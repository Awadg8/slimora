import Image from "next/image";
import Link from "next/link";

const data = [
  {
    gif: "/images/home/ease_the_mental1.gif",
    title: "Take control of your appetite",
    description:
      "As part of SlimOra Gastric Balloon Systems, our procedure-less gastric balloon occupies space in the stomach. It has the same mechanism of action as other intragastric balloons to promote satiety and reduce food consumption.",
    link: "",
    linkText: "Read More",
  },
  {
    gif: "/images/home/ease_the_mental2.gif",
    title: "Get expert support, on every step",
    description:
      "Receive personalised guidance from a multidisciplinary team of healthcare professionals, including dieticians, doctors and behaviour change experts. The programme runs for at least six months and is designed to help you build sustainable habits, improve outcomes and take control of your health.",
    link: "",
    linkText: "Read More",
  },
  {
    gif: "/images/home/ease_the_mental3.gif",
    title: "A digital ecosystem built around you",
    description:
      "Track your weight, body composition and activity in real time with the SlimOra Connected Scale and your smart watch. Your data flows directly into your care team's dashboard, helping them tailor your support. With Coach Iris, our AI-powered assistant, you have expert guidance and motivation whenever you need it.",
    link: "",
    linkText: "Read More",
  },
];

const MentalLoad = () => {
  return (
    <section>
      <div className="[background:linear-gradient(270deg,rgba(78,181,155,0.5)_0%,rgba(142,169,77,0.5)_100%),linear-gradient(0deg,rgba(0,0,0,0.45),rgba(0,0,0,0.45))] pt-18 pb-40">
        <div className="max-width">
          <h2 className="text-3xl md:text-[40px] md:leading-[45px] font-bold text-white md:max-w-[800px]">
            Ease the mental load of weight loss with{" "}
            <span className="relative pr-4">
              SlimOra<sup className="text-[12px] absolute top-4">TM</sup>
            </span>{" "}
            Gastric Balloon Systems
          </h2>

          <div className="pt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-b-3xl bg-black/25 shadow-[0px_3.57px_3.57px_0px_#00000040] overflow-hidden"
                >
                  <div className="relative">
                    <Image
                      src={item.gif}
                      alt="Gif"
                      width={500}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>

                  <div className="pt-4 px-8 flex-1">
                    <h3 className="text-center">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <Link
                    href={item.link}
                    className="mt-8 block text-center py-4 bg-[#2C5D6B]"
                  >
                    Learn More about {item.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalLoad;
