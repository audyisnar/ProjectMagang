import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import QuillEditor from "../components/QuillEditor";
import { NEWS } from "../../utils/Url";
import { logout, getToken } from '../../utils/Auth';
import axios from 'axios';

const ComponentPost = () => {
    const history = useHistory();
    const [urlThumbnail, setUrlThumbnail] = useState("");
    const [titleId, setTitleId] = useState("");
    const [titleEn, setTitleEn] = useState("");
    const [contentId, setContentId] = useState("");
    const [files, setFiles] = useState([]);
    const [contentEn, setContentEn] = useState("");
    const [filesEn, setFilesEn] = useState([]);
    const [loading, setLoading] = useState(false);

    const onEditorChange = (value) => {
        setContentId(value)
        console.log(contentId)
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

    async function handleUploadChange(e){
        console.log(e.target.files[0]);
        let uploaded = e.target.files[0];
        console.log(uploaded);
        let formData = new FormData();
        formData.append("file", uploaded);
        try {
            const tokenRespon = await getToken();
            if(tokenRespon === 400){
                alert("Authentifikasi Gagal, Silahkan Login Kembali");
                logout();
                history.replace("/");
            } else{
                setLoading(true);
                const uploadRespon = await axios.post(NEWS + "uploadthumbnail", formData, {
                    headers: { Authorization: `Bearer ${tokenRespon}`}
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
        try{
            const tokenRespon = await getToken();
            if(tokenRespon === 400){
                alert("Authentifikasi Gagal, Silahkan Login Kembali");
                logout();
                history.replace("/");
            } else{
                const dataNews = [
                    {   title: titleId, languageCode: "id", data: contentId },
                    {   title: titleEn, languageCode: "en", data: contentEn }
                ];

                const variables = {
                    thumbnailURL: urlThumbnail,
                    contents: dataNews
                }
                const postingRespon = await axios.post(NEWS, variables, {
                    headers: { Authorization: `Bearer ${tokenRespon}`}
                });
                console.log(postingRespon.data);
                alert("Berita berhasil disimpan!");
                history.replace('/berita');
            }
        } catch(err){
            console.log(err);
            alert("Berita gagal disimpan!");
        }
    }

    const Tabs = ({ color }) => {
        const [openTab, setOpenTab] = useState(1);
        return (
            <>
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <ul
                            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                            role="tablist"
                            >
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-xl rounded block leading-normal " +
                                    (openTab === 1
                                    ? "text-white bg-" + color
                                    : "text-" + color + " bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                                >
                                Indonesian
                                </a>
                            </li>
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-xl rounded block leading-normal " +
                                    (openTab === 2
                                    ? "text-white bg-" + color
                                    : "text-" + color + " bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                                >
                                English
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                <div className="mt-4 mb-4 p-14 bg-white shadow-2xl space-y-6 rounded-xl mx-auto max-w-full">
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-netral text-sm font-semibold tracking-wide">Judul Berita</label><br/>
                                            <input type="text" name="title" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-grey-300 focus:outline-none" placeholder="Judul Berita"
                                                value={titleId} onChange={(e) => setTitleId(e.target.value)}
                                            />
                                        </div>  
                                        <QuillEditor
                                            toolbarId={"toolbarId"}
                                            placeholder={"Mulai Posting Berita!"}
                                            onEditorChange={onEditorChange}
                                            onFilesChange={onFilesChange}
                                            flag={"post"}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                <div className="mt-4 mb-4 p-14 bg-white shadow-2xl space-y-6 rounded-xl mx-auto max-w-full">
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-netral text-sm font-semibold tracking-wide">Title News</label><br/>
                                            <input type="text" name="title" className="p-4 w-full h-10 rounded pl-4 mt-1 text-sm border border-grey-300 focus:outline-none" placeholder="Title News"
                                                value={titleEn} onChange={(e) => setTitleEn(e.target.value)}
                                            />
                                        </div>  
                                        <QuillEditor
                                            toolbarId={"toolbarEn"}
                                            placeholder={"Start Posting News!"}
                                            onEditorChange={onEditorChangeEn}
                                            onFilesChange={onFilesChangeEn}
                                            flag={"post"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            );
        };

    return (
        <div className="space-y-4 mb-12">
            <div className="space-y-4">
                <label className="text-netral text-md font-semibold tracking-wide" for="gambar">Upload Thumbnail</label><br/>
                <img src={`http://192.168.195.195:5000${urlThumbnail}`} className={loading ? "h-48 w-56" : "hidden"}/>
                <input type="file" name="thumbnail" onChange={handleUploadChange}/>
            </div>
            <Tabs color="blue"/>
            <button className="bg-blue rounded-md text-white py-2 px-4" onClick={onSubmit}>Submit</button>
        </div>
    );
}

export default ComponentPost;