import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { kformatter } from "../../app/helpers/helpers";
//import parse from "html-react-parser";
import Comment from "./Comment";
import {
  loadCommentsById,
  selectComments,
  selectId,
  selectSubreddit,
} from "./commentsSlice";
import { useParams } from "react-router-dom";

export default function Comments(props) {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  //const id = useSelector(selectId);
  // const subreddit = useSelector(selectSubreddit);

  const { subreddit, id } = useParams();
  console.log(subreddit);
  console.log(id);

  useEffect(() => {
    const input = { id: id, subreddit: subreddit };
    dispatch(loadCommentsById(input));
  }, [dispatch, id, subreddit]);

  return (
    <div className="listing">
      <div className="listingInfo">
        {/*         <FontAwesomeIcon icon="chevron-up" size="2x" />

        <span>{kformatter(score)}</span>

        <FontAwesomeIcon icon="chevron-down" size="2x" />
      </div>

      <div className="listingMain">
        <div className="listingHeader">
          <h2>{subreddit_name_prefixed}</h2>
          <h3>Posted by {author}</h3>
        </div>

        <div className="listingContent">
          <h1>{title}</h1>
          <img src={url} alt="" />
  </div>*/}

        {comments.map((comment) => {
          return <Comment data={comment} />;
        })}
      </div>
    </div>
  );
}
