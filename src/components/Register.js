import React from 'react';
// import axios from 'axios';
import {Form,Button}from 'react-bootstrap';
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
      err:''

    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    
  }
  handleChange(event){
    event.preventDefault();
    this.setState({
      [event.target.name]:event.target.value,
    })
  }
  handleSubmit() {
    console.log("submited");
    const password=this.state.password;
    const comnfirmation=this.state.confirmation;
    if(this.state.password === this.state.confirmation) {
      // sendDetailsToServer() 
      
     console.log('Votre inscription a bie été entregistrée'); 
    } 
     else
    {
      console.log('Passwords do not match');
      this.setState({
        err:'Passwords do not match'
        });
    }
    
  

  // const sendDetailsToServer = ()=>{
  //   if(state.email.length && state.password.length){
  //     props.showError(null);
  //     const payload={
  //       "email":this.state.email,
  //       "password":this.state.password,

  //     }
  //     axios.post(url/compnents,payload)
  //     .then(response=>{
  //       if(response.status===200){
  //         console.log('regustration copmlte');
  //         redirectToHome();
  //         props.showError(null)
  //       }
  //       else{
  //         props.showError('some thing Wrong');
  //     }
      
  //     })
  //     .catch(err=>{
  //       console.log(err);
  //     });
  //   }
  //   else{
  //     props.showError('enter valid password')
  //   }


  // }
  }
  render(){
          return(
                <div> 
                  {this.state.err !='' ? this.state.err:''}       
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
                          <Form.Control type="text" name='lastName' placeholder="Votre nom" value={this.state.lastName} onChange={this.handleChange} required/>
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
                      <Button variant="primary" type="submit" onSubmit={this.handleSubmit} >S'inscrire</Button>
                  </Form>
                </div>
              );
  }

}

export default Register;
