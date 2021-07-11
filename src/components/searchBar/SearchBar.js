import React, { useState } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <input
      type="text"
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search here"
      value={searchTerm}
      className="search"
    />
  );
}
