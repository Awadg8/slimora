import React from 'react'
import Header from '@/component/header';
import Footer from '@/component/footer';
import Banner from '@/section/am-i-eligible/banner';
export default function AmEligible(){
  return (
    <div className="max-w-[2560px] mx-auto">
      <Header/>
      <Banner/>
      <Footer/>
    </div>
  )
}
