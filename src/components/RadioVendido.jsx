import React from "react"
import { Form } from "react-bootstrap"


class RadioVendido extends React.Component {
    constructor(props){
        super(props)
    }

    _atualizar(event) {
        this.props.handleChange(event);
    }

    render() { 
        return  (
            <Form.Group as={this.props.as} controlId="formBasicCheckbox">
                <br />
                <Form.Check 
                onChange={this._atualizar.bind(this)}
                defaultChecked={this.props.valor}
                type="switch"
                id="custom-switch"
                label="Vendido"
                name="vendido"
            />
        </Form.Group>
        )
    }
}
export default RadioVendido;