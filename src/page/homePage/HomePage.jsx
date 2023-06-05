import React from "react";
import tweets from "../../images/wanna_tweet.jpg";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <img src={tweets} alt="tweets" className={css.image} />
    </div>
  );
};

export default HomePage;
