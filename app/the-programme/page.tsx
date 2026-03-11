import Header from "@/component/header";
import Footer from "@/component/footer";
import Banner from "@/section/programme/banner";
import TheProgramme from "@/section/home/theProgramme";
import ResultThatCapture from "@/section/home/resultThatCapture";
import Disclaimer from "@/component/dislaimer";
const page = () => {
  return (
    <main>

      <Header />
      <Banner />
      <TheProgramme />
      <ResultThatCapture />
      <Disclaimer />
      <Footer />
    </main>
  );
};

export default page;
