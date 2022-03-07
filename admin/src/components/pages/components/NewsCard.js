import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../../../assets/styles/Components.css';

export default function NewsCard(props) {
    return (
        <div className="bg-blue rounded-3xl">
            <div className="overflow-x-auto">
                <p className="text-xl text-white font-bold text-center mt-8 mb-4 tracking-widest">BERITA TERBARU</p>
                <div className="relative flex flex-wrap justify-center bg-blue mb-10">
                    {props.contentNews.map((value, index) => (
                        <Link key={value._id} className="cards h-72 w-72 m-4 bg-white shadow-md rounded-3xl drop-shadow-2xl py-5 space-y-4 hover" 
                            to={`/detail-berita/${value.slug}`}
                        >
                            <div className="flex justify-center">
                                <img src={`http://192.168.195.195:5000${value.thumbnailURL}`} alt="Gambar Berita" className="h-40 w-60"/> 
                            </div>
                            <div className="text-sm ml-6 mr-6 space-y-4">
                                <p>{value.publishDate}</p>
                                <p className="font-semibold">{value.contents[0].title}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                {/* <div className="grid grid-cols-12 mb-5 md:mt-5 mt-3">
                    <div className="col-start-1 col-end-13 md:col-start-1 md:col-end-5">
                        <div className="h-96 m-4 bg-white rounded-3xl py-5 space-y-4 drop-shadow-2xl">
                            <div className="flex justify-center">
                                <img src={Logo} alt="Gambar Berita" className="h-40 w-64"/> 
                            </div>
                            <div className="text-sm ml-6 mr-6 space-y-6">
                                <p className="font-semibold">Bamsoet Minta RI Tak Ketinggalan Songsong Peradaban Baru di Metaverse</p>
                                <div>
                                    <p>halo</p>
                                    <p>Lorem Ipsum is simply dummy text</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-start-1 col-end-13 md:col-start-5 md:col-end-9">
                        <div className="h-96 m-4 py-5 bg-white rounded-3xl space-y-4 drop-shadow-2xl">
                            <div className="flex justify-center">
                                <img src={Logo} alt="Gambar Berita" className="h-40 w-64"/> 
                            </div>
                            <div className="text-sm ml-6 mr-6 space-y-6">
                                <p className="font-semibold">Bamsoet Minta RI Tak Ketinggalan Songsong Peradaban Baru di Metaverse</p>
                                <div>
                                    <p></p>
                                    <p>Lorem Ipsum is simply dummy text</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-start-1 col-end-13 md:col-start-9 md:col-end-13">
                        <div className="h-96 m-4 py-5 bg-white rounded-3xl space-y-4 drop-shadow-2xl">
                            <div className="flex justify-center">
                                <img src={Logo} alt="Gambar Berita" className="h-40 w-64"/> 
                            </div>
                            <div className="text-sm ml-6 mr-6 space-y-6">
                                <p className="font-semibold">Bamsoet Minta RI Tak Ketinggalan Songsong Peradaban Baru di Metaverse</p>
                                <div>
                                    <p></p>
                                    <p>Lorem Ipsum is simply dummy text</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
