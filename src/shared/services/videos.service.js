import axios from "axios";

import {
  CHANNEL_MOCK_UCPLfrdK84czJXYf6QA7OW9A,
  FASHION_BEAUTY_VIDEOS_DATA,
  GAMING_VIDEOS_DATA,
  LEARNING_VIDEOS_DATA,
  LIVE_VIDEOS_DATA,
  MOVIES_VIDEOS_DATA,
  MUSIC_VIDEOS_DATA,
  NEWS_VIDEOS_DATA,
  NEW_VIDEOS_DATA,
  SEARCH_RESULT_DANCE,
  SHOPPING_VIDEOS_DATA,
  SHORTS_VIDEOS_DATA,
  SPORTS_VIDEOS_DATA,
  SUGGESTED_VIDEOS_QCVMtrDz1w,
  TRENDING_VIDEOS_DATA,
  WATCH_VIDEO_MOCK_QCVMtrDz1w,
  WATCH_VIDEO_MOCK_odMuBLbWhTM,
} from "../mock/videos.mock";

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

  // watch video mocks
  odMuBLbWhTM: WATCH_VIDEO_MOCK_odMuBLbWhTM,
  "-QCVMtrDz1w": WATCH_VIDEO_MOCK_QCVMtrDz1w,

  // Channel Mock
  UCPLfrdK84czJXYf6QA7OW9A: CHANNEL_MOCK_UCPLfrdK84czJXYf6QA7OW9A,

  // Related Videos Mock
  "related_-QCVMtrDz1w": SUGGESTED_VIDEOS_QCVMtrDz1w,

  // search result
  dance: SEARCH_RESULT_DANCE,
};

const BASE_URL = process.env.REACT_APP_BASE_URL;
console.log(BASE_URL);

export const VideosService = {
  fetchByCategory: async (category) => {
    const options = {
      params: {
        maxResults: "50",
        region: "IN",
      }
    };
    if (category in mockData) {
      return mockData[category];
    } else {
      const response = await axios.get(
        `${BASE_URL}/youtube/search?part=snippet&q=${category}`,
        options
      );
      return response.data;
    }
  },

  getVideoDetails: async (videoId) => {
    const options = {
      params: {
        part: "contentDetails,snippet,statistics",
        id: videoId,
      },
    };
    if (videoId in mockData) {
      return mockData[videoId];
    }
    const response = await axios.get(`${BASE_URL}/youtube/videos`, options);
    return response.data;
  },

  getChannelDetails: async (channelId) => {
    const options = {
      params: {
        part: "snippet,statistics",
        id: channelId,
      },
    };
    if (channelId in mockData) {
      return mockData[channelId];
    }
    const response = await axios.get(`${BASE_URL}/youtube/channels`, options);
    return response.data;
  },

  getRelatedVideos: async (relatedVideoId) => {
    const options = {
      params: {
        part: "snippet,id",
        relatedVideoId,
        type: "video",
      },
    };
    if (`related_${relatedVideoId}` in mockData) {
      return mockData[`related_${relatedVideoId}`];
    }
    const response = await axios.get(`${BASE_URL}/youtube/search`, options);
    return response.data;
  },
};
