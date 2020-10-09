import React, { Component } from 'react';
import { Card, Button, Form, ListGroup, Modal,Container,Col,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import IngredientsCount from '../core/IngredientsCount';
import Ingredients from '../form/select/Ingredients'; 
import Message from '../core/Message';

class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            ingredient:'',
            quantity:'',
            // userId: '5f7f11d422b51e2534008c8d',
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
            <div className="container-fluid"className= "bg-primary text-white m-5">
                <Container >
                    <Row xs={1} md={2}>
                        <Col>
                           <Form method="post" onSubmit={this.handleSubmit} >
                                    <Ingredients onChange={this.handleChangeIngredient}/>
                                    <Form.Group className="mb-4 mt-4">
                                        <Form.Label className="font-weight-bolder text-dark">Quantités :</Form.Label>
                                        <Form.Control className="font-weight-bolder text-dark"
                                            placeholder="Quantities en chiffres"
                                            aria-label="Quantities en chiffres"
                                            name="quantity"
                                            aria-describedby="basic-addon2"
                                            value={this.state.quantity} onChange={this.handleChangeQuantity} />
                                    </Form.Group>
                                        <Button variant="primary"  className="bg-success text-dark b-3 font-weight-bolder ml-3 " onClick={this.addListIngredient}>Ajouter</Button>
                                    {/* <Button variant="primary" onSubmit={this.handleSubmit}>Envoyer</Button> */}
                            </Form>
                        </Col>
                        <Col>
                            <ul className="list-group mb-4 mt-4" >
                                {list.map((ingredient, key) => {
                                            // console.log('ingredient', ingredient)
                                        return (
                                            
                                          
                                            <table>
                                                
                                            <li key={key} class="list-group-item text-dark">
                                            <tr>
                                                
                                                <th><td className="font-weight-bolder text-dark">{ingredient.ingredient.name}</td></th>
                                                <th><td className="font-weight-bolder text-dark">{ingredient.quantity}</td></th>
                                                <th><td className="font-weight-bolder text-dark"> {ingredient.ingredient.unity} </td></th>
                                                <th><td className="font-weight-bolder text-dark"><Button onClick={this.handleDelete}>X</Button></td></th>
                                                </tr>
                                            </li>
                                            
                                            </table>
                                            
    
                                        
                                        
                                        );
                                })}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default Add;
