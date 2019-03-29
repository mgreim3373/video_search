import axios from 'axios'
const KEY = 'AIzaSyD5rpK6WVsoA9SJ0w3jcX1pDrAFSanVt1s'
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResuls: 5,
    key: KEY,
  }
})
