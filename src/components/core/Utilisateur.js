import React, {Component} from 'react';
import  {Button, Form} from 'react-bootstrap';

import SelectIngredients from '../form/select/Ingredients';


class Utilisateur extends Component {
    state = {
        form: true,
    };


    render (){
        return(
            <div>
                
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Nombre de personnes</Form.Label>
                            <Form.Control as="select">
                                <option> 1</option>
                                <option> 2</option>
                                <option> 3</option>
                                <option> 4</option>
                                <option> 5</option>
                                <option> 6</option>
                                <option> 7</option>
                                <option> 8</option>
                                <option>9</option>
                                <option>10</option>
                            </Form.Control>
                    </Form.Group>
                
                <Button variant="info" type="submit">Calculer le menu</Button>
                
                <SelectIngredients />

                <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                    <Form.Label>Agneau</Form.Label>
                        <Form.Control as="select" size="sm" custom>
                        <option>1 kg</option>
                        <option>2 kg</option>
                        </Form.Control>
                    <Form.Label>Boeuf</Form.Label>                                            
                        <Form.Control as="select" size="sm" custom>
                        <option>1 kg</option>
                        <option>2 kg</option>
                    </Form.Control>  
                </Form.Group>

                <Form.File id="formcheck-api-custom" custom>
                    <Form.File.Input isValid />
                    <Form.File.Label data-browse="Button text">
                        Custom file input
                    </Form.File.Label>
                </Form.File>
            </div> 
        );
    }
}

export default Utilisateur; 