import React from "react";
import "./PostContainer.css";

import CommentSection from "../CommentSection/CommentSection";
import Users from "../PostContainer/Users";
// import LikeSection from "../CommentSection/LikeSection"


import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { IconContext } from "react-icons";

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
        {/* <div className="icon-container"
        key="likes-icons-container"
        onClick={props.incrementLike}
        >
        
          <IconContext.Provider
            value={{ size: "1.5rem", className: "fa-icon" }}
          >
            <FaRegHeart  />
            <FaRegComment />
          </IconContext.Provider>
        </div>
        <p className="likes">{props.post.likes} likes</p> */}
        {<p className="likes">{props.post.likes} likes</p>}
        <CommentSection
          comments={props.post.comments}
          timestamp={props.post.timestamp}
          index={props.index}
          updateComments={props.updateComments}
        />
      </div>
    </div>
  );
};

export default PostContainer;
