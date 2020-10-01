import React from 'react';
import {Form,Button }from 'react-bootstrap';
import Navig from './Navig';

class Register extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email: '',
      password: '',
      passwordconfirmation: '',
      prenom:'',
      nome:'',
      date:'',
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
    console.log("submited",);
    // here we nee to communicate with ouside server
    // get.post('htpps://localhost:3000/rehistration')
    event.preventDefault();
  }
  render(){
    return(
      <div>
        <Navig />
 <Form onSubmit={this.handleSubmit}>
   <h1>Inscription </h1>
            <Form.Group controlId="formGroupEmail" >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' placeholder="Votre email" value={this.state.email} onChange={this.handleChange} required />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label >Prenom</Form.Label>
                <Form.Control type="text" name='prenom' placeholder="Votre prénom"value={this.state.Prenom} onChange={this.handleChange} required  />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" name='nom' placeholder="Votre nom" value={this.state.nom} onChange={this.handleChange} required/>
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label >Mot de pass</Form.Label>
                <Form.Control type="password" name='password' placeholder="Votre mot de pass" value={this.state.password} onChange={this.handleChange} required />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Confirmer mot de passe</Form.Label>
                <Form.Control type="password" name='passwordconfirmation' placeholder="Confirmer votre mot de passe" value={this.state.passwordconfirmation} onChange={this.handleChange} required/>
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label >Date de naissance</Form.Label>
                <Form.Control type="Date" name='date' placeholder="Date de naissance" value={this.state.date} onChange={this.handleChange} required />
            </Form.Group>
            <Form.Group>
                <Form.File id="exampleFormControlFile1" label="Photos" />
               </Form.Group>
            <Button variant="primary" type="submit" >S'enregistrer</Button>
        </Form>
       
    
      </div>
    );
  }

}

export default Register;
