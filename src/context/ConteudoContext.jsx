import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ConteudoContext = createContext(null)

const ConteudoContextProvider = (props) => {

    const url = "http://localhost:4000"
    const [token,setToken] = useState("");
    const [conteudo_list,setConteudoList] = useState([])

    const contextValue = {
        conteudo_list,
        url,
        token,
        setToken
    }

    const fetchConteudoList = async () => {
        const response = await axios.get(url+'/api/conteudo/list');
        setConteudoList(response.data.data);
    }

    useEffect(()=> {
        async function loadData() {
            await fetchConteudoList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])
    
    return (
        <ConteudoContext.Provider value={contextValue}>
            {props.children}
        </ConteudoContext.Provider>
    )

}

export default ConteudoContextProvider;