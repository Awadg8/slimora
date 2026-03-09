import Header from "@/component/header";
import { Footer } from "@/component/Footer";
import MentalLoad from "@/section/home/mentalLoad";
import Banner from "@/component/banner";
export default function Home() {
  return (
    <main>
      <Header />
      <Banner/>
      <MentalLoad />
      <Footer />
    </main>
  );
}
