import React from 'react'
import Header from '../Components/Header'
import Intro from '../Components/Intro'
import Popular from '../Components/Popular';
import TarrifPlans from '../Components/TarrifPlans';
import Faq from '../Components/Faq';
import Subscription from '../Components/Subscription';
import Footer from '../Components/Footer';

function Home({crimeData,historyData,horrorData,cartoonData,romanceData}) {
  return (
    <div className='home'>
      <Header/>
      <Intro/>
      <Popular  crimeData={crimeData} historyData={historyData} horrorData={horrorData} cartoonData={cartoonData} romanceData={romanceData}/>
      <Faq/>
      <Subscription/>
      <Footer/>
    </div>
  )
}

export default Home
