import React from "react";
import { utcTimeConverter, kformatter } from "../../app/helpers/helpers";
import ReactMarkdown from "react-markdown";
import { gfm } from "remark-gfm";

export default function Comment(props) {
  const { author, ups, created_utc, body } = props.data;
  return (
    <div>
      <div className="comment">
        <div className="commentHeader">
          <h2>{author}</h2>
          <h3>{utcTimeConverter(created_utc)}</h3>
        </div>
        <ReactMarkdown remarkPlugins={gfm} children={body} />
        <span>{kformatter(ups)} Likes </span>
      </div>
    </div>
  );
}
