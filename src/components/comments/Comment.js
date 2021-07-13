import React from "react";
import { utcTimeConverter } from "../../app/helpers/helpers";

export default function Comment(props) {
  const { author, ups, created_utc, body } = props.data;
  return (
    <div>
      <div className="comments">
        <div className="commentsHeader">
          <h2>{author}</h2>
          <h3>{utcTimeConverter(created_utc)}</h3>
        </div>
        <p>{body}</p>
      </div>
    </div>
  );
}
