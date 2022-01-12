import React from 'react'
import './Post.css'

import { Redirect } from "react-router";
import { Button, Segment } from "semantic-ui-react";

import LoginModal from '../../Login/LoginModal';

const Post = (props) => {
   
  
   const [ message , setMessage] = React.useState(false)
    
  
    return (
        <div className='Card'>
            <p style={{textDecoration:'underline'}}>{props.data.user_name}</p>
            <h3>{props.data.Header}</h3>
            <p className="blood_tag">{props.data.Blood_tag}</p>
            <img src={props.data.url} style={{maxHeight:'450px'}}/>
            <p>{props.data.description}</p>
          
           
            <Button basic color="blue" onClick={()=>{
             return  <Redirect to={{ pathname: "/message" ,state:{id: 'asdf'}}}></Redirect>
            }}> 
              Send message
            </Button>
            <div className="modal" style={ message ? { display:'block'} : {display : 'none'} }>
          <message />
          <div className="close">
          <Button inverted color='red' onClick={(ev)=>{
            ev.preventDefault()
            setMessage(false)
          }}>
          Close
          </Button>
          </div>
        
        </div>
        </div>
    )
}
export default Post