import Header from "@/component/header";
import Banner from "@/section/findClinic/banner";
import StepCard from "@/component/stepCard";
import Footer from "@/component/footer";
import Link from "next/link";

const page = () => {
  return (
    <section className="max-w-[2560px] mx-auto">
      <Header />
      <Banner />
      <div className="max-width">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-10 md:py-28">
          <div className="col-span-2">
            <h3 className="text-[24px] md:text-[32px] leading-[30px] md:leading-[45px] font-bold text-[#FFFFFF]">
              Not sure if the SlimOra Program is right for you?
            </h3>
          </div>
          <div className="col-span-3">
            <p className="text-[12px] md:text-[16px] leading-[16px] md:leading-[24px] text-[#FFFFFF]">
              Start with a quick eligibility check to see if you're a good fit - before booking a consultation.</p>
            <Link className="flex justify-center md:justify-start my-4 w-fit" href={"/eligibility-check"}>
              <button className="cursor-pointer bg-transparent border border-[#8EA94D] text-[#8EA94D] px-8 py-2 rounded-full text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]">Check Eligibility</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#8EA94D]">
        <p className="text-white text-[12px] md:text-[16px] leading-[16px] md:leading-[24px] text-center p-4">This Clinic Locator is provided by SlimOra Technologies as a value-added service. SlimOra, at its sole and absolute discretion, may modify the Clinic Locator at any time.
        </p>
      </div>
      <div className="max-width md:pt-20 pt-10 pb-10 md:pb-32">
        <div className="md:pb-16 pb-10">
          <h4 className="text-[25px] md:text-[40px] leading-[30px] md:leading-[45px] font-bold text-[#FFFFFF] max-w-[750px]">
            <span>4 steps to kickstart your personalized weight-loss journey with </span>
            SlimOra
            <span> Gastric Balloon Systems</span>
          </h4>
        </div>
        <StepCard />
      </div>
      <Footer />
    </section>
  );
};

export default page;