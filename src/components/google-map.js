/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/weather-redux/src/components/google-map.js
 */

import React, { Component } from "react";
import { MAP_API_KEY } from "../keys/keys";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class GoogleMap extends Component {
  render() {
    return (
      // https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/

      <div style={{ width: this.props.width, height: this.props.height }}>
        <Map
          google={this.props.google}
          zoom={14}
          style={{
            width: this.props.width,
            height: this.props.height,
            position: "relative"
          }}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.lon
          }}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{"this.state.selectedPlace.name"}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: MAP_API_KEY
})(GoogleMap);
