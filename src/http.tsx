import axios from './axios';

const fetchGameDetails = (id:string): Promise<any> => {

    //API Query
    return axios.get(`/games/${id}`)
    .then(response => {
        return response.data;
    }).catch(error => {
        return error;
    });
}

const fetchRedditPosts = (id:string, pageNum:number): Promise<any> => {
    //API Query
    return axios.get(`/games/${id}/reddit?page=${pageNum}`)
    .then(response => {
        return response.data;
    }).catch(error => {
        return error;
    });
}

const queryGameData = (query: string, length: number): Promise<any> => {

    //API Query
    return axios.get(`/games?search=${query}&page_size=${length}`)
    .then(response => {
        return response.data;
    }).catch(error => {
        return error;
    });
}


export { fetchGameDetails, queryGameData, fetchRedditPosts };