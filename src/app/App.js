import Listings from "../features/listings/Listings";
import SearchBar from "../components/searchBar/SearchBar";
import Favorites from "../components/favorites/Favorites";

function App() {
  return (
    <div className="App">
      <div className="SearchBar">
        <SearchBar />
      </div>
      <Favorites />
      <Listings />
    </div>
  );
}

export default App;
