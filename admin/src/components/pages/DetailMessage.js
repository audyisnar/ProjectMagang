import React, { useState } from "react";
import { Link } from "react-router-dom";
import TableCard from './components/MessageTableCard';
import Sidebar from "./components/Sidebar";

const DetailMessage = () => {
  return (
    <div>
        <Sidebar />
        <div className="md:ml-64">
            <div className="mt-8 px-6 md:px-8 h-auto">
                <Link className="hover:bg-blue hover:text-white text-grey h-10 w-10 flex items-center justify-center rounded-full space-x-1" to="/pesan">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                </Link>
                <div className="mt-4 mb-10 p-14 bg-white shadow-2xl space-y-10 rounded-xl mx-auto max-w-full">
                    <div className="text-netral">
                        <div className="font-bold text-lg">
                            Nadia Nabila Salma
                        </div>
                        <div className="font-bold text-md">
                            Politeknik Elektronika Negeri Surabaya
                        </div>
                        <div className="text-md">
                            Nadia@yahoo.com
                        </div>
                        <div className="text-md mb-8">
                            081-xxx-xxx-xxx
                        </div>
                        <hr/>
                    </div>
                    <div className="text-netral text-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default DetailMessage;
