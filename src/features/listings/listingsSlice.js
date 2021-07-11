import { createSlice } from "@reduxjs/toolkit";

export const listingsSlice = createSlice({
  name: "listings",
  initialState: { listings: {} },
  reducers: {
    addListing: (state, action) => {
      const { id } = action.payload;
      state.listings[id] = action.payload;
    },
  },
});

export const selectListings = (state) => state.listings.listings;
export const { addListing } = listingsSlice.actions;
export default listingsSlice.reducer;
