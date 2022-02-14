import React, { useState } from "react";
import Logo from '../../../assets/img/Logo.png';

export default function NewsCard() {
    return (
        <div className="bg-blue rounded-3xl">
            <div className="overflow-x-auto">
                <p className="text-xl text-white font-bold text-center mt-6 tracking-widest">BERITA TERBARU</p>
                <div className="grid grid-cols-12 mb-5 md:mt-5 mt-3">
                    <div className="col-start-1 col-end-13 md:col-start-1 md:col-end-5">
                        <div className="h-96 m-4 bg-white rounded-3xl py-5 space-y-4 drop-shadow-2xl">
                            <div className="flex justify-center">
                                <img src={Logo} alt="Gambar Berita" className="h-40 w-64"/> 
                            </div>
                            <div className="text-sm ml-6 mr-6 space-y-6">
                                <p className="font-semibold">Bamsoet Minta RI Tak Ketinggalan Songsong Peradaban Baru di Metaverse</p>
                                <div>
                                    <p>22-02-2022</p>
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
                                    <p>22-02-2022</p>
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
                                    <p>22-02-2022</p>
                                    <p>Lorem Ipsum is simply dummy text</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
