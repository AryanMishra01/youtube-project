import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const SearchResults = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();

  const query = searchParams.get("search_query");

  useEffect(() => {
    const trimmedQuery = query?.trim();

    if (!trimmedQuery) {
      setVideos([]);
      setError(null);
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();
    getSearchResults(trimmedQuery, controller.signal);

    return () => controller.abort();
  }, [query]);

  // Abort in-flight requests when the query changes to avoid stale results.
  const getSearchResults = async (searchQuery, signal) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        YOUTUBE_SEARCH_RESULTS_API + encodeURIComponent(searchQuery),
        { signal },
      );
      if (!response.ok) throw new Error(`API error: ${response.status}`);

      const json = await response.json();
      setVideos(json.items || []);
    } catch (error) {
      if (error.name === "AbortError") return;

      console.error("Search fetch error:", error);
      setVideos([]);
      setError("Failed to load search results. Please try again.");
    } finally {
      if (!signal.aborted) {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-wrap">
      {isLoading && (
        <div className="w-full flex justify-center items-center p-12">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      {error && <div className="w-full p-4 text-red-600">{error}</div>}
      {!isLoading && !error && videos.length === 0 && query && (
        <div className="w-full p-4">No videos found.</div>
      )}
      {videos.map((video) => (
        <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
