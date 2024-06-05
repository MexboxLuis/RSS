import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Parser from 'react-native-rss-parser';

export const fetchFeeds = createAsyncThunk('feed/fetchFeeds', async (url) => {
  const response = await fetch(url);
  const feed = await response.text();
  const parsedFeed = await Parser.parse(feed);
  return parsedFeed;
});

const feedSlice = createSlice({
  name: 'feed',
  initialState: {
    feeds: [],
    currentFeed: null,
    loading: false,
    error: null,
  },
  reducers: {
    setCurrentFeed(state, action) {
      state.currentFeed = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeeds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeeds.fulfilled, (state, action) => {
        state.loading = false;
        state.feeds = [action.payload]; 
      })
      .addCase(fetchFeeds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentFeed } = feedSlice.actions;
export default feedSlice.reducer;
