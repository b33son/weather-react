/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/weather-redux/src/reducers/reducer-weather.js
 */
import { FETCH_WEATHER } from "../actions/actions-root";
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // As each new city is searched. It is added to the front of the list
      //  Old searches are pushed down the list.
      // Don't mutate state like this:
      //      return state.push(action.payload.data);
      // Instead, use concat to return a new array:
      //      OLD: return state.concat([action.payload.data]);
      // ES6:
      return [action.payload.data, ...state];
      break;
  }
  return state;
}
