import React from "react";
import { selectFavorites } from "./favoritesSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Favorites() {
  const favorites = useSelector(selectFavorites);

  return (
    <div className="Favorites">
      <ul>
        {favorites.map((favorite) => {
          const subreddit = favorite.subreddit;
          return (
            <Link to={`/r/${subreddit}`} key={subreddit}>
              <li>r/{subreddit}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
