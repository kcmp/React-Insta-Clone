import React, { Component } from "react";
import PropTypes from "prop-types";
// import dummyData from "./dummy-data.js";

import Comment from "../CommentSection/Comments.js";
import AddComment from "../CommentSection/AddComment";
import LikeSection from "../CommentSection/LikeSection"
import "./CommentSection.css";

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      commentText: "",
      username: "",
      likes: this.props.likes
    };
  }

  //adds new comment and passes it up to App
  addNewCommment = (event, index) => {
    event.preventDefault();
    const comment = this.state.commentText;
    this.props.updateComments(this.props.index, comment);
    this.setState({ commentText: "" });
  };

  incrementLike = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };

  //handles state for AddComment in this component
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log(this.state.comments);
    return (
      <div className="comment-section-container">
        <div className="comments">
          {this.state.comments.map((comment, i) => {
            return (
              <Comment
                key={i}
                username={comment.username}
                text={comment.text}
              />
            );
          })}
        </div>
        <p className="time-stamp">{this.props.timestamp}</p>
        <hr className="comment-divider" />
        <AddComment
          addNewCommment={this.addNewCommment}
          changeHandler={this.changeHandler}
          commentText={this.state.commentText}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default CommentSection;