import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadListingsBySubreddit = createAsyncThunk(
  "listings/loadListingsBySubreddit",
  async (subreddit) => {
    const data = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    const json = await data.json();
    return json.data.children.map((listing) => listing.data);
  }
);

export const listingsSlice = createSlice({
  name: "listings",
  initialState: {
    listings: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    addListing: (state, action) => {
      const { id } = action.payload;
      state.listings[id] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadListingsBySubreddit.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadListingsBySubreddit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.listings = action.payload;
      })
      .addCase(loadListingsBySubreddit.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const selectListings = (state) => state.listings.listings;
export const { addListing } = listingsSlice.actions;
export default listingsSlice.reducer;
