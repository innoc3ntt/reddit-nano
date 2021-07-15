import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${searchTerm}`);
  };

  return (
    <div className="Search-bar">
      <Link to="/">
        <FontAwesomeIcon
          icon={["fab", "reddit"]}
          size="3x"
          color="#FF5700"
          className="App-logo"
        />
      </Link>

      <div>
        <Link to="/" className="text-link">
          <span className="titleReddit">Reddit </span>
          <span className="titleNano">NANO</span>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search here"
          value={searchTerm}
          className="search"
        />
      </form>
    </div>
  );
}
