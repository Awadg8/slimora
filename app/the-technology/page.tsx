import Header from "@/component/header";
import Footer from "@/component/footer";
import CuttingEdge from "@/section/theTechnology/cuttingEdge";
import Discover from "@/section/theTechnology/discover";
import Journey from "@/section/theTechnology/journey";

const page = () => {
  return (
    <section>
      <Header />
      <CuttingEdge />
      <Discover />
      <Journey />
      <Footer />
    </section>
  );
};

export default page;