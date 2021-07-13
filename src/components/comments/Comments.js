import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Comment from "./Comment";
import { loadCommentsById, selectComments, selectPost } from "./commentsSlice";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { gfm } from "remark-gfm";
import { kformatter } from "../../app/helpers/helpers";

export default function Comments() {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const post = useSelector(selectPost);
  const { author, created_utc, title, selftext } = post;
  const { subreddit, id } = useParams();

  useEffect(() => {
    const input = { id: id, subreddit: subreddit };
    dispatch(loadCommentsById(input));
  }, [dispatch, id, subreddit]);

  return (
    <div className="commentsContainer">
      <div className="post">
        <h2>Posted by {author}</h2>
        <h3>{kformatter(created_utc)}</h3>{" "}
        {/*//TODO IMPORT HELPER & INLINE BLOCK */}
        <h1>{title}</h1>
        <ReactMarkdown remarkPlugins={gfm} children={selftext} />
      </div>
      <div clasName="comments">
        {comments.map((comment, index) => {
          return <Comment data={comment.data} key={index} />;
        })}
      </div>
    </div>
  );
}
