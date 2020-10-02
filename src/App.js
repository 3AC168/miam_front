import React, { Component } from 'react';
import { Card, Button, Form, ListGroup, Modal } from 'react-bootstrap';
//import Home from './components/Home';
import UserInfo from './components/core/UserInfo';
import Utilisateur from './components/core/Utilisateur';
//import IngredientsCount from './components/core/IngredientsCount';
//import Ingredients from './components/form/select/Ingredients';
import Add from './components/ingredients/Add';
import Navigation from './components/Navigation';


class App extends Component {

  constructor(props){
    super(props); 
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
    };      
     
    
  }
 

  render (){
    {/*return <div>list</div>;*/}
    const {
      list
    } = this.state;
    console.log('this.state.list', this.state.list);
    console.log('list[0]', list[0]);
    return(
    <div>
      {/*<Home />*/}
      <div className="container-fluid" >
          <Navigation />
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
          <Add />
          {/*<Add />
          <Add/>*/}
          {/*<UserInfo />*/}
          {/*<Utilisateur />*/}
      </div>
    </div>

    );
  }
}

export default App;
