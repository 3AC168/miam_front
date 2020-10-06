import React from 'react';
// import {Link} from 'react-router-dom';
// import Welcome from './Welcome';
import {Form, Button} from 'react-bootstrap';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
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
    console.log(this.state.username,this.state.password);
    const password=this.state.password;
    const username=this.state.username;
    fetch('http://localhost:3003/users', {password,username})
    .then(res => res.json())
    .then((json) => {
        console.log(json.success);
        if(json.success){
          this.props.history.push('/userinfo/' + username);
        }else{
          this.setState({
          err:"This is not valid",
          });
        }
      });
    
  }
  render() {
    return (
      <div>
        {this.state.err !=='' ? this.state.err:''}
        <Form method="post" onSubmit={this.handleSubmit} >
          <Form.Group controlId="formHorizontalEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" placeholder="Enter sername" 
              value={this.state.username} onChange={(event) => this.handleChange(event)} required />
          </Form.Group>
        <Form.Group controlId="formHorizontalPassword">
            <Form.Label >Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password"
              value={this.state.password} onChange={this.handleChange} required/>
          </Form.Group>
          <Button variant="primary" type="submit" onSubmit={this.handleSubmit}> Se connecter </Button>
        </Form>
      </div>
    );
  }

}

export default Login;
