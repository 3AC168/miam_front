import React from 'react';
import Navigation from './Navigation';

class Enregistrer extends React.Component{
    logout(){
        this.props.history.push('/logout');
    }
    render(){
        const {email}=this.props.match.params;
        return(
           
            <div> 
              <Navigation />
              <h1> votr inscription a  bien été enregistrée</h1>
              <h1>Welcome  {email}</h1>
              <button onClick={this.logout.bind(this)}>Logout</button>
           </div>
          
            
        );
    }
}

export default Enregistrer;