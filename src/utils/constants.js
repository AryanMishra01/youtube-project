const GOOGLE_API_KEY = "AIzaSyBJ5nTHdyOoKUgya8TNoEoWJda8FeRXN6M"

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key="+GOOGLE_API_KEY;   

export const YOUTUBE_VIDEO_DETAILS_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&key="+GOOGLE_API_KEY+"&id=";