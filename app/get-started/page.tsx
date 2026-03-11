import FiveSteps from '@/section/getStarted/fiveSteps'
import Header from '@/component/header'
import Footer from '@/component/footer'
import CheckIf from '@/section/getStarted/checkIf'
import GastricBalloon from '@/section/getStarted/gastricBalloon'
import Banner from '@/section/getStarted/banner'

const page = () => {
  return (
    <div>
        <Header/>
      <Banner/>
      <FiveSteps/>
      <CheckIf/>
      <GastricBalloon/>
      <Footer />
    </div>
  )
}

export default page
