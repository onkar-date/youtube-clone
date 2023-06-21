import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiVideoAddLine } from "react-icons/ri";
import "./navbar.css";
import SearchBar from "../searchbar/Searchbar";
import { BsBell } from "react-icons/bs";
function MyNavbar() {
  return (
    <>
      <Navbar data-bs-theme="dark" variant="light" className="pb-3 dark-nav">
        <Container fluid>
          <RxHamburgerMenu
            color="white"
            className="brand-name me-4"
            size={"20px"}
          />
          <img src="./youtubeLogo.svg" className="youtube-logo"></img>
          <Navbar.Brand href="#home" className="brand-name ms-1">
            YouTube
          </Navbar.Brand>
          <Nav className="mx-auto">
            <SearchBar />
          </Nav>

          <Nav>
            <div className="d-flex align-items-center me-4">
              <RiVideoAddLine color="white" size={"20px"} />
            </div>
            <div className="d-flex align-items-center me-4">
              <BsBell color="white" size={"20px"} />
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
