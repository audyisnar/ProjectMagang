import React, { useState, useEffect } from "react";
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Table from "./Table";
import { USER, CONTACT } from "../../utils/Url";
import { getRefToken, getUserID } from '../../utils/Auth';
import axios from 'axios';

export default function MessageCardTable(props) {
    const [apiData, setApiData] = useState([]);
    const [refreshData, setRefreshData] = useState(0);

    useEffect(() => {
        async function getContact() {
            try{
                const tokenRespon = await axios.post(USER + "token", {
                    userID: getUserID(),
                    refreshToken: getRefToken()
                });
                const contactRespon = await axios.get(CONTACT, {
                    headers: { Authorization: `Bearer ${tokenRespon.data.token}`}
                });
                setApiData(contactRespon.data);
                console.log(contactRespon.data);
            } catch(err){
                console.log(err);
            }
        };
        getContact();
    },[refreshData]);

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
                            <th className="py-3 px-6 text-left text-sm font-normal text-blue">Name</th>
                            <th className="py-3 px-6 text-center text-sm font-normal text-blue">Company</th>
                            <th className="py-3 px-6 text-center text-sm font-normal text-blue">Actions</th>
                        </tr>
                    </thead>
                    {apiData.map((value, index) => (
                        <Table
                            key={value._id}
                            id={value._id}
                            column1={index+1}
                            column2={value.name}
                            column3={value.company}
                            actionEdit={false}
                        />
                    ))}
                </table>
            </div>
            </CardBody>
        </Card>
    );
}