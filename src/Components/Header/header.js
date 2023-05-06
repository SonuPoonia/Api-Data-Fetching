import React from "react";

import "./header.css";

const Header = () => {
  const showUser = () => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("all_users").style.display = "flex";
  };
  const loadingTime = () => {
    document.getElementById("msg").style.display = "none";
    document.getElementById("loader").style.display = "flex";
    setTimeout(showUser, 8000);
  };

  return (
    <div id="header">
      <a href="https://amazon.com" className="brand_name" target="blank">Amazon</a>
      <a><button className="get_users_btn" onClick={loadingTime}>Get Users</button></a>
    </div>
  );
};

export default Header;
