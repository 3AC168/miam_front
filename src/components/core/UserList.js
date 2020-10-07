import React, {Component} from 'react';
import { Card, Button, Form, ListGroup, Modal } from 'react-bootstrap';
import Ingredients from '../form/select/Ingredients';

class UserList extends Component {
    constructor(props){
        super(props);

        this.state ={
            list:[]
        }

    }

    render() {
        const {
            list
        } = this.state;
        console.log('this.state.list', this.state.list);
        console.log('list[0]', list[0]);
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
            </div>
        );
    }

}

export default UserList;