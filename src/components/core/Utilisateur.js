import React, {Component} from 'react';
import  {Button, Form, FormControl, InputGroup} from 'react-bootstrap';
//import IngredientsAdd from '../form/select/IngredientsAdd';

import SelectIngredientsMoin from '../form/select/IngredientsMoin'; 
import Quantities from './Quantities';
//import Navig from './components/form/select/navig';
//import Navig from '../Navig';


class Utilisateur extends Component {
    state = {
        form: true,
    };


    render (){
        return(
            <div>
                {/* <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Nombre de personnes :</Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Form.Control>
                    </Form.Group> */}

                    <Form.Label>Nombre de personnes :</Form.Label>
                    <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Nombre en chiffres"
                    aria-label="Nombre en chiffres"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button variant="outline-secondary" type="submit">Personne(s)</Button>                    
                    </InputGroup.Append>
                    </InputGroup>
                
                <Button variant="info" type="submit">Calculer le menu</Button>

                <hr />
                
                <SelectIngredientsMoin />

                <Quantities />
                
                {/*<Form.Group controlId="exampleForm.SelectCustomSizeSm">
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
                </Form.Group>*/}
                
            </div> 
        );
    }
}

export default Utilisateur; 