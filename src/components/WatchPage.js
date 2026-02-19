import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));
   const dispatch = useDispatch();
  const video = useSelector((store) => store.app.selectedVideo);
 

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="px-4 flex">
    <div className = "w-full max-w-[1200px]">
      <iframe
        className="w-full aspect-video"
        height="600"
        src={"https://www.youtube.com/embed/" +searchParams.get("v")}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h1 className="text-2xl font-bold py-2">{video?.snippet?.title}</h1>
      <div className="flex flex-row items-center py-2">
      <h2 className="text-xl font-bold py-5 px-4">{video?.snippet?.channelTitle}</h2>
      <button className="px-3 py-2 text-l bg-black text-white border-spacing-2 rounded-full font-semibold cursor-pointer hover:bg-gray-700">Subscribe</button>
      </div>
      <div className="flex flex-row py-2">
      <div className="text-l font-semibold  px-2 py-5 border-spacing-2 bg-gray-100 rounded-l-full border-r border-gray-200 h-15 cursor-pointer hover:bg-gray-200"> 👍🏻 {video?.statistics?.likeCount} Likes </div>
      <div className="text-l font-semibold px-2 py-5 border-spacing-2 bg-gray-100 rounded-r-full cursor-pointer hover:bg-gray-200"> 👎🏻 {video?.statistics?.dislikeCount} Dislikes </div>
      </div>
      <ul className="flex flex-row gap-5  px-5 bg-gray-100 rounded-t-xl">
      <li className="text-l font-bold py-1">{video?.statistics?.viewCount} views</li>
      <li className="text-l font-bold py-1">{video?.statistics?.commentCount} comments</li>
      </ul>
      <p className=" whitespace-pre-line text-sm px-5 py-5 bg-gray-100 rounded-b-xl ">{video?.snippet?.description}</p>
    </div>
    </div>
  );
};

export default WatchPage;
