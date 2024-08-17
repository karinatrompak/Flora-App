import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExplorerMenu/ExploreMenu'
import ConteudoDisplay from '../../components/ConteudoDisplay/ConteudoDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  const [category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <ConteudoDisplay category={category} />
      <AppDownload/>
    </div>
  )
}

export default Home

