import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { YOUTUBE_SLIDEBAR_API } from "../utils/constants";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const location = useLocation();

  const [categories, setCategories] = useState([]);
  const firstMenuItemRef = useRef(null);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      firstMenuItemRef.current?.focus();
    }
  }, [isMenuOpen]);

  const getCategories = async () => {
    try {
      const data = await fetch(
        YOUTUBE_SLIDEBAR_API
      );

      const json = await data.json();
      setCategories(json.items || []);
    } catch (error) {
      console.error("Sidebar API Error:", error);
    }
  };

  // ✅ put return AFTER hooks
  if (!isMenuOpen) return null;

  return (
    <nav id="main-navigation" className="p-5 shadow-lg col-span-1 w-56 h-screen overflow-y-auto" aria-label="Main navigation">

      <ul className="space-y-2">
        <li>
          <Link 
            to="/" 
            ref={firstMenuItemRef}
            className={`block p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              location.pathname === '/' ? 'bg-gray-300 font-bold' : 'hover:bg-gray-200'
            }`}
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            🏠 Home
          </Link>
        </li>

        <li>
          <button className="w-full text-left p-3 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            🎬 Shorts
          </button>
        </li>
        <li>
          <button className="w-full text-left p-3 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            📺 Videos
          </button>
        </li>
        <li>
          <button className="w-full text-left p-3 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            🔴 Live
          </button>
        </li>
      </ul>

      <h2 className="font-bold pt-6 pb-2">Explore</h2>

      <ul className="space-y-2">
        {categories.map((item) => (
          <li key={item.id}>
            <Link
              to={`/results?search_query=${encodeURIComponent(item.snippet.title)}`}
              className="block p-3 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {item.snippet.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;