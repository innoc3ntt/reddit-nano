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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import ROUTES from "./routes";

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
          <FontAwesomeIcon
            icon={["fab", "reddit"]}
            size="3x"
            color="#FF5700"
            className="App-logo"
          />
          <div>
            <span className="titleReddit">Reddit </span>
            <span className="titleNano">NANO</span>
          </div>
          <SearchBar />
        </div>
        <div className="content">
          <Favorites sub="popular" />

          <Switch>
            <Route exact path="/">
              <Listings />
            </Route>
            <Route path={`/r/:subreddit`}>
              <Listings />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
