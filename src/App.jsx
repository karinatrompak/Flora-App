import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Favorites from './pages/Favorites/Favorites'
import Conteudos from './pages/Conteudos/Conteudos'
import Produtos from './pages/Produtos/Produtos'
import Receitas from './pages/Receitas/Receitas'
import Footer from './components/Footer/Footer'
import Sobre from './pages/Sobre/Sobre'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'


const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin} />   
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/favorites' element={<Favorites/>} />
        <Route path='/conteudos' element={<Conteudos/>} />
        <Route path='/produtos' element={<Produtos/>} />
        <Route path='/receitas' element={<Receitas/>} />
        <Route path='/sobre' element={<Sobre/>} />
      </Routes>   
    </div>
    <Footer/>
    </>

  )
}

export default App
