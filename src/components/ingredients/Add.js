import React, { Component } from 'react';
<<<<<<< HEAD
import { Card, Button, Form, ListGroup, Modal,Container,Col,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import IngredientsCount from '../core/IngredientsCount';
import Ingredients from '../form/select/Ingredients'; 
=======
import { Card, Button, Form, FormControl, InputGroup, ListGroup, Modal } from 'react-bootstrap';
//import IngredientsCount from '../core/IngredientsCount';
//import Ingredients from '../form/select/Ingredients'; 
>>>>>>> f372796210397667aff00e1ac0b88136cd885e29
import Message from '../core/Message';

class Add extends Component {
    constructor(props){
        super(props);
<<<<<<< HEAD
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
=======
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
>>>>>>> f372796210397667aff00e1ac0b88136cd885e29

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
            list,
            unity
        } = this.state;
        return(
<<<<<<< HEAD
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
=======
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
>>>>>>> f372796210397667aff00e1ac0b88136cd885e29
            </div>

        );
    }
}

export default Add;
