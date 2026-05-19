import React from "react";
import { useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim();
    if (!trimmedQuery) return;
    navigate("/results?search_query=" + encodeURIComponent(trimmedQuery));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  
  const focusOnButtonList = (event) => {
    event.preventDefault();
    // Move focus to the first category button
    const btn = document.querySelector('#video-category-list button');
    btn?.focus();
  };

  return (
    <>
      <header className="grid grid-cols-12 items-center p-5 shadow-lg relative">
      <div className="col-span-2 flex items-center gap-3">
        <button
          onClick={toggleMenuHandler}
          className="h-8 p-2 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          <img className="h-8" alt="" src="https://www.svgrepo.com/show/506800/burger-menu.svg" />
        </button>
        <a href="/" aria-label="YouTube Home">
          <img
            className="h-8 "
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          />
        </a>
      </div>
      <div className="col-span-8 flex justify-center items-center relative">
        <a
          href="#video-category-list"
          onClick={focusOnButtonList}
          className="gap-1 sr-only focus:not-sr-only focus:inline-block focus:font-bold focus:bg-white focus:text-black focus:px-3 focus:py-1 focus:rounded-full focus:whitespace-nowrap"
        >
          Skip navigation
        </a>
        <div className="relative w-1/2 flex">
          <label htmlFor="search-input" className="sr-only">
            Search videos
          </label>
          <input
            id="search-input"
            className="w-full border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="Search"
            aria-label="Search videos"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
        </div>
        <div>
          <button
            className="border border-gray-300 border-l-0 px-6 py-2 rounded-r-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleSearch}
            aria-label="Search"
          >
            🔍
          </button>
        </div>
      </div>
      <div className="col-span-2 flex justify-end">
        <button
          className="h-8 p-2 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Account menu"
        >
          <img className="h-8" alt="" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
        </button>
      </div>
    </header>
    </>
  );
};

export default Head;
