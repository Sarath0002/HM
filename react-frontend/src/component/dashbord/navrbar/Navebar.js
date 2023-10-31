import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../images/Asset 1-8.png";
import "./navbar.css";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Navebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className="sticky-top">
        <Container>
          <img src={logo} id="logo" />
          <Nav className=" d">
            <Nav.Link href="#service" hidden>
              Service
            </Nav.Link>
            <button
              className="appoinbtn"
              onClick={() => navigate("/employelogin")}
            >
              Admin <IoIosArrowForward />
            </button>
            <button
              className="appoinbtn"
              onClick={() => navigate("/appoinment")}
            >
              Make Appointment <IoIosArrowForward />
            </button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navebar;
