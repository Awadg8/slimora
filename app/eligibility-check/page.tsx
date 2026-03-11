import Header from '@/component/header';
import Banner from '@/section/checkEligibility/banner';
import Footer from '@/component/footer';
import React from 'react';

export default function EligibilityCheck(){
  return (
    <div className="max-w-[2560px] mx-auto">
      <Header/>
      <Banner/>
      <Footer/>
    </div>
  )
}
