import React from 'react'
import './assets/css/base/base.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import StatusVendidos from './paginas/StatusVendidos'
import Cadastro from './paginas/Cadastro'


function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/sobre/:id">
        <Sobre />
      </Route>
      <Route path="/veiculos/vendidos/:status">
        <StatusVendidos />
      </Route>
      <Route path="/cadastro">
        <Cadastro />
      </Route>
      <Route path="/editar/:id">
        <Cadastro />
      </Route>
    </Switch>
  </Router>
   )
}

export default App
