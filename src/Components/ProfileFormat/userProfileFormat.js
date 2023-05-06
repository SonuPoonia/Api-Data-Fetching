import React from "react";

import "./userProfileFormat.css";
import EveryFormat from "./everyFormat";

const UserProfileFormat = (props) => {
  return (
    <div id="all_users">
      {props.usersData.map((allData) => (
        <EveryFormat
          picture={allData.avatar}
          fullName={allData.first_name + " " + allData.last_name}
          emailId={allData.email}
        />
      ))}
    </div>
  );
};

export default UserProfileFormat;
