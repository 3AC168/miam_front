import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from './Navigation';

class Enregistrementok extends React.Component{
    render(){
        return(
            
            <div> 
              <Navigation />
              <h1> votr inscription a  bien été enregistrée</h1>
              <Link to="Login">Login</Link>
           </div>
       
            
        );
    }
}

export default Enregistrementok;