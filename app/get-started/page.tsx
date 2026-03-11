import FiveSteps from '@/section/getStarted/fiveSteps'
import Header from '@/component/header'
import Footer from '@/component/footer'
import CheckIf from '@/section/getStarted/checkIf'
import GastricBalloon from '@/section/getStarted/gastricBalloon'
import Banner from '@/section/getStarted/banner'
import GotQuestion from '@/section/home/gotQuestion'

const page = () => {
  return (
    <div>
        <Header/>
      <Banner/>
      <FiveSteps/>
      <CheckIf/>
      <GotQuestion/>
      <GastricBalloon/>
      <Footer />
    </div>
  )
}

export default page
