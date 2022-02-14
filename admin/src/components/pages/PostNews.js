import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

const PostNews = () => {
  return (
    <div>
        <Sidebar />
        <div className="md:ml-64">
            <div className="mt-8 px-6 md:px-8 h-auto">
                <button>Kembali</button>
                <div className="container mt-4 bg-secondary-500 mx-auto max-w-full">
                    <div>
                        Ini Halaman Post Berita
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default PostNews;
