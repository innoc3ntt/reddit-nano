import Listings from "../features/listings/Listings";
import { loadListingsBySubreddit } from "../features/listings/listingsSlice";
import SearchBar from "../components/searchBar/SearchBar";
import Favorites from "../components/favorites/Favorites";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";

library.add(fab, faChevronDown, faChevronUp);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadListingsBySubreddit("popular"), [dispatch]);
  });

  return (
    <Router>
      <div className="App">
        <div className="Search-bar">
          <Link to="/">
            <FontAwesomeIcon
              icon={["fab", "reddit"]}
              size="3x"
              color="#FF5700"
              className="App-logo"
            />
          </Link>

          <div>
            <Link to="/" className="text-link">
              <span className="titleReddit">Reddit </span>
              <span className="titleNano">NANO</span>
            </Link>
          </div>

          <SearchBar />
        </div>
        <div className="content">
          <Favorites sub="popular" />

          <Switch>
            <Route exact path="/" component={Listings} />
            <Route exact path={`/r/:subreddit`} component={Listings} />
            <Route path={`/r/:subreddit/comments/:id`} component={Comments} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
