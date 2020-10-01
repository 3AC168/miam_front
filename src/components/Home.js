import React from 'react';
import Navigation from './Navigation';
// import Login from './Login';
class Home extends React.Component{
  render(){
    return(
            <div>
                <Navigation />
                <h1>Miam</h1>
                {/* <Login />  */}
            </div>
    );
  }

}

export default Home;
