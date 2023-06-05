import React, { useState } from "react";
import vector from "../../images/Vector.png";
import picture from "../../images/picture2 1.png";
import rectangle from "../../images/Rectangle 1.png";
import ellipse from "../../images/Ellipse 1 (Stroke).png";
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
      <div className={css.vector}>
        <img src={vector} alt="" />
      </div>
      <div className={css.picture}>
        <img src={picture} alt="" />
      </div>
      <div className={css.rectangle}>
        <img src={rectangle} alt="" />
      </div>
      <div className={css.ellipse}>
        <img src={ellipse} alt="" />
      </div>
      <div className={css.avatar}>
        <img src={avatar} alt={user} width="65px" height="64px" />
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
