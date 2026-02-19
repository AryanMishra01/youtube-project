import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    // early return pattern
    if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg col-span-1 w-48">
      <ul>
        <li className="rounded-lg hover:bg-gray-200"> 
          <Link to="/">🏠 Home</Link>
        </li>
        <li className="rounded-lg hover:bg-gray-200">Shorts</li>
        <li className="rounded-lg hover:bg-gray-200">Videos</li>
        <li className="rounded-lg hover:bg-gray-200">Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
       <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
