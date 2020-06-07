import axios from './axios';

const fetchGameDetails = (id) => {

    //API Query
    return axios.get(`/games/${id}`)
    .then(response => {
        return response.data;
    }).catch(error => {
        return error;
    });
}

const fetchRedditPosts = (id, pageNum) => {
    //API Query
    return axios.get(`/games/${id}/reddit?page=${pageNum}`)
    .then(response => {
        return response.data;
    }).catch(error => {
        return error;
    });
}

const queryGameData = (query, length) => {

    //API Query
    return axios.get(`/games?search=${query}&page_size=${length}`)
    .then(response => {
        return response.data;
    }).catch(error => {
        return error;
    });
}


export { fetchGameDetails, queryGameData, fetchRedditPosts };