import Interaction from "@/component/microInteraction";
import Interaction2 from "@/component/microInteraction2";

export default function Guidance() {
  return (
    <section className="flex flex-col">
      {/* Clinical Study Section */}
      <div
        className="relative w-full py-5 sm:py-10 mb-20 sm:mb-25"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, #8FAE4D 0%, #2C5D6B 100%)",
        }}
      >
        <div className="max-width flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-20">
          <div className="lg:w-[55%]">
            <Interaction>
              <h2 className="text-white font-urbanist text-2xl sm:text-[40px] font-bold text-center">
                In a clinical study involving 1,770 Allurion patients:1
              </h2>
            </Interaction>
          </div>
          <div className="lg:w-[45%] flex flex-col gap-4 md:gap-6 w-full">
            <div className="bg-[#254B55] p-4 rounded-[20px] flex flex-col items-center text-center">
              <p className="text-white text-xl sm:text-3xl">3.95%</p>
              <p className="text-white text-xs sm:text-base">
                experienced adverse effects such as nausea, vomiting, and
                abdominal pain
              </p>
            </div>
            <div className="bg-[#254B55] p-4 rounded-[20px] flex flex-col items-center text-center">
              <p className="text-white text-xl sm:text-3xl">0.34%</p>
              <p className="text-white text-xs sm:text-base">
                experienced serious adverse effects such as small intestine
                obstruction, pancreatitis, or gastric outlet obstruction
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Guidance Banner */}
      <div
        className="py-12 sm:py-20"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #8FAE4D",
        }}
      >
        <div className="max-width text-center">
          <Interaction>
            <h2 className="text-white font-urbanist text-2xl sm:text-3xl lg:text-[40px] font-bold">
              Guidance on when to contact physician for any untoward symptoms
            </h2>
          </Interaction>
        </div>
      </div>

      {/* List Section */}
      <div className="py-25 sm:pt-30 sm:pb-40">
        <div className="max-width">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <Interaction>
              <h3 className="text-white font-urbanist text-2xl sm:text-[32px] font-bold mb-2.5">
                Allurion gastric balloons may cause gastrointestinal
                complications that may require endoscopic or surgical
                intervention.
              </h3>
            </Interaction>
            <Interaction2>
              <p className="text-[#B5B5B5] text-xs sm:text-lg">
                Watch out for certain adverse effects that require immediately
                consulting the doctor who placed your device, such as:
              </p>
            </Interaction2>
          </div>

          <div className="mb-10 sm:mb-8 px-6">
            <ul className="flex flex-col list-disc text-[#b5b5b5] text-justify text-xs sm:text-xl">
              <li>Persistent nausea</li>
              <li>Severe vomiting</li>
              <li>Constipation with inability to pass gas</li>
              <li>Severe diarrhea</li>
              <li>Dehydration</li>
              <li>Severe abdominal pain</li>
              <li>Severe cramps or discomfort</li>
              <li>Abdominal distension</li>
              <li>Fever</li>
              <li>Gastrointestinal bleeding</li>
              <li>Any other unexpected symptom</li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-xs sm:text-xl font-extrabold italic sm:not-italic sm:font-semibold">
              In case of any emergency, consult a doctor as soon as possible or
              call 999.
            </p>
            <p className="text-xs sm:text-xl font-extrabold italic sm:not-italic sm:font-normal">
              Show your implant card to the healthcare professionals who are
              treating you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
