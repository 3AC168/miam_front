import React, { Component } from 'react';
import { Card, Button, Form, ListGroup, Modal } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
//import axios from 'axios';
import Navigation from './components/Navigation';
//import Home from './components/Home';
import UserInfo from './components/core/UserInfo';
import Utilisateur from './components/core/Utilisateur';
//import IngredientsCount from './components/core/IngredientsCount';
import Ingredients from './components/form/select/Ingredients';
//import Ingredients from './public/json/ingredients.json'
import Add from './components/ingredients/Add';


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
                  {/*<Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/logout" component={Login} />
                    <Route path="/enregistrer/:email" component={Enregistrer} />*/}
                    <Route path="/userinfo" component={UserInfo} />
                    <Route path="/add" component={Add} />
                    <Route path="/utilisateur" component={Utilisateur} />                    
              </Switch>              
          </div>        
      </Router>
    );
  }
}

export default App;
