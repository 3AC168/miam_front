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
        
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        
      }
      handleChange(event){
        console.log("changes",);
        console.log('handlechange',event);
        this.setState({
          [event.target.name]:event.target.value,
      
        })
      }
      handleSubmit(event) {
        console.log("acount created",);
        event.preventDefault();
      }

  render(){
    return(
      <div>
      {/* value={this.state.email} onChange={e=>this.setState({email:e.target.value})}  */}
         <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" 
                 value={this.state.email} onChange={this.handleChange} required/>
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label >Password</Form.Label>
                <Form.Control type="password" name='paswword' placeholder="Password" 
                value={this.state.password} onChange={this.handleChange} required />
            </Form.Group>
            <Button variant="primary" type="submit" >Se connecter</Button>
        </Form>
        
      </div>
    );
  }

}

export default Login;
