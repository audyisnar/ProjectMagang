import React, { Component, useState, Suspense } from 'react';
import { Link } from "react-router-dom";
import {Navbar, Nav, Container,NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import cookies from 'js-cookie'
import classNames from 'classnames'
import i18n from "i18next";
import {initReactI18next, useTranslation } from "react-i18next";





import logo from '../assets/img/Logo.png';
// import america from '../assets/img/america.png';
// import indonesia from '../assets/img/indonesia.png';

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
                <Nav.Link href="/">Homepage</Nav.Link>
                <Nav.Link href="/Profile">Who We Are</Nav.Link>
                <Nav.Link href="/service">Service</Nav.Link>
                <Nav.Link href="#about">Portofolio</Nav.Link>
                <Nav.Link href="/Contact">Contact</Nav.Link>
                <button type="button" className="btn text-white button-contact bg-danger" >Let's Meet Up</button>
                <select name="language" onChange={onChange}> 
                    <option value="en">
                      english
                    </option>
                    <option value="id">
                      indonesia
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
                  
                  {/* <div className="dropdown">
            <button
              className="btn btn-link dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {/* <GlobeIcon /> */}
            {/* </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <span className="dropdown-item-text">{t('language')}</span>
              </li>
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <a
                    href="#"
                    className={classNames('dropdown-item', {
                      disabled: currentLanguageCode === code,
                    })}
                    onClick={() => {
                      i18next.changeLanguage(code)
                    }}
                  >
                    <span
                      className={`flag-icon flag-icon-${country_code} mx-2`}
                      style={{
                        opacity: currentLanguageCode === code ? 0.5 : 1,
                      }}
                    ></span>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
            {/* // <i className="bi bi-chevron-down"></i></a> */}
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
