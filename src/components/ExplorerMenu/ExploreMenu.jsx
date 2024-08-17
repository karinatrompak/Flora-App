import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore os nossos conteúdos</h1>
      <p className='explore-menu-text'>Escolha uma das inúmeras secções com conteúdos interessantes que disponibilizamos. A nossa missão é oferecer uma ampla variedade de conteúdos dedicados a empoderar e libertar a mulher de qualquer problema, promovendo bem-estar, autonomia e confiança em todas as esferas da vida.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
