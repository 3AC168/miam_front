import React from 'react';
// import Register from './profile';
// import Login from './Logout';
import {Navbar,Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'
class Navlogout extends React.Component{
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
                      <Nav.Link> <Link to="/logout"> Se déconnecter</Link></Nav.Link>
                      <Nav.Link ><Link to="/profile">Profile </Link></Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>
              <Switch>
                <Route path="/logout" component={Logout} />
                <Route path="/profile" component={Profiler} />
              </Switch>
        </div>
      </Router>
    );
  }

}

export default Navlogout;
