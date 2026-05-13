import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_DETAILS_API } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const video = useSelector((store) => store.app.selectedVideo);

  const [videoData, setVideoData] = useState(video);
  const [isLoading, setIsLoading] = useState(!video && !!videoId);
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  useEffect(() => {
    setVideoData(video);
  }, [video]);

  useEffect(() => {
    if (!videoId) {
      setError("Video not found.");
      setIsLoading(false);
      return;
    }

    if (video) {
      setError(null);
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();

    const fetchVideoDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const res = await fetch(YOUTUBE_VIDEO_DETAILS_API + videoId, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`API error: ${res.status}`);

        const data = await res.json();
        const nextVideo = data?.items?.[0] ?? null;

        if (!nextVideo) {
          throw new Error("Video not found");
        }

        setVideoData(nextVideo);
      } catch (err) {
        if (err.name === "AbortError") return;

        console.error("Failed to fetch video details:", err);
        setVideoData(null);
        setError("Failed to load video. Please try again.");
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchVideoDetails();

    return () => controller.abort();
  }, [video, videoId]);

  if (error) return <div className="p-5 text-red-600" role="alert">{error}</div>;
  if (isLoading || !videoData?.snippet) {
    return (
      <div className="flex justify-center items-center p-12" aria-live="polite" aria-busy="true">
        <div className="w-20 h-20 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <span className="sr-only">Loading video...</span>
      </div>
    );
  }

  const { title, channelTitle, description } = videoData.snippet;
  const {
    likeCount = 0,
    dislikeCount = 0,
    viewCount = 0,
    commentCount = 0,
  } = videoData.statistics || {};

  return (
    <main className="flex flex-col" aria-label="Watch page content">
      <div className="px-4 flex">
        <div className="w-full max-w-[1200px]">
          <iframe
            className="w-full aspect-video"
            height="600"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <h1 className="text-2xl font-bold py-2">{title}</h1>
          <div className="flex flex-row items-center py-2">
            <h2 className="text-xl font-bold py-5 px-4">{channelTitle}</h2>
            <button
              type="button"
              aria-label="Subscribe to channel"
              className="px-3 py-2 text-l bg-black text-white border-spacing-2 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-700"
            >
              Subscribe
            </button>
          </div>
          <div className="flex flex-row py-2">
            <button
              type="button"
              aria-label={`Like video, ${likeCount} likes`}
              className="text-l font-semibold px-2 py-5 border-spacing-2 bg-gray-100 rounded-l-full border-r border-gray-200 h-15 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-200"
            >
              👍🏻 {likeCount} Likes
            </button>
            <button
              type="button"
              aria-label={`Dislike video, ${dislikeCount} dislikes`}
              className="text-l font-semibold px-2 py-5 border-spacing-2 bg-gray-100 rounded-r-full focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-200"
            >
              👎🏻 {dislikeCount} Dislikes
            </button>
          </div>
          <ul className="flex flex-row gap-5  px-5 bg-gray-100 rounded-t-xl">
            <li className="text-l font-bold py-1">{viewCount} views</li>
            <li className="text-l font-bold py-1">{commentCount} comments</li>
          </ul>
          <p className=" whitespace-pre-line text-sm px-5 py-5 bg-gray-100 rounded-b-xl ">
            {description}
          </p>
        </div>
      </div>
      <CommentsContainer />
    </main>
  );
};

export default WatchPage;
