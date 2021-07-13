import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCommentsById = createAsyncThunk(
  "listings/loadCommentsById",
  async ({ id, subreddit }) => {
    const data = await fetch(
      `https://www.reddit.com/r/${subreddit}/comments/${id}.json`
    );
    const json = await data.json();
    return json;
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    id: "",
    isLoading: false,
    hasError: false,
    subreddit: "popular",
    comments: [],
    meta: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCommentsById.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadCommentsById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.meta = action.payload[0];
        state.comments = action.payload[1].data.children;
      })
      .addCase(loadCommentsById.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const selectComments = (state) => state.comments.comments;
export const selectId = (state) => state.comments.id;
export const selectSubreddit = (state) => state.comments.subreddit;
export const {} = commentsSlice.actions;
export default commentsSlice.reducer;
