import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreAdvices from '../../components/ExploreAdvices/ExploreAdvices'
import AdviceDisplay from '../../components/AdviceDisplay/AdviceDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div >
      <Header />
      <ExploreAdvices category={category} setCategory={setCategory} />
      <AdviceDisplay category={category} />
      <AppDownload/>
    </div>
  )
}

export default Home;