import React from "react";
import Button from "./Button";

const ButtonList = ({ onCategorySelect }) => {
  const names = [
    "All",
    "Music",
    "Sports",
    "Gaming",
    "Movies",
    "News",
    "Learning",
    "Comedy",
  ];
  return (
    <nav id="video-category-list" aria-label="Video categories">
      <ul className="flex">
        {names.map((value) => (
          <li key={value}>
            <Button name={value} onClick={onCategorySelect} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default ButtonList;
