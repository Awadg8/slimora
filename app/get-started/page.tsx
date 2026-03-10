import FiveSteps from '@/section/getStarted/fiveSteps'
import Header from '@/component/header'
import Footer from '@/component/footer'
import CheckIf from '@/section/getStarted/checkIf'

const page = () => {
  return (
    <div>
        <Header/>
      <FiveSteps/>
      <CheckIf/>
      <Footer />
    </div>
  )
}

export default page
