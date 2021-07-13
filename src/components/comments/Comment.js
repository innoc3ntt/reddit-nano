import React from "react";
import { utcTimeConverter, kformatter } from "../../app/helpers/helpers";

export default function Comment(props) {
  const { author, ups, created_utc, body } = props.data;
  return (
    <div>
      <div className="comment">
        <div className="commentHeader">
          <h2>{author}</h2>
          <h3>{utcTimeConverter(created_utc)}</h3>
        </div>
        <p>{body}</p>
        <span>{kformatter(ups)} Likes </span>
      </div>
    </div>
  );
}
