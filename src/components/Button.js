import React from "react";

const Button = ({name, onClick}) => {
 return ( 
    <div>
        <button 
        onClick={() => onClick(name)}
        className="px-5 py-2 m-2 bg-gray-200 rounded-xl">{name}</button>
    </div>
  )
}

export default Button;