/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/weather-redux/src/reducers/reducers-root.js
 */

import { combineReducers } from "redux";
//import BooksReducer from "./reducer-books";
//import ActiveBookReducer from "./reducer-book-active";
import WeatherReducer from "./reducer-weather";

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
