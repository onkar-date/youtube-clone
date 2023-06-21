import { AiFillHome } from "react-icons/ai";
import {
  BsLightningCharge,
  BsCollectionPlay,
  BsClock,
  BsBroadcast,
  BsTrophyFill,
  BsLightbulb,
} from "react-icons/bs";
import { IoMdMusicalNote } from "react-icons/io";
import { BiLike, BiShoppingBag, BiMoviePlay, BiNews } from "react-icons/bi";
import { MdVideoLibrary, MdHistory, MdMusicNote } from "react-icons/md";
import { HiFire } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";
import { GrNotes } from "react-icons/gr";
import { GiHanger } from "react-icons/gi";
import "./sidebar.css";
export default function Sidebar() {
  return (
    <div>
      {/* Section 1 */}
      <div className="section">
        <div className="item active">
          <AiFillHome />
          <span className="item-name">Home</span>
        </div>

        <div className="item">
          <BsLightningCharge />
          <span className="item-name">Shorts</span>
        </div>

        <div className="item">
          <BsCollectionPlay />
          <span className="item-name">Subscriptions</span>
        </div>
      </div>

      {/* Section 2 */}
      <div className="section">
        <div className="item">
          <MdVideoLibrary />
          <span className="item-name">Library</span>
        </div>

        <div className="item">
          <MdHistory color="white" size={"20px"} />
          <span className="item-name">History</span>
        </div>

        <div className="item">
          <BsClock />
          <span className="item-name">Watch Later</span>
        </div>

        <div className="item">
          <BiLike />
          <span className="item-name">Liked Videos</span>
        </div>
      </div>

      {/* Section 3 */}
      <div className="section">
        <h6>Explore</h6>
        <div className="item">
          <HiFire />
          <span className="item-name">Trending</span>
        </div>

        <div className="item">
          <BiShoppingBag color="white" size={"20px"} />
          <span className="item-name">Shopping</span>
        </div>

        <div className="item">
          <MdMusicNote />
          <span className="item-name">Music</span>
        </div>

        <div className="item">
          <BiMoviePlay />
          <span className="item-name">Movies</span>
        </div>

        <div className="item">
          <BsBroadcast />
          <span className="item-name">Live</span>
        </div>

        <div className="item">
          <SiYoutubegaming color="white" size={"20px"} />
          <span className="item-name">Gaming</span>
        </div>

        <div className="item">
          <BiNews />
          <span className="item-name">News</span>
        </div>

        <div className="item">
          <BsTrophyFill />
          <span className="item-name">Sport</span>
        </div>

        <div className="item">
          <BsLightbulb />
          <span className="item-name">Learning</span>
        </div>

        <div className="item">
          <GiHanger />
          <span className="item-name">Fashion & Beauty</span>
        </div>
      </div>
    </div>
  );
}
