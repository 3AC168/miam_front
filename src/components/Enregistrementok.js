import React from 'react';
import React from 'react';
import Register from './Logout';
import Login from './Profile';
import {Navbar,Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'
class Enregistrementok extends React.Component{
    render(){
        return(
            <Router>
            <div>
                <h1>l'inscription a bien été enregistrée</h1>
              <div> 
                  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Miam</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="ml-auto">
                        <Nav.Link><Link to="/login"> Me déconnecter</Link></Nav.Link>
                        <Nav.Link><Link to="/register">Profile </Link></Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>
              </div>
                <Switch>
                  <Route path="/Login" component={Logout} />
                  <Route path="/register" component={Profile} />
                </Switch>
          </div>
         </Router>
            
        );
    }
}

export default Enregistrementok;