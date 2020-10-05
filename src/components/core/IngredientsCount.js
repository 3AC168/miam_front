import React, { Component } from 'react';
import { Card, Button, Form, ListGroup, Modal } from 'react-bootstrap';
import Ingredients from '../form/select/Ingredients';
import Quantities from './Quantities';

class IngredientsCount extends Component {
    
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
                {/*<Card style={{ width: '18rem' }}>
                <Card.Header>Liste des ingrédients :</Card.Header>
                <ListGroup variant="flush">
                    
                </ListGroup>
                </Card>*/}

                {/*<hr />*/} 

                <Quantities />
                
                <Card.Body className="text-center">                        
                    <Button variant="success" onClick = {this.props.addListFn}>Ajouter</Button> 
                    <Button variant="danger" onClick = {this.props.removeListFn}>Supprimer</Button>
                </Card.Body>
                
                
                
                                

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

export default IngredientsCount;

