import { Footer } from "@/component/Footer";
import  StepsFour  from "@/section/home/stepsFour";
import MentalLoad from "@/section/home/mentalLoad";
import { GotQuestion } from "@/section/home/gotQuestion";

export default function Home() {
  return (
    <main>
      <MentalLoad />
      <StepsFour />
      <GotQuestion/>
      <Footer />
    </main>
  );
}
