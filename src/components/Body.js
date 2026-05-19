import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Head from "./Head";

const Body = () => {
  return (
    <div>
      <Head />
      <div className="grid grid-flow-col">
        <Sidebar />
        <main id="main-content" className="outline-none">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Body;
