import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedVideo } from "../utils/appSlice";

const VideoCard = ({ info }) => {
  console.log(info);
  const dispatch = useDispatch();
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const handleClick = () => {
    dispatch(setSelectedVideo(info)); // Dispatch the selected video to the Redux store
  };

  return (
    <div
      className="p-2 m-2 w-72 h-[320px] 
        shadow-lg cursor-pointer
        flex flex-col hover:shadow-2xl rounded-xl"
      onClick={handleClick}
    >
      <img
        className="rounded-xl w-full h-40 object-cover"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <div className="flex-1 flex flex-col justify-between mt-2">
        <div>
          <p className="font-bold py-2">{title}</p>
          <p className="text-sm text-gray-600 py-1">{channelTitle}</p>
        </div>
        <p className="text-sm text-gray-600">
          {statistics.viewCount} views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
