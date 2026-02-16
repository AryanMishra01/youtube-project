import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {

  const dispach = useDispatch();
  const toggleMenuHandler = () => { 
      dispach(toggleMenu())
  }

  return (
    <div className="grid grid-cols-12 items-center p-5 shadow-lg">
      <div className="col-span-2 flex items-center gap-3">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://www.svgrepo.com/show/506800/burger-menu.svg"
        />
        <a href="/">
        <img
          className="h-8 "
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
        />
        </a>
      </div>
      <div className="col-span-8 flex items-center justify-center">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full px-4 py-1"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 px-4 py-1 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-2 flex justify-end">
        <img
          className="h-8"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
