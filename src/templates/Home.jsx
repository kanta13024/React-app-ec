import React from "react";
import { getUserId, getUsername } from "../reducks/users/selector";
import { useSelector } from "react-redux";

const Home = () => {
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const username = getUsername(selector);

  return (
    <div>
      おはよう
      <h2>うんこ</h2>
      <h2>{uid}</h2>
      <h1>{username}</h1>
    </div>
  );
};

export default Home;
