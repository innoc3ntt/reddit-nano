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
  //const subreddit = useSelector(selectSubreddit);

  const { subreddit, id } = useParams();

  useEffect(() => {
    const input = { id: id, subreddit: subreddit };
    dispatch(loadCommentsById(input));
  }, [dispatch, id, subreddit]);

  return (
    <div className="listings">
      {comments.map((comment, index) => {
        return <Comment data={comment.data} key={index} />;
      })}
    </div>
  );
}
