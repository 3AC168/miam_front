import React, { Component } from 'react';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import {Navbar,Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

// import Utilisateur from './components/core/Utilisateur';
// import Ingredients from './components/core/Ingredients';


class App extends Component {

  constructor(props){
    super(props); 
    this.state = {
      Utilisateur : []
    };
  }
 

  render (){
    return(
      <Router>
      <div>
     
        <div> 
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="#home">Miam</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link><Link to="/login"> Se connecter</Link></Nav.Link>
                  <Nav.Link><Link to="/register">s'inscrire </Link></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        </div>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
         
          <Home />
    </div>
  </Router>
  


    );
  }
}

export default App;
