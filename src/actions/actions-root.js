/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/weather-redux/src/actions/actions-root.js
 */

import { WEATHER_API_KEY } from "../keys/keys";
import axios from "axios";

const root_url = "http://api.openweathermap.org/data/2.5/forecast?";
export const FETCH_WEATHER = "FETCH_WEATHER";

export async function fetchWeather(city) {
  const url = `${root_url}q=${city},us&appid=${WEATHER_API_KEY}`;
  const promise = axios.get(url);

  // send promise to redux middleware.
  // after request is finished, middleware will unwrap and send data
  return {
    type: FETCH_WEATHER,
    payload: promise
  };
}
