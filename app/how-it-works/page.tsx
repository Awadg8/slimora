import Header from "@/component/header";
import Footer from "@/component/footer";
import HowItWork from "@/section/howItWork/howItWork";
import HowItHelps from "@/section/howItWork/howItHelps";
import HowBalloonPlaced from "@/section/howItWork/howBalloonPlaced";
import BalloonRemovalAndEligibility from "@/section/howItWork/balloonRemovalAndEligibility";
import MoreThanBalloon from "@/section/howItWork/moreThanBalloon";
import ReadyToTake from "@/component/readyToTake";
import Disclaimer from "@/component/dislaimer";

const page = () => {
  return (
    <section>
      <Header />
      <HowItWork />
      <HowItHelps />
      <HowBalloonPlaced />
      <BalloonRemovalAndEligibility />
      <MoreThanBalloon />
      <ReadyToTake />
      <Disclaimer />
      <Footer />
    </section>
  );
};

export default page;
