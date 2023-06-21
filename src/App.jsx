import "./App.css";
import Home from "./home/Home";
import MyNavbar from "./navbar/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <MyNavbar />
      <BrowserRouter>
        <div className="appWrapper">
          {/* <Header></Header> */}
          <Routes>
            <Route path="" element={<Navigate to="/home" />}></Route>
            <Route path="/" element={<Navigate to="/home" />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
          {/* <Footer /> */}
        </div>
        {/* <ToastContainer position="bottom-right" autoClose={2000} /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
