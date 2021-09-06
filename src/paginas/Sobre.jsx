import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { busca, deletar } from '../api/api'
import '../assets/css/post.css'

import '../assets/css/componentes/cartao.css'
import { Button, Row, Col, Form, Modal } from 'react-bootstrap'

const Sobre = () => {

  const { id } = useParams()
  const history = useHistory()

  const [veiculo, setVeiculo] = useState({})
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const remover = () => {
    deletar(`/veiculos/${id}`, () => {
      history.push("/")
    })
  }

  useEffect(() => {
    busca(`/veiculos/${id}`, setVeiculo)
  }, [id])

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Sobre Veiculo</h2>
      </div>
      <section className="container flex flex--centro">
        <article className="cartao post">
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextNome">
              <Form.Label column sm="2">
                Nome
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={veiculo.nome} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextDescricao">
              <Form.Label column sm="2">
                Descrição
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={veiculo.descricao} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextMarca">
              <Form.Label column sm="2">
                Marca
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={veiculo.marca} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextMarca">
              <Form.Label column sm="2">
                Ano
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={veiculo.ano} />
              </Col>
          </Form.Group>
          <Row>
            <Col>
              <Button variant="light" onClick={ () => history.push('/')}>
                Voltar
              </Button>
            </Col>
            <Col></Col>
            <Col>
            <Link key={veiculo.id} to={`/editar/${id}`}>
              <Button variant="warning" >Editar</Button>{' '}
            </Link>
              <Button variant="danger" onClick={handleShow} >Remover</Button>
            </Col>
          </Row>
        </article>
      </section>

      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmação</Modal.Title>
        </Modal.Header>
        <Modal.Body>Deseja remover este veiculo!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Não
          </Button>
          <Button variant="primary" onClick={remover}>
            Sim
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  )
}

export default Sobre
