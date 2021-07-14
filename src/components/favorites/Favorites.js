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
          const { subreddit, icon_img } = favorite;
          return (
            <Link to={`/r/${subreddit}`} key={subreddit} className="text-link">
              <li>
                <img src={icon_img} alt={subreddit} className="icons" />
                r/{subreddit}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
