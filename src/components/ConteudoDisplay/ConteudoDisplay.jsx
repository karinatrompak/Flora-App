import React, { useContext } from 'react'
import './ConteudoDisplay.css'
import { ConteudoContext } from '../../context/ConteudoContext'
import ConteudoItem from '../ConteudoItem/ConteudoItem'

const ConteudoDisplay = ({category}) => {

    const {conteudo_list} = useContext(ConteudoContext)
    
  return (
    <div className='conteudo-display' id='conteudo-display'>
      <h2>Top artigos para si</h2>
      <div className="conteudo-display-list">
        {conteudo_list.map((item,index)=>{
            if (category==="All" || category===item.category) {
                return <ConteudoItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} />
            }
            
        })}
      </div>
    </div>
  )
}

export default ConteudoDisplay
