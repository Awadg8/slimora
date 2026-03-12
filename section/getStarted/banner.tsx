import CtaButton from "@/component/ctaButton";
import Interaction from "@/component/microInteraction";
import Interaction2 from "@/component/microInteraction2";

export default function Banner() {
  const desktopBg = `linear-gradient(90deg, rgba(10, 29, 32, 0.00) 0%, #0A1D20 100%), url('/images/get_started/banner.png') lightgray 50% / cover no-repeat`;
  const mobileBg = `linear-gradient(180deg, #0A1D20 0.11%, rgba(0, 0, 0, 0.00) 29.77%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 56.53%, #0A1D20 99.92%), url('/images/get_started/banner.png') lightgray 50% / cover no-repeat`;

  return (
    <>
      <style>{`
        .banner-background {
          background: ${mobileBg};
        }
        @media (min-width: 640px) {
          .banner-background {
            background: ${desktopBg};
          }
        }
      `}</style>
      <section className="banner-background relative w-full h-[400px] sm:h-[110vh] min-h-[400px] flex items-center justify-center sm:justify-end px-6 sm:px-[10%]">
        <div className="md:relative absolute md:bottom-0 -bottom-24 md:left-0 left-6">
          <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-[750px]">
            <Interaction>
              <h1 className="text-[#8EA94D] font-urbanist text-[32px] sm:text-[40px] lg:text-[64px] font-light leading-tight">
                Start your <span className="font-semibold">weight-loss</span>{" "}
                journey
              </h1>
            </Interaction>
            <Interaction2>
              <CtaButton
                text="Book a Consultation"
                type="link"
                href="/eligibility-check"
                className="text-sm sm:text-lg font-medium w-[180px] sm:w-[240px]"
              />
            </Interaction2>
          </div>
        </div>
      </section>
    </>
  );
}
