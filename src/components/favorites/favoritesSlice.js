import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [
      { subreddit: "AmITheAsshole" },
      { subreddit: "technology" },
      { subreddit: "PrequelMemes" },
      { subreddit: "Tinder" },
      { subreddit: "WesternAustralia" },
    ],
  },
  reducers: {},
});

export const selectFavorites = (state) => state.favorites.favorites;
export default favoritesSlice.reducer;

// export const getFavorites = createAsyncThunk(async (favorite) => {
//   const subreddit = favorite[subreddit];
//   const data = await fetch(`https://reddit.com/r/${subreddit}`);
//   const json = await data.json();
//   return json;
// });
