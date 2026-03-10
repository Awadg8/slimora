import Header from "@/component/header";
import Footer from "@/component/footer";
import HowItWork from "@/section/howItWork/howItWork";
import HowItHelps from "@/section/howItWork/howItHelps";
const page = () => {
  return (
    <section>
      <Header />
      <HowItWork/>
      <HowItHelps/>
      <Footer />
    </section>
  );
};

export default page;
