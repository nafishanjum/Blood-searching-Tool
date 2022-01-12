import React,{useState} from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import "./search.css";
import { Card, Button } from "semantic-ui-react";
import ConfirmOrder from "../ConfirmOrder/ConfirmOrder";
const SearchResult = (props) => {
  console.log(props.result);

  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2h1ZGlwIiwiYSI6ImNrNjB3YjVqMzBibXAzbW55MTY0cjZxdG4ifQ.AQe8EIqNEjW0HyfDvf0tlQ";
  const [showModal , setModal] = useState(false)
  const geolocation = (longitude, latitude) => {
    let directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/driving",
    });
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      directions.setOrigin([
        position.coords.longitude,
        position.coords.latitude,
      ]);
      directions.setDestination([longitude, latitude]);
    });
  };


  const viewModal =(s)=>{
    setModal(state=>state=s)
  }
  const handleClose =(s)=>{
    setModal(false)
  }

  let list = props.result.map(function (d, idx) {
    return (
      <div className="cards">
        <table>
          <tr>
            <td>
              <div className="name">{d.name}</div>
            </td>
            <td>
              <div className="location">Location: {d.location}</div>
            </td>
          </tr>

          <tr>
            <td>
              <tr>
                <td>
                  <div>
                    {" "}
                    <Button
                      className="loc-button"
                      color="green"
                      onClick={() => {
                        geolocation(d.longitude, d.latitude);
                      }}
                    >
                     Location{" "}
                    </Button>
                  </div>
                </td>
                <td>
                  <div>
                  <Button
                    className="loc-button"
                    color="red"
                    onClick={() => {
                      viewModal(true)
                    }}
                  >
                    Order
                  </Button>
                </div>
              </td>
            </tr>
            </td>
            
          </tr>
        </table>
        <div>
          <ConfirmOrder show={showModal} handleClose={handleClose}>

          </ConfirmOrder>
        </div>
      </div>
    );
  });
  return <div>{list}</div>;
};

export default SearchResult;
