import React from "react";
import { Link } from "react-router-dom";
import {Navbar, Nav, Container,NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from '../assets/img/Logo.png';
import america from '../assets/img/america.png';
import indonesia from '../assets/img/indonesia.png';


function menuNavbar() {

    return (
    // <div className="App">
    <div className="lp-container">
         <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar sticky-top">
            <Container>
            <Navbar.Brand href="#home"> <img src={logo}></img></Navbar.Brand>
            {/* <Container classname="navbar d-flex justify-content-end mr-auto"> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="menu-navbar collapse navbar-collapse justify-content-end text-dark ">
                <Nav.Link href="/">Homepage</Nav.Link>
                <Nav.Link href="/Profile">Who We Are</Nav.Link>
                <Nav.Link href="/service">Service</Nav.Link>
                <Nav.Link href="#about">Portofolio</Nav.Link>
                <Nav.Link href="/Contact">Contact</Nav.Link>
                <button type="button" className="btn text-white button-contact bg-danger" >Let's Meet Up</button>
                <li className="dropdown"><a href="#"><span className="text-secondary"><img src={america}></img></span> 
            <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li className=""><a href="#"><img src={indonesia}></img></a></li>
              </ul>
          </li>
          </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        </div> 
// </div>
        );
}
export default menuNavbar;
