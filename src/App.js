import React, { Component } from 'react';
import  Home  from './components/Home';
import Register from './components/Register';
import Welcome from './components/Welcome';
import Login from './components/Login';
// import {Navbar,Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'
// import axios from 'axios';
import { Card,ListGroup } from 'react-bootstrap';
import UserInfo from './components/core/UserInfo';
import Utilisateur from './components/core/Utilisateur';
//import IngredientsCount from './components/core/IngredientsCount';
import Ingredients from './components/form/select/Ingredients';
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
        <Router>
          <div>
            <div className="container-fluid" >
                <Navigation />
            </div>
                <Switch>
                  <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/utilisateur" component={Utilisateur} />
                    <Route path="/welcome" component={Welcome } />
                    <Route path="/userinfo" component={UserInfo} />
                    <Route path="/ingredients" component={Ingredients} />
                    {/* <Route path="/logout" component={Register} /> */}
                    <Route path="/add" component={Add} />
                </Switch>
          
          </div>
        </Router>
  


    );
  }
}

export default App;
