import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_DETAILS_API } from "../utils/constants";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));
  const videoId = searchParams.get("v");
  // Redux Data
  const video = useSelector((store) => store.app.selectedVideo);

  // Local State (refresh fallback)
  const [videoData, setVideoData] = useState(video);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  // Fallback API call for page refresh 
  // If Redux is empty AND we have a videoId, then fetch the video details
  useEffect(() => {
    if (!videoData && videoId) {
      fetch(YOUTUBE_VIDEO_DETAILS_API +videoId)
        .then((res) => res.json())
        .then((data) => {
          setVideoData(data?.items?.[0]);
        });
    }
  }, [videoData, videoId]);

  if (!videoData) return <div className="p-5">Loading </div>;

  const { title, channelTitle, description } = videoData.snippet;
  const {
    likeCount = 0,
    dislikeCount = 0,
    viewCount = 0,
    commentCount = 0,
  } = videoData.statistics || {};

  return (
    <div className="px-4 flex">
      <div className="w-full max-w-[1200px]">
        <iframe
          className="w-full aspect-video"
          height="600"
          src={"https://www.youtube.com/embed/" +videoId}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h1 className="text-2xl font-bold py-2">{title}</h1>
        <div className="flex flex-row items-center py-2">
          <h2 className="text-xl font-bold py-5 px-4">{channelTitle}</h2>
          <button className="px-3 py-2 text-l bg-black text-white border-spacing-2 rounded-full font-semibold cursor-pointer hover:bg-gray-700">
            Subscribe
          </button>
        </div>
        <div className="flex flex-row py-2">
          <div className="text-l font-semibold  px-2 py-5 border-spacing-2 bg-gray-100 rounded-l-full border-r border-gray-200 h-15 cursor-pointer hover:bg-gray-200">
            {" "}
            👍🏻 {likeCount} Likes{" "}
          </div>
          <div className="text-l font-semibold px-2 py-5 border-spacing-2 bg-gray-100 rounded-r-full cursor-pointer hover:bg-gray-200">
            {" "}
            👎🏻 {dislikeCount} Dislikes{" "}
          </div>
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
  );
};

export default WatchPage;
