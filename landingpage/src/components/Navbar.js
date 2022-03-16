import React, { Component, useState, Suspense } from 'react';
import { Link } from "react-router-dom";
import {Navbar, Nav, Container,NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import cookies from 'js-cookie'
import classNames from 'classnames'
import i18n from "i18next";
import {initReactI18next, useTranslation } from "react-i18next";





import logo from '../assets/img/Logo.png';
import america from '../assets/img/america.png';
import indonesia from '../assets/img/indonesia.png';

require('./Translate')

function MenuNavbar() {

  const {t}= useTranslation();
  const onChange=(event) => {
    i18n.changeLanguage(event.target.value)
  }
    return (
    // <div className="App">
    <Suspense fallback="loading">
    <div className="lp-container">
         <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar sticky-top">
            <Container>
            <Navbar.Brand href="#home"> <img src={logo}></img></Navbar.Brand>
            {/* <Container classname="navbar d-flex justify-content-end mr-auto"> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="menu-navbar collapse navbar-collapse justify-content-end text-dark ">
                <Nav.Link href="/">{t("menuNav1")}</Nav.Link>
                <Nav.Link href="/Profile">{t("aboutBg")}</Nav.Link>
                <Nav.Link href="/service">{t("menuNav3")}</Nav.Link>
                <Nav.Link href="#about">{t("menuNav4")}</Nav.Link>
                <Nav.Link href="/Contact">{t("menuNav5")}</Nav.Link>
                <button type="button" className="btn text-white button-contact bg-danger" >{t("buttonNav")}</button>
                <select name="language" onChange={onChange}> 
                    <option value="en">
                    <img src={america}></img>
                    </option>
                    <option value="id">
                    <img src={indonesia}></img>
                    </option>
                    </select>
                {/* {languages.map(({ code, country_code}) => ( */}
                   {/* <li className="dropdown"><a href="#"><span className="text-secondary"><img src={america}></img></span> 
                   <i className="bi bi-chevron-down"></i></a> 
                  <ul>
                  <li key={""} className=""><a href="#"><img src={indonesia}></img></a>
                  </li>
                  </ul>
                  </li>  */}
          </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        </div> 
         </Suspense>
// </div>
        );
}
export default MenuNavbar;
