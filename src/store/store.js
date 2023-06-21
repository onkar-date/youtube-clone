import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../home/videos/videosSlice";
import sidebarReducer from "../home/sidebar/sidebarSlice";
export const store = configureStore({
  reducer: {
    videosState: videosReducer,
    sidebarState: sidebarReducer,
  },
});
