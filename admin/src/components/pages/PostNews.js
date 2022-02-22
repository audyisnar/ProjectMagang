import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import QuillEditor from "./components/QuillEditor";
import QuillEditorEn from "./components/QuillEditorEn";

const PostNews = () => {
    const [content, setContent] = useState("");
    const [files, setFiles] = useState([]);
    const [contentEn, setContentEn] = useState("");
    const [filesEn, setFilesEn] = useState([]);

    const onEditorChange = (value) => {
        setContent(value)
        console.log(content)
    }

    const onFilesChange = (files) => {
        setFiles(files)
    }

    const onEditorChangeEn = (value) => {
        setContentEn(value)
        console.log(contentEn)
    }

    const onFilesChangeEn = (files) => {
        setFilesEn(files)
    }

    const onSubmit = (event) => {
        //setContent("");
        //setContentEn("");
        console.log(content);
        console.log(contentEn);
    }

    return (
        <div>
            <Sidebar />
            <div className="md:ml-64">
                <div className="mt-8 px-6 md:px-8 h-auto">
                    <div className="container mt-4 mb-10 mx-auto max-w-full">
                        <div className="mt-4 mb-10 p-14 bg-white shadow-xl space-y-10 rounded-xl mx-auto max-w-full">
                            <div className="space-y-4">
                                <label className="text-netral text-md font-semibold tracking-wide" for="gambar">Upload Thumbnail</label><br/>
                                <input type="file" name="thumbnail"/>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-center bg-blue h-10 rounded-t-3xl">
                                    <p className="text-white font-semibold text-netral text-md tracking-wide">Form Input Bahasa Indonesia</p>
                                </div>
                                <div>
                                    <label className="text-netral text-sm font-semibold tracking-wide">Judul Berita</label><br/>
                                    <input type="text" name="title" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-grey-300 focus:outline-none" placeholder="Judul Berita"/>
                                </div>  
                                <QuillEditor
                                    placeholder={"Mulai Posting Berita!"}
                                    onEditorChange={onEditorChange}
                                    onFilesChange={onFilesChange}
                                />
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-center bg-blue h-10 rounded-t-3xl">
                                    <p className="text-white font-semibold text-netral text-md tracking-wide">Form Input Bahasa Inggris</p>
                                </div>
                                <div>
                                    <label className="text-netral text-sm font-semibold tracking-wide">Title News</label><br/>
                                    <input type="text" name="title" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-grey-300 focus:outline-none" placeholder="Title News"/>
                                </div>  
                                <QuillEditorEn
                                    placeholder={"Start Posting News!"}
                                    onEditorChangeEn={onEditorChangeEn}
                                    onFilesChangeEn={onFilesChangeEn}
                                />
                            </div>
                            <button className="bg-blue rounded-md text-white py-2 px-4" onClick={onSubmit}>Sumbit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostNews;