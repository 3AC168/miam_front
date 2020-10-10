import React, { Component } from 'react';
import { Button, Card, CardColumns, Col, Form,  ListGroup, ListGroupItem, Row } from 'react-bootstrap';
//import { Player } from 'video-react';

class Recette1 extends Component {
    render() {
        const {
            picture1 = "../image/Veloute de champignons.jpg",
            picture2 = "../image/Curry de poulet tikka masala rapide.jpg",
            picture3 = "../image/Les gaufres de mercredi - V.jpg",
            video1 = "../image/Veloute de champignons.mp4"
        } = this.props;
        return(
            <div className="container-fluid">
                <Row>
                    <Col md={3}><b>Difficulté : Très facile</b></Col>
                    <Col md={4}><b>Temps : 50 min</b></Col>
                    <Col md={3}><b>Personnes : 3</b></Col>
                    <Col md={2}><b>Coût : Bon marché</b></Col>  
                </Row>                
                
                    <CardColumns>
                        {/*<Row md={1}>*/}
                        <Card md={3}>
                            <Card.Body>                                
                                <Card.Title>Ingrédients</Card.Title>
                                    <Card.Text>                                    
                                        <p>3 cuillères à soupe de beurre</p>                                            
                                        <p>1 oignon</p>
                                        <p>250g de champignons de Paris surgelés</p>                                             
                                        <p>2 cuillères à soupe de farine</p>
                                        <p>1/4 litre de bouillon (ou d'eau)</p>
                                        <p>1/2 litre de lait</p>
                                        <p>1 citron</p> 
                                        <p>2 cuillères à soupe de crème fraîche</p>
                                        <p>1 cuillère à soupe de persil haché</p> 
                                        <p>sel</p>
                                        <p>Poivre</p>                                    
                                    </Card.Text>                                     
                                    
                                   {/*<iframe width="480" height="270" src={video1} frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>*/}                           
                            </Card.Body>
                            
                        </Card>  
                        <Card.Body className="text-center">
                        <Button variant="outline-secondary"><a href="/menu">Retour au menu</a></Button>
                        </Card.Body>
                        {/*</Row>*/}                 
                    
                        {/*<Row md={1}>*/}                    
                        <Card md={5}>
                            <Card.Body>
                                <h3>Velouté de champignons</h3>
                                <Card.Title>Préparation</Card.Title>                                    
                                    <Card.Text>                                        
                                        <p>Temps Total : 50 min</p>                                            
                                        <p>Préparation : 10 min</p>
                                        <p>Cuisson : 40 min</p>                                             
                                        <p>1. Faire fondre dans une casserole 3 cuillères à soupe de beurre.</p>
                                        <p>2. Ajouter un petit oignon hachée et les champignons de Paris coupés en tout petits morceaux.</p>
                                        <p>3. Saler, poivrer, saupoudrer d'une cuillère à soupe de persil haché.</p>
                                        <p>4. Remuer bien les champignons dans le beurre chaud. Couvrir et laisser cuire à feu doux 1/4 heure.</p> 
                                        <p>5. Ajouter alors 2 cuillères à soupe de farine en remuant sans cesse. Ajouter 1/4 litre de bouille (ou d'eau) et 1/2 litre de lait.</p>
                                        <p>6. Faire cuire à feu doux en remuant de temeps en temps.</p> 
                                        <p>7. Lorsque le potage commence à bouillir, baisser le feu et laisser cuire à decouvert encore 1/4 d'heure.</p>
                                        <p>8. Quelques minutes avant de servir ajouter le jus d'un citron puis 2 cuillères à soupe de crème fraîche.</p>                                        
                                    </Card.Text>                                
                            </Card.Body>
                        </Card>
                        {/*<Card.Body className="text-center">
                            <Button variant="outline-secondary"><a href="/recette2">Recette suivant</a></Button>
                        </Card.Body>*/}
                        {/*</Row>*/}
                    
                        <Card>
                            <Card.Img variant="top" img src={picture1} /> 
                            <Card.Body>
                            </Card.Body>
                            <iframe width="415" height="239" src={video1} frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>                            
                        </Card>  
                        <Card.Body className="text-center">
                            <Button variant="outline-secondary"><a href="/recette2">Recette suivant</a></Button>
                        </Card.Body>                       
                   
                    </CardColumns>
                       
            </div>
        );
    }
}

export default Recette1; 