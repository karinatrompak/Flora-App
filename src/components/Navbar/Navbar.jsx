import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react';
import { ConteudoContext } from '../../context/ConteudoContext';
import { useNavigate } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("home");
  const {token,setToken} = useContext(ConteudoContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  const goToForum = () => {
     window.location.href = "http://localhost:3000/";
  };

  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
          <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>ínicio</li>
          <li onClick={()=>setMenu("conteudos")} className={menu==="conteudos"?"active":""}>conteúdos</li>
          <li onClick={()=>setMenu("receitas")} className={menu==="receitas"?"active":""}>receitas</li>
          <li onClick={()=>setMenu("produtos")} className={menu==="produtos"?"active":""}>produtos</li>
          <li onClick={()=>setMenu("sobre")} className={menu==="sobre"?"active":""}>sobre</li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search_icon">
            <img src={assets.heart} alt="" />
            <div className="dot"></div>
          </div>
          {!token?<button onClick={()=>setShowLogin(true)}>login</button>
          :<div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={goToForum}><img src={assets.chat} alt="" /><p>Forum</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Sair</p></li>
            </ul>
            </div>}
          
        </div>
    </div>
  )
}

export default Navbar
