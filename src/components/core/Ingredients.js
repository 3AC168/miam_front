import React, { Component } from 'react';
import { Card, Button, Form, ListGroup, Modal } from 'react-bootstrap';
import IngredientsAdd from '../form/select/IngredientsAdd';
//import Quantities from './Quantities';

class Ingredients extends Component {
    state = {
        form: true,
        show: false, // Alerte show
        handleClose: false,
        handleShow: true
    };

    handleClose() {
        this.setState({
            handleClose: true
        });
    };
    handleShow() {
        this.setState({
            handleShow: false   
        });
    };

    render() {
        return(
            <div>
                <Card style={{ width: '18rem' }}>
                <Card.Header>Ingrédients restants</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Poulet : 1 pièce</ListGroup.Item>
                    <ListGroup.Item>Carotte : 1 kg</ListGroup.Item>
                    <ListGroup.Item>Oignon : 1 kg</ListGroup.Item>
                </ListGroup>
                </Card>

                <hr /> 

                <IngredientsAdd />

                {/*<Card style={{ width: '18rem' }}>
                <Card.Header>Ingrédients à ajouter : </Card.Header>
                <ListGroup variant="flush">
                    <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="Large text" />
                        <br />
                        <Form.Control type="text" placeholder="Normal text" />
                        <br />
                        <Form.Control size="sm" type="text" placeholder="Small text" />
                    </Form.Group>
                </ListGroup>
                </Card>

                <Button variant="info" type="submit">Ajouter</Button>*/}
                                

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

