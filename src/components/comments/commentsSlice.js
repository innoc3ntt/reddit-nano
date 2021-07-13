import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCommentsById = createAsyncThunk(
  "listings/loadCommentsById",
  async (id) => {
    const data = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    const json = await data.json();
    return json.data.children.map((listing) => listing.data);
  }
);

export const listingsSlice = createSlice({
  name: "listings",
  initialState: {
    listingId: "",
    isLoading: false,
    hasError: false,
    subreddit: "popular",
    comments: [],
  },
  reducers: {
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCommentsById.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadCommentsById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.listings = action.payload;
      })
      .addCase(loadCommentsById.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const selectListings = (state) => state.listings.listings;
export const { } = listingsSlice.actions;
export default listingsSlice.reducer;
