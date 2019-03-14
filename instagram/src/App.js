import React, { Component } from "react";
import dummyData from "./dummy-data.js";
import SearchBar from "./components/SearchBar/SearchBar.js";
// import PostContainer from "./components/PostContainer/PostContainer";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <div>

        </div>
      </div>
    );
  }
}

export default App;