import React from 'react';
import {Form,Button}from 'react-bootstrap';
// import {useHistorR} from 'react-router-dom';
class Register extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email: '',
      password: '',
      confirmation: '',
      username:'',
      firstName:'',
      lastName:'',
      dateOfBirth:'',
      errors:''

    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    
  }
  handleChange(event){
    // console.log('handlechange',event);
    this.setState({
      [event.target.name]:event.target.value,
  
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.email);
    console.log(this.state.nom);
    
    // props.history.push('/login')

  }
  render(){
          return(
                <div>        
                  <Form onSubmit={this.handleSubmit}>
                     <h1>Inscription </h1>
                      <Form.Group controlId="formGroupEmail" >
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" name='email' placeholder="Votre email" value={this.state.email} onChange={this.handleChange} required />
                      </Form.Group>
                      <Form.Group controlId="formGroupPassword">
                          <Form.Label >Prenom</Form.Label>
                          <Form.Control type="text" name='firstName' placeholder="Votre prénom"value={this.state.firstName} onChange={this.handleChange} required  />
                      </Form.Group>
                      <Form.Group controlId="formGroupEmail">
                          <Form.Label>Nom</Form.Label>
                          <Form.Control type="text" name='lasName' placeholder="Votre nom" value={this.state.lastName} onChange={this.handleChange} required/>
                      </Form.Group>
                      <Form.Group controlId="formGroupPassword">
                          <Form.Label >Mot de pass</Form.Label>
                          <Form.Control type="password" name='password' placeholder="Votre mot de pass" value={this.state.password} onChange={this.handleChange} required />
                      </Form.Group>
                      <Form.Group controlId="formGroupPassword">
                          <Form.Label>Confirmation</Form.Label>
                          <Form.Control type="password" name='confirmation' placeholder="Confirmer votre mot de passe" value={this.state.confirmation} onChange={this.handleChange} required/>
                      </Form.Group>
                      <Form.Group controlId="formGroupPassword">
                          <Form.Label >Date de naissance</Form.Label>
                          <Form.Control type="Date" name='dateOfBirth' placeholder="DateOfBirth" value={this.state.dateOfBirth} onChange={this.handleChange} required />
                      </Form.Group>
                      <Form.Group>
                          <Form.File id="exampleFormControlFile1" label="Photos" />
                        </Form.Group>
                      <Button variant="primary" type="submit" onSubmit={this.handleSubmit} >S'enregistre</Button>
                  </Form>
                </div>
              );
  }

}

export default Register;
