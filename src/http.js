import axios from './axios';

const fetchGameDetails = (id) => {

    //API Query
    return axios.get(`/games/${id}`).
    then(response => {
        return response.data;
    }).catch(error => {
        return error;
    });
}

const fetchData = () => {

    //API Query
    return axios.get(`/games/5703/reddit`).
    then(response => {
        return response.data;
    }).catch(error => {
        return error;
    });
}

const queryGameData = (query, length) => {

    //API Query
    return axios.get(`/games?search=${query}&page_size=${length}`).
    then(response => {
        return response.data;
    }).catch(error => {
        return error;
    });
}


export { fetchGameDetails, queryGameData, fetchData };