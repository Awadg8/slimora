import Header from "@/component/header";
import Footer from "@/component/footer";
import StepsFour from "@/section/home/stepsFour";
import MentalLoad from "@/section/home/mentalLoad";
import ReadyToTake from "@/section/home/readyToTake";
import TheProgramme from "@/section/home/theProgramme";
import Banner from "@/component/banner";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <div className="h-[50vh]"></div>
      <MentalLoad />
      <TheProgramme />
      <ReadyToTake />
      <StepsFour />
      <Footer />
    </main>
  );
}
