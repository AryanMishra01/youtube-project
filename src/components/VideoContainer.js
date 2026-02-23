import React, { useEffect, useState } from "react";
import { VIDEO_CATEGORIES, YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ButtonList from "./ButtonList";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchVideos(selectedCategory);
  },[selectedCategory]);

  const fetchVideos = async (category) => {
    let apiUrl = YOUTUBE_VIDEOS_API;
    // add video category filter if a specific category is selected
if (VIDEO_CATEGORIES[category]) {
   apiUrl += `&videoCategoryId=${VIDEO_CATEGORIES[category]}`;
}
   const response = await fetch(apiUrl);
   const data = await response.json();
   setVideos(data.items);
 }

  return (
     <>
     <ButtonList onCategorySelect={setSelectedCategory}/>

    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />{" "}
        </Link>
      ))}
    </div>
    </>
  );
};

export default VideoContainer;
