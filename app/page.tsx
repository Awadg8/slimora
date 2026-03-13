import Header from "@/component/header";
import Footer from "@/component/footer";
import StepsFour from "@/section/home/stepsFour";
import MentalLoad from "@/section/home/mentalLoad";
import Banner from "@/section/home/banner";
import GotQuestion from "@/section/home/gotQuestion";
import Others from "@/section/home/others";
import Disclaimer from "@/component/dislaimer";
import ReadyToTake from "@/section/home/readyToTake";

export default function Home() {
  return (
    <main className="max-w-[2560px] mx-auto">
      <Header />
      <Banner />
      <Others />
      <MentalLoad />
      <div className="py-20 md:py-32">
        <StepsFour />
      </div>
      <ReadyToTake />
      <div className="py-30">
        <GotQuestion />
      </div>
      <Disclaimer />
      <Footer />
    </main>
  );
}
