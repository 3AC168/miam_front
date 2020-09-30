import React from 'react';
import  { Form } from 'react-bootstrap';

class Ingredients extends React.Component {

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
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Ajouter ou supprimer des ingrédients :</Form.Label>
                    <Form.Control as="select">
                        {this.state.list.map((el) => {
                            return (
                            <option key={el._id}>{el.name}</option>
                            );
                        })}
                    </Form.Control>
            </Form.Group>
        );
    }
}

export default Ingredients;