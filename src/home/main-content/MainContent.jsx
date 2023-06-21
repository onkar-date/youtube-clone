import Recommendations from "../recommendations/Recommendations";
import { Videos } from "../videos/Videos";
import "./main-content.css";
export default function MainContent() {
  return (
    <div className="main-content-wrapper px-3">
      <div className="video-category">
        <Recommendations></Recommendations>
      </div>
      <Videos></Videos>
    </div>
  );
}
