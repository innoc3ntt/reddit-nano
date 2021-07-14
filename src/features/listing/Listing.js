import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { kformatter, previewText } from "../../app/helpers/helpers";
import ReactMarkdown from "react-markdown";
import { gfm } from "remark-gfm";

export default function Listing(props) {
  const {
    subreddit_name_prefixed,
    title,
    author,
    url,
    selftext,
    score,
    url_overridden_by_dest,
  } = props.data;

  const img = <img src={url} alt="" />;
  const previewUrl = (
    <a href={url_overridden_by_dest}>{url_overridden_by_dest}</a>
  );

  const preview = (
    <ReactMarkdown remarkPlugins={gfm} children={previewText(selftext, 500)} />
  );

  return (
    <div className="listing">
      <div className="info">
        <FontAwesomeIcon icon="chevron-up" size="2x" />

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

          {selftext && preview}

          {img || previewUrl}
        </div>

        <div className="listingFooter">
          <span>COMMENTS</span>
          <span>SHARE</span>
        </div>
      </div>
    </div>
  );
}
