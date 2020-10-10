import React, { Component } from 'react';
import { Button, Card, Col, Form,  ListGroup, ListGroupItem } from 'react-bootstrap';

class Menu extends Component {
    render() {
        const {
            picture1 = "../image/tomates_moza_2000.jpg",
            picture2 = "../image/spaghettis_a_la_bolognaise_2000.jpg",
            picture3 = "../image/macedoine_de_fruits_2000.jpg"
        } = this.props;
        return(
            <div>
                <Button variant="outline-secondary"><a href="/utilisateur">Retour</a></Button>
                <div className="justify-md-center">
                    <Col md={{ span: 4, offset: 4 }}>
                    <Card className="text-center" style={{ width: '18rem' }}>
                    <ListGroup className="list-group-flush">
                        <Card.Body>
                            <Card.Title>Menu du jour</Card.Title>                        
                                <ListGroupItem>                        
                                <Card.Text>
                                Tomates Mozza
                                </Card.Text>
                                <Card.Img variant="top" img src={picture1} />
                                <Card.Link href="/recette1">Recette</Card.Link>
                                </ListGroupItem>                       
                        </Card.Body>
                        
                        <Card.Body>  
                                <ListGroupItem>                 
                                <Card.Text>
                                Spaghetti Bolognaise
                                </Card.Text>
                                <Card.Img variant="top" img src={picture2} />
                                <Card.Link href="/recette2">Recette</Card.Link>
                                </ListGroupItem>
                        </Card.Body>
                        
                        <Card.Body>
                                <ListGroupItem>
                                <Card.Text>
                                Salade de fruits
                                </Card.Text>
                                <Card.Img variant="top" img src={picture3} />
                                <Card.Link href="#">Recette</Card.Link>  
                                </ListGroupItem>                      
                        </Card.Body>
                    </ListGroup>
                    </Card>
                    </Col>
                </div>
            </div>
        );
    }
}

export default Menu; 