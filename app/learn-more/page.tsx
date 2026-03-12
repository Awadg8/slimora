import Header from "@/component/header";
import Footer from "@/component/footer";
import Banner from "@/section/learnMore/banner";
import SafetyProfile from "@/section/learnMore/safetyProfile";
import Guidance from "@/section/learnMore/guidance";
import Disclaimer from "@/component/dislaimer";

const page = () => {
  return (
    <section>
      <Header />
      <Banner />
      <SafetyProfile />
      <Guidance />
      <div className="pb-14 md:pb-25">
        <Disclaimer />
      </div>
      <Footer />
    </section>
  );
};

export default page;
