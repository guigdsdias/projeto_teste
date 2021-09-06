import axios from "axios"; 


export const api = axios.create({
        baseURL: 'http://localhost:8080'
})

export const busca = async ( url, setDado ) => {
    const resposta = await api.get(url);
    console.log(resposta.data);
    setDado(resposta.data);
}

export const salvar = async ( url, data, setDado ) => {
    const resposta = await api.post( url, data );
    setDado(resposta.data);
}

export const atualizar = async ( url, data, setDado ) => {
    console.log(data)
    const resposta = await api.put( url, data);
    setDado(resposta.data);
}

export const deletar = async ( url, setDado ) => {
    const resposta = await api.delete( url);
    setDado(resposta.data);
}


export default api