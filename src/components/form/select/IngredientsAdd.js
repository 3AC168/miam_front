import React from 'react';
import  { Form } from 'react-bootstrap';
import Quantities from '../../core/Quantities';
//import Navig from './components/form/select/navig';

class IngredientsAdd extends React.Component {

    state = {
        list: []
    };

    componentDidMount() {
        const url = '/json/ingredients.json';
        fetch(url)
            .then(res => res.json())
            .then((json) => {
                this.setState({
                    list: json.data
                })
            })
    }

    render() {
        return ( 
            <div>
                
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Ajouter des ingrédients :</Form.Label>
                        <Form.Control as="select">
                            {this.state.list.map((el) => {
                                return (
                                <option key={el._id}>{el.name}</option>
                                );
                            })}
                        </Form.Control>                         
                 
                </Form.Group>                
                <Quantities />

                {/*<Form.Label>Supprimer des ingrédients :</Form.Label>
                        <Form.Control button="submit">
                            {this.state.list.map((el) => {
                                return (
                                <option key={el._id}>{el.name}</option>
                                );
                            })}
                        </Form.Control>*/}
            </div>
        );
    }
}

export default IngredientsAdd;