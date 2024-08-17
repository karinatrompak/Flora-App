import React, { useContext } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { ConteudoContext } from '../../context/ConteudoContext'
import axios from 'axios'

const LoginPopUp = ({setShowLogin}) => {

    const {url,setToken} = useContext(ConteudoContext);
    const [currState,setCurrState] = useState("Login")
    const [data,setData] = useState({
      name:"",
      email:"",
      password:""
    })

    const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(prevData => ({ ...prevData, [name]: value }));
    }

    const onLogin = async (event) => {
      event.preventDefault()
      let newUrl = url;
      if (currState==="Login") {
        newUrl += "/api/user/login"
      }else{
        newUrl += "/api/user/register"
      }

      try {
        const response = await axios.post(newUrl, data);
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          setShowLogin(false); // Fechar popup após sucesso
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.error("Erro ao fazer a requisição:", error);
        alert("Ocorreu um erro ao tentar fazer login ou registrar. Por favor, tente novamente.");
      }
    }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Nome' required />}
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email' required />
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Palavra-Passe' required />
        </div>
        <button type='submit'>{currState==="Criar Conta"?"Create account":"Login"}</button>
        {currState === "Criar Conta" && (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>Ao continuar, eu aceito os termos e condições da Política de Privacidade.</p>
          </div>
        )}
        {currState==="Login"
        ?<p>Deseja criar uma nova conta? <span onClick={()=>setCurrState("Criar Conta")}>Clique aqui</span></p>
        :<p>Já tem conta? <span onClick={()=>setCurrState("Login")}>Login aqui</span></p>
        }
        
        
      </form>
    </div>
  )
}

export default LoginPopUp
