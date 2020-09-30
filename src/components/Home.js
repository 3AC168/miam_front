import React from 'react';
import Navig from './Navig';
import Login from './Login';
class Home extends React.Component{
  render(){
    return(
      <div>
        <Navig />
        <h1>Miam</h1>
        <Login />
      </div>
    );
  }

}

export default Home;
