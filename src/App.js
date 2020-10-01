import React, { Component } from 'react';
//import Home from './components/Home';
import Utilisateur from './components/core/Utilisateur';
import Ingredients from './components/core/Ingredients';
import IngredientsAdd from './components/form/select/IngredientsAdd';
import Navigation from './components/Navigation';


class App extends Component {

  constructor(props){
    super(props); 
    this.state = {
      Utilisateur : [],
      Ingredients : [],
      IngredientsAdd : [],      
    };
  }
 

  render (){
    return(
    <div>
      {/*<Home />*/}
      <div className="container-fluid" >
          <Navigation />
          {/*<IngredientsAdd />*/}      
        
          
          {/*<Utilisateur/>*/}          
          <Ingredients/>
      </div>
    </div>

    );
  }
}

export default App;
