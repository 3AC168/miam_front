import React, {Component} from 'react';
import  {Button, Form, FormControl, InputGroup} from 'react-bootstrap';
import UserInfo from './UserInfo';
import Quantities from './Quantities';


class Utilisateur extends Component {
    constructor(props){
        super(props);
        this.state = {
            form: true,
            input: ''
        };
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onChangeInput = (evt) => {
        console.log('cmp/Add#onChangeInput evt.target.value', evt.target.value);
        const input = evt.target.value
        this.setState({
          input
        });        
    }
    /*
    componentDidMount(){
        Quantities / 4 * inputValue
    }*/

    render (){
        return(
            <div>               

                <Form.Label>Nombre de personnes :</Form.Label>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Nombre en chiffres"
                        aria-label="Nombre en chiffres"
                        aria-describedby="basic-addon2" onChange={this.onChangeInput}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" type="submit">Personne(s)</Button>                    
                    </InputGroup.Append>
                </InputGroup>
                
                <Button variant="link" type="submit"><a href="/menu">Calculer le menu</a></Button>

                <hr /> 

                <p>Ajouter d'ingrédients :</p>
                <Button variant="outline-secondary"><a href="/add">Ajouter des ingrédients</a></Button>
                {/*<UserInfo />*/}             

            </div> 
        );
    }
}

export default Utilisateur; 