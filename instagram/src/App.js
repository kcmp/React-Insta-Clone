import React, { Component } from "react";
import dummyData from "./dummy-data.js";
import SearchBar from "./components/SearchBar/SearchBar.js";
import PostContainer from "./components/PostContainer/PostContainer";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      likes:0,
      show:true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ dummyData: dummyData });
    }, 1000);
  }

  //update app's state with new comment
  updateComments = (index, text) => {
    this.setState((prevState, prevProps) => {
      const posts = prevState.dummyData.slice();
      posts[index].comments.push({ username: "", text: text });
      return { dummyData: posts };
    });
  };

  incrementLike = () => {
    this.setState({ likes: this.state.clicks + 1 });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div>
          {this.state.dummyData.length === 0 ? (
            <h2>LOADING</h2>
          ) : (
            this.state.dummyData.map((post, i) => {
              return (
                <PostContainer
                  key={i}
                  post={post}
                  index={i}
                  updateComments={this.updateComments}
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