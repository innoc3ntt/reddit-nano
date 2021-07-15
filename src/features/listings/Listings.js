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
import Loading from "../../components/Loading/Loading";

export default function Listings() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const listings = useSelector(selectListings);
  let { subreddit } = useParams();

  subreddit = subreddit ? subreddit : "popular";

  useEffect(() => {
    dispatch(changeSubreddit(subreddit));
    dispatch(loadListingsBySubreddit(subreddit));
  }, [subreddit, dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
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
