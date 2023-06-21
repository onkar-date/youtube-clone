import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ACTION_STATUS } from "../../shared/constants/status.constants";
import axios from "axios";
import {
  FASHION_BEAUTY_VIDEOS_DATA,
  GAMING_VIDEOS_DATA,
  LEARNING_VIDEOS_DATA,
  LIVE_VIDEOS_DATA,
  MOVIES_VIDEOS_DATA,
  MUSIC_VIDEOS_DATA,
  NEWS_VIDEOS_DATA,
  NEW_VIDEOS_DATA,
  SHOPPING_VIDEOS_DATA,
  SHORTS_VIDEOS_DATA,
  SPORTS_VIDEOS_DATA,
  TRENDING_VIDEOS_DATA,
} from "../../shared/mock/videos.mock";

const initialState = {
  fetchVideosStatus: ACTION_STATUS.IDLE,
  fetchVideosError: null,
  videos: [],
};

export const fetchVideos = createAsyncThunk(
  "videos/fetchAll",
  async (category) => {
    console.log(category);
    const BASE_URL = "https://youtube-v31.p.rapidapi.com";
    const options = {
      params: {
        maxResults: "50",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    // Mock Data due to limited API calls.
    const mockData = {
      Trending: TRENDING_VIDEOS_DATA,
      New: NEW_VIDEOS_DATA,
      Shorts: SHORTS_VIDEOS_DATA,
      Shopping: SHOPPING_VIDEOS_DATA,
      Music: MUSIC_VIDEOS_DATA,
      Movies: MOVIES_VIDEOS_DATA,
      Live: LIVE_VIDEOS_DATA,
      Gaming: GAMING_VIDEOS_DATA,
      News: NEWS_VIDEOS_DATA,
      Sport: SPORTS_VIDEOS_DATA,
      Learning: LEARNING_VIDEOS_DATA,
      "Fashion & Beauty": FASHION_BEAUTY_VIDEOS_DATA,
    };
    if (category in mockData) {
      return mockData[category];
    } else {
      const response = await axios.get(
        `${BASE_URL}/search?part=snippet&q=${category}`,
        options
      );
      return response.data;
    }

    // Actual API call
    // const response = await axios.get(
    //   `${BASE_URL}/search?part=snippet&q=${category}`,
    //   options
    // );
    // return response.data;
  }
);

export const videosSlice = createSlice({
  initialState,
  name: "videos",
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.fetchVideosStatus = ACTION_STATUS.LOADING;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.fetchVideosStatus = ACTION_STATUS.SUCCESS;
        state.videos = action.payload.items;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.fetchVideosStatus = ACTION_STATUS.FAILED;
        state.fetchVideosError = action.error.message || "something went wrong";
      });
  },
});

export const selectVideos = (state) => state.videosState.videos;
export const selectFetchVideosStatus = (state) =>
  state.videosState.fetchVideosStatus;
export const selectFetchVideosError = (state) =>
  state.videosState.fetchVideosError;

export default videosSlice.reducer;
