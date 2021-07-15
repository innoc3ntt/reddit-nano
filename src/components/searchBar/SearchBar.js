import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search here"
        value={searchTerm}
        className="search"
      />
    </form>
  );
}
