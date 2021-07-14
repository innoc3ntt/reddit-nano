import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Comment from "./Comment";
import {
  loadCommentsById,
  selectComments,
  selectPost,
  selectIsLoading,
} from "./commentsSlice";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { gfm } from "remark-gfm";
import { kformatter, utcTimeConverter } from "../../app/helpers/helpers";
import BounceLoader from "react-spinners/BounceLoader";

export default function Comments() {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const post = useSelector(selectPost);
  const loading = useSelector(selectIsLoading);
  const {
    author,
    created_utc,
    title,
    selftext,
    score,
    url_overridden_by_dest,
  } = post;
  const { subreddit, id } = useParams();

  useEffect(() => {
    const input = { id: id, subreddit: subreddit };
    dispatch(loadCommentsById(input));
  }, [dispatch, id, subreddit]);

  const POST = (
    <div className="post">
      <div className="postHeader">
        <div className="info">
          <FontAwesomeIcon icon="chevron-up" size="2x" />
          <span>{kformatter(score)}</span>
          <FontAwesomeIcon icon="chevron-down" size="2x" />
        </div>
        <div>
          <h2>Posted by {author}</h2>
          <h3>{utcTimeConverter(created_utc)}</h3>

          <h1>{title}</h1>
        </div>
      </div>

      <a href={url_overridden_by_dest}>{url_overridden_by_dest}</a>

      <ReactMarkdown remarkPlugins={gfm} children={selftext} />
    </div>
  );

  if (loading) {
    return (
      <div className="listings">
        <div className="loading">
          <BounceLoader loading={loading} size={80} color="#36D7B7" />
        </div>
      </div>
    );
  }

  return (
    <div className="commentsContainer">
      {!loading && POST}
      <div className="comments">
        {comments.map((comment, index) => {
          return <Comment data={comment.data} key={index} />;
        })}
      </div>
    </div>
  );
}
