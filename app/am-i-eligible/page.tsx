import React from 'react'
import Header from '@/component/header';
import Footer from '@/component/footer';
import Banner from '@/section/am-i-eligible/banner';
import CheckIf from '@/section/getStarted/checkIf';
import Others from '@/section/am-i-eligible/others';
import GastricBalloon from '@/section/getStarted/gastricBalloon'

export default function AmEligible(){
  return (
    <div className="max-w-[2560px] mx-auto">
      <Header/>
      <Banner/>
      <Others/>
      <CheckIf/>
      <GastricBalloon/>
      <Footer/>
    </div>
  )
}
