import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import QuillEditor from "./components/QuillEditor";
import QuillEditorEn from "./components/QuillEditorEn";
import { NEWS } from "../utils/Url";
import { logout, getToken } from '../utils/Auth';
import axios from 'axios';

const EditNews = () => {
    const history = useHistory();
    const { slug } = useParams();

    const [ID, setID] = useState("");
    const [urlThumbnail, setUrlThumbnail] = useState("");
    const [titleId, setTitleId] = useState("");
    const [titleEn, setTitleEn] = useState("");
    const [contentId, setContentId] = useState("");
    const [files, setFiles] = useState([]);
    const [contentEn, setContentEn] = useState("");
    const [filesEn, setFilesEn] = useState([]);

    async function getNewsId() {
        try {
            const tokenRespon = await getToken();
            if (tokenRespon === 400) {
                alert("Authentifikasi Gagal, Silahkan Login Kembali");
                logout();
                history.replace("/");
            } else {
                const newsRespon = await axios.get(NEWS + slug, {
                    headers: { Authorization: `Bearer ${tokenRespon}` }
                });
                setUrlThumbnail(newsRespon.data.thumbnailURL);
                setID(newsRespon.data._id);
                setTitleId(newsRespon.data.contents[0].title);
                setContentId(newsRespon.data.contents[0].data)
            }
        } catch (err) {
            console.log(err);
        }
    };

    async function getNewsEn() {
        try {
            const tokenRespon = await getToken();
            if (tokenRespon === 400) {
                alert("Authentifikasi Gagal, Silahkan Login Kembali");
                logout();
                history.replace("/");
            } else {
                const newsRespon = await axios.get(NEWS + slug, {
                    headers: { Authorization: `Bearer ${tokenRespon}` }
                });

                setTitleEn(newsRespon.data.contents[1].title);
                setContentEn(newsRespon.data.contents[1].data)
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getNewsId();
        getNewsEn();
    }, []);

    const onEditorChange = (value) => {
        console.log("value : ", value)
        setContentId(value)
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

    async function handleUploadChange(e) {
        console.log(e.target.files[0]);
        let uploaded = e.target.files[0];
        console.log(uploaded);
        let formData = new FormData();
        formData.append("file", uploaded);
        try {
            const tokenRespon = await getToken();
            if (tokenRespon === 400) {
                alert("Authentifikasi Gagal, Silahkan Login Kembali");
                logout();
                history.replace("/");
            } else {
                const uploadRespon = await axios.post(NEWS + "uploadthumbnail", formData, {
                    headers: { Authorization: `Bearer ${tokenRespon}` }
                });
                console.log("Upload Thumbnail Sukses");
                setUrlThumbnail(uploadRespon.data.url);
            }
        } catch (err) {
            console.error("Upload Thumbnail Error");
            console.error(err);
        }
    }

    const onSubmit = async () => {
        //setContent("");
        //setContentEn("");
        try {
            const tokenRespon = await getToken();
            if (tokenRespon === 400) {
                alert("Authentifikasi Gagal, Silahkan Login Kembali");
                logout();
                history.replace("/");
            } else {
                const dataNews = [
                    { title: titleId, languageCode: "id", data: contentId },
                    { title: titleEn, languageCode: "en", data: contentEn }
                ];

                const variables = {
                    _id: ID,
                    thumbnailURL: urlThumbnail,
                    contents: dataNews
                }

                const postingRespon = await axios.post(NEWS + "update", variables, {
                    headers: { Authorization: `Bearer ${tokenRespon}` }
                });
                console.log(postingRespon.data);
                alert("Berita berhasil diubah!");
                history.replace('/berita');
            }
        } catch (err) {
            console.log(err);
            alert("Berita gagal diubah!");
        }
    }

    return (
        <div>
            <Sidebar />
            <div className="md:ml-64">
                <div className="mt-8 px-6 md:px-8 h-auto">
                    <div className="container mt-4 mb-10 mx-auto max-w-full">
                        <div className="mt-4 mb-10 p-14 bg-white shadow-xl space-y-10 rounded-xl mx-auto max-w-full">
                            <div className="space-y-4">
                                <label className="text-netral text-md font-semibold tracking-wide" for="gambar">Upload Thumbnail</label><br />
                                <input type="file" name="thumbnail" onChange={handleUploadChange} />
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-center bg-blue h-10 rounded-t-3xl">
                                    <p className="text-white font-semibold text-netral text-md tracking-wide">Form Input Bahasa Indonesia</p>
                                </div>
                                <div>
                                    <label className="text-netral text-sm font-semibold tracking-wide">Judul Berita</label><br />
                                    <input type="text" name="title" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-grey-300 focus:outline-none" placeholder="Judul Berita"
                                        value={titleId} onChange={(e) => setTitleId(e.target.value)}
                                    />
                                </div>
                                <QuillEditor
                                    content={contentId}
                                    toolbarId={"toolbarId"}
                                    onContentChange={setContentId}
                                    placeholder={"Mulai Posting Berita!"}
                                    //onEditorChange={onEditorChange}
                                    onFilesChange={onFilesChange}
                                />
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-center bg-blue h-10 rounded-t-3xl">
                                    <p className="text-white font-semibold text-netral text-md tracking-wide">Form Input Bahasa Inggris</p>
                                </div>
                                <div>
                                    <label className="text-netral text-sm font-semibold tracking-wide">Title News</label><br />
                                    <input type="text" name="title" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-grey-300 focus:outline-none" placeholder="Title News"
                                        value={titleEn} onChange={(e) => setTitleEn(e.target.value)}
                                    />
                                </div>
                                <QuillEditor
                                    content={contentEn}
                                    toolbarId={"toolbarEn"}
                                    onContentChange={setContentEn}
                                    placeholder={"Start Posting News!"}
                                    //onEditorChangeEn={onEditorChangeEn}
                                    onFilesChange={onFilesChangeEn}
                                />
                            </div>
                            <button className="bg-blue rounded-md text-white py-2 px-4" onClick={onSubmit}>Simpan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditNews;
