import React from "react";
import { useSelector } from "react-redux";
import { selectComments } from "./commentsSlice";
import Comment from "./Comment";

export default function CommentsList() {
  const comments = useSelector(selectComments);

  return (
    <div>
      {comments.map((comment, index) => {
        return <Comment data={comment.data} key={index} />;
      })}
    </div>
  );
}
