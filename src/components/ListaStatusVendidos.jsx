import React, { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import '../assets/css/blog.css'

const ListaStatusVendidos = () => {

    const [status, setStatus] = useState( [ ] )

    useEffect(() => {
        setStatus([{descricao: 'Vendido', status: true}, {descricao: 'Não Vendido', status: false}])
    }, [status])

    return (
        <ul className="lista-categorias container flex">
            {
                status.map((st, index) => {
                    return <Link key={index} to={`/veiculos/vendidos/${st.status}`} >
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${st.status}`}>
                            {st.descricao}
                        </li>
                    </Link>
                })
            }
        </ul>
    )
}

export default ListaStatusVendidos