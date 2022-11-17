import React from "react";
import RouterApps from "./router";
import Navbar from "./ui/navbar";
import Sidebar from "./ui/sidebar";

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <Sidebar />
      <Navbar />
      <div className="contents">
          <RouterApps/>
      </div>
    </div>
  );
}
