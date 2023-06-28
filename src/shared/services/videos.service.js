import axios from "axios";

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
    const response = await axios.get(
      `${BASE_URL}/youtube/search?part=snippet&q=${category}`,
      options
    );
    return response.data;
  },

  getVideoDetails: async (videoId) => {
    const options = {
      params: {
        part: "contentDetails,snippet,statistics",
        id: videoId,
      },
    };
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
    const response = await axios.get(`${BASE_URL}/youtube/channels`, options);
    return response.data;
  },

  getRelatedVideos: async (relatedToVideoId) => {
    const options = {
      params: {
        part: "snippet,id",
        relatedToVideoId,
        type: "video",
      },
    };
    const response = await axios.get(`${BASE_URL}/youtube/related`, options);
    return response.data;
  },

  getVideoCommentThreads: async (videoId) => {
    const options = {
      params: {
        part: "snippet",
        videoId,
        maxResults: 100,
      },
    };
    const response = await axios.get(`${BASE_URL}/youtube/commentThreads`, options);
    return response.data;
  }
};
