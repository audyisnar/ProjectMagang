import React from "react";
import StatusItem from "./StatusItem";

const StatusCard = () => {
    const statusItems = [
        {   nama: "Berita", jumlah: "10", icon: "book"},
        {   nama: "Pesan Masuk", jumlah: "5", icon: "message"},
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
