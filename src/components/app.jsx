import React, { Component } from "react";

import WeatherList from "../containers/weather-list";
import SearchBar from "../containers/search-bar";

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
