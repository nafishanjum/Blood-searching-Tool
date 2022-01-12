import React, { useEffect, useState } from "react";
import Axios from "axios";
import Post from "./Post/Post";
import PropTypes from 'prop-types';
import CreatePost from './CreatePost/CreatePost'
import "./newfeed.css";
import { Button, Segment } from "semantic-ui-react";
import LoginModal from "../Login/LoginModal";
import flash from "react-animations/lib/flash";
import { Redirect } from "react-router";
import MyVerticallyCenteredModal from "../Signup/signup";
class Newsfeed extends React.Component {
  state = {
    post: [],
    isLoggedIn:false
  };
   
  constructor(props) {
    super(props);
    let isLoggedIn=false;
    let create=false;
    let showSignup=false;
    this.state = {
      post: [],
      isLoggedIn:false,
      bloodGroup: "",
      create:false,
      showSignup:false
    };
    
  }
  componentDidMount() {
    
    
  
    Axios.get("http://localhost:9000/feed").then((r) => {
      this.setState({ post: r.data.post });
      console.log(this.state.post);
    });
    console.log(this.state.post);
  }

  onChange = (ev) => {
    console.log(this.state.bloodGroup);
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  };
  handleClickOutside = evt => {
    evt.preventDefault()
    this.setState({isLoggedIn:false})
  };

  showLogin=(ev)=>{
    ev.preventDefault()
    this.setState({isLoggedIn:!this.state.isLoggedIn})
  }
  render() {
    if (this.state.create){
      return <Redirect to={{ pathname: "/create" }}></Redirect>;
    }
    let post = this.state.post.map((r, k) => {
      return (
        <div>
          <Post key={k} data={r}></Post>
        </div>
      );
    });
    return (
      <div>
        
        <div className="navbar">
        
          <div className="logbutton">
            <Button inverted color="violet" onClick={this.showLogin}>
              Login
            </Button>
            <Button inverted color="pink" onClick={()=>{
              this.setState(
                {showSignup:true}
              )
            }}> 
              Sign in
            </Button>
            <Button basic color="blue" onClick={()=>{
              localStorage.removeItem("authTrue")
            }}> 
              Log out
            </Button>
          </div>
          <div>
          <Button inverted color="gray" onClick={
              ()=>{
                if(localStorage.getItem('authTrue')==="true"){
                  this.setState({
                    create:true
                  })
                }
                else{
                  alert("Please login to create post")
                }
                
              }
            }>
              Create Post
            </Button>
          </div>
        </div>
        
   
        <MyVerticallyCenteredModal
                show={this.state.showSignup}
                onHide={() => {
                  this.setState({ showSignup: false });
                }}
              />
        <div className="feed">
         {this.state.isLoggedIn?<LoginModal/>
         :<ul>{post}</ul>
         }
         
        </div>
      </div>
    );
  }
}

export default Newsfeed

