import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import ModalDelete from './ModalDelete';
import Table from "./Table";
import '../../../assets/styles/Pagination.css';
import { NEWS } from "../../utils/Url";
import { getToken, logout } from '../../utils/Auth';
import axios from 'axios';

export default function NewsCardTable(props) {
    // const [actionEdit, setActionsEdit] = useState(true);
    // console.log(actionEdit)
    const tableItems = [
        {   _id: "1", title: "Setengah Juta Kematian Corona Tercatat di India", publishDate: "Jumat, 04 Feb 2022", publish: 1},
        {   _id: "2", title: "Bamsoet Minta RI Tak Ketinggalan Songsong Peradaban Baru di Metaverse", publishDate: "Sabtu, 05 Feb 2022", publish: 0},
    ];

    const history = useHistory();
    const [apiData, setApiData] = useState([]);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [refreshData, setRefreshData] = useState(0);
    const [deleteItem, setDeleteItem] = useState();
    const [nameItem, setNameItem] = useState();
    const [edit, setEdit] = useState();

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const [pageNumberLimit, setPageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    const pages =[];
    for(let i = 1; i <= Math.ceil(apiData.length/itemsPerPage); i++){
        pages.push(i);
    }

    const indexOfLastItem = currentPage*itemsPerPage; 
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = apiData.slice(indexOfFirstItem, indexOfLastItem);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1);

        if((currentPage - 1) % pageNumberLimit == 0){
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1);

        if(currentPage+1 > maxPageNumberLimit){
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    let pageIncrementBtn = null;
    if(pages.length > maxPageNumberLimit){
        pageIncrementBtn= <li onClick={handleNextBtn}>&hellip;</li>
    }

    let pageDecrementBtn = null;
    if(minPageNumberLimit >= 1){
        pageDecrementBtn= <li onClick={handlePrevBtn}>&hellip;</li>
    }

    const renderPageNumbers = pages.map(number => {
        if(number < maxPageNumberLimit+1 && number > minPageNumberLimit){
            return(
                <li key={number} id={number} onClick={handleClick} className={currentPage == number ? "active" : null}>
                    {number}
                </li>
            );
        } else {
            return null;
        }
    })

    useEffect(() => {
        async function getContact() {
            try{
                const tokenRespon = await getToken();
                if(tokenRespon === 400){
                    alert("Authentifikasi Gagal, Silahkan Login Kembali");
                    logout();
                    history.replace("/");
                } else{
                    const newsRespon = await axios.get(NEWS, {
                        headers: { Authorization: `Bearer ${tokenRespon}`}
                    });
                    setApiData(newsRespon.data);
                    console.log(newsRespon.data);
                    console.log(newsRespon.data[0].contents);
                }
            } catch(err){
                console.log(err);
            }
        };
        getContact();
    },[refreshData]);

    const publishNews = async () => {

    };

    const draftNews = () => {

    };

    return (
        <Card>
            <CardHeader color="blue" contentPosition="left">
                <h2 className="text-white text-2xl">{props.title}</h2>
            </CardHeader>
            <CardBody>
            <div className="overflow-x-auto">
                <table className="min-w-max w-full bg-transparent border-collapse">
                    <thead>
                        <tr className="border-b border-solid border-grey-200 whitespace-nowrap">
                            <th className="py-3 px-6 text-left text-sm font-normal text-blue">No</th>
                            <th className="py-3 px-6 text-left text-sm font-normal text-blue">Title</th>
                            <th className="py-3 px-6 text-center text-sm font-normal text-blue">Publish Date</th>
                            <th className="py-3 px-6 text-center text-sm font-normal text-blue">Status</th>
                            <th className="py-3 px-6 text-center text-sm font-normal text-blue">Actions</th>
                        </tr>
                    </thead>
                    {/* {tableItems.map((value, index) => ( */}
                    {currentItems.map((value, index) => (
                        // <Table
                        //     key={value._id}
                        //     id={value._id}
                        //     column1={index+1}
                        //     column2={value.name}
                        //     column3={value.company}
                        //     actionEdit={true}
                        // />
                        <tbody className="text-grey text-sm font-normal">
                            <tr className="border-b border-grey-200 hover:bg-secondary" key={value._id}>
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <span>{index+1}</span>
                                </td>
                                <td className="py-3 px-6 text-left capitalize">
                                    <span>{value.contents[0].title}</span>
                                </td>
                                <td className="py-3 px-6 text-center capitalize">
                                    <span>{value.publishDate}</span>
                                </td>
                                <td className="py-3 px-6 text-center capitalize">
                                    <span>{value.publish === 0 ? "Draft" : "Publish"}</span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                        {/* <Link className={value.publish === 0 ? "flex justify-center items-center rounded-full w-5 h-5 mr-2 transform hover:bg-blue hover:text-white hover:scale-110 cursor-pointer" : "hidden"}
                                            onClick={publishNews}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </Link> */}
                                        <Link className={value.publish === 0 ? "flex justify-center items-center rounded-full mr-2 px-2 bg-blue hover:bg-darkBlue text-white text-xs cursor-pointer" : "hidden"}
                                            onClick={publishNews}
                                        >
                                            <p>PUBLISH</p>
                                        </Link>
                                        <Link className={value.publish === 1 ? "flex justify-center items-center rounded-full w-5 h-5 mr-2 transform hover:bg-blue hover:text-white hover:scale-110 cursor-pointer" : "hidden"}
                                            onClick={draftNews}
                                        >
                                            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                                            </svg>
                                        </Link>
                                        <Link className="flex justify-center items-center rounded-full w-5 h-5 mr-2 transform hover:bg-blue hover:text-white hover:scale-110 cursor-pointer"
                                            to={`/detail-berita/${value.slug}`}
                                        >
                                            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </Link>
                                        <Link className="flex justify-center items-center rounded-full w-5 h-5 mr-2 transform hover:bg-green hover:text-white hover:scale-110 cursor-pointer"
                                            to={`/edit-berita/${value.slug}`}
                                        >
                                            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </Link>
                                        <div className="flex justify-center items-center rounded-full w-5 h-5 mr-2 transform hover:bg-red hover:text-white hover:scale-110 cursor-pointer"
                                            onClick={() => {
                                                setShowModalDelete(true);
                                                setDeleteItem(value._id);
                                                setNameItem(value.name);
                                                setEdit(true);
                                            }}
                                        >
                                            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            {showModalDelete && <ModalDelete closeModalDelete={setShowModalDelete} onSuccess={setRefreshData} deleteItem={deleteItem} nameItem={nameItem} edit={edit}/>}
                        </tbody>
                    ))}
                </table>
                <ul className="mt-8 pageNumbers flex justify-center">
                    <li>
                        <button onClick={handlePrevBtn} disabled={currentPage == pages[0] ? true : false}>Prev</button>
                    </li>
                        {pageDecrementBtn}
                        {renderPageNumbers}
                        {pageIncrementBtn}
                    <li>
                        <button onClick={handleNextBtn} disabled={currentPage == pages[pages.length - 1] ? true : false}>Next</button>
                    </li>
                </ul>
            </div>
            </CardBody>
        </Card>
    );
}
