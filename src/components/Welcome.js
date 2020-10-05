import React from 'react';
// import Navigation from './Navigation';

class Welcome extends React.Component{
    logout(){
        this.props.history.push('/logout');
    }
    render(){
        const {email}=this.props.match.params;
        return(
           
            <div> 
              {/* <Navigation /> */}
              <h1>Welcome  {email}</h1>
              <h1> votr inscription a  bien été enregistrée</h1>
              <button onClick={this.logout.bind(this)}>Utilisateur</button>
           </div>
          
            
        );
    }
}

export default Welcome;