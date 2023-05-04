import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: process.env.REACT_APP_API_KEY
  }
})

instance.interceptors.request.use((request) => {
  return request
})

export default instance
