import React, { useState } from "react";

export default function MessageCard() {
    return (
        <div className="bg-lightGrey rounded-3xl">
            <div className="overflow-x-auto">
                <p className="text-xl text-white font-bold text-center mt-6 tracking-widest">PESAN MASUK TERBARU</p>
                <div className="grid grid-cols-12 mb-5 md:mt-5 mt-3">
                    <div className="col-start-1 col-end-13 md:col-start-1 md:col-end-5">
                        <div className="h-48 m-4 bg-white rounded-3xl py-5 space-y-4 drop-shadow-2xl">
                            <p className="text-center font-semibold text-md">Nadia Nabila Salma</p>
                            <div className="text-sm ml-6 mr-6">
                                <p className="font-semibold">Politeknik Elektronika Negeri Surabaya</p>
                                <p>nabila@yahoo.com</p>
                                <p>081-xxx-xxx</p>
                            </div>
                            <p className="text-sm ml-6 mr-6">Lorem Ipsum is simply dummy text</p>
                        </div>
                    </div>
                    <div className="col-start-1 col-end-13 md:col-start-5 md:col-end-9">
                        <div className="h-48 m-4 py-5 bg-white rounded-3xl space-y-4 drop-shadow-2xl">
                            <p className="text-center font-semibold text-md">Nadia Nabila Salma</p>
                            <div className="text-sm ml-6 mr-6">
                                <p className="font-semibold">Politeknik Elektronika Negeri Surabaya</p>
                                <p>nabila@yahoo.com</p>
                                <p>081-xxx-xxx</p>
                            </div>
                            <p className="text-sm ml-6 mr-6">Lorem Ipsum is simply dummy text</p>
                        </div>
                    </div>
                    <div className="col-start-1 col-end-13 md:col-start-9 md:col-end-13">
                        <div className="h-48 m-4 py-5 bg-white rounded-3xl space-y-4 drop-shadow-2xl">
                            <p className="text-center font-semibold text-md">Nadia Nabila Salma</p>
                            <div className="text-sm ml-6 mr-6">
                                <p className="font-semibold">Politeknik Elektronika Negeri Surabaya</p>
                                <p>nabila@yahoo.com</p>
                                <p>081-xxx-xxx</p>
                            </div>
                            <p className="text-sm ml-6 mr-6">Lorem Ipsum is simply dummy text</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
