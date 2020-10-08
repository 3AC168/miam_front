import React, {Component} from 'react';
import { Card, Button, Form, ListGroup, Modal } from 'react-bootstrap';
import Ingredients from '../form/select/Ingredients';


class Userinfo extends Component {
    constructor(props){
        super(props);
        {/*
        this.state = {
            list: [{
                ingredientId: 'abc',
                ingredientName: 'Poulet',
                unity: 'unité',
                quantity: 1
            }, {
                ingredientId: 'def',
                ingredientName: 'Lait de Coco',
                unity: 'litre',
                quantity: 1
            }, {
                ingredientId: 'ghi',
                ingredientName: 'Carotte',
                unity: 'kilo',
                quantity: 1
            }]
        };*/}
    }
    
    logout(){
        this.props.history.push('/add');
    }
    render(){ 
        {/*const {
            list
        } = this.state;
        console.log('this.state.list', this.state.list);
        console.log('list[0]', list[0]);*/}
        return(
            <div className="container-fluid">
                {/*<Card style={{ width: '18rem' }}>
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
                    </Card>*/}
                {/*<Ingredients />*/}
                <p>Ajouter d'ingrédients :</p>
                <Button variant="outline-secondary" onClick={this.logout.bind(this)}>Ajouter des ingrédients</Button>
                {/*<Button variant="outline-secondary"><a href="/add">Ajouter des ingrédients</a></Button>*/}
            </div>
        )
    }
}

export default Userinfo;