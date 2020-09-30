import React, { Component } from 'react';
import Home from './components/Home';
// import Utilisateur from './components/core/Utilisateur';
// import Ingredients from './components/core/Ingredients';


class App extends Component {

  constructor(props){
    super(props); 
    this.state = {
      Utilisateur : []
    };
  }
 

  render (){
    return(
    <div>
      <Home />
      <div className="container-fluid" >
        <div className="row">
         
          
          {/* <Utilisateur/>
          <Ingredients/> */}
        </div>
      </div>
    </div>

    );
  }
}

export default App;
