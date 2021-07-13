import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import parse from "html-react-parser";
import Comment from "./Comment";
import { loadCommentsById, selectComments, selectPost } from "./commentsSlice";
import { useParams } from "react-router-dom";

export default function Comments(props) {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const post = useSelector(selectPost);

  const { selftext, author, created_utc, title } = post;

  const { subreddit, id } = useParams();

  useEffect(() => {
    const input = { id: id, subreddit: subreddit };
    dispatch(loadCommentsById(input));
  }, [dispatch, id, subreddit]);

  return (
    <div className="listings">
      <div className="post">
        <h2>Posted by {author}</h2>
        <h3>{created_utc}</h3>
        <h1>{title}</h1>
        <p>{selftext}</p>
      </div>
      <div clasName="comments"></div>
      {comments.map((comment, index) => {
        return <Comment data={comment.data} key={index} />;
      })}
    </div>
  );
}
