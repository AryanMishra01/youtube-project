const GOOGLE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_DETAILS_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&key=" +
  GOOGLE_API_KEY +
  "&id=";

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_COMMENTS_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=20&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY +
  "&videoId=";

export const YOUTUBE_SEARCH_RESULTS_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY +
  "&q=";

export const VIDEO_CATEGORIES = {
  All: null,
  Music: "10",
  Sports: "17",
  Gaming: "20",
  News: "25",
  Movies: "1",
  Learning: "28",
  Comedy: "23",
};
