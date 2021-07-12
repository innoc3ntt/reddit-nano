import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadListingsBySubreddit = createAsyncThunk(
  "listings/loadListingsBySubreddit",
  async () => {
    const data = await fetch("https://www.reddit.com/r/popular.json");
    const json = await data.json();
    return json;
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
  extraReducer: (builder) => {
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
