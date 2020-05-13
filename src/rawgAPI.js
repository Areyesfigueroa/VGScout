import axios from './axios';

const fetchData = (gameName, resultsCount) => {

    //API Query
    return axios.get(`/games?search=${gameName}&page_size=${resultsCount}`).
    then(response => {
        return response.data;
    });
}

export { fetchData };


