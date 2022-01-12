import React from "react";
import {
  Card,
  Icon,
  Image,
  Input,
  Button,
  Form,
  Label,
  Divider,
} from "semantic-ui-react";
import Axios from "axios";
import { timeoutsShape } from "shards-react";
import { findByLabelText } from "@testing-library/react";
import { Redirect } from "react-router-dom";
import Map from "../Map/Map";
import "./dash.css";
//import output from './output'
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    let ren;
    let result = false;
    this.state = {
      userInfo: {},
      checked: false,
      bloodGroup: "",
      name: [],
      res: [],
      lang: "",
      long: "",
      ren,
      result,
    };

    this.getUser();
    this.getBank = this.getBank.bind(this);
    this.getD = this.getD.bind(this);
    // this.style= this.style.bind(this);
    console.log(this.state.lang + this.state.long);
  }
  s = {
    display: "flex",
    height: "14px",
    width: "44px",
  };
  getUser() {
    const { user } = this.state;
    console.log("i am calld " + user + "");
    try {
      Axios({
        url: "http://852c0463.ngrok.io/findBy/",
        method: "post",
        data: {
          id: this.props.location.state.id,
        },
      }).then((response) => {
        console.log("i am from dashboard" + response);

        this.setState({ userInfo: { ...response.data.userDetails[0] } });
        console.log("........" + this.state.userInfo);
      });
    } catch (err) {
      console.log("problem");
    }
  }
  onChange = (ev) => {
    console.log(this.state.bloodGroup);
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  };
  getBank = (ev) => {
    ev.preventDefault();
    this.state.result = true;
    console.log("result" + this.state.result);
    const { bloodGroup } = this.state;
    try {
      Axios({
        url: "http://localhost:9000/getBlood",
        method: "post",
        data: {
          blood_group: bloodGroup,
        },
      })
        .then((response) => {
          this.setState({ res: response.data.result });
        })
        .bind(this);
    } catch (e) {}
  };
  getD(ev) {
    ev.preventDefault();
    this.refs.map.ha();
  }

  render() {
    //  if(this.state.token===null){
    //      return <Redirect to="/login"/>
    //   }
    //    else{

    let lantitude = null;
    let logitude = null;
    const res = this.state.res;
    var list = res.map(function (d, idx) {
      return (
        <div key={idx} className="content">
          {d.name}
          {idx}
          <Button
            key={idx}
            inverted
            color="violet"
            onClick={(() => (lantitude = d.lantitude), (logitude = d.logitude))}
          >
            get direction
          </Button>
          <Divider />
        </div>
      );
    });

    return (
      <div>
        <div className="search">
          <Form.Field inline>
            <input
              type="text"
              placeholder="bloodGroup"
              name="bloodGroup"
              value={this.state.bloodGroup}
              onChange={this.onChange}
              autoFocus
            />
          </Form.Field>
          <Button inverted color="pink" onClick={this.getBank}>
            search
          </Button>
          {list}
        </div>
      </div>
    );
    //  }
  }
}
