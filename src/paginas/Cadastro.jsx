import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import SelectMarcas from "../components/SelectMarcas";
import RadioVendido from "../components/RadioVendido";
import { atualizar, busca, salvar } from "../api/api";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";

const Cadastro = ( props ) => {

    const { id } = useParams()
    const history = useHistory()

    const [veiculo, setVeiculo] = useState({})
    const [apresentaMessagem, setApresentaMensagem] = useState(false)

      useEffect(() => {
          console.log( id )
          if( id ){
              busca(`/veiculos/${id}`, setVeiculo)
          }
      }, [ id ])
    
      const handleSubmit = (event) =>  {
        event.preventDefault()
        console.log(veiculo)
        if( !id ){
            salvar("/veiculos", veiculo, navegar)
        } else {
            atualizar("/veiculos", {...veiculo}, () => setApresentaMensagem(true) )
        }
      }


      const navegar = (data) => {
        history.push("/");
      }

    
        return (
            <main>
                <div className="container">
                    <h2 className="titulo-pagina">TINNOVA Veiculos - { id ? 'Editar' : 'Cadastrar'} </h2>
                </div>
                <Row>
                    <Col>
                        <Alert  variant={'sucess'} show={apresentaMessagem}>
                                Veiculo atualizado com sucesso!
                        </Alert>
                    </Col>
                </Row>
                <section className="container flex flex--centro">
                    <Form onSubmit={(event) => { handleSubmit(event)}}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formBasicNome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" name="nome" value={veiculo.nome} placeholder="Informe o nome" onChange={(event) => {setVeiculo({...veiculo, nome: event.target.value})}}  />
                            </Form.Group>
                            
                            <Form.Group as={Col} controlId="formBasicDescricao">
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control type="text" placeholder="Informe uma descrição" name="descricao" value={veiculo.descricao}  onChange={event => setVeiculo({...veiculo, descricao: event.target.value})}  />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <SelectMarcas as={Col} handleChange={event => setVeiculo({...veiculo, marca: event.target.value})}  valor={veiculo.marca}/>
                            <Form.Group as={Col} controlId="formBasicAno">
                                <Form.Label>Ano</Form.Label>
                                <Form.Control type="number" placeholder="Informe uma descrição" maxLength="4" name="ano" value={veiculo.ano}  onChange={ event => setVeiculo({...veiculo, ano: event.target.value})} />
                            </Form.Group>
                            <RadioVendido as={Col} handleChange={(event)=> setVeiculo({...veiculo, vendido: event.target.checked})} valor={veiculo.vendido} />
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="light" onClick={ () => history.push(id ? `/sobre/${id}` : '/')}>
                                    Voltar
                                </Button>
                            </Col>
                            <Col>
                                <Button variant="primary" type="submit">
                                    Salvar
                                </Button>
                            </Col>
                        </Row>
                        
                    </Form>
                </section>
                
        </main>
        );

}

export default Cadastro