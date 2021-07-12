import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { kformatter } from "../../app/helpers/helpers";

export default function Listing(props) {
  const { subreddit_name_prefixed, title, author, url, preview, score } =
    props.data;
  return (
    <div className="listing">
      <div className="listingInfo">
        <FontAwesomeIcon icon="chevron-up" size="2x" color="#d8c3a5" />

        <span>{kformatter(score)}</span>

        <FontAwesomeIcon icon="chevron-down" size="2x" color="#d8c3a5" />
      </div>

      <div className="listingMain">
        <div className="listingHeader">
          <h2>{subreddit_name_prefixed}</h2>
          <h3>Posted by {author}</h3>
        </div>

        <div className="listingContent">
          <h1> {title}</h1>
          <img src={url} alt="" />
        </div>

        <div className="listingFooter">
          <span>COMMENTS</span>
          <span>SHARE</span>
        </div>
      </div>
    </div>
  );
}
