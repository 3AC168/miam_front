import React, { Component } from 'react';
import { Card, Button, Form, FormControl, InputGroup, ListGroup, Modal } from 'react-bootstrap';
//import IngredientsCount from '../core/IngredientsCount';
//import Ingredients from '../form/select/Ingredients'; 
import Message from '../core/Message';

class Add extends Component {
    constructor(props){
        super(props);
          this.state = {
            list: [],  
            input: '',
            unity: ''
        }
        
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onChangeUnity = this.onChangeUnity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);  
    }
        
    
    
    onChangeInput = (evt) => {
        console.log('cmp/Add#onChangeInput evt.target.value', evt.target.value);
        const input = evt.target.value
        this.setState({
          input
        });
        
    }
    
    onChangeUnity = (evt) => {
        console.log('cmp/Add#onChangeUnity evt.target.value', evt.target.value);
        const unity = evt.target.value
        this.setState({
        unity
        });
        console.log('Unity', this.state.unity); 
    }
      
    onSubmit() {
        console.log('cmp/Add#onSubmit');
        console.log('cmp/Add#onSubmit this.state', this.state);
        const {
            input,
            unity
        } =this.state;
        
        this.props.onSubmit(input, unity)
    }
      

     //Pour recupérer la liste des ingrédients en JSON venu de back-end (base de donnée)
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

    render() {
        const {
            list,
            unity
        } = this.state;
        //console.log('this.state.list', this.state.list);
        //console.log('list[0]', list[0]);
        return(
            <div className="container-fluid">
                {/*Pour afficher les ingrédients séléctionnés*/}
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

                {/*Partie <Ingredients />*/}
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Sélectionner des ingrédients :</Form.Label>
                        <Form.Control as="select" onChange={this.onChangeInput}> 
                            {this.state.list.map((el) => {
                                return (
                                <option key={el._id}>{el.name}</option>
                                );
                            })}
                        </Form.Control>                       
                </Form.Group>  

                {/*Partie <Quantities />*/}
                <InputGroup className="mb-3">
                <FormControl
                placeholder="Quantities en chiffres"
                aria-label="Quantities en chiffres"
                aria-describedby="basic-addon2" onChange={this.onChangeInput}
                />
                <InputGroup.Append onChange={this.onChangUnity}>
                <Button variant="outline-secondary" type="select" onChange={this.onChangeUnity}>Kilo</Button>
                <Button variant="outline-secondary" type="submit">Litre</Button>
                <Button variant="outline-secondary" type="submit">Unité</Button>
                </InputGroup.Append>
                </InputGroup>  
 
                
                {/*Partie <IngredientsCount />*/}
                <Card.Body className="text-center">                        
                    <Button variant="success" onClick = {this.onSubmit}>Ajouter</Button> 
                    <Button variant="danger" removeSelected = {this.removeSelected}>Supprimer</Button>
                </Card.Body>

                {/*Partie <Message />*/}
                <Card.Body className="text-center">   
                <Message />
                </Card.Body>
            </div>

        );
    }
}

export default Add;
