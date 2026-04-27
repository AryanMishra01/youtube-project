import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_COMMENTS_API } from "../utils/constants";

const CommentsContainer = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!videoId) {
      setComments([]);
      setError("Video not found.");
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();
    getComments(controller.signal);

    return () => controller.abort();
  }, [videoId]);

  // Keep comment state in sync with route changes and canceled requests.
  const getComments = async (signal) => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await fetch(YOUTUBE_COMMENTS_API + videoId, { signal });
      if (!data.ok) throw new Error(`API error: ${data.status}`);

      const json = await data.json();
      setComments(json.items || []);
    } catch (err) {
      if (err.name === "AbortError") return;

      console.error("Failed to fetch comments:", err);
      setComments([]);
      setError("Failed to load comments.");
    } finally {
      if (!signal.aborted) {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="w-full max-w-[1200px] p-5">
      <h1 className="text-2xl font-bold">Comments:</h1>

      {isLoading && <p className="py-2">Loading comments...</p>}
      {error && <p className="text-red-600 py-2">{error}</p>}
      {!isLoading && !error && comments.length === 0 && (
        <p className="py-2">No comments available.</p>
      )}
      {comments.map((comment) => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
};

export default CommentsContainer;
