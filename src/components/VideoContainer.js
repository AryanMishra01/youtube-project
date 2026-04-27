import React, { useEffect, useState } from "react";
import { VIDEO_CATEGORIES, YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ButtonList from "./ButtonList";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchVideos(selectedCategory, controller.signal);

    return () => controller.abort();
  }, [selectedCategory]);

  // Reset transient state before each category fetch so the UI stays consistent.
  const fetchVideos = async (category, signal) => {
    try {
      setIsLoading(true);
      setError(null);

      let apiUrl = YOUTUBE_VIDEOS_API;
      if (VIDEO_CATEGORIES[category]) {
        apiUrl += `&videoCategoryId=${VIDEO_CATEGORIES[category]}`;
      }

      const response = await fetch(apiUrl, { signal });
      if (!response.ok) throw new Error(`API error: ${response.status}`);

      const data = await response.json();
      setVideos(data.items || []);
    } catch (err) {
      if (err.name === "AbortError") return;

      console.error("Failed to fetch videos:", err);
      setVideos([]);
      setError("Failed to load videos. Please try again.");
    } finally {
      if (!signal.aborted) {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <ButtonList onCategorySelect={setSelectedCategory} />

      {isLoading && (
        <div className="flex justify-center items-center p-12">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      {error && <div className="p-5 text-red-600">{error}</div>}
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
