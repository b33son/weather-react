import React, { Component } from "react";
import SearchBar from "./containers/search-bar";
import WeatherList from "./containers/weather-list";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  onSearchChange = term => {
    console.log(term);
  };
  render() {
    return (
      <div className="App">
        <div style={styles.body}>
          <SearchBar onSearchTermChange={term => this.onSearchChange(term)} />
          <WeatherList />
        </div>
      </div>
    );
  }
}

const styles = {
  body: {
    margin: "20px 10px"
  }
};

export default App;
