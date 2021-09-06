import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { busca } from '../api/api'
const   ListVeiculos = ( { url }) =>{


    const [veiculos, setVeiculos] = useState([]);

    useEffect(() => {
        busca(url, setVeiculos)
    }, [url]) 

    return(
        <section className="posts container">
        {
            veiculos.map((veiculo) => {
               return <Link key={veiculo.id} to={`/sobre/${veiculo.id}`} className={`cartao-post cartao-post--${veiculo.vendido}`}>
                    <article >
                        <h3 className="cartao-post__titulo">{veiculo.nome} - {veiculo.ano}</h3>
                        <p className="cartao-post__meta">{veiculo.marca}</p>
                    </article>
                </Link>
            })   
        }
        </section>
    )
}

export default ListVeiculos