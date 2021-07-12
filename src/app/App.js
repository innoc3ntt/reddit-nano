import Listings from "../features/listings/Listings";
import SearchBar from "../components/searchBar/SearchBar";
import Favorites from "../components/favorites/Favorites";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faChevronDown, faChevronUp);

function App() {
  return (
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
        <Favorites />
        <Listings className="listings" />
      </div>
    </div>
  );
}

export default App;
