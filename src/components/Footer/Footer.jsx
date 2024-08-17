import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} id='logo' alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id modi eum quod velit a similique atque, delectus nobis corporis quis minus beatae nihil, enim repellat? Placeat laudantium iusto eaque corporis!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>flora</h2>
            <ul>
                <li>ínicio</li>
                <li>sobre</li>
                <li>Política de Privacidade</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>contactos</h2>
            <ul>
                <li>+351-91-919-191-9</li>
                <li>contact@flora.com</li> 
            </ul>
                
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Flora.com - Todos os direitos estão reservados.</p>
    </div>
  )
}

export default Footer
