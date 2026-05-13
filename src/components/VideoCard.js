import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedVideo } from "../utils/appSlice";

const VideoCard = ({ info }) => {
  //console.log(info);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { snippet, statistics } = info || {};
  const { channelTitle, title, thumbnails } = snippet || {};

  const handleClick = () => {
    dispatch(setSelectedVideo(info)); // Dispatch the selected video to the Redux store
    navigate("/watch?v=" + info.id); // Navigate to the watch page
  };

  return (
    <button
      className="p-2 m-2 w-72 h-[320px] 
        shadow-lg 
        flex flex-col hover:shadow-2xl rounded-xl overflow-hidden
        focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={handleClick}
    >
      <img
        className="rounded-xl w-full h-40 object-cover"
        alt={title ? `${title} video thumbnail` : "Video thumbnail"}
        src={thumbnails?.medium?.url}
      />
      <div className="flex-1 flex flex-col justify-between mt-2 overflow-hidden">
        <div>
          <p className="font-semibold py-2 line-clamp-3">{title}</p>
          <p className="text-sm text-gray-600 py-1 truncate">{channelTitle}</p>
        </div>
        <p className="text-sm text-gray-600 truncate">
          {statistics?.viewCount && statistics.viewCount + " views"}
        </p>
      </div>
    </button>
  );
};

export default VideoCard;
