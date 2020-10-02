import React, {Component} from 'react';
import  { Button } from 'react-bootstrap';

class Userinfo extends Component {

    render(){
        return(
            <div>
                <p>Ajouter d'ingrédients :</p>
                <Button variant="outline-secondary">Ajouter des ingrédients</Button>
            </div>
        )
    }
}

export default Userinfo;