import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        };
       
      
    }

  render(){
    return(
      <div>
    
         <Form>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" 
                value={this.state.email} onChange={e=>this.setState({email:e.target.value})}  />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label >Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  />
            </Form.Group>
        </Form>
        <Button variant="primary" onClick={this.state.onSubmit}>Se connecter</Button>
      </div>
    );
  }

}

export default Login;
