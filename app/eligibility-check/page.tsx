import Header from '@/component/header';
import Banner from '@/section/checkEligibility/banner';
import Footer from '@/component/footer';
import React from 'react';
import Disclaimer from "@/component/dislaimer";

export default function EligibilityCheck() {
  return (
    <div className="max-w-[2560px] mx-auto">
      <Header />
      <Banner />
      <Disclaimer />
      <Footer />
    </div>
  )
}
