import axios from "axios";

const KEY = "AIzaSyAGorAIn0BuhOyO1IxTwxmj-i5YBGzRaeg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
