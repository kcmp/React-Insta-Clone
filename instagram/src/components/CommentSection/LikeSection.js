import React from 'react';

import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { IconContext } from "react-icons";

const LikeSection = props => {
  return [
    <div
      className="icon-container"
      key="likes-icons-container"
      onClick={props.incrementLike}
    >
    <IconContext.Provider
            value={{ size: "1.5rem", className: "fa-icon" }}
          >
            <FaRegHeart  />
            <FaRegComment />
          </IconContext.Provider>
          <p className="likes">{props.likes} likes</p>
    </div>
  ];
};

export default LikeSection