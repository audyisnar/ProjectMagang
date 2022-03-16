import React, { Component, useState, Suspense } from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import i18n from "i18next";
import {initReactI18next, useTranslation } from "react-i18next";

import imgService from '../assets/img/imgService.png';
import about from '../assets/img/about.png';

require('./Translate')

function Service() {
  const {t}= useTranslation();

    return (
<Suspense fallback="loading">
        <div className="servicePage">
  {/* -----background------ */}
<div className="background">
<div className="position-relative Header">
            <img className="cover" src={imgService} alt="" />
            <div className="position-absolute showcase-container">
            <div className="text-header">
            <h5 className="text-head">{t("serviceBg2")}</h5>
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
        <h2>{t("servicePg1")}</h2>
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
        <h3>{t("aboutBg")}</h3>
        <h2>{t("servicePg2")}</h2>
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
</Suspense>
        );
    }
    export default Service;
    
