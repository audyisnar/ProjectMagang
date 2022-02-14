import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {

    return (

<div className="footer-basic">
        <footer className="align-content-center">
            <ul className="d-inline-block">
                <h4>Company</h4>
                <li className="bi bi-chevron-right"><a href="#home">Digital Marketing</a></li>
                <li className="bi bi-chevron-right"><a href="#feature">Bussines analysis</a></li>
                <li className="bi bi-chevron-right"><a href="#team">How it Work</a></li>
                <li className="bi bi-chevron-right"><a href="#contact">fix & flip</a></li>
                <li className="bi bi-chevron-right"><a href="#contact">Social Activation</a></li>
            </ul>
            <ul className="d-inline-block">
                <h4>Our Services</h4>
                <li className="bi bi-chevron-right"><a href="#DigitalMarketing">Digital Marketing</a></li>
                <li className="bi bi-chevron-right"><a href="#BusinessAnalysis">Bussines analysis</a></li>
                <li className="bi bi-chevron-right"><a href="#HowItWork">How it Work</a></li>
                <li className="bi bi-chevron-right"><a href="#Fix">fix & flip</a></li>
                <li className="bi bi-chevron-right"><a href="#Social">Social Activation</a></li>
            </ul>
            <ul className="d-inline-block">
                <h4>Quick Link</h4>
                <li className="bi bi-chevron-right"><a href="#DigitalMarketing">Contact Us</a></li>
                <li className="bi bi-chevron-right"><a href="#BusinessAnalysis">Term & Condition</a></li>
                <li className="bi bi-chevron-right"><a href="#HowItWork">How it Work</a></li>
                <li className="bi bi-chevron-right"><a href="#Fix">fix & flip</a></li>
                <li className="bi bi-chevron-right"><a href="#Social">Social Activation</a></li>
            </ul>
        </footer>
</div>
    );
}
export default Footer;
