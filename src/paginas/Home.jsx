import React from 'react'
import ListVeiculos from '../components/ListVeiculos'
import ListaStatusVendidos from '../components/ListaStatusVendidos'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const Home = () => {

  const history = useHistory()

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">TINNOVA Veiculos</h2>
        <Button variant="primary" style={{float: "right"}} onClick={() => history.push("/cadastro/novo")}>Cadastrar Veiculo</Button>
      </div>
      <ListaStatusVendidos />
      <ListVeiculos url={'/veiculos'} />
    </main>
  )
}

export default Home
