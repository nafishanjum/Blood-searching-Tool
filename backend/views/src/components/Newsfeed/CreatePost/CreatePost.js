import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Axios from "axios";
import "./create.css";
import { bounceInLeft } from "react-animations";
import Radium from "radium";
import onClickOutside from "react-onclickoutside";
import { Redirect, Route } from "react-router-dom";
import { Divider, Form, Label, Button, Checkbox } from "semantic-ui-react";
class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    let loggedIn = false;
    let showSignup = false;
    let isLoggedIn = false;
    let created = false;
    this.state = {
      user_id:"",
      user_name:"",
      header: "",
      blood_tag: 'O+',
      description: "",
      created:false,
      file:"",
      url:""
    };
  }
  componentDidMount() {
    const obj = JSON.parse(localStorage.getItem("auth"))
    console.log(obj.id)
    this.setState({ user_id:obj.id , user_name:obj.name });
  }
  onChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  };
  updateImageProp = async (e) => {
    e.preventDefault()
    const data  = new FormData()
    data.append('id' , this.state.user_id)
    data.append('file' , this.state.file)
 
   await Axios.post("http://localhost:9000/upload", data).then(res => { // then print response status
   // console.log(res.data.url)
  //  setSrc(`${res.data.url}`)
  //  updateItem({ src , alt})
  //  console.log(src)
  this.setState({url:res.data.url})
  console.log(this.state.url)
 }).catch(e=>console.log(e))
 
 
 //console.log(src)
    
}
  formSubmit = (ev) => {
    ev.preventDefault();
    const { user_id , user_name ,header , blood_tag , description,url} = this.state;
    console.log(user_id , user_name ,header , blood_tag , description)
    try {
      Axios({
        url: "http://localhost:9000/createPost/",
        method: "post",
        data: {
          // sending user email and password
          user_id:user_id,
          user_name:user_name,
          Blood_tag:blood_tag,
          Header:header,
          description:description,
          url:url
        },
      }).then((response) => {
        // And the server sends back the user info
        // back to the client side
       alert("Post created successfully")
       setTimeout( ()=>{
           this.setState({created:true})
       },1000)

        // this.setState({ loggedIn:true,userId:response.data.userId[0].id});
        // }

        //  else {
        //   this.setState({userValid:false})
        //    localStorage.removeItem("token");
        //    this.setState({ loggedIn: false });
        //  }
      });
    } catch (err) {
      console.log("problem");
    }
  };
  handleSubmit(event) {
    event.preventDefault();
    alert(`Selected file - ${this.fileInput.current.files[0].name}`);
  }
  render() {
    if(this.state.created===true){
      return <Redirect to={{ pathname: "/" }}></Redirect>;
    }
    return (
      <div className="c">
        <div>
          <Form onSubmit={this.formSubmit}>
            <Form.Field inline>
              <input
                style={{width:'300px'}}
                type="text"
                placeholder="Title"
                name="header"
                value={this.state.header}
                onChange={this.onChange}
              />
            </Form.Field>
            <br></br>

            <Form.Field inline>
              <textarea
                type="text"
                placeholder="Description"
                name="description"
                value={this.state.description}
                onChange={this.onChange}
              />
              <select name="blood_tag" value={this.state.blood_tag} onChange={this.onChange}>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
              <input type="file" onChange={ e=> this.setState({file:e.target.files[0]})}/>
              <button onClick={this.updateImageProp}>submit</button>
            </Form.Field>
            <br></br>
          </Form>

          <Button inverted color="purple" onClick={this.formSubmit}>
            Save
          </Button>

        </div>
      </div>
    );
  }
}
export default CreatePost;
