import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_COMMENTS_API } from "../utils/constants";

const CommentsContainer = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const [comments, setComments] = useState([]);

  // Fetch comments whenever videoId changes
  useEffect(() => {
    getComments();
  }, [videoId]);

  // Function to fetch comments from the API
  const getComments = async () => {
    const data = await fetch(YOUTUBE_COMMENTS_API + videoId);
    const json = await data.json();
    setComments(json.items);
  };

  return (
    <div className="w-full max-w-[1200px] p-5">
      <h1 className="text-2xl font-bold">Comments:</h1>

      {comments.map((comment) => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
};

export default CommentsContainer;