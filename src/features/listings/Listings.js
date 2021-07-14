import React, { useEffect } from "react";
import Listing from "../listing/Listing";
import { useSelector, useDispatch } from "react-redux";
import {
  selectListings,
  changeSubreddit,
  loadListingsBySubreddit,
} from "./listingsSlice";
import { useParams, Link } from "react-router-dom";

export default function Listings() {
  const dispatch = useDispatch();
  const listings = useSelector(selectListings);
  let { subreddit } = useParams();

  useEffect(() => {
    dispatch(changeSubreddit(subreddit));
    dispatch(loadListingsBySubreddit(subreddit));
  }, [subreddit, dispatch]);

  return (
    <div className="listings">
      {listings.map((listing) => {
        return (
          <Link
            to={`/r/${subreddit}/comments/${listing.id}`}
            className="text-link "
          >
            <Listing data={listing} key={listing.id} />
          </Link>
        );
      })}
    </div>
  );
}
