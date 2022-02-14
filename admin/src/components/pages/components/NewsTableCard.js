import React, { useState } from "react";
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Table from "./Table";

export default function NewsCardTable(props) {
    // const [actionEdit, setActionsEdit] = useState(true);
    // console.log(actionEdit)
    const tableItems = [
        {   no: "1", title: "Setengah Juta Kematian Corona Tercatat di India", date: "Jumat, 04 Feb 2022"},
        {   no: "2", title: "Bamsoet Minta RI Tak Ketinggalan Songsong Peradaban Baru di Metaverse", date: "Sabtu, 05 Feb 2022"},
    ];
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
                            <th className="py-3 px-6 text-center text-sm font-normal text-blue">Actions</th>
                        </tr>
                    </thead>
                    {tableItems.map((value, index) => (
                        <Table
                            key={index}
                            column1={value.no}
                            column2={value.title}
                            column3={value.date}
                            actionEdit={true}
                        />
                    ))}
                </table>
            </div>
            </CardBody>
        </Card>
    );
}
