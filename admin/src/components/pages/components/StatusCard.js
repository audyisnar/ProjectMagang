import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import StatusItem from "./StatusItem";
import { CONTACT, NEWS } from "../../utils/Url";
import { getToken, logout } from '../../utils/Auth';
import axios from 'axios';

const StatusCard = (props) => {
    // const history = useHistory();
    // const [sumContact, setSumContact] = useState();
    // const [sumNews, setSumNews] = useState();
    // const [dataContact, setDataContact] = useState([]);
    // const [dataNews, setDataNews] = useState([]);

    // useEffect(() => {
    //     async function getStatus() {
    //         try{
    //             const tokenRespon = await getToken();
    //             if(tokenRespon === 400){
    //                 alert("Authentifikasi Gagal, Silahkan Login Kembali");
    //                 logout();
    //                 history.replace("/");
    //             } else{
    //                 const contactRespon = await axios.get(CONTACT + "latest", {
    //                     headers: { Authorization: `Bearer ${tokenRespon}`}
    //                 });
    //                 //setApiData(newsRespon.data);
    //                 console.log(contactRespon.data);
    //                 setSumContact(contactRespon.data.sumContacts);
    //                 setDataContact(contactRespon.data.latestContacts);

    //                 axios.get(NEWS + "latest")
    //                 .then((res) => {
    //                     console.log(res.data);
    //                     setSumNews(res.data.sumNewsposts);
    //                     setDataNews(res.data.latestNewspost);
    //                 }).catch((err) => {
    //                     console.log(err);
    //                 });
    //             }
    //         } catch(err){
    //             console.log(err);
    //         }
    //     };
    //     getStatus();
    // },[]);

    const statusItems = [
        {   nama: "Berita", jumlah: props.news, icon: "book"},
        {   nama: "Pesan Masuk", jumlah: props.contact, icon: "message"},
    ];
    
    return (
        <div className="flex flex-wrap">
            {statusItems.map((value, index) => (
                <StatusItem
                    key={index}
                    nama={value.nama}
                    jumlah={value.jumlah}
                    icon={value.icon}
                />
            ))}
        </div>
    );
}

export default StatusCard;
