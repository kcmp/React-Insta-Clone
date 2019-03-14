import React from "react";
import "./PostContainer.css";

import CommentSection from "../CommentSection/CommentSection.js";
import Users from "../PostContainer/Users.js";
import heart_icon from '../SearchBar/imgs/heart-regular.svg'

const PostContainer = props => {
  console.log(props);
  return (
    <div className="post-container">
      <Users
        thumbnailUrl={props.post.thumbnailUrl}
        username={props.post.username}
      />

      <div className="image-container">
        <img src={props.post.imageUrl} alt="" className="post-image" />
      </div>

      <div className="bottom-container">
        <div className="icon-container" />
        <img src={heart_icon} alt="" className="icon heart-icon" />
        <p className="likes">{props.post.likes} likes</p>
        <CommentSection comments={props.post.comments} />
      </div>
    </div>
  );
};

export default PostContainer;