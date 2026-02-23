const GOOGLE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;   

export const YOUTUBE_VIDEO_DETAILS_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&key="+GOOGLE_API_KEY+"&id=";

export const VIDEO_CATEGORIES = {
  All: null,
  Music: "10",
  Sports: "17",
  Gaming: "20",
  News: "25",
  Movies: "1", 
  Learning:"28",
  Comedy:"23",
}