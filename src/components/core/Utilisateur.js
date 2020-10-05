import React, {Component} from 'react';
import  {Button, Form, FormControl, InputGroup} from 'react-bootstrap';
import UserInfo from './UserInfo';
import Quantities from './Quantities';


class Utilisateur extends Component {
    state = {
        form: true,
    };


    render (){
        return(
            <div>
               

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

                <UserInfo />                
                             
               
                
            </div> 
        );
    }
}

export default Utilisateur; 