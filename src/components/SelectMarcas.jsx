import React from "react";
import { Form } from "react-bootstrap";

class SelectMarcas extends React.Component {

    constructor(props){
        super(props)
    }

    _atualizarValor(event) {
        this.props.handleChange(event);
    }

    render() { 
        return (
        <Form.Group as={this.props.as} controlId="formBasicDescricao">
            <Form.Label>Marca</Form.Label>
            <Form.Select name="marca" value={this.props.valor} onChange={this._atualizarValor.bind(this)}>
                {
                    ["Toyota", "Volkswagen", "Ford", "Honda", "Hyundai", "Nissan", "Chevrolet"].map(item=> {
                        return <option value={item}>{item}</option>
                    })
                }
            </Form.Select>
        </Form.Group>)
    }
}
 
export default SelectMarcas;