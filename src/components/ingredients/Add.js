import React, { Component } from 'react';
import { Card, Button, Form, ListGroup, Modal } from 'react-bootstrap';
import IngredientsCount from '../core/IngredientsCount';
import Ingredients from '../form/select/Ingredients'; 
import Message from '../core/Message';

class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],  
            input: '',
            unity: ''

        }
    //    this.addList = this.addList.blind(this);
    //    this.removeList = this.removeList.blind(this);
        /*
        this.state = {
            list: [{
                ingredientId: 'abc',
                ingredientName: 'Agneau',
                unity: 'unité',
                quantity: 1
            }, {
                ingredientId: 'def',
                ingredientName: 'Boeuf',
                unity: 'litre',
                quantity: 1
            }, {
                ingredientId: 'ghi',
                ingredientName: 'Porc',
                unity: 'kilo',
                quantity: 1
            }]
        }; */
    }
/*
    onChangeInput = (evt) => {
        const input = evt.target.value
        this.setState({
          input
        });
        
      }
    
    onChangeUnity = (evt) => {
          const unity = evt.target.value
          this.setState({
          unity
        });
        
      }*/
    

    render() {
        const {
            list
        } = this.state;
        //console.log('this.state.list', this.state.list);
        //console.log('list[0]', list[0]);
        return(
            <div className="container-fluid">
                <Card style={{ width: '18rem' }}>
                <Card.Header>Liste des ingrédients :</Card.Header>
                    <ListGroup variant="flush">
                    <ul>
                        {list.map((list, id) => {
                            return (
                                <li key = {list.id}>
                                {list.ingredientName} : {list.quantity}  {list.unity} 
                                </li>
                            );
                        })}
                    </ul>
                    </ListGroup>
                    </Card>
                <Ingredients />
                <IngredientsCount />
                {/*<Button variant="outline-secondary"><a href="/utilisateur">Suivant</a></Button>*/}

                <Card.Body className="text-center">   
                <Message />
                </Card.Body>
            </div>

        );
    }
}

export default Add;
