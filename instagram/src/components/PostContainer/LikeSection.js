import React from 'react';

import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { IconContext } from "react-icons";

const LikeSection = props => {
  return [
    <div
      className="like-section"
      key="likes-icons-container"
      onClick={props.incrementLike}
    >
    <IconContext.Provider
            value={{ size: "1.5rem", className: "fa-icon" }}
          >
            <FaRegHeart  />
            <FaRegComment />
          </IconContext.Provider>
      <div className="like-section-wrapper">{props.likes}</div>
    </div>
  ];
};

export default LikeSection