import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../redux/users/usersThunk";
import TweetList from "../../components/tweetList/TweetList";
import css from "./TweetsPage.module.css";

const TweetsPage = () => {
  const tweets = useSelector((state) => state.users?.tweets);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleChange = () => {
    navigate("/", { replace: true });
  };

  const showItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <div className={css.container}>
      <button type="button" className={css.button} onClick={handleChange}>
        GoBack
      </button>
      <ul>
        {tweets?.length
          ? tweets
              .slice(0, visible)
              .map((data) => (
                <TweetList
                  key={data.id}
                  id={data.id}
                  user={data.user}
                  tweets={data.tweets}
                  followers={data.followers}
                  avatar={data.avatar}
                />
              ))
          : null}
      </ul>
      <button type="button" className={css.btn} onClick={showItems}>
        Load more
      </button>
    </div>
  );
};

export default TweetsPage;
