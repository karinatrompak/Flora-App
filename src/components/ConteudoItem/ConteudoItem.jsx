import React, { useContext } from 'react'
import './ConteudoItem.css'
import { ConteudoContext } from '../../context/ConteudoContext'

const ConteudoItem = ({id,name,description,image}) => {

  const {url} = useContext(ConteudoContext);

  return (
    <div className='conteudo-item'>
      <div className="conteudo-item-img-container">
        <img className='conteudo-item-image' src={url+"/images/"+image} alt="" />
      </div>
      <div className="conteudo-item-info">
        <div className="conteudo-item-name-rating">
            <p>{name}</p>
        </div>
        <p className="conteudo-item-description">{description}</p>
      </div>
    </div>
  )
}

export default ConteudoItem
