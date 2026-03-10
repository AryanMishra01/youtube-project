import React from "react";
import { useState, useEffect } from "react";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { cacheResults } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
  if (!searchQuery) return;
  navigate("/results?search_query=" + searchQuery);
};

const handleSuggestionClick = (query) => {
  setSearchQuery(query);        // update search input
  setShowSuggestions(false);    // hide suggestions dropdown
  navigate("/results?search_query=" + query); // go to results page
};
  // useEffect to fetch search suggestions whenever searchQuery changes
  // Debouncing the API call to avoid excessive requests while typing
  // The API call will be made 200ms after the user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Function to fetch search suggestions from the API
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]); // Update suggestions state with API response
    // API call to get search suggestions based on searchQuery

    //update the search cache in the Redux store with the new suggestions for the current search query
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      }),
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

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
      <div className="col-span-8 flex justify-center">
        <div className="relative w-1/2 flex">
          <input
            className="w-full border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onKeyDown={(e) => {
             if (e.key === "Enter") handleSearch();
  }}
          />
          {showSuggestions && (
            <div className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-xl border border-gray-20">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    onMouseDown={() => handleSuggestionClick(s)}
                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                  >
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <button 
          className="border border-gray-300 border-l-0 px-5 py-2 rounded-r-full bg-gray-100 hover:bg-gray-200"
          onClick={handleSearch}>
            🔍
          </button>
        </div>
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
