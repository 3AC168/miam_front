import React, { Component } from 'react';
import { Card, Button, Form, ListGroup, Modal } from 'react-bootstrap';
import IngredientsCount from '../core/IngredientsCount';
import Ingredients from '../form/select/Ingredients'; 
import Message from '../core/Message';

class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            ingredient:'',
            quantity:'',
            username:'Batman',
            unity:'',
            list: [],  
        }
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
        this.handleChangeIngredient = this.handleChangeIngredient .bind(this);
        this.handleChangeUnity=this.handleChangeUnity.bind(this);
        // this.handleSubmit=this.handleSubmit.bind(this);
        this.addListIngredient=this.addListIngredient.bind(this);
        this.handleDelete= this.handleDelete.bind(this);
    }
    
    handleChangeQuantity(event){
        // event.preventDefault();
        console.log(event.target.value)
        this.setState({
            quantity:event.target.value,
        })
      }

      handleChangeIngredient(ingredient){
        // event.preventDefault();
        console.log("handleChangeIngredient : ",ingredient)
        this.setState({
            ingredient:ingredient,
        })
      }

     handleChangeUnity(event){
        //  console.log(event.target.value);
         this.setState({
             unity:event.target.value,
         })
     }
      
    //   handleSubmit(event) {
    //     //   console.log('quantity,username,ingredient',quantity,username,ingredient)
    //     event.preventDefault();
    //     console.log(this.state.quantity,this.state.ingredient);
    //     const quantity=this.state.quantity;
    //     // const username=this.state.username;
    //    const ingredient=this.state.ingredient;
    //     fetch('http://localhost:3003/listIngredients', {quantity,ingredient})
    //     .then(res => res.json())
    //     .then((json) => {
    //         console.log(json.success);
    //       });
        
    //   }
       addListIngredient(){
            const { quantity, ingredient,unity, username }=this.state;
            const list = this.state.list;
            const ingredientFetch={
                quantity,
                ingredient: ingredient.name,
                username

            }
            const ingredientObject = {
                quantity,
                ingredient
            };

            list.push(ingredientObject);

            this.setState({
                list
            });

            console.log('add list ingredient : ', ingredientFetch);


            // list.push(ingredientObject)
            // this.setState({
            //     list:list
            // });
        
        
            // console.log(this.state.quantity,this.state.ingredient);
            // const quantity=this.state.quantity;
            // const username=this.state.username;
            // const ingredient=this.state.ingredient;
            fetch('http://localhost:3003/listIngredients', {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(ingredientFetch)
            })
            .then(res => res.json())
            .then((json) => {
                console.log(json.success);
                // if (err) {
                // console.log('err', err);
                // return;
            });

        
            

       }
       handleDelete=(item)=>{
            console.log(item)
            const list=Object.assign([],this.state.list);
            list.splice(item,1);
            this.setState({list:list});
        }
           
    render() {
        // console.log("this.state.list#",this.state.list);
        const {
            list
        } = this.state;
        return(
            <div className="container-fluid">
                {/* affichage des lists */}
                <ul>
                    {list.map((ingredient, key) => {
                        // console.log('ingredient', ingredient)
                        return (
                            <li key={key}>
                                {ingredient.ingredient.name} X {ingredient.quantity}  {ingredient.ingredient.unity} 
                                <Button onClick={this.handleDelete}>X</Button>
                            </li>
                        );
                    })}
                </ul>
                {/* formulaire avec la lsits des ingredients */}
                <Form method="post" onSubmit={this.handleSubmit}>
                <Ingredients onChange={this.handleChangeIngredient} />
                <Form.Group>
                    <Form.Label>Quantités :</Form.Label>
                    <Form.Control
                        placeholder="Quantities en chiffres"
                        aria-label="Quantities en chiffres"
                        name="quantity"
                        aria-describedby="basic-addon2"
                        value={this.state.quantity} onChange={this.handleChangeQuantity} />
                    <Form.Label>Unité :</Form.Label>
                    <Form.Control
                        placeholder="unité"
                        aria-label="unité"
                        name="unité"
                        aria-describedby="basic-addon2"
                        value={this.state.unity} onChange={this.handleChangeUnity}
                        as="select" custom >
                        <option>Killo</option>
                        <option>Littre</option>
                    </Form.Control>
                    
                </Form.Group>
                <Button variant="primary" onClick={this.addListIngredient}>Ajouter</Button>
                {/* <Button variant="primary" onSubmit={this.handleSubmit}>Envoyer</Button> */}
            </Form>
            </div>

        );
    }
}

export default Add;
