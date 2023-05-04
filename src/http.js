import axios from './axios'

const fetchGameDetails = (id) => {
  console.log({ log: 'details', id })
  return axios
    .get(`/games/${id}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
}

// NOTE: API is no longer providing trailers. Will need another service.
const fetchGameTrailer = (id) => {
  return axios
    .get(`/games/${id}/movies`)
    .then((response) => {
      console.log(response.data)
      return response.data
    })
    .catch((error) => {
      return error
    })
}

const fetchRedditPosts = (id, pageNum) => {
  return axios
    .get(`/games/${id}/reddit?page=${pageNum}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
}

const queryGameData = (query, length) => {
  return axios
    .get(`/games?search=${query}&page_size=${length}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
}

export { fetchGameDetails, queryGameData, fetchRedditPosts, fetchGameTrailer }
