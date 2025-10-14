
import React from 'react'
import CardGrid from '../components/Themes/Datacards'
import HeroSection from '../components/Themes/Topbar'
import KeralaCards from '../components/Themes/Hotels'
import FAQEnquiry from '../components/Themes/FAQSection'
// import { faqData } from '../data/page'
import Banner from '../components/Themes/Banner'






function page() {
  return (
    <>

    
    <HeroSection />
    <Banner />
    <CardGrid />
    <KeralaCards />
    
    {/* <FAQEnquiry faqs={faqData} /> */}
   
   
    </>
  )
}

export default page