import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_SLIDEBAR_API } from "../utils/constants";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

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
    <div className="p-5 shadow-lg col-span-1 w-56 h-screen overflow-y-auto">

      <ul className="space-y-2">
        <li className="p-2 rounded-lg hover:bg-gray-200">
          <Link to="/">🏠 Home</Link>
        </li>

        <li className="p-2 rounded-lg hover:bg-gray-200">🎬 Shorts</li>
        <li className="p-2 rounded-lg hover:bg-gray-200">📺 Videos</li>
        <li className="p-2 rounded-lg hover:bg-gray-200">🔴 Live</li>
      </ul>

      <h1 className="font-bold pt-6 pb-2">Explore</h1>

      <ul className="space-y-2">
        {categories.map((item) => (
          <li
            key={item.id}
            className="p-2 rounded-lg hover:bg-gray-200"
          >
            {item.snippet.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;