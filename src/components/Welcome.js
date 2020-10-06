import React from 'react';
// import Logout from './Logout';

class Welcome extends React.Component{
    logout(){
        this.props.history.push('/login');
    }
    render(){
        // const {email}=this.props.match.params;
        return(
           
            <div> 
                {/* <Logout /> */}
              {/* <Navigation /> */}
              {/* <h1>Welcome  {email}</h1> */}
              <h1> votr inscription a  bien été enregistrée</h1>
              <button onClick={this.logout.bind(this)}>Login</button>
           </div>
          
            
        );
    }
}

export default Welcome;