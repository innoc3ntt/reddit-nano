import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Listing() {
  return (
    <div className="listing">
      <div className="info">
        <FontAwesomeIcon icon="chevron-up" size="2x" color="#d8c3a5" />
        <span>36k</span>
        <FontAwesomeIcon icon="chevron-down" size="2x" color="#d8c3a5" />
      </div>
      <div className="listingContent">
        <h1> Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className="listingBottom">
          <span>COMMENTS</span>
          <span>SHARE</span>
        </div>
      </div>
    </div>
  );
}
