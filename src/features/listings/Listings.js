import React, { useEffect } from "react";
import Listing from "../listing/Listing";
import { useSelector, useDispatch } from "react-redux";
import {
  selectListings,
  changeSubreddit,
  loadListingsBySubreddit,
} from "./listingsSlice";
import { useParams } from "react-router-dom";

export default function Listings() {
  const dispatch = useDispatch();
  const listings = useSelector(selectListings);
  let { subreddit } = useParams();

  useEffect(() => {
    dispatch(changeSubreddit(subreddit));
    dispatch(loadListingsBySubreddit(subreddit));
  }, [subreddit, dispatch]);

  console.log(subreddit);

  return (
    <div className="listings">
      {listings.map((listing) => {
        return <Listing data={listing} key={listing.id} />;
      })}
    </div>
  );
}
