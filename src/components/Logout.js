import React from 'react';
// import Register from './Register';
import Login from './Login';
// import UserInfo from '../components/core/UserInfo';
import {Navbar,Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

class Navigation extends React.Component{
    logout(){
        this.props.history.push('/logout');
    }
  render(){
    const {email}=this.props.match.params;
    return(
      <Router>
          <div>
            <div> 
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <Navbar.Brand href="#home">Miam</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                      <Nav.Link><Link to="/ Se déconnecter">
                           <button onClick={this.logout.bind(this)}>Se déconnecter</button>
                           </Link></Nav.Link>
                      <Nav.Link><Link to="/profile">Profile </Link></Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>
              <Switch>
                <Route path="/se déconnecter" component={Login} />
                {/* <Route path="/profil" component={Profil} /> */}

              </Switch>
        </div>
      </Router>
    );
  }

}

export default Navigation;
