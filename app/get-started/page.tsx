import FiveSteps from '@/section/getStarted/fiveSteps'
import Header from '@/component/header'
import Footer from '@/component/footer'
import CheckIf from '@/section/getStarted/checkIf'
import GastricBalloon from '@/section/getStarted/gastricBalloon'

const page = () => {
  return (
    <div>
        <Header/>
      <FiveSteps/>
      <CheckIf/>
      <GastricBalloon/>
      <Footer />
    </div>
  )
}

export default page
