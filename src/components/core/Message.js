import React, { Component } from 'react';
//import { Alert, Card, Button, Form, ListGroup, Modal } from 'react-bootstrap';
import Modal from 'react-modal';
/*
class Message extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-fluid">
                <Alert variant="success">
                <Alert.Heading>Les modifications ont été enregistrées.</Alert.Heading>
                <p>
                Voulez-vous revenir à la page principale ?
                </p>
                <hr />
                <button onClick={this.handleCloseModal}><a href="/userinfo">Oui</a></button>
                <button onClick={this.handleCloseModal}><a href="/utilisateur">Non, continuer.</a></button>
                
                </Alert>
            </div>
        );
    }
}

export default Message; */

    
   
//react-modal
class Message extends React.Component {
    constructor () {
        super();
        this.state = {
        showModal: false                 
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);        
        this.handleCloseModal = this.handleCloseModal.bind(this);        
    }
    
    handleOpenModal () {
        this.setState({ showModal: true });
    }
        
    handleCloseModal () {
        this.setState({ showModal: false });
    }
    
                
    render () {
        return (
            <div>
                <button onClick={this.handleOpenModal}>Infos</button>                
                <Modal 
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={false}
                >
                <p>Les modifications ont été enrégistrées.</p>
                <p>Voulez-vous revenir à la page principale ?</p>
                <button onClick={this.handleCloseModal}><a href="/userinfo">Oui</a></button>
                <button onClick={this.handleCloseModal}><a href="/utilisateur">Non, continuer.</a></button>
                </Modal>                 
            </div>
        );
    }
} 

export default Message; 

/*
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
    }; 
      
 
      function Message(){
        var subtitle;
        const [modalIsOpen,setIsOpen] = React.useState(false);
        function openModal() {
          setIsOpen(true);
        }
       
        function afterOpenModal() {
          // references are now sync'd and can be accessed.
          subtitle.style.color = '#f00';
        }
       
        function closeModal(){
          setIsOpen(false);
        }
       
          return (
            <div>
              <button onClick={openModal}>Open Modal</button>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
       
                <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                  <input />
                  <button>tab navigation</button>
                  <button>stays</button>
                  <button>inside</button>
                  <button>the modal</button>
                </form>
              </Modal>
            </div>
          );
      } 
      
export default Message; */