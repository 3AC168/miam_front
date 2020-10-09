import React from 'react';
import { Card, Button, Form, ListGroup, Modal } from 'react-bootstrap';
import Quantities from '../../core/Quantities'; 



class Ingredients extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: []
        };
        this.onChange=this.onChange.bind(this);
    }

   

    componentDidMount() {
        const url = 'http://localhost:3003/ingredients'
        fetch(url)
            .then(res => res.json())
            .then((json) => {
                console.log(json.data);
                this.setState({
                    list: json.data
                })
            })
    }

    onChange(evt) {
        console.log('Ingredients#onChange evt', evt);
        console.log('Ingredients#onChange evt', evt.target.value);

        const item = this.state.list.find(ingredient => {
            return ingredient._id === evt.target.value;
        });

        console.log('Ingredients#onChange item', item);
        this.props.onChange(item);


    }

    render() {
        return ( 
            <div>
                
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label className="font-weight-bolder text-dark">Sélectionner des ingrédients :</Form.Label>
                        <Form.Control as="select" onChange={this.onChange}>
                            <option></option>
                            {this.state.list.map((el,key) => {
                                return (
                                <option key={key} value={el._id} className="font-weight-bolder text-dark">{el.name}</option>
                                );
                            })}
                        </Form.Control>                         
                 
                </Form.Group>              
                
                
                
                

            </div>
        );
    }
}

export default Ingredients;