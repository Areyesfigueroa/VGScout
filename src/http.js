import axios from './axios';

const fetchData = (query, length) => {

    //API Query
    return axios.get(`/games?search=${query}&page_size=${length}`).
    then(response => {
        return response.data;
    }).catch(error => {
        return error;
    });
}

export { fetchData };