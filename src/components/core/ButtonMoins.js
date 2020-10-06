import React, { Component } from 'react';

class Button extends Component {

    render (){
        return(
            <div>
                <button>Supprimer{this.props.list.this.removeList}</button>
            </div>
        );
    }
};

export default Button; 