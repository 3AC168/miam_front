import React, { Component } from 'react';
import  {Button, FormControl, InputGroup} from 'react-bootstrap';

class Quantities extends Component {
    state = {
        form : true
    }; 

    render() {
        return(
            <div>
                
                <InputGroup className="mb-3">
                <FormControl
                placeholder="Quantities en chiffres"
                aria-label="Quantities en chiffres"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                <Button variant="outline-secondary" type="submit">Kilo</Button>
                <Button variant="outline-secondary" type="submit">Litre</Button>
                <Button variant="outline-secondary" type="submit">Unité</Button>
                </InputGroup.Append>
                </InputGroup>

            </div>
        );
    }
}

export default Quantities;
