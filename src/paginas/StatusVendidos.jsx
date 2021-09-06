import React from "react"
import { Button } from "react-bootstrap"
import { Route, useParams } from "react-router"
import { useHistory, useRouteMatch } from "react-router-dom"
import ListaStatusVendidos from "../components/ListaStatusVendidos"
import ListVeiculos from "../components/ListVeiculos"

const StatusVendidos = () => {

    const { status } = useParams()
    const { path } = useRouteMatch()

    const history = useHistory()

    return (
        <>
            <div className="container">
                <h2 className="titulo-pagina">TINNOVA Veiculos</h2>
                <Button variant="primary" style={{float: "right"}} onClick={() => history.push("/cadastro")}>Cadastrar Veiculo</Button>
            </div>

            <ListaStatusVendidos />
            <Route exact path={`${path}/`}>
                <ListVeiculos url={`/veiculos/filter?vendido=${status}`}/>
            </Route>
        </>
    )
}

export default StatusVendidos