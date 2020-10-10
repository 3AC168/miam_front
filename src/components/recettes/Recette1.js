import React, { Component } from 'react';
import { Button, Card, CardColumns, Col, Form,  ListGroup, ListGroupItem, Row } from 'react-bootstrap';
//import { Player } from 'video-react';

class Recette1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            userId: 'à récupérer dans la collection user _id',
            recipes: []
        };
    }

    

    render() {
        const {
            picture1 = "../image/tomates_moza_2000.jpg",
            //video1 = "../image/Veloute de champignons.mp4"
        } = this.props;
        return(
            <div className="container-fluid">
                <Row>
                    <Col md={3}><b>Difficulté : level 3</b></Col>
                    <Col md={4}><b>Temps : 10 min</b></Col>
                    <Col md={3}><b>Personnes : </b></Col>
                    <Col md={2}><b>Coût : Bon marché</b></Col>  
                </Row>                
                
                    <CardColumns>
                        {/*<Row md={1}>*/}
                        <Card md={3}>
                            <Card.Body>
                                
                                <Card.Title>Ingrédients</Card.Title>
                                    <Card.Text>                                    
                                        <p>jaune oeufs</p>                                            
                                        <p>mayonnaise</p>                                        
                                        <p>Un peu de persil haché</p> 
                                        <p>sel</p>
                                        <p>Poivre</p>                                    
                                    </Card.Text>                                     
                                    
                                   {/*<iframe width="480" height="270" src={video1} frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>*/}                           
                            </Card.Body>
                            
                        </Card>  
                        <Card.Body>
                        <Button variant="outline-secondary"><a href="/menu">Retour</a></Button>
                        </Card.Body>
                        {/*</Row>*/}                 
                    
                        {/*<Row md={1}>*/}                    
                        <Card md={5}>
                            <Card.Body>
                                <h3>Oeuf mayonnaise</h3>
                                <Card.Title>Préparation</Card.Title>                                    
                                    <Card.Text>                                        
                                        <p>Temps Total : 20 min</p>                                            
                                        <p>Préparation : 10 min</p>
                                        <p>Cuisson : 10 min</p>                                             
                                        <p>1. Faire bouillir de l'eau.</p>
                                        <p>2. Plonger les oeufs dans l'eau pendant 8 minutes.</p>
                                        <p>3. Eplucher l'oeuf et le couper en 2.</p>
                                        <p>4. Mettre la mayonnaise sur l'oeuf.</p> 
                                        <p>5. Ajouter le persil.</p>
                                        <p>6. Assaisonner.</p>                                                                                 
                                    </Card.Text>                                
                            </Card.Body>
                        </Card>
                        <Card.Body className="text-center">
                            <Button variant="outline-secondary"><a href="/recette2">Recette suivant</a></Button>
                        </Card.Body>
                        {/*</Row>*/}
                    
                        <Card>
                            <Card.Img variant="top" img src={picture1} /> 
                            <Card.Body>
                            </Card.Body>
                           {/*} <iframe width="520" height="300" src={video1} frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe> */}                           
                        </Card>                         
                   
                    </CardColumns>
                       
            </div>
        );
    }
}

export default Recette1; 