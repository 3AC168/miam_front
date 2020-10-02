import React, { Component } from 'react';
import IngredientsCount from '../core/IngredientsCount';
import Ingredients from '../form/select/Ingredients'; 

class Add extends Component {


    render() {
        return(
            <div>
                <Ingredients />
                <IngredientsCount />
            </div>

        );
    }
}

export default Add;
