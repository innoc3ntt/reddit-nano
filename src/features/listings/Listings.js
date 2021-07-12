import React from "react";
import Listing from "../listing/Listing";
import { useSelector } from "react-redux";
import { selectListings } from "./listingsSlice";

export default function Listings() {
  const listings = useSelector(selectListings);

  return (
    <div className="listings">
      {listings.map((listing) => {
        return <Listing data={listing} />;
      })}
    </div>
  );
}
