import Sidebar from "./sidebar/Sidebar";
import "./home.css";
import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="sidebar-section">
          <Sidebar></Sidebar>
        </div>
        <div className="main-content-section">
          <Outlet />
        </div>
      </div>
    </>
  );
}
