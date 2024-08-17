import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({url}) => {
    
    const [image,setImage] = useState(null);
    const [data,setData] = useState({
        name:"",
        description:"",
        category:"Fitness"
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("category",data.category)
        formData.append("image",image)
        const response = await axios.post(`${url}/api/conteudo/add`,formData);
        if(response.data.success){
            setData({
                name:"",
                description:"",
                category:"Fitness"
            })
            setImage(false)
            toast.success(response.data.message)
        }else{
            toast.error(response.data.message)
        }
    }

  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
            <div className="add-img-upload flex-col">
                <p>Upload de Imagem</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
            </div>
            <div className="add-conteudo-name flex-col">
                <p>Nome do Conteúdo</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Digite aqui' />
            </div>
            <div className="add-conteudo-description flex-col">
                <p>Descrição do conteúdo</p>
                <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Escreva o texto aqui...' required ></textarea>
            </div>
            <div className="add-category flex-col">
                <p>Categoria do conteúdo</p>
                <select onChange={onChangeHandler} value={data.category} name="category">
                    <option value="Sem categoria">Sem categoria</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Yoga">Yoga</option>
                    <option value="Beleza">Beleza</option>
                    <option value="Saude Íntima">Saude Íntima</option>
                    <option value="Ciclo Menstrual">Ciclo Menstrual</option>
                    <option value="Stress">Stress</option>
                    <option value="Receitas">Receitas</option>
                    <option value="Métodos Contracetivos">Métodos Contracetivos</option>
                </select>
            </div>
            <button type='submit' className='add-btn'>ADICIONAR</button>
        </form>
    </div>
  )
}

export default Add
