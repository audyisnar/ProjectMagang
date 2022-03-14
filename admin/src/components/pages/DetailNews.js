import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import TableCard from './components/MessageTableCard';
import '../../assets/styles/Components.css';
import Sidebar from "./components/Sidebar";
import { NEWS } from "../utils/Url";
import { getToken, logout } from '../utils/Auth';
import axios from 'axios';

const DetailNews = () => {
    const history = useHistory();
    const { id } = useParams();
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        async function getNewsId() {
            try{
                const tokenRespon = await getToken();
                if(tokenRespon === 400){
                    alert("Authentifikasi Gagal, Silahkan Login Kembali");
                    logout();
                    history.replace("/");
                } else{
                    const newsRespon = await axios.get(NEWS + id, {
                        headers: { Authorization: `Bearer ${tokenRespon}`}
                    });
                    setApiData(newsRespon.data.contents);
                    console.log(newsRespon.data);
                    console.log(newsRespon.data.contents[0].data);
                    console.log(newsRespon.data.contents[1].data);
                }                
            } catch(err){
                console.log(err);
            }
        };
        getNewsId();
    },[]);

    const renderNews = apiData.map((value, index) => {
        return  <div className="mt-4 mb-10 p-14 bg-white shadow-2xl space-y-6 rounded-xl mx-auto max-w-full">
                    <div className="flex items-center justify-center bg-blue h-12">
                        <p className="text-xl text-white font-semibold">{value.title}</p>
                    </div>
                    <div id="content">
                        <div dangerouslySetInnerHTML={{ __html: value.data }} />
                    </div>
                </div>
    })

    return (
        <div>
            <Sidebar />
            <div className="md:ml-64">
                <div className="mt-8 px-6 md:px-8 h-auto">
                    {renderNews}
                </div>
            </div>
        </div>
    );
}

export default DetailNews;
