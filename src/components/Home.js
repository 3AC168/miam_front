import React from 'react';
import Navigation from './Navigation';
// import Login from './Login';
class Home extends React.Component{
  render(){
    return(
            <div>
              <Navigation />
                <h1>Miam Ok</h1>
                {/* <Login />  */}
              <button onClick={this.logout.bind(this)}>Logout</button>
            </div>
    );
  }

}

export default Home;
