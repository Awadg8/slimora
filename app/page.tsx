import Header from "@/component/header";
import { Footer } from "@/component/Footer";
import MentalLoad from "@/section/home/mentalLoad";
import ReadyToTake from "@/section/home/readyToTake";

export default function Home() {
  return (
    <main>
      <Header />
      <MentalLoad />
      <ReadyToTake />
      <Footer />
    </main>
  );
}
