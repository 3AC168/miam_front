import React from 'react';
import Register from './Register';
import Login from './Login';
import UserInfo from '../components/core/UserInfo';
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
                  <Navbar.Brand href="#home">
                  <img 
                  alt=""
                  src="../image/miam.png"
                  width="35"
                  height="35"
                  className="d-inline-block align-top"
                  />{' '}
                  Miam</Navbar.Brand>                  
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                      <img 
                      alt=""
                      src="../image/superwoman.jpg"
                      width="35"
                      height="40"
                      className="d-inline-block align-top"
                      />{' '}
                      <Nav.Link><Link to="/login"> Se connecter</Link></Nav.Link>
                      <Nav.Link><Link to="/register">s'inscrire </Link></Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>
          </div>
      </Router>
    );
  }

}

export default Navigation;
