import React from "react";

const EveryFormat = (props) => {
  return (
    <div className="user">
      <img src={props.picture} />
      <div className="user_fullname">Full Name : {props.fullName}</div>
      <div className="user_email"><button>Email Id : {props.emailId}</button></div>
    </div>
  );
};

export default EveryFormat;
