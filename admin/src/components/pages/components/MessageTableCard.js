import React, { useState } from "react";
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Table from "./Table";

export default function MessageCardTable(props) {
    // const [actionEdit, setActionsEdit] = useState(false);
    // console.log(actionEdit)
    const tableItems = [
        {   no: "1", nama: "Nadia Nabila Salma", company: "Politeknik Elektronika Negeri Surabaya"},
        {   no: "2", nama: "Geluh Tanaya Bestari", company: "PT. Otak Kanan"},
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
                            <th className="py-3 px-6 text-left text-sm font-normal text-blue">Name</th>
                            <th className="py-3 px-6 text-center text-sm font-normal text-blue">Company</th>
                            <th className="py-3 px-6 text-center text-sm font-normal text-blue">Actions</th>
                        </tr>
                    </thead>
                    {tableItems.map((value, index) => (
                        <Table
                            key={index}
                            column1={value.no}
                            column2={value.nama}
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
