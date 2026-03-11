import Header from "@/component/header";
import Footer from "@/component/footer";
import CuttingEdge from "@/section/theTechnology/cuttingEdge";
import Discover from "@/section/theTechnology/discover";
import Journey from "@/section/theTechnology/journey";
import Connected from "@/section/theTechnology/connected";

const page = () => {
  return (
    <section>
      <Header />
      <CuttingEdge />
      <Discover />
      <Journey />
      <Connected />
      <Footer />
    </section>
  );
};

export default page;