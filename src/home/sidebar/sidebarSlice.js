import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  sections: [
    {
      id: uuid(),
      title: null,
      subSections: [
        {
          id: uuid(),
          title: "Home",
          icon: "AiFillHome",
          active: true,
        },
        {
          id: uuid(),
          title: "Shorts",
          icon: "BsLightningCharge",
          active: false,
        },
        {
          id: uuid(),
          title: "Subscriptions",
          icon: "BsCollectionPlay",
          active: false,
        },
      ],
    },
    {
      id: uuid(),
      title: null,
      subSections: [
        {
          id: uuid(),
          title: "Library",
          icon: "MdVideoLibrary",
          active: false,
        },
        {
          id: uuid(),
          title: "History",
          icon: "MdHistory",
          active: false,
        },
        {
          id: uuid(),
          title: "Watch Later",
          icon: "BsClock",
          active: false,
        },
        {
          id: uuid(),
          title: "Liked Videos",
          icon: "BiLike",
          active: false,
        },
      ],
    },
    {
      id: uuid(),
      title: "Explore",
      subSections: [
        {
          id: uuid(),
          title: "Trending",
          icon: "HiFire",
          active: false,
        },
        {
          id: uuid(),
          title: "Shopping",
          icon: "BiShoppingBag",
          active: false,
        },
        {
          id: uuid(),
          title: "Music",
          icon: "MdMusicNote",
          active: false,
        },
        {
          id: uuid(),
          title: "Movies",
          icon: "BiMoviePlay",
          active: false,
        },
        {
          id: uuid(),
          title: "Live",
          icon: "BsBroadcast",
          active: false,
        },
        {
          id: uuid(),
          title: "Gaming",
          icon: "SiYoutubegaming",
          active: false,
        },
        {
          id: uuid(),
          title: "News",
          icon: "BiNews",
          active: false,
        },
        {
          id: uuid(),
          title: "Sport",
          icon: "BsTrophyFill",
          active: false,
        },
        {
          id: uuid(),
          title: "Learning",
          icon: "BsLightbulb",
          active: false,
        },
        {
          id: uuid(),
          title: "Fashion & Beauty",
          icon: "GiHanger",
          active: false,
        },
      ],
    },
  ],
  selectedCategory: "New",
};

export const sidebarSlice = createSlice({
  initialState,
  name: "sidebar",
  reducers: {
    setCategory(state, action) {
      return {
        ...state,
        sections: state.sections.map((section) => {
          return {
            ...section,
            subSections: section.subSections.map((subSection) => {
              return {
                ...subSection,
                active: subSection.id === action.payload.subSection.id,
              };
            }),
          };
        }),
        selectedCategory: action.payload.subSection.title,
      };
    },
  },
});

export const selectSelectedCategory = (state) =>
  state.sidebarState.selectedCategory;

export const selectAllSections = (state) => state.sidebarState.sections;

export const { setCategory } = sidebarSlice.actions;

export default sidebarSlice.reducer;
