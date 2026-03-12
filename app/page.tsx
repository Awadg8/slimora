import Header from "@/component/header";
import Footer from "@/component/footer";
import StepsFour from "@/section/home/stepsFour";
import MentalLoad from "@/section/home/mentalLoad";
import Banner from "@/section/home/banner";
import GotQuestion from "@/section/home/gotQuestion";
import Others from "@/section/home/others";
import Disclaimer from "@/component/dislaimer";

export default function Home() {
  return (
    <main className="max-w-[2560px] mx-auto">
      <Header />
      <Banner />
      <Others />
      <MentalLoad />
      <StepsFour />
      <div className="py-30">
        <GotQuestion />
      </div>
      <Disclaimer />
      <Footer />
    </main>
  );
}
