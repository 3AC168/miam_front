import React, { Component } from 'react';
import { Card, Button, FormControl, InputGroup } from 'react-bootstrap';
import Ingredients from '../form/select/Ingredients';
//import Quantities from './Quantities';

class IngredientsCount extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],  
            ingredientName: '',
            input: '',
            unity: 0
        }

        this.onChangeInput = this.onChangeInput.bind(this);
        this.onChangeUnity = this.onChangeUnity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);  
    }
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
    
    
    onChangeInput = (evt) => {
        const input = evt.target.value
        this.setState({
          input
        });
        console.log('input', this.state.input);        
      }
    
    onChangeUnity = (evt) => {
          const unity = evt.target.value
          this.setState({
          unity
        });
        console.log('Unity', this.state.unity);   
      }
      
      onSubmit() {
          const {
              input,
              unity
          } =this.state;
          console.log();
          this.props.onSubmit(input, unity)
      } 
      
  

    render() {
        return(
            <div>
                {/*<Card style={{ width: '18rem' }}>
                <Card.Header>Liste des ingrédients :</Card.Header>
                <ListGroup variant="flush">
                    
                </ListGroup>
                </Card>*/}

                {/*<hr />*/} 

                {/*<Quantities />*/}
                <InputGroup className="mb-3">
                <FormControl
                placeholder="Quantities en chiffres"
                aria-label="Quantities en chiffres"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                <Button variant="outline-secondary" type="submit">Kilo</Button>
                <Button variant="outline-secondary" type="submit">Litre</Button>
                <Button variant="outline-secondary" type="submit">Unité</Button>
                </InputGroup.Append>
                </InputGroup>             
                {/*
                <input FormControl
                    placeholder="Quantities en chiffres"
                onChange={this.onChangeInput} /> */}

                <Card.Body className="text-center">                        
                    <Button variant="success" onClick = {this.props.onSubmit}>Ajouter</Button> 
                    <Button variant="danger" onClick = {this.props.removeListFn}>Supprimer</Button>
                </Card.Body>             
                
                                                

            </div>
        );
    }
}

export default IngredientsCount;

