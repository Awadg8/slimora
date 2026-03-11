import Header from "@/component/header";
import Footer from "@/component/footer";
import Banner from "@/section/programme/banner";
import TheProgramme from "@/section/home/theProgramme";
import ResultThatCapture from "@/section/home/resultThatCapture";

const page = () => {
  return (
    <main>
      
      <Header />
      <Banner />
      <TheProgramme />
      <ResultThatCapture />
      <Footer />
    </main>
  );
};

export default page;
