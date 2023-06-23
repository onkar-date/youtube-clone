import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ACTION_STATUS } from "../../shared/constants/status.constants";
import { VideosService } from "../../shared/services/videos.service";

const initialState = {
  fetchVideosStatus: ACTION_STATUS.IDLE,
  fetchVideosError: null,
  videos: [],
};

export const fetchVideos = createAsyncThunk(
  "videos/fetchAll",
  async (category) => {
    const videos = await VideosService.fetchByCategory(category);
    return videos;
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
