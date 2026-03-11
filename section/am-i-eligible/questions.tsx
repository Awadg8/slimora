import Image from "next/image";
import Link from "next/link";

const data = [
  {
    img_url: "/images/am_i_eligible/check_price.png",
    title: "How much does the SlimOra Program cost?",
    description: "Every weight-loss journey is unique. The price of the SlimOra Programme may vary depending on your needs, goals, and the clinics.",
    link: "#",
    linkText: "Check the price of a 6-month SlimOra Programme",
  },
  {
    img_url: "/images/am_i_eligible/slimora_program.jpg",
    title: "Which SlimOra Program is right for me?",
    description: `
    <ul>
      <li>6, 12, or 18 months</li>
      <li>1 or 2 consecutive balloons</li>
      <li>Every weight loss journey is unique.</li>
    </ul>
    `,
    link: "/the-programme",
    linkText: "The SlimOra Programme",
  },
  {
    img_url: "/images/am_i_eligible/find_a_clinic.jpg",
    title: "Where is my nearest SlimOra clinic?",
    description: "More than 1600 clinics offer the SlimOra Programme worldwide. Find the clinic nearest you.",
    link: "/find-a-clinic",
    linkText: "Find a Clinic",
  },
];

export default function MentalLoad() {
  return (
    <section>
      <div className="pt-10 md:pt-18 pb-16 md:pb-40">
        <div className="max-width">
          <div className="pt-9 md:pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-[20px] bg-black/25 shadow-[0px_3.57px_3.57px_0px_#00000040] overflow-hidden"
                >
                  <div className="px-4 pt-4">
                    <div className="relative rounded-[7px] overflow-hidden">
                      <Image
                        src={item.img_url}
                        alt="img_url"
                        width={500}
                        height={500}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="py-4 px-7 flex-1">
                      <h3 className="text-lg md:text-[23px] md:leading-[30px] pb-2 font-semibold">
                        {item.title}
                      </h3>
                      <div
                        className="text-xs md:text-[15px] md:leading-[18px] text-justify [&_ul]:list-disc [&_ul]:pl-5 tracking-[-0.18px]"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  </div>
                  <Link
                    href={item.link}
                    className="block text-center py-3 md:py-4 font-bold text-xs md:text-base bg-[#2C5D6B]"
                  >
                    {item.linkText}
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