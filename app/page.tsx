import Header from "@/component/header";
import Footer from "@/component/footer";
import StepsFour from "@/section/home/stepsFour";
import MentalLoad from "@/section/home/mentalLoad";
import Banner from "@/section/home/banner";
import GotQuestion from "@/section/home/gotQuestion";
import Others from "@/section/home/others";

export default function Home() {
  return (
    <main className="max-w-[2560px] mx-auto">
      <Header />
      <Banner />
      <Others/>
      <MentalLoad />
      <StepsFour />
      <div className="pt-[120px] md:pt-[400px] pb-[80px] md:pb-[230]">
        <GotQuestion />
      </div>
      <Footer />
    </main>
  );
}
