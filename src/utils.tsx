import { fetchGameDetails, queryGameData, fetchRedditPosts } from './http';

const loadSuggestions = (query: string, length: number): Promise<Array<object>> => {
    return queryGameData(query, length).then((response: { results: any }): Promise<any> => {  
        return response.results;
    }).catch((error: object): object => {
        return error;
    })
}

const loadGameDetails = (id: string): Promise<object> => {
    return fetchGameDetails(id).then((response) => {
        return response;
    }).catch((error: object): object => {
        return error;
    })
}

const loadRedditPosts = (id: string, pageNum: number=1): Promise<object> => {
    return fetchRedditPosts(id, pageNum).then(response => {  
        return response;
    }).catch((error: object): object => {
        return error;
    })
}

const addDelay = (delayTime: number, callback: () => void, timerID:NodeJS.Timeout|null=null): NodeJS.Timeout => {
    if(timerID) {
        clearTimeout(timerID);
    }

    return setTimeout(callback, delayTime);
}

export { loadSuggestions, loadGameDetails, addDelay, loadRedditPosts };


