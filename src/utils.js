import {
  fetchGameDetails,
  queryGameData,
  fetchRedditPosts,
  fetchGameTrailer
} from './http'

const loadSuggestions = (query, length) => {
  return queryGameData(query, length)
    .then((response) => {
      return response.results
    })
    .catch((error) => {
      return error
    })
}

const loadGameDetails = (id) => {
  return fetchGameDetails(id)
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.log(error)
    })
}

const loadGameTrailer = (id) => {
  return fetchGameTrailer(id)
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.log(error)
    })
}

const loadRedditPosts = (id, pageNum = 1) => {
  return fetchRedditPosts(id, pageNum)
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error
    })
}

const addDelay = (delayTime, callback, timerID = null) => {
  if (timerID) {
    clearTimeout(timerID)
  }

  return setTimeout(callback, delayTime)
}

export {
  loadSuggestions,
  loadGameDetails,
  addDelay,
  loadRedditPosts,
  loadGameTrailer
}
