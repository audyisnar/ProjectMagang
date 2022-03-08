import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import imgService from '../assets/img/imgService.png';
import about from '../assets/img/about.png';


function Service() {
    return (
        <div className="servicePage">
  {/* -----background------ */}
<div className="background">
<div className="position-relative Header">
            <img className="cover" src={imgService} alt="" />
            <div className="position-absolute showcase-container">
            <div className="text-header">
            <h5 className="text-head">WHAT WE DO</h5>
            </div>
            </div>
</div>
</div>
<div className="about">

<div className="container" data-aos="fade-up">
  <div className="row gx-0">
  <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
      <div className="image">
    <img className="img-fluid" src={about} alt="" />
    </div>
    </div>
    <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
      <div className="content">
        <h3></h3>
        <h2>Website Development</h2>
        <p>
Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
        </p>
      </div>
    </div>
  </div>
</div>
</div>

<div className="about">
<div className="container" data-aos="fade-up">
  <div className="row gx-0">

    <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
      <div className="content">
        <h3>Who We Are</h3>
        <h2>Web & Mobile Apps</h2>
        <p>
Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
        </p>
      </div>
    </div>

    <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
      <div className="image">
    <img className="img-fluid" src={about} alt="" />
    </div>
    </div>
  </div>
</div>
</div>
</div>

        );
    }
    export default Service;
    
