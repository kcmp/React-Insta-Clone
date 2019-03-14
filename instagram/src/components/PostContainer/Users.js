import React from "react";
import "./Users.css";

const Users = props => {
  return (
    <div className="user-info">
      <img
        src={props.thumbnailUrl}
        alt="user thumbnail"
        className="user-thumbnail"
      />
      <p className="username">{props.username}:</p>
    </div>
  );
};

export default Users;