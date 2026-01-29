import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
         className="h-8"
          alt="menu"
          src="https://www.svgrepo.com/show/506800/burger-menu.svg"
        />
        <img
        className="h-8"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
        />
      </div>
      <div className="col-span-10">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="col-span-1">
        <img 
        className="h-8"
        alt="user-icon"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
       </div>
    </div>
  );
};

export default Head;
