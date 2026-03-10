import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const SearchResults = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();

  const query = searchParams.get("search_query");

  // Fetch search results whenever the query parameter changes
  useEffect(() => {
    getSearchResults();
  }, [query]);

  // Function to fetch search results from the API
  const getSearchResults = async () => {
    const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + query);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    // Render the list of videos using the VideoCard component
    // Each video is wrapped in a Link component that navigates to the WatchPage with the corresponding video ID when clicked
    // The Link component uses the video ID from the search results to construct the URL for the WatchPage, allowing users to click on a video and view its details on the WatchPage.
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}> 
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;