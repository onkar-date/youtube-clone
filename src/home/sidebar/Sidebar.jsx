import { AiFillHome } from "react-icons/ai";
import {
  BsLightningCharge,
  BsCollectionPlay,
  BsClock,
  BsBroadcast,
  BsTrophyFill,
  BsLightbulb,
} from "react-icons/bs";
import { BiLike, BiShoppingBag, BiMoviePlay, BiNews } from "react-icons/bi";
import { MdVideoLibrary, MdHistory, MdMusicNote } from "react-icons/md";
import { HiFire } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";
import { GiHanger } from "react-icons/gi";
import "./sidebar.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllSections, setCategory } from "./sidebarSlice";
import { fetchVideos } from "../videos/videosSlice";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sections = useSelector(selectAllSections);
  const getIcon = (icon) => {
    return {
      AiFillHome: <AiFillHome />,
      BsLightningCharge: <BsLightningCharge />,
      BsCollectionPlay: <BsCollectionPlay />,
      MdVideoLibrary: <MdVideoLibrary />,
      MdHistory: <MdHistory />,
      BsClock: <BsClock />,
      BiLike: <BiLike />,
      HiFire: <HiFire />,
      BiShoppingBag: <BiShoppingBag />,
      MdMusicNote: <MdMusicNote />,
      BiMoviePlay: <BiMoviePlay />,
      BsBroadcast: <BsBroadcast />,
      SiYoutubegaming: <SiYoutubegaming />,
      BiNews: <BiNews />,
      BsTrophyFill: <BsTrophyFill />,
      BsLightbulb: <BsLightbulb />,
      GiHanger: <GiHanger />,
    }[icon];
  };

  const selectCategory = (subSection) => {
    dispatch(setCategory({ subSection }));
    dispatch(fetchVideos(subSection.title));
    navigate("/home/all");
  };
  return (
    <div>
      {sections.map((section) => {
        return (
          <div className="section" key={section.id}>
            {section.title && (
              <h6 className="d-none d-md-block">{section.title}</h6>
            )}
            {section.subSections.map((subSection) => {
              return (
                <div
                  className={`${subSection.active ? "item active" : "item"}`}
                  key={subSection.id}
                  onClick={() => selectCategory(subSection)}
                >
                  {getIcon(subSection.icon)}
                  <span className="d-none d-md-block item-name">
                    {subSection.title}
                  </span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
