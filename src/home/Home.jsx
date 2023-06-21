import MainContent from "./main-content/MainContent";
import Sidebar from "./sidebar/Sidebar";
import "./home.css";
export default function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="sidebar-section">
          <Sidebar></Sidebar>
        </div>
        <div className="main-content-section">
          <MainContent></MainContent>
        </div>
      </div>
    </>
  );
}
