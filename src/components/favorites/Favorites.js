import React from "react";
import { selectFavorites } from "./favoritesSlice";
import { useSelector, useDispatch } from "react-redux";
import { loadListingsBySubreddit } from "../../features/listings/listingsSlice";
import { Link, useRouteMatch } from "react-router-dom";

export default function Favorites() {
  let match = useRouteMatch();
  console.log(match);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const regEx = "/(?<=r/).*/g";

  const handleClick = (subreddit) => {
    // console.log(e);
    // console.log(typeof e.target.innerHTML);
    // console.log(e.target.innerHTML.match(regEx));
    dispatch(loadListingsBySubreddit(subreddit));
  };

  return (
    <div className="Favorites">
      <ul>
        {favorites.map((favorite) => {
          const subreddit = favorite.subreddit;
          return (
            <Link
              to={`/r/${subreddit}`}
              onClick={() => dispatch(loadListingsBySubreddit(subreddit))}
            >
              <li>r/{subreddit}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
