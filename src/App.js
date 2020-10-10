import React, { Component } from 'react';
// import { Card, Button, Form, ListGroup, Modal, Navbar, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  //Link,
  Switch,
} from 'react-router-dom';
//import axios from 'axios';
//import holderjs from 'holderjs';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Register from './components/Register';
import Welcome from './components/Welcome';
import Login from './components/Login';
import UserInfo from './components/core/UserInfo';
import Utilisateur from './components/core/Utilisateur';
import Menu from './components/menu/Menu';
import Recette1 from './components/recettes/Recette1';
//import IngredientsCount from './components/core/IngredientsCount';
// import Ingredients from './components/form/select/Ingredients';
//import Ingredients from './public/json/ingredients.json'
import Add from './components/ingredients/Add';
//import UserList from './components/core/UserList';


class App extends Component {

  constructor(props){
    super(props); 
   
     
  }

  

  render (){   
    return(
      <Router>                 
          <div className="container-fluid" >
            <Navigation />
              <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    {/* <Route path="/logout" component={Login} /> */}
                    <Route path="/welcome" component={Welcome} />
                    <Route path="/userinfo" component={UserInfo} />
                    <Route path="/add" component={Add}/>
                    {/*<Route path="/userlist" component={UserList} />*/}
                    <Route path="/utilisateur" component={Utilisateur} />  
                    <Route path="/menu" component={Menu} /> 
                    <Route pathe="/recette1" component={Recette1} />   
              </Switch>              
          </div>        
      </Router>
    );
  }
}

export default App;
