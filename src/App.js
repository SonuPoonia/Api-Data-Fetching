import React, { useState, useEffect } from "react";

import Header from "./Components/Header/header";
import UserProfileFormat from "./Components/ProfileFormat/userProfileFormat";
import Loader from "./Components/Loader/loader";
import MsgBeforeClick from "./Components/MsgBeforeClick/MsgBeforeClick";
import Support from "./Components/Support/support";


let a = 0;
const App = () => {
  const [allData, setallData] = useState([]);

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...allData];
    setallData(updatedExpense);
  };

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setallData(data);
      });
  }, []);

  if (allData != []) {
    if (a == 1) {
      return (
        <div id="parent">
          <Header />
          <MsgBeforeClick />
          <Loader />
          <UserProfileFormat usersData={allData.data} />
          <Support supportData = {allData.support} />
        </div>
      );
    }
    a++;
  }
};
export default App;
