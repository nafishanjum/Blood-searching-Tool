import React, { useState } from "react";
//import './App.css';
import Axios from "axios";
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
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";

import * as blood_bank from "../../data/geo.json";
import { Redirect } from "react-router";
import "./map.css";

import SearchResult from "./SearchResult/SearchResult";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2h1ZGlwIiwiYSI6ImNrNjB3YjVqMzBibXAzbW55MTY0cjZxdG4ifQ.AQe8EIqNEjW0HyfDvf0tlQ";
export default class Map extends React.Component {
  constructor(props) {
    super(props);
    //  alert(this.props.location.state.id);
    let latitude = null;
    let logitude = null;
    this.state = {
      directions: {},
      bloodGroup: "",
      latitude,
      logitude,
      res: [],
      token: "",
    };
    this.c = this.c.bind(this);
    this.state.token = localStorage.getItem("token");
    this.c();
    this.getBank = this.getBank.bind(this);
   
    console.log(this.props.latitude);
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
  c = (log, lan) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      this.map = new mapboxgl.Map({
        container: this.mapContainer, // See https://blog.mapbox.com/mapbox-gl-js-react-764da6cc074a
        style: "mapbox://styles/mapbox/streets-v11",
        center: [lng, lat],
        zoom: 15,
      });
     // new mapboxgl.Marker(el).setLngLat([lng,lat])
      this.map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        })
      );
      this.directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: "metric",
        profile: "mapbox/driving",
      });

      this.map.addControl(this.directions, "top-right");
    });
  };

  get = (ev) => {
    try {
      Axios({
        url: "http://localhost:9000/getToken",
        method: "post",
        data: {
          blood_group: this.state.bloodGroup,
        },
      })
        .then((response) => {
          this.setState({ token: response.data.token });
          console.log(this.state.token);

         
       
        })
        .catch({});
    } catch (e) {}
  };
 
  render() {
    // return <Redirect to="/login"/>

    //  localStorage.removeItem("token")
    const res = this.state.res;

  
    return (
      <div> 
         
        <div className="searc">
          <input
            type="text"
            placeholder="bloodGroup"
            name="bloodGroup"
            value={this.state.bloodGroup}
            onChange={this.onChange}
            autoFocus
          />

          <Button inverted color="pink" onClick={this.getBank}>
            search
          </Button>
          <div>
            <Button inverted color="violet" onClick={this.get}>
              {" "}
              Send notification to donor
            </Button>
          </div> 
       
        </div>
        <div className='s'>
        <SearchResult result={res}/>
        </div>
           
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}
