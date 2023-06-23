import "./App.css";
import Home from "./home/Home";
import MyNavbar from "./navbar/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import VideoDetails from "./videoDetails/VideoDetails";
import MainContent from "./home/main-content/MainContent";
import SearchResult from "./home/searchResult/SearchResult";
function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <div className="appWrapper">
          <Routes>
            <Route path="" element={<Navigate to="/home" />}></Route>
            <Route path="/" element={<Navigate to="/home" />}></Route>
            <Route path="home" element={<Home />}>
              <Route path="all" element={<MainContent />}></Route>
              <Route path="search" element={<SearchResult />}></Route>
              <Route path="" element={<Navigate to="/all" />}></Route>
              <Route path="*" element={<Navigate to="home/all" replace />} />
            </Route>
            <Route path="watch/:id" element={<VideoDetails />}></Route>
            <Route path="*" element={<Navigate to="/home/all" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
