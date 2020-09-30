import React from 'react';
import {Navbar,Nav } from 'react-bootstrap';
class Navig extends React.Component{
  render(){
    return(
      <div>
        <div> 
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Miam</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr">
                <Nav.Link href="#Login">Se connecter</Nav.Link>
                <Nav.Link eventKey={2} href="/Register.js">
                    s'inscrire
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>

          </Navbar>
        </div>
        
    </div>
    );
  }

}

export default Navig;
