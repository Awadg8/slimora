import React from 'react'
import Header from "@/component/header";
import SlimOraPartner from '@/section/becomePartner/slimOraPartner'
import SlimOraVirtualCareSuite from '@/section/becomePartner/slimOraVirtualCareSuite';
import  HowSlimOraWorks  from '@/section/becomePartner/howSlimOraWorks';
import SlimOraProgramImpact  from '@/section/becomePartner/slimOraProgramImpact';
import SlimOraBenefits from '@/section/becomePartner/slimOraBenefits';
import OtherProfessionals from '@/section/becomePartner/otherProfessionals';
import Footer from "@/component/footer";
export default function page() {
    return (
        <div>
            <Header />
            <SlimOraPartner />
            <SlimOraVirtualCareSuite/>
            <HowSlimOraWorks/>
            <SlimOraProgramImpact/>
            <SlimOraBenefits/>
            <OtherProfessionals/>
            <Footer />
        </div>
    )
}
