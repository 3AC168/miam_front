import React from 'react';
// import {Link} from 'react-router-dom';
// import Register from './Register';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      err:''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event){
    event.preventDefault();
    this.setState({
      [event.target.name]:event.target.value,
    })
  }
  handleSubmit(event) {
    
    event.preventDefault();
    console.log(this.state.email,this.state.password);
    const password=this.state.password;
    const email=this.state.email;
    if(this.state.email===email && this.state.password===password){
      this.props.history.push('/enregistrer/' + email);
    }
    else{
      this.setState({
      err:"This is not valid",
      })
    }
    
  }
  render() {
    return (
      <div>
        {this.state.err !='' ? this.state.err:''}
        <Form method="post" onSubmit={this.handleSubmit} >
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" 
              value={this.state.email} onChange={(event) => this.handleChange(event)} />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label >Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password"
              value={this.state.password} onChange={this.handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit" onSubmit={this.handleSubmit}> Se connecter </Button>
        </Form>
      </div>
    );
  }

}

export default Login;
