import React from 'react';
import { Card, Button, Form, ListGroup, Modal } from 'react-bootstrap';
import Quantities from '../../core/Quantities'; 



class Ingredients extends React.Component {

    state = {
        list: []
    };

    componentDidMount() {
        const url = 'http://localhost:3003/ingredients';
        fetch(url)
            .then(res => res.json())
            .then((json) => {
                console.log(json);
                this.setState({
                    list: json.data
                })
            })
    }

    render() {
        return ( 
            <div>
                
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Sélectionner des ingrédients :</Form.Label>
                        <Form.Control as="select">
                            {this.state.list.map((el) => {
                                return (
                                <option key={el._id}>{el.name}</option>
                                );
                            })}
                        </Form.Control>                         
                 
                </Form.Group>                
                
                
                
                

               {/*<Button variant="primary" onClick={this.handleShow}>
                    Launch demo modal
                 </Button>*/}

                {/*<Modal show={this.state.show} onHide={this.state.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>*/}
            </div>
        );
    }
}

export default Ingredients;