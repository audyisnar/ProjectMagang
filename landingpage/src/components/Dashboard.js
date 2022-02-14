import React, { Component, useState } from 'react';
import { Link } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css';
import mockup2 from '../assets/img/header.png';
import {Navbar, Nav, Container,NavDropdown } from "react-bootstrap";
import axios from 'axios';

import logo from '../assets/img/Logo.png';
import about from '../assets/img/about.png';
import headerAction from '../assets/img/background.png';
import icon1 from '../assets/img/Brand.png';
import icon2 from '../assets/img/website.png';
import icon3 from '../assets/img/seo.png';
import icon4 from '../assets/img/smm.png';
import feature1 from '../assets/img/manage.png';
import feature2 from '../assets/img/powerful.png';
import feature3 from '../assets/img/design.png';
import news1 from '../assets/img/picture1.png';
import news2 from '../assets/img/picture2.png';
import news3 from '../assets/img/picture3.png';

AOS.init({
  once: true,
});

function Dashboard() {

  return (
    <div classNameName="App">
      <div className="lp-container">
      <div sticky="top" collapseOnSelect expand="lg" variant="dark" className='navbar sticky-top'>
          <Navbar >
            <Container classname="navbar">
            <img src={logo}></img>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="menu-navbar me-auto">
                <Nav.Link href="#home">Homepage</Nav.Link>
                <Nav.Link href="#feature">Who We Are</Nav.Link>
                <Nav.Link href="#service">Service</Nav.Link>
                <Nav.Link href="#about">Portofolio</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
              <Nav>
                {/* <Nav.Link href="https://user.calorilin.me/">Language</Nav.Link> */}
                {/* <li><a class="getstarted scrollto" href="#about">Lets Meet Up</a></li> */}
                <li className="dropdown"><a href="#"><span className="text-secondary">Language</span> 
            <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">English</a></li>
              <li><a href="#">Indonesia</a></li>
              </ul>
          </li>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        </div> 

          {/* Header showcase */}
          <div className="position-relative Header">
            <img className="cover" src={mockup2} alt="" />
            <div className="position-absolute showcase-container">
              <div className="left-showcase">
                <h1 className="showcase-head">WE BUILD FUTURE</h1>
                <h2 className="showcase-title">NOT JUST TECH</h2>
            </div>
                <div className="position-absolute showcase-Button">
                <div className="text-center text-lg-start">
                  <a href="#about" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Start Now</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                  </div>
              </div>
            </div>
          </div>
    </div>
    
    {/* < Profile > */}
    <div className="about">

<div className="container" data-aos="fade-up">
  <div className="row gx-0">

    <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
      <div className="content">
        <h3>Who We Are</h3>
        <h2>Creative Digital Agency for Better World</h2>
        <p>
Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
        </p>
        <div className="text-center text-lg-start">
          <a href="#" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
            <span>Learn More</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>

    <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
      <div className="image">
    <img className="img-fluid" src={about} alt="" />
    </div>
    </div>
  </div>
</div>
{/* <--service--> */}
    <div className="service">
      <div className="title justify-content-center">
        <div className="text-center">
            <h5 className="text-info">Our Service</h5>
            <h1 className="text-black">WHAT WE DO</h1>
        </div>
    </div>
      <div className="content-service">
        <div className="d-flex flex-row">
          <div className="d-flex flex-row w-100">
            <div className="">
              <div className="icon d-flex justify-content-center align-items-center bg-info">
                <img className="" src={icon1} alt="" />
              </div>
            </div>
            <div className="">
              <h5>Brand Strategic</h5>
              <p className="deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>
          </div>
          <div className="d-flex flex-row w-100"> 
          <div className="">
            <div className="icon d-flex justify-content-center align-items-center bg-info">
            <img className="" src={icon2} alt="" />
            </div>
            </div>
            <div className="">
              <h5>Web Development</h5>
              <p className="deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>
          </div>
          <div className="d-flex flex-row w-100">
          <div className="">
            <div className="icon d-flex justify-content-center align-items-center bg-danger">
            <img className="" src={icon2} alt="" />
            </div>
            </div>
            <div className="">
              <h5>Web Apps</h5>
              <p classname="deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere.</p>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row w-100">
        <div className="d-flex flex-row w-100">
            <div className="">
              <div className="icon d-flex justify-content-center align-items-center bg-info">
                <img className="" src={icon3} alt="" />
              </div>
            </div>
            <div className="">
              <h5>SEO Optimization</h5>
              <p className="deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>
          </div>
          <div className="d-flex flex-row w-100">
            <div className="">
              <div className="icon d-flex justify-content-center align-items-center bg-info">
                <img className="" src={icon3} alt="" />
              </div>
            </div>
            <div className="">
              <h5>SEO Optimization</h5>
              <p className="deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>
          </div>
          <div className="d-flex flex-row w-100">
            <div className="">
              <div className="icon d-flex justify-content-center align-items-center bg-danger">
                <img className="" src={icon4} alt="" />
              </div>
            </div>
            <div className="">
              <h5>SMM Marketing</h5>
              <p className="deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>
          </div>
        </div>
      </div>
    </div>

{/* -----background------ */}
<div className="position-relative Header">
            <img className="cover" src={headerAction} alt="" />
            <div className="position-absolute showcase-container">
            <div className="text-header">
            <h5 className="text-head">CALL TO ACTION</h5>
            <h2 className="text-title">NOT JUST TECH</h2>
            <p className="text-description">Aliquyam erat, sed diam voluptua. At vero eos et accusam et jus</p>
            </div>
            </div>
</div>

{/* ------Features-------- */}

<div className="features">
<div className="title justify-content-center">
        <div className="text-center">
            <h5 className="text-info">Our Features</h5>
            <h1 className="text-black">WHY CHOOSE US</h1>
            <p className="text-black">The purpose of lorem ipsum is to create a natural looking block of text that doesn'tdistract
from the layout laying out pages with meaningle</p>
        </div>
    </div>
  <div className="content-feature">
  <div className="d-flex flex-row justify-content-center">
          <div className="w-25">
            <div className="">
              <h5 className="text-center">Easily Managable</h5>
              <p className="text-center deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>
            <div className="d-flex justify-content-center">
              <div className="icon d-flex justify-content-center align-items-center rounded-circle bg-info">
                <img className="" src={feature1} alt="" />
              </div>
            </div>
            </div>
            <div className="w-25">
            <div className="">
              <h5 className="text-center">Powerful Codes</h5>
              <p className="text-center deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>
            <div className="d-flex justify-content-center">
              <div className="icon d-flex justify-content-center align-items-center rounded-circle bg-info">
                <img className="" src={feature2} alt="" />
              </div>
            </div>
            </div>
            <div className="w-25">
            <div className="">
              <h5 className="text-center">Clean Design</h5>
              <p className="text-center deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>
            <div className="d-flex justify-content-center">
              <div className="icon d-flex justify-content-center align-items-center rounded-circle bg-info">
                <img className="" src={feature3} alt="" />
              </div>
            </div>
            </div>
  </div>
  </div>

  {/* ----latest news----- */}
<div className="news">
  <div className="title justify-content-center">
        <div className="text-center">
            <h1 className="text-black">Never Miss Latest News</h1>
            <p className="text-black">The purpose of lorem ipsum is to create a natural looking block of text that doesn'tdistract
from the layout laying out pages with meaningle</p>
        </div>
    </div>

    <div className="content-news">
    <div className="d-flex flex-row justify-content-center">
          <div className="bg-black contentNews">
              <div className="d-flex justify-content-center align-items-center">
                <img className="imageNews" src={news1} alt="" />
              </div>
            <div className="pl-4">
              <h5>Brand Strategic</h5>
              <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>
          </div>
          <div className="">
              <div className="d-flex justify-content-center align-items-center">
                <img className="" src={news2} alt="" />
              </div>
            <div className="">
              <h5>Brand Strategic</h5>
              <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>
          </div>
          <div className="">
              <div className="bg-secondary">
                <img className="" src={news3} alt="" />
              </div>
            <div className="">
              <h5>Brand Strategic</h5>
              <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>
          </div>
    </div>
    </div>
</div>
</div>
</div>
</div>
  );
}
export default Dashboard;
