import React, { useState } from "react";
import css from "./TweetList.module.css";

const TweetList = ({ id, user, tweets, followers, avatar }) => {
  const [follower, setFollower] = useState(followers);
  const [isShowBtn, isSetShowBtn] = useState(true);

  const handleIncrease = () => {
    setFollower((follower) => follower + 1);
    isSetShowBtn(false);
  };

  const handleDecrease = () => {
    setFollower((follower) => follower - 1);
    isSetShowBtn(true);
  };

  return (
    <li className={css.card} key={id}>
      <div className={css.logo}></div>
      <div className={css.image}></div>
      <div className={css.container}>
        <div className={css.ellipse}>
          <div className={css.avatar}>
            <img src={avatar} alt={user} width="62px" height="62px" />
          </div>
        </div>
      </div>

      <p className={css.tweets}>{tweets} tweets</p>
      <p className={css.followers}>{follower} followers</p>
      {isShowBtn ? (
        <button className={css.BtnPlus} onClick={handleIncrease}>
          followers
        </button>
      ) : (
        <button className={css.BtnMinus} onClick={handleDecrease}>
          following
        </button>
      )}
    </li>
  );
};

export default TweetList;
