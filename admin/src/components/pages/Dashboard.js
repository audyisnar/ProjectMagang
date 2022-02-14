import React, { useState } from "react";
import StatusCard from './components/StatusCard';
import News from './components/NewsCard';
import Message from './components/MessageCard';
import Sidebar from "./components/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className="md:ml-64">
        <div className="pt-8 p-8 md:pb-16 px-3 md:px-8 h-auto">
            <div className="container mx-auto max-w-full">
              <StatusCard />
            </div>
        </div>
        <div className="mb-16 px-3 md:px-8 h-auto">
          <News />
        </div>
        <div className="mb-16 px-3 md:px-8 h-auto">
          <Message />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
