import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Redirect } from 'react-router';
import DonarSignup from './DonarSignup'
import { render } from '@testing-library/react';

export default class output extends React.Component {
  constructor(props){
     super(props)
     this.state ={
       donar:""
     }
  }
  d=()=>{
    console.log('d')
   this.setState({donor:true})
  }
   render() {
     if(this.state.donor){
      return <Redirect to={{pathname:'/donarS'}}/>
     }
    return ( 
     
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Result 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {this.props}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  }
    
