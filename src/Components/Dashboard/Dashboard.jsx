import React from "react";
import Navbar from "./ui/navbar";
import Sidebar from "./ui/sidebar";

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <Sidebar />
      <Navbar />
      <div className="contents">
        
      </div>
    </div>
  );
}
