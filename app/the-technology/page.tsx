import Header from "@/component/header";
import Footer from "@/component/footer";
import CuttingEdge from "@/section/theTechnology/cuttingEdge";
import Discover from "@/section/theTechnology/discover";
import Journey from "@/section/theTechnology/journey";
import Connected from "@/section/theTechnology/connected";
import Banner from "@/section/theTechnology/banner";
import Disclaimer from "@/component/dislaimer";

const page = () => {
  return (
    <section>
      <Header />
      <Banner />
      <CuttingEdge />
      <Discover />
      <Journey />
      <Connected />
      <Disclaimer />
      <Footer />
    </section>
  );
};

export default page;
