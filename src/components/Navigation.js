import React from 'react';
import Register from './Register';
import Login from './Login';
import {Navbar,Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

class Navigation extends React.Component{
  render(){
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
        </div>
      </Router>
    );
  }

}

export default Navigation;
