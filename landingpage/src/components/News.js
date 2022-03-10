import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from 'axios';

import news1 from '../assets/img/picture1.png';
import news2 from '../assets/img/picture2.png';
import news3 from '../assets/img/picture3.png';


import detailNews from "./detailNews"

function News() {

  const [apiData, setApiData] = useState([]);

    useEffect(() => {
        
          axios.get("http://192.168.195.195:5000/api/v1/newspost/latest?publish=1&limit=4")
                .then((res) => {
                  console.log(res.data);
                  setApiData(res.data.latestNewspost);
                  }).catch((err) => {
                  console.log(err);
                });
    },[]);
    console.log(apiData)

    return (
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
          {/* <div className="contentNews"> */}
          {apiData.map((value, index) => (
          <Link to="/detailNews" key={value._id} className="mx-auto w-25">
              <div className="d-flex justify-content-center align-items-center">
                <img className="imageNews" src={`http://192.168.195.195:5000${value.thumbnailURL}`} alt="" />
              </div>
            <div className="pl-4">
              <h5>{value.contents[1].title}</h5>
              <p className="text-primary">{value.publishDate} </p>
            </div>
          </Link>
          ) ) }

          {/* </div> */}
          {/* <div className="mx-auto w-25">
          <div className="">
              <div className="d-flex justify-content-center align-items-center">
                <img className="imageNews" src={news2} alt="" />
              </div>
            <div className="pl-4">
              <h5>The purpose of lorem looking block.</h5>
              <p className="text-primary">january 22,2022 </p>
            </div>
          </div>
          </div>
          <div className="mx-auto w-25">
          <div className="">
              <div className="d-flex justify-content-center align-items-center">
                <img className="imageNews" src={news3} alt="" />
              </div>
            <div className="pl-4">
              <h5>The purpose of lorem looking block.</h5>
              <p className="text-primary">january 25, 2022 </p>
            </div>
          </div>
          </div> */}
    </div>
    </div>
</div>

        );
    }
    export default News;     