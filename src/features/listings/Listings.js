import React, { useEffect } from "react";
import Listing from "../listing/Listing";
import { useSelector, useDispatch } from "react-redux";
import {
  selectListings,
  changeSubreddit,
  loadListingsBySubreddit,
  selectIsLoading,
} from "./listingsSlice";
import { useParams, Link } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";

export default function Listings() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const listings = useSelector(selectListings);
  let { subreddit } = useParams();

  subreddit = subreddit ? subreddit : "popular";
  console.log(subreddit);

  useEffect(() => {
    dispatch(changeSubreddit(subreddit));
    dispatch(loadListingsBySubreddit(subreddit));
  }, [subreddit, dispatch]);

  if (loading) {
    return (
      <div className="listings">
        <div className="loading">
          <BounceLoader loading={loading} size={80} color="#36D7B7" />
        </div>
      </div>
    );
  }

  //FIXME: NOTE THERE IS A NESTED <a> ERROR FROM THE LINK BELOW TO THE REACT MARKDOWN maybe put ignore in disallowed props for react markdown

  return (
    <div className="listings">
      {listings.map((listing) => {
        return (
          <Link
            to={`/r/${listing.subreddit}/comments/${listing.id}`}
            className="text-link"
            key={listing.id}
          >
            <Listing data={listing} key={listing.id} />
          </Link>
        );
      })}
    </div>
  );
}
