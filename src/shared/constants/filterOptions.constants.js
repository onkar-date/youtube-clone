import { v4 as uuid } from "uuid";
export const FILTER_OPTIONS = [
  {
    id: uuid(),
    name: "UPLOAD DATE",
    options: ["Last Hour", "Today", "This week", "This month", "This year"],
  },
  {
    id: uuid(),
    name: "TYPE",
    options: ["Video", "Channel", "Playlist", "Movie"],
  },
  {
    id: uuid(),
    name: "DURATION",
    options: ["Under 4 minutes", "4 - 20 minutes", "Over 20 minutes"],
  },
  {
    id: uuid(),
    name: "FEATURES",
    options: [
      "Live",
      "4K",
      "HD,",
      "Subtitles/CC",
      "Creative Commons",
      "360°",
      "VR180",
      "3D,",
      "HDR",
      "Location",
      "Purchased",
    ],
  },
  {
    id: uuid(),
    name: "SORT BY",
    options: ["Relevance", "Upload date", "View count", "Rating"],
  },
];
