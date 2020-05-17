import { fetchData } from './http';

const loadSuggestions = (query, length) => {
    return fetchData(query, length).then(response => {  
        return response.results;
    }).catch((error) => {
        return error;
    })
}

const addDelay = (delayTime, callback, timerID=null) => {
    if(timerID) {
        clearTimeout(timerID);
    }

    return setTimeout(callback, delayTime);
}

export { loadSuggestions, addDelay };


