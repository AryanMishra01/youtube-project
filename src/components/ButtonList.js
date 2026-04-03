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
    <div className="flex">
      {names.map((value) => (
        <Button key={value} name={value} onClick={onCategorySelect} />
      ))}
    </div>
  );
};
export default ButtonList;
