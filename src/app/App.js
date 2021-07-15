import Listings from "../features/listings/Listings";
import { loadListingsBySubreddit } from "../features/listings/listingsSlice";
import SearchBar from "../components/searchBar/SearchBar";
import Favorites from "../components/favorites/Favorites";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
        <SearchBar />

        <div className="content">
          <Favorites sub="popular" />

          <Switch>
            <Route exact path="/" component={Listings} />
            <Route exact path={`/r/:subreddit`} component={Listings} />
            <Route path={`/search`} component={Listings} />
            <Route path={`/r/:subreddit/comments/:id`} component={Comments} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
