import React from "react";
import { getFavorites, selectFavorites } from "./favoritesSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadListingsBySubreddit } from "../../features/listings/listingsSlice";

export default function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  return (
    <div className="Favorites">
      <ul>
        {favorites.map((favorite) => {
          const subreddit = favorite.subreddit;
          return (
            <li>
              <button
                onClick={() => {
                  dispatch(loadListingsBySubreddit(subreddit));
                }}
              >
                r/{subreddit}{" "}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
