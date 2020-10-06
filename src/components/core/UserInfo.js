import React, {Component} from 'react';
import  { Button } from 'react-bootstrap';

class Userinfo extends Component {
    logout(){
        this.props.history.push('/utilisateur');
    }
    render(){
        return(
            <div>
                <p>Ajouter d'ingrédients :</p>
                <Button variant="outline-secondary" onClick={this.logout.bind(this)}>Ajouter des ingrédients</Button>
            </div>
        )
    }
}

export default Userinfo;