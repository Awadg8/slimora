import Header from "@/component/header";
import Footer from "@/component/footer";
import StepsFour from "@/section/home/stepsFour";
import MentalLoad from "@/section/home/mentalLoad";
import Banner from "@/section/home/banner";
import GotQuestion from "@/section/home/gotQuestion";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <div className="flex flex-col md:flex-row justify-between">
        <p className="text-[34px] leading-[38px] font-bold">
          Obesity isn’t a failure of willpower. It’s a chronic condition influenced by biology, environment, and behavior.
        </p>
        <p className="text-[20px] leading-[24px] text-justify">
          That’s why we built the SlimOra Gastric Balloon Systems: the world's first and only swallowable gastric balloon combined with expert nutrition support and comprehensive digital tools. It's clinically proven, easy to get started with, and designed to deliver safe and lasting metabolically healthy weight loss.
          We're setting the new standard of obesity care - inspiring, enabling, and empowering patients to transform their lives, for good.
        </p>
      </div>
      <MentalLoad />
      <StepsFour />
      <GotQuestion/>
      <Footer />
    </main>
  );
}
