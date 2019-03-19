// import React, { Component } from "react";

// import { FaRegComment, FaRegHeart } from "react-icons/fa";
// import { IconContext } from "react-icons";

// class LikeSection extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       likes: this.props.likes
//     };
//   }

//   incrementLike = () => {
//     this.setState(prevState => {
//       return { likes: prevState.likes + 1 };
//     });
//   };

//   return (
//     <div
//       className="icon-container"
//       key="likes-icons-container"
//       onClick={props.incrementLike}
//     >
//     <IconContext.Provider
//             value={{ size: "1.5rem", className: "fa-icon" }}
//           >
//             <FaRegHeart onClick={props.incrementLike} />
//             <FaRegComment />
//     </IconContext.Provider>
//           <p className="likes">{props.likes} likes</p>
//     </div>
//   );
// };

// export default LikeSection