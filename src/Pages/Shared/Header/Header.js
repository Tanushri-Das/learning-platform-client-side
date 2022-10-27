import React from "react";
import { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Image2 from '../../../Assests/Images/image2.png'

import { FaUser } from "react-icons/fa";
import "tippy.js/dist/tippy.css";
import '../Header/Header.css';
import DarkLightTheme from '../../../Pages/DarkLightTheme/DarkLightTheme';
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSidenav/LeftSideNav";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <img
          src={Image2}
          width="100"
          height="80"
          className="d-inline-block align-top me-3"
          alt=""
          srcset=""
        />
        <Navbar.Brand>
          <Link to="/">Dream CSE</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/courses" className="me-3">Courses</Link>
            <Link href="#features" className="me-3">FAQ</Link>
            <Link to="/blog" className="me-3">Blog</Link>
          </Nav>
          <Nav>
            <>
              {user?.uid ? (
                <>
                  <Button variant="light" onClick={handleLogOut}>
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" className="me-3">Login</Link>
                  <Link to="/register" className="me-3">Register</Link>
                </>
              )}
            </>
          
              <Link eventKey={2}>
                {user?.photoURL ? (
                  <Image title={user?.displayName}
                    style={{ height: "50px" }}
                    roundedCircle
                    src={user.photoURL}
                  ></Image>
                ) : (
                  <FaUser></FaUser>
                )}
                
              </Link>
              <DarkLightTheme></DarkLightTheme>
          </Nav>
          <div className="d-lg-none pt-4">
              <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
