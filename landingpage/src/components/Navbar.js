import React from "react";
import { Link } from "react-router-dom";
import {Navbar, Nav, Container,NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useTranslation} from "react-i18next";
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'



import logo from '../assets/img/Logo.png';
import america from '../assets/img/america.png';
import indonesia from '../assets/img/indonesia.png';


const languages = [
  {
    code: 'id',
    name: 'Indonesia',
    country_code: 'id'

  },
  {
    code: 'en',
    name: 'English',
    country_code: 'us'

  },
]
function MenuNavbar() {

  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  // useEffect(() => {
  //   console.log('Setting page stuff')
  //   document.body.dir = currentLanguage.dir
  document.title = t('Kyodo News Indonesia')
  // }, [currentLanguage, t])


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
              
                {/* {languages.map(({ code, country_code}) => ( */}
                   <li className="dropdown" onClick={() => i18next.changeLanguage ("")} disabled={""}><a href="#"><span className="text-secondary"><img src={america}></img></span> 
                   <i className="bi bi-chevron-down"></i></a> 
                  <ul>
                  <li key={""} className=""><a href="#"><img src={indonesia}></img></a>
                  </li>
                  </ul>
                  </li> 
                  
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
// </div>
        );
}
export default MenuNavbar;
