import React, { Component } from "react";
import dummyData from "./dummy-data.js";
import SearchBar from "./components/SearchBar/SearchBar.js";
import PostContainer from "./components/PostContainer/PostContainer";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ dummyData: dummyData });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div>
          {this.state.dummyData.length === 0 ? (
            <p>LOADING</p>
          ) : (
            this.state.dummyData.map((post, i) => {
              return (
                <PostContainer
                  key={i}
                  post={post}
                  index={i}
                  // updateComments={this.updateComments}
                />
              );
            })
          )}
        </div>
      </div>
    );
  }
}

export default App;