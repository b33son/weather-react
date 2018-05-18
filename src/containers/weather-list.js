/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/weather-redux/src/containers/weather-list.js
 */

import React, { Component } from "react";
import _ from "lodash";
import { Table, Label } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";
import GoogleMap from "../components/google-map";

class WeatherList extends Component {
  renderCityWeather = cityData => {
    // {
    //   "cod": "200",
    //   "message": 0.0047,
    //   "cnt": 40,
    //   "list": [
    //     {
    //       "dt": 1526493600,
    //       "main": {
    //         "temp": 299.42,
    //         "temp_min": 296.77,
    //         "temp_max": 299.42,
    //         "pressure": 984.95,
    //         "sea_level": 1025.6,
    //         "grnd_level": 984.95,
    //         "humidity": 82,
    //         "temp_kf": 2.65
    //       },

    //   ],
    //   "city": {
    //     "id": 4298960,
    //     "name": "London",
    //     "coord": {
    //       "lat": 37.129,
    //       "lon": -84.0833
    //     },
    //     "country": "US",
    //     "population": 7993
    //   }
    // }

    const cityName = cityData.city.name;
    const temps = _.map(
      cityData.list.map(weather => weather.main.temp),
      temp => temp * 9 / 5 - 459.67
    );
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <Table.Row key={cityName} verticalAlign="bottom">
        <Table.Cell>
          <GoogleMap lon={lon} lat={lat} height="100px" width="225px" />
        </Table.Cell>
        <Table.Cell>{this.getChart(temps, "orange", "°F")}</Table.Cell>
        <Table.Cell>{this.getChart(pressures, "green", "hPa")}</Table.Cell>
        <Table.Cell>{this.getChart(humidities, "black", "%")}</Table.Cell>
      </Table.Row>
    );
  };

  calcAverage = data => {
    return _.round(_.sum(data) / data.length, 0);
  };
  getChart = (data, color = "blue", units) => {
    return (
      <div>
        <Sparklines height={50} data={data}>
          <SparklinesLine color={color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>
          {this.calcAverage(data)} {units}
        </div>
      </div>
    );
  };

  render() {
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Temperature (°F)</Table.HeaderCell>
            <Table.HeaderCell>Pressure (hPa)</Table.HeaderCell>
            <Table.HeaderCell>Humidity (%)</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.props.weather.map(this.renderCityWeather)}
        </Table.Body>
      </Table>
    );
  }
}

function mapStateToProps({ weather }) {
  // state.weather
  return { weather }; // { weather : weather }
}

export default connect(mapStateToProps)(WeatherList);
