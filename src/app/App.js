import "./App.css";
import Listings from "../features/listings/Listings";
import SearchBar from "../components/searchBar/SearchBar";

function App() {
  return (
    <div>
      <SearchBar />
      <nav></nav>
      <Listings />
    </div>
  );
}

export default App;
