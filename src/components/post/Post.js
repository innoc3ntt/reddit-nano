import React from "react";
import ReactMarkdown from "react-markdown";
import { gfm } from "remark-gfm";
import { kformatter, utcTimeConverter } from "../../app/helpers/helpers";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { selectPost } from "../comments/commentsSlice";

export default function POST() {
  const post = useSelector(selectPost);
  const {
    author,
    created_utc,
    title,
    selftext,
    score,
    url_overridden_by_dest,
  } = post;

  return (
    <div className="post">
      <header>
        <aside className="post-aside">
          <FontAwesomeIcon icon="chevron-up" size="2x" className="chevron-up" />
          <span>{kformatter(score)}</span>
          <FontAwesomeIcon
            icon="chevron-down"
            size="2x"
            className="chevron-down"
          />
        </aside>
        <div>
          <h2>Posted by {author}</h2>
          <h3>Posted {utcTimeConverter(created_utc)}</h3>

          <h1>{title}</h1>
        </div>
      </header>

      <a href={url_overridden_by_dest}>{url_overridden_by_dest}</a>

      <ReactMarkdown remarkPlugins={gfm} children={selftext} />
    </div>
  );
}
