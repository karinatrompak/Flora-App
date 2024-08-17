import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {

  const [list,setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/conteudo/list`);
    if(response.data.success){
      setList(response.data.data)
    }else{
      toast.error("Ocorreu um erro");
    }
  }

  const removeConteudo = async(ConteudoId) => {
    const response = await axios.post(`${url}/api/conteudo/remove`,{id:ConteudoId});
    await fetchList();
    if (response.data.success){
      toast.success(response.data.message)
    }else{
      toast.error("Ocorreu um erro");
    }
  }

  useEffect(()=>{
    fetchList();
  },[])

  return (
    <div className='list add flex-col'>
      <p>Lista de todos os conteúdos</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Imagem</b>
          <b>Nome</b>
          <b>Categoria</b>
          <b>Remover</b>
        </div>
        {list.map((item,index)=>{
          return (
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p onClick={()=>removeConteudo(item._id)} className='cursor'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
